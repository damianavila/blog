# A deep dive into the MyST world

> *This is a series of blog posts inviting you to join me in a little journey I have experienced in the last few weeks at the time to figure it out a nice story for **MyST**
inside the **Nikola** world.*

Hey, a lot of time without writing, you know... (lack of) time, but let's go back to the
important things... or at least, interesting stuff to share with you!

Recently, I have been involved with the [Executable Books](https://executablebooks.org/en/latest/)
project and community (you can learn more about them [here](https://executablebooks.org/en/latest/about.html)). One of the major projects inside that community is the
[MyST-Parser](https://github.com/executablebooks/MyST-Parser), a *rich* and *extensible*
flavor of Markdown meant for technical documentation and publishing. It supports all the syntax of CommonMark Markdown at its base but, in addition, it includes several
extensions to CommonMark adding extra syntax features for technical writing, such as the
roles and directives used by Sphinx in the rST world!

When I looked into this project, I realized it would interesting to explore how
this flavor of Markdown could potentially integrate with the [Nikola](https://getnikola.com/)
ecosystem. If you look into my previous blog posts, you will see I am a Nikola
user and contributor and I am always interested in how we can improve the
"blogging story" for those using Jupyter Notebooks. And the whole **EBP** project circles
around an excellent pipeline for publishing Jupyter Notebook, with the MyST-Parser being one of
the central building blocks. They are even [interested](https://github.com/executablebooks/jupyter-book/issues/900)
in a sane blog story for one of the key pieces the community has, the
[Jupyter Book](https://jupyterbook.org/intro.html) project that indeed uses the
Myst-Parser!

Nikola, at the same time, has a long story providing support for
multiple flavors of Markdown as Nikola plugins. Additionally, Nikola is probably unique
in the Python static site generators arena because it is supporting Jupyter Notebook
from the core package!

So, all the pieces were asking me to explore this space and I could not resist ;-)

# First impressions (someone has beaten me to it...)

Ok, the first idea coming to my mind was to somehow implement MyST support in Nikola.
But, hey, somebody probably already thought about this before me. So I made a search to
see if this was not previously explored by others. And indeed that was the case!
Roberto, the Nikola creator, wrote a plugin for MyST about a year ago (there is a brief
blog post talking about it [here](https://ralsina.me/tr/es/weblog/posts/new-plugins-for-nikola.html)).
That's great, isn't it? Obviously, I quickly jumped into looking at the codebase for that
plugin and the core of the implementation was quite simple actually:

```python
output = myst_parser.main.to_html(new_data)
```

As you can see, it is just a matter to use the Python MyST API to generate the HTML
output the Nikola machinery is going to write to build the blog post.

Problem solved! Someone else had the idea, implemented it and now I can use it, right?
Well... actually it was not that simple...

# Current limitations (there is always a but...)

One of the key concepts in the MyST (and rST) world is the support for [roles](https://myst-parser.readthedocs.io/en/latest/sphinx/intro.html#reference-a-section-label-with-a-role) and [directives](https://myst-parser.readthedocs.io/en/latest/sphinx/intro.html#extend-markdown-with-a-directive). People coming from the rST world would be
tempted to use MyST and the MyST plugin for Nikola if they have support for the main
pieces they use on a daily basis to save some time, right?

So what happens when you try to use the MyST Python API to render a simple directive:

```ipython
In [1]: from myst_parser.main import to_html

In [2]: text = """
   ...: ```{admonition} This is my admonition
   ...: This is my note
   ...: ```
   ...: """

In [3]: to_html(text)
Out[3]: '<pre><code class="language-{admonition}">This is my note\n</code></pre>\n'
```

Mmm... that HTML code does not look like an admonition!
When I quickly search into the MyST and Nikola issue trackers, I quickly found some
[report](https://github.com/executablebooks/MyST-Parser/issues/307) about this problem.

One of the answers from a core contributor was particularly interesting...

> > I don't know if it's intended to behave this way.

> Heya, yes it is; you have to use sphinx to fully parse to HTML

Wait? Why? I was expecting the MyST Python API to produce the expected HTML for roles
and directives and that is not supported? Is the API incomplete? Is this intended by
design? A lot of questions came to my mind and, as usual, the answer was in the
documentation and the codebase.

# Understanding the limitations (fun/not fun dive, actually fun...)

Ok, let start digging into the problem to understand what is happening behind the
curtains!

If you look at the `to_html` function I shown before: 

```python
def to_html(text: str, env=None, config: Optional[MdParserConfig] = None):
    config = config or MdParserConfig()
    config.renderer = "html"
    md = default_parser(config)
    return md.render(text, env)
```

We have a `default_parser` somehow rendering stuff (we will talk about that "stuff"
later). So, let get into those parser internals:

```python
def default_parser(config: MdParserConfig) -> MarkdownIt:
    """Return the default parser configuration for MyST"""
    renderer_cls: Callable[[MarkdownIt], RendererProtocol]

    if config.renderer == "sphinx":
        from myst_parser.sphinx_renderer import SphinxRenderer

        renderer_cls = SphinxRenderer
    elif config.renderer == "html":
        renderer_cls = RendererHTML
    elif config.renderer == "docutils":
        from myst_parser.docutils_renderer import DocutilsRenderer

        renderer_cls = DocutilsRenderer
    else:
        raise ValueError("unknown renderer type: {0}".format(config.renderer))
```

Well, this is quite interesting! We have a `SphinxRenderer` and `DocutilsRenderer`. You
can learn about those [here](https://myst-parser.readthedocs.io/en/latest/api/renderers.html#).
Those are an integral part of the Myst-Parser project. But when you look at the `html`
renderer, that [RendererHTML] class (https://markdown-it-py.readthedocs.io/en/latest/api/markdown_it.renderer.html#markdown_it.renderer.RendererHTML)
is coming from another EBP project called markdown-it-py. This is a Python port of the
well-used [markdown-it](https://github.com/markdown-it/markdown-it), plus some of itsassociated plugins.

If you indeed keep looking at the `default_parser` implementation, you will find the
MyST-Parser is actually a collection of markdown-it-py plugins:

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
        # disable this for now, because it need a new implementation in the renderer
        .disable("footnote_tail")
    )
```

Notice there are some MyST specific plugins such as the `myst_block_plugin` and the
`myst_role_plugin`. The implementation is more complex, of course, I am just extracting
the core idea ;-)

So, it seems the main idea is to have a `MystParser`, a Sphinx parser, that parses stuff
into a token stream using a set of general and some specific markdown-it-py plugins,
creates a Docutils objects-based representation of the token stream and render those
objects using the Sphinx machinery.

In this model, it actually makes sense to see roles and directives supported when you go
through the Docutils/Sphinx path (those concepts are core-supported in the
Docutils/Sphinx ecosystem) and those unsupported when you use the MyST Python API which
does not understand how to parse nor render these concepts as we saw previously.

# Overcome the limitations (don't worry I will stop here... for now)

OK, this is long enough for now, the next post will deep dive a little bit more in the
Myst-parser and the markdown-it-py codebases in the context of potentially supporting
roles and directives through the Myst-parser Python API. That will led us into some
fundamental question for the MyST ecosystem. We will also introduce some exciting new
projects from the EBP community that are closely related with these ideas.

I hope you enjoyed the ride and I hope to see you soon with the part 2 ;-)