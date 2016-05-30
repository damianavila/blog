
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>This is the last post of this year, so I try to do my best to give you something interesting to think about...</p>
<p>In this case, I will show you <em>my git workflow</em>... and you know there are a lot of workflows out there... and probably better than mine, but I just want to share with you the place where I find myself comfortable.</p>
<p>And yes... <em>my git workflow</em> is also powered by <strong>IPython</strong> (I am very repetitive when I love a project!).
And it is a <em>semi-automatic</em> one, using the <strong>IPython</strong> notebooks (<em>ipynbs</em>) as a sort of templates, transforming them into a new conceptual entity: the <strong>ipytmpl</strong> (and yes, I love to invent names too!).
<!-- TEASER_END --></p>
<p>Because my workflow have essentially two cycles, in this post, I will show you the general set up of the environment and the first <em>Short</em> cycle, leaving the second <em>Extended</em> cycle (and other details) for other post (after the new year, of course).</p>
<p>I will also show you my workflow with a <em>real</em> <strong>PR</strong> (pull-request) to the <strong>IPython</strong> project.</p>
<p>Are you ready? Here we go...</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Get-everything-ready...">Get everything ready...<a class="anchor-link" href="#Get-everything-ready...">&#182;</a></h2>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>First, we need to set up the environment to make our work:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Check the current working directory:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">%</span><span class="k">pwd</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[1]:</div>


<div class="output_text output_subarea output_execute_result">
<pre>u&#39;/media/datos/Desarrollos&#39;</pre>
</div>

</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Make a new folder to isolate our work and cd into it:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">!</span>mkdir devel_example
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">%</span><span class="k">cd</span> devel_example/
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>/media/datos/Desarrollos/devel_example
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote><p><strong>NOTE</strong>: You can avoid these steps opening the notebook in the proper directory, but in this case I want to have the example isolated to not overwrite my current development environment.</p>
</blockquote>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Load variables with useful information:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">project_name</span> <span class="o">=</span> <span class="s2">&quot;ipython&quot;</span>
<span class="n">project_remote</span> <span class="o">=</span> <span class="s2">&quot;git://github.com/ipython/ipython.git&quot;</span>
<span class="n">project_remote_name</span> <span class="o">=</span> <span class="s2">&quot;origin&quot;</span>
<span class="n">my_fork_remote</span> <span class="o">=</span> <span class="s2">&quot;git@github.com:damianavila/ipython.git&quot;</span>
<span class="n">my_fork_remote_name</span> <span class="o">=</span> <span class="s2">&quot;damianavila&quot;</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Clone the project and connect the local repo with my <strong>Github</strong> fork:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Get a read-only copy of the project</span>
<span class="o">!</span>git clone <span class="nv">$project_remote</span>

<span class="c1"># cd into the local project folder</span>
<span class="o">%</span><span class="k">cd</span> $project_name

<span class="c1"># Link the local repo with my Github fork</span>
<span class="o">!</span>git remote add <span class="nv">$my_fork_remote_name</span> <span class="nv">$my_fork_remote</span>

<span class="c1"># Check remotes</span>
<span class="o">!</span>git remote -v
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>Clonar en «ipython»...
remote: Reusing existing pack: 96757, done.
remote: Counting objects: 82, done.
remote: Compressing objects: 100% (82/82), done.
remote: Total 96839 (delta 5), reused 31 (delta 0)
Receiving objects: 100% (96839/96839), 40.92 MiB | 726 KiB/s, done.
Resolving deltas: 100% (70554/70554), done.
/media/datos/Desarrollos/devel_example/ipython
damianavila	git@github.com:damianavila/ipython.git (fetch)
damianavila	git@github.com:damianavila/ipython.git (push)
origin	git://github.com/ipython/ipython.git (fetch)
origin	git://github.com/ipython/ipython.git (push)
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote><p><strong>NOTE</strong>: A lot of <em>git workflows</em> use <code>origin</code> to point to our fork and <code>upstream</code> to point to the project repo. But <em>I do not like</em> that configuration. It seems more natural to me to clone the project repo (the <code>origin</code> repo) and add a connection to my fork called <code>damianavila</code>... and the next steps take into consideration this last approach.</p>
</blockquote>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Short-cycle">Short cycle<a class="anchor-link" href="#Short-cycle">&#182;</a></h2>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>This short cycle just create a new <em>branch</em> to work on, make the needed changes in the source code and upload the local changes to our <strong>Github</strong> fork to finally submit a <em>pull-request</em>:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Set up the <code>master</code> and <code>development</code> branch names:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[6]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">master_branch</span> <span class="o">=</span> <span class="s2">&quot;master&quot;</span>
<span class="n">feature_branch</span> <span class="o">=</span> <span class="s2">&quot;doc_post_serve&quot;</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Create a new branch from <code>master</code>:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[7]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Make sure we are in master branch</span>
<span class="o">!</span>git checkout <span class="nv">$master_branch</span>

<span class="c1"># Pull the changes from origin/master</span>
<span class="o">!</span>git pull <span class="nv">$project_remote_name</span>

<span class="c1"># Start a new branch to work on</span>
<span class="o">!</span>git checkout -b <span class="nv">$feature_branch</span>

<span class="c1"># Check where we are</span>
<span class="o">!</span>git status
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>Ya está en «master»
Already up-to-date.
Switched to a new branch &#39;doc_post_serve&#39;
# En la rama doc_post_serve
nothing to commit, working directory clean
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Make the changes you want to do:</li>
</ul>
<blockquote><p><strong>NOTE</strong>: In this example, I will update the <strong>IPython</strong> docs about some details using the <strong>IPython slides</strong> and the <code>post-serve</code> post-processor (<code>IPython.nbconvert</code>).</p>
</blockquote>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[9]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># list the files structure to find the needed files</span>
<span class="o">%</span><span class="k">ls</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>CONTRIBUTING.md  <span class="ansi-blue-intense-fg ansi-bold">examples</span>/   MANIFEST.in  setupbase.py  <span class="ansi-green-intense-fg ansi-bold">setup.py</span>*
COPYING.txt      <span class="ansi-blue-intense-fg ansi-bold">git-hooks</span>/  README.rst   <span class="ansi-green-intense-fg ansi-bold">setupegg.py</span>*  <span class="ansi-blue-intense-fg ansi-bold">tools</span>/
<span class="ansi-blue-intense-fg ansi-bold">docs</span>/            <span class="ansi-blue-intense-fg ansi-bold">IPython</span>/    <span class="ansi-blue-intense-fg ansi-bold">scripts</span>/     <span class="ansi-blue-intense-fg ansi-bold">setupext</span>/     tox.ini
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[10]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">%</span><span class="k">load</span> docs/source/interactive/nbconvert.rst
<span class="c1"># After executing %load, a new cell containing the source code will be added.</span>
<span class="c1"># Be sure to add the next line (with the proper path) to overwrite the file</span>
<span class="c1"># with you changes.</span>
<span class="c1">#</span>
<span class="c1"># %%writefile docs/source/interactive/nbconvert.rst</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[11]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">%%</span><span class="k">writefile</span> docs/source/interactive/nbconvert.rst
.. _nbconvert:

Converting notebooks to other formats
=====================================

Newly added in the 1.0 release of IPython is the ``nbconvert`` tool, which 
allows you to convert an ``.ipynb`` notebook document file into various static 
formats. 

Currently, ``nbconvert`` is provided as a command line tool, run as a script 
using IPython. A direct export capability from within the 
IPython Notebook web app is planned. 

The command-line syntax to run the ``nbconvert`` script is::

  $ ipython nbconvert --to FORMAT notebook.ipynb

This will convert the IPython document file ``notebook.ipynb`` into the output 
format given by the ``FORMAT`` string.

The default output format is html, for which the ``--to`` argument may be 
omitted::
  
  $ ipython nbconvert notebook.ipynb

IPython provides a few templates for some output formats, and these can be
specified via an additional ``--template`` argument.

The currently supported export formats are:

* ``--to html``

  - ``--template full`` (default)
  
    A full static HTML render of the notebook.
    This looks very similar to the interactive view.

  - ``--template basic``
  
    Simplified HTML, useful for embedding in webpages, blogs, etc.
    This excludes HTML headers.

* ``--to latex``

  Latex export.  This generates ``NOTEBOOK_NAME.tex`` file,
  ready for export.  You can automatically run latex on it to generate a PDF
  by adding ``--post PDF``.
  
  - ``--template article`` (default)
  
    Latex article, derived from Sphinx&#39;s howto template.

  - ``--template book``
  
    Latex book, derived from Sphinx&#39;s manual template.

  - ``--template basic``
  
    Very basic latex output - mainly meant as a starting point for custom templates.

* ``--to slides``

  This generates a Reveal.js HTML slideshow.
  It must be served by an HTTP server. The easiest way to do this is adding
  ``--post serve`` on the command-line. The ``--post serve`` post-processor 
  proxies Reveal.js requests to a CDN if no local Reveal.js library is present. 
  For low connectivity environments, just place the Reveal.js library in the 
  same directory where your_talk.slides.html is located or point to another 
  directory using the ``--reveal-prefix`` alias.

* ``--to markdown``

  Simple markdown output.  Markdown cells are unaffected,
  and code cells are placed in triple-backtick (```````) blocks.

* ``--to rst``

  Basic reStructuredText output. Useful as a starting point for embedding notebooks
  in Sphinx docs.

* ``--to python``

  Convert a notebook to an executable Python script.
  This is the simplest way to get a Python script out of a notebook.
  If there were any magics in the notebook, this may only be executable from
  an IPython session.
  
.. note::

  nbconvert uses pandoc_ to convert between various markup languages,
  so pandoc is a dependency of most nbconvert transforms,
  excluding Markdown and Python.

.. _pandoc: http://johnmacfarlane.net/pandoc/

The output file created by ``nbconvert`` will have the same base name as
the notebook and will be placed in the current working directory. Any
supporting files (graphics, etc) will be placed in a new directory with the
same base name as the notebook, suffixed with ``_files``::

  $ ipython nbconvert notebook.ipynb
  $ ls
  notebook.ipynb   notebook.html    notebook_files/

For simple single-file output, such as html, markdown, etc.,
the output may be sent to standard output with::
    
  $ ipython nbconvert --to markdown notebook.ipynb --stdout
    
Multiple notebooks can be specified from the command line::
    
  $ ipython nbconvert notebook*.ipynb
  $ ipython nbconvert notebook1.ipynb notebook2.ipynb
    
or via a list in a configuration file, say ``mycfg.py``, containing the text::

  c = get_config()
  c.NbConvertApp.notebooks = [&quot;notebook1.ipynb&quot;, &quot;notebook2.ipynb&quot;]

and using the command::

  $ ipython nbconvert --config mycfg.py


.. _notebook_format:

LaTeX citations
---------------

``nbconvert`` now has support for LaTeX citations. With this capability you
can:

* Manage citations using BibTeX.
* Cite those citations in Markdown cells using HTML data attributes.
* Have ``nbconvert`` generate proper LaTeX citations and run BibTeX.

For an example of how this works, please see the citations example in
the nbconvert-examples_ repository.

.. _nbconvert-examples: https://github.com/ipython/nbconvert-examples

Notebook JSON file format
-------------------------

Notebook documents are JSON files with an ``.ipynb`` extension, formatted
as legibly as possible with minimal extra indentation and cell content broken
across lines to make them reasonably friendly to use in version-control
workflows.  You should be very careful if you ever manually edit this JSON
data, as it is extremely easy to corrupt its internal structure and make the
file impossible to load.  In general, you should consider the notebook as a
file meant only to be edited by the IPython Notebook app itself, not for 
hand-editing.

.. note::

     Binary data such as figures are also saved directly in the JSON file.  
     This provides convenient single-file portability, but means that the 
     files can be large; a ``diff`` of binary data is also not very 
     meaningful.  Since the binary blobs are encoded in a single line, they 
     affect only one line of the ``diff`` output, but they are typically very 
     long lines.  You can use the ``Cell | All Output | Clear`` menu option to 
     remove all output from a notebook prior to committing it to version 
     control, if this is a concern.

The notebook server can also generate a pure Python version of your notebook, 
using the ``File | Download as`` menu option. The resulting ``.py`` file will 
contain all the code cells from your notebook verbatim, and all Markdown cells 
prepended with a comment marker.  The separation between code and Markdown
cells is indicated with special comments and there is a header indicating the
format version.  All output is removed when exporting to Python.

As an example, consider a simple notebook called ``simple.ipynb`` which 
contains one Markdown cell, with the content ``The simplest notebook.``, one 
code input cell with the content ``print &quot;Hello, IPython!&quot;``, and the 
corresponding output.

The contents of the notebook document ``simple.ipynb`` is the following JSON 
container::

  {
   &quot;metadata&quot;: {
    &quot;name&quot;: &quot;simple&quot;
   },
   &quot;nbformat&quot;: 3,
   &quot;nbformat_minor&quot;: 0,
   &quot;worksheets&quot;: [
    {
     &quot;cells&quot;: [
      {
       &quot;cell_type&quot;: &quot;markdown&quot;,
       &quot;metadata&quot;: {},
       &quot;source&quot;: &quot;The simplest notebook.&quot;
      },
      {
       &quot;cell_type&quot;: &quot;code&quot;,
       &quot;collapsed&quot;: false,
       &quot;input&quot;: &quot;print \&quot;Hello, IPython\&quot;&quot;,
       &quot;language&quot;: &quot;python&quot;,
       &quot;metadata&quot;: {},
       &quot;outputs&quot;: [
        {
         &quot;output_type&quot;: &quot;stream&quot;,
         &quot;stream&quot;: &quot;stdout&quot;,
         &quot;text&quot;: &quot;Hello, IPython\n&quot;
        }
       ],
       &quot;prompt_number&quot;: 1
      }
     ],
     &quot;metadata&quot;: {}
    }
   ]
  }


The corresponding Python script is::

  # -*- coding: utf-8 -*-
  # &lt;nbformat&gt;3.0&lt;/nbformat&gt;

  # &lt;markdowncell&gt;

  # The simplest notebook.

  # &lt;codecell&gt;

  print &quot;Hello, IPython&quot;

Note that indeed the output of the code cell, which is present in the JSON 
container, has been removed in the ``.py`` script.
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>Overwriting docs/source/interactive/nbconvert.rst
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Check the status and diff of your modifications:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[12]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Check status</span>
<span class="o">!</span>git status
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre># En la rama doc_post_serve
# Cambios no preparados para el commit:
#   (use «git add &lt;archivo&gt;...» para actualizar lo que se ejecutará)
#   (use «git checkout -- &lt;archivo&gt;...« para descartar cambios en le directorio de trabajo)
#
#	modificado:   docs/source/interactive/nbconvert.rst
#
no hay cambios agregados al commit (use «git add» o «git commit -a»)
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[13]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># See the diff</span>
<span class="o">!</span>git diff
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>diff --git a/docs/source/interactive/nbconvert.rst b/docs/source/interactive/nbconvert.rst
index 1789a62..610edf0 100644
--- a/docs/source/interactive/nbconvert.rst
+++ b/docs/source/interactive/nbconvert.rst
@@ -61,8 +61,12 @@ The currently supported export formats are:
 * ``--to slides``
 
   This generates a Reveal.js HTML slideshow.
-  It must be served by an HTTP server.  The easiest way to do this is adding
-  ``--post serve`` on the command-line.
+  It must be served by an HTTP server. The easiest way to do this is adding
+  ``--post serve`` on the command-line. The ``--post serve`` post-processor 
+  proxies Reveal.js requests to a CDN if no local Reveal.js library is present. 
+  For low connectivity environments, just place the Reveal.js library in the 
+  same directory where your_talk.slides.html is located or point to another 
+  directory using the ``--reveal-prefix`` alias.
 
 * ``--to markdown``
 
@@ -224,4 +228,3 @@ The corresponding Python script is::
 
 Note that indeed the output of the code cell, which is present in the JSON 
 container, has been removed in the ``.py`` script.
-
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Add the changes an commit them:</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[14]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Add the modified files to the stage</span>
<span class="o">!</span>git add .
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[15]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># And do your commit</span>
<span class="o">!</span>git commit -am <span class="s2">&quot;Added --post-serve explanation into the nbconvert docs.&quot;</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>[doc_post_serve c87ac2f] Added --post-serve explanation into the nbconvert docs.
 1 file changed, 6 insertions(+), 3 deletions(-)
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Finally, push your local development branch to your <strong>Github</strong> fork:  </li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[16]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Push updates from your local branch to your github branch</span>
<span class="o">!</span>git push <span class="nv">$my_fork_remote_name</span> <span class="nv">$feature_branch</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>Counting objects: 8732, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2767/2767), done.
Writing objects: 100% (7842/7842), 1.44 MiB, done.
Total 7842 (delta 5520), reused 7275 (delta 4971)
To git@github.com:damianavila/ipython.git
 * [new branch]      doc_post_serve -&gt; doc_post_serve
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote><p><strong>NOTE</strong>: The merging of your <strong>Github</strong> development branch into the master is done via <em>pull-request</em> on the <strong>Github</strong> website. For reference, you can see the proposed <strong>PR</strong> here: <a href="https://github.com/ipython/ipython/pull/4751">https://github.com/ipython/ipython/pull/4751</a></p>
</blockquote>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you can see, this workflow is very <em>simple</em>... and with the aid of this <strong>ipytmpl</strong> is easier than <em>before</em> (before = making the same but in your traditional console).</p>
<p>You set up the environment, fill the variables to use <em>a posteriori</em>, and you have only to be concern about the changes you want to introduce (or remove) from the source code. All the other steps, all those git calls are predetermined and will be called whereas you advance in the workflow...</p>
<p>After making the <strong>PR</strong> at the <strong>Github</strong> website, you will receive some feedback and if you have to modified something, just start the short cycle again... Sometimes you will need more... I mean, because you are working in a <em>communitary project</em>, if somebody changes the same file as you, there will be some conflicts at the <em>merge</em> step, so it will be necessary to rebase the "thing". But this is the central idea of the second <em>Extended</em> cycle which I will describe you in a second part of this post.</p>
<p>As always, I am waiting for your comments and critics!</p>
<p>OK, too long... I hope you did not get bored!</p>
<p>Have a nice <strong>New Year</strong>! And I see you in 2014 ;-)</p>
<p>Cheers.</p>
<p>Damián</p>

</div>
</div>
</div>