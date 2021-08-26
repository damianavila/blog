# A deep dive into MyST, Part 2: TBD

> *This is a series of blog posts inviting you to join me in a little journey I have
experienced in the last few weeks at the time to figure it out a nice story for **MyST**
inside the **Nikola** world.*

In the previous blog [post](https://damianavila.github.io/blog/posts/a-deep-dive-into-myst-part-1-the-myst-parser-python-api-usage-in-nikola.html),
we have identified some limitations in the MyST-Parser Python API and we started to
understand why roles and directives were not supported by the API as we expected.

In this post, we will explore the machinery underneath the MyST-Parser with the goal to
deepen our understanding and being able to propose some alternatives to provide the
expected support.

## Markdown-it-py and its plugins

Coming back to the MyST-Parser `default_parser` implementation, you can see the Parser
as a [collection of `markdown-it-py` plugins](https://mdit-py-plugins.readthedocs.io/en/latest/):

```python
    md = (
        MarkdownIt("commonmark", renderer_cls=renderer_cls)
        .enable("table")
        .use(front_matter_plugin)
        .use(myst_block_plugin)
        .use(myst_role_plugin)
        .use(footnote_plugin)
        .use(wordcount_plugin, per_minute=config.words_per_minute)
        .disable("footnote_inline")
        .disable("footnote_tail")
    )
```

The `MarkdownIt` class is instantiated with some parsing configuration options, dictating
the syntax rules and additional options for the parser and renderer. In addition,
several plugins are activated to load a collection of additional syntax rules and render
methods into the parser.

When the input data is parsed via a nested chains of rules, it generates a list (stream)
of tokens, that will be eventually passed to the renderer to generate a Docutils object.

In the previous post, we highlighted some [MyST specific markdown-it-py plugins](https://mdit-py-plugins.readthedocs.io/en/latest/#myst-plugins),
such as the `myst_block_plugin` and the `myst_role_plugin`. Let's take a brief look at
the latest one for the sake of simplicity:

```python
def myst_role_plugin(md: MarkdownIt):
    """Parse ``{role-name}`content```"""
    md.inline.ruler.before("backticks", "myst_role", myst_role)
    md.add_render_rule("myst_role", render_myst_role)
```

The `myst_role_plugin` is essentially adding a new syntax rule to the parser that now is
able to the parse roles from the input and a new method for the renderer to render
the now role-associated tokens:

```python
def render_myst_role(self, tokens, idx, options, env):
    token = tokens[idx]
    name = token.meta.get("name", "unknown")
    return (
        '<code class="sphinx-role">'
        f"{{{name}}}[{escapeHtml(token.content)}]"
        "</code>"
    )
```

We now understand the output the MyST-Parser Python API is giving us at the time to
parse and render a simple role input:

```ipython
In [1]: from myst_parser.main import to_html

In [2]: text = """
   ...: {emphasis}`content`
   ...: """

In [3]: to_html(text)
Out[3]: '<p><code class="sphinx-role">{emphasis}[content]</code></p>\n'
```

We previously showed the `to_html` function using the `default_parser` configured with
the `html` renderer (provided by the `markdown-it-py` RendererHTML class).
But, what happens when we use other renderers provided by the MyST-Parser Python API?

## The Docutils and Sphinx renderers

Let's first explore the `to_docutils` function:

```ipython
In [1]: from myst_parser.main import to_docutils

In [2]: text = """
   ...: {emphasis}`content`
   ...: 
   ...: ```{admonition} This is my admonition
   ...: This is my note
   ...: ```
   ...: """

In [3]: print(to_docutils(text).pformat())
<document source="notset">
    <paragraph>
        <emphasis>
            content
    <admonition classes="admonition-this-is-my-admonition">
        <title>
            This is my admonition
        <paragraph>
            This is my note
```

The [DocutilsRenderer](https://github.com/executablebooks/MyST-Parser/blob/master/myst_parser/docutils_renderer.py#L72)
converts a token directly to the docutils.document representation of the document,
converting roles and directives to a docutils.nodes if a converter can be found for the
given name.

The [SphinxRenderer](https://github.com/executablebooks/MyST-Parser/blob/master/myst_parser/sphinx_renderer.py#L31)
builds on the DocutilsRenderer to add sphinx specific nodes, e.g. for cross-referencing
between documents.

```ipython
In [1]: from myst_parser.main import to_docutils

In [2]: text = """
   ...: {ref}`target`
   ...: """

In [3]: print(to_docutils(text, in_sphinx_env=True).pformat())
<document source="notset">
    <paragraph>
        <pending_xref refdoc="mock_docname" refdomain="std" refexplicit="False" reftarget="target" reftype="ref" refwarn="True">
            <inline classes="xref std std-ref">
                target
```

Notice the sphinx-specific roles (and directives) needs the `in_sphinx_env` option enabled.

## The MystParser class

Previously, we presented the `MystParser` as a Sphinx parser:

```python
from sphinx.parsers import Parser as SphinxParser
...
class MystParser(SphinxParser):
    """Sphinx parser for Markedly Structured Text (MyST)."""
```

using a set of general and some specific `markdown-it-py` plugins (notice the
`default_parser` configured - by default - with the "sphinx" renderer):

```python
    def parse(self, inputstring: str, document: nodes.document) -> None:
        """Parse source text.
        :param inputstring: The source string to parse
        :param document: The root docutils node to add AST elements to
        """
        config = document.settings.env.myst_config
        parser = default_parser(config)
        parser.options["document"] = document
        env = AttrDict()
```

to parse the input text into a token stream and then rendering those (via the
SphinxRenderer which is a subclass of the DocutilsRenderer):

```python
        tokens = parser.parse(inputstring, env)
        if not tokens or tokens[0].type != "front_matter":
            # we always add front matter, so that we can merge it with global keys,
            # specified in the sphinx configuration
            tokens = [Token("front_matter", "", 0, content="{}", map=[0, 0])] + tokens
        parser.renderer.render(tokens, parser.options, env)
```

into a Docutils' document representation: 

```python
def parse(app: Sphinx, text: str, docname: str = "index") -> nodes.document:
    """Parse a string as MystMarkdown with Sphinx application."""
    app.env.temp_data["docname"] = docname
    app.env.all_docs[docname] = time.time()
    reader = SphinxStandaloneReader()
    reader.setup(app)
    parser = MystParser()
    parser.set_application(app)
    with sphinx_domains(app.env):
        return publish_doctree(
            text,
            path.join(app.srcdir, docname + ".md"),
            reader=reader,
            parser=parser,
            parser_name="markdown",
            settings_overrides={"env": app.env, "gettext_compact": True},
        )
```

Finally, those objects are passed to the built-in Sphinx machinery to write the html output.

## The big question

This is great! We now understand why we need Sphinx to generate the expected HTML output
for roles and directives. Several questions now arise:

* Do we want to have Sphinx-free support for rendering roles and directives in the MyST-Parser 

Nikola (among other projects) already have their own machinery (based in Docutils) to
build the final HTML output. Getting the docutils object from the Python API would be
a super interesting way to easily expose and provide that object to the downstream
projects!

One caveat with this approach would be missing some Sphinx features (ie. cross-linking
between documents) based on custom roles and directives that we may need to re-implement.

2. Do we want to have docutils-free support for roles and directives in the MyST Python API?

Docutils actually introduces the roles and directives concept (that Sphinx extend) so if
we want to go docutils-free, then we will need to re-implement those concepts.

3. Does it makes sense to create a docutils alternative in Python? At what extend?

There is currently a nice example about an alternative implementation from the
Executable Books community, but in the Javascript world: https://github.com/executablebooks/markdown-it-docutils ;-).
Since we do not have Docutils there, it actually makes a lot of sense to write something
new. But, what is the value/need/place for an alternative implementation in Python?
Maybe, we do not need the whole Docutils stuff... but we maybe need some core
functionality?

If we decide to write some minimal support, what pieces are we interested to bring first?
Where those pieces should end up? The `markdown-it-docutils` package I referenced above is
actually a `markdown-it` (JS) plugin. If we follow that pattern, we should create a new
`markdown-it-py-docutils` plugin and we are not longer in the MyST-Parser territory.
But the MyST-Parser has, in fact, some [parsing directive functions](https://github.com/executablebooks/MyST-Parser/blob/master/myst_parser/parse_directives.py).
We may need to move that toward `markdown-it-py` as the [JS plugin does](https://github.com/executablebooks/markdown-it-docutils/blob/main/src/directives/main.ts).
That sounds nice, but... is there any other suitable (simpler) alternatives besides the
one I proposed above?

Finally,in the MyST community, there are some ongoing discussions about developing a
MyST specification that represent what we understand as the MyST language. Having one
specification could be interesting and super useful because different actors interested
in writing a MyST parser for their own space can check their stuff against that
specification. Those actors could be different programming languages such as JS or Python
or even more, it could be different flavors in the same programming language, such as
Docutils, Sphinx, or a theoretical `markdown-it-py-docutils` ;-)

## Show time... not really ;-)

OK, again, this is long enough! In the next post I will try to start answering some of
these questions showcasing alternative approaches for the Nikola use case.

I hope you enjoyed the ride and I will see you soon with the third part!