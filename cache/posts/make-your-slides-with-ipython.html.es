
<div class="text_cell_render border-box-sizing rendered_html">
<p>With the integration of nbconvert inside IPython, the last 1.0 release has the possibility to export the ipynb to other formats such as rst, markdown, latex, html and slides (<a href="http://ipython.org/ipython-doc/stable/interactive/nbconvert.html">info</a>).</p>
<p>The slides option generates a Reveal.js-powered HTML slideshow, like this one: <!-- TEASER_END --></p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="kn">from</span> <span class="nn">IPython.display</span> <span class="kn">import</span> <span class="n">HTML</span>
<span class="n">HTML</span><span class="p">(</span><span class="s">&#39;&lt;iframe src=&quot;http://damianavila.github.io/scipy2013_talks/index.html&quot; width=800 height=600&gt;&lt;/iframe&gt;&#39;</span><span class="p">)</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[1]:</div>
<div class="box-flex1 output_subarea output_pyout">

<div class="output_html rendered_html">
<iframe src="http://damianavila.github.io/scipy2013_talks/index.html" width=800 height=600></iframe>
</div>

</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>These are my slides from the talk I gave at SciPy 2013 (Texas) featuring this exporter I previously developed in the old nbconvert project and now merged (and available) in the last release (1.0) of IPython.</p>
<p>You can also see the video of the talk:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[2]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="kn">from</span> <span class="nn">IPython.display</span> <span class="kn">import</span> <span class="n">YouTubeVideo</span>
<span class="n">YouTubeVideo</span><span class="p">(</span><span class="s">&#39;rBS6hmiK-H8&#39;</span><span class="p">)</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[2]:</div>
<div class="box-flex1 output_subarea output_pyout">

<div class="output_html rendered_html">

        <iframe
            width="400"
            height=300"
            src="http://www.youtube.com/embed/rBS6hmiK-H8"
            frameborder="0"
            allowfullscreen
        ></iframe>
        
</div>

</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you can see, before I had to use an independent nbconvert library... now is easier ;-)</p>
<p>Just one line:</p>
<p><code>ipython nbconvert your_slides.ipynb --to slides</code></p>
<p>But, the resulting slideshow has to be served by an HTTP server. Because, we care of you ;-), just add --post serve at the command-line:</p>
<p><code>ipython nbconvert your_slides.ipynb --to slides --post serve</code></p>
<p>And your browser will open a tab containing your slides...</p>
<p>There is a lot of possibility from here... but I will write some of them later.</p>
<p>Enjoy it!</p>
<p>Damián</p>
<p>PS: Please report any bug or give me you feedback to make this tool better!</p>
</div>