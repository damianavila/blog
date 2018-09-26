
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>IPython slides are powered by <a href="https://github.com/hakimel/reveal.js/">Reveal.js</a> library, you probably already know that.</p>
<p>But... you probably don't know that we use <a href="http://www.jsdelivr.com/">jsdelivr</a> CDN to load all the necessary js and css files. As a consequence, you don't need to download Reveal.js, but also, the speaker notes are not working by default.</p>
<p>But... what happens, if you have low connectivity in the place where you will be presenting your talk (or if you want to use the speaker notes feature)?
<!-- TEASER_END --></p>
<p>In this case, it would be better to use a local copy of the Reveal.js library. And you can easily configure this behavior using a config object from the IPython machinery.</p>
<p>Below, you have one way to do it:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">IPython.nbconvert.exporters</span> <span class="k">import</span> <span class="n">SlidesExporter</span>
<span class="kn">from</span> <span class="nn">IPython.config</span> <span class="k">import</span> <span class="n">Config</span>

<span class="kn">from</span> <span class="nn">IPython.nbformat</span> <span class="k">import</span> <span class="n">current</span> <span class="k">as</span> <span class="n">nbformat</span>

<span class="n">infile</span> <span class="o">=</span> <span class="s2">&quot;talk.ipynb&quot;</span> <span class="c1"># load the name of your slideshow</span>
<span class="n">outfile</span> <span class="o">=</span> <span class="s2">&quot;talk.slides.html&quot;</span>

<span class="n">notebook</span> <span class="o">=</span> <span class="nb">open</span><span class="p">(</span><span class="n">infile</span><span class="p">)</span><span class="o">.</span><span class="n">read</span><span class="p">()</span>
<span class="n">notebook_json</span> <span class="o">=</span> <span class="n">nbformat</span><span class="o">.</span><span class="n">reads_json</span><span class="p">(</span><span class="n">notebook</span><span class="p">)</span>

<span class="c1"># This is the config object I talked before: </span>
<span class="c1"># After the &#39;url_prefix&#39;, you can set the location of your </span>
<span class="c1"># local reveal.js library, i.e. if the reveal.js is located </span>
<span class="c1"># in the same directory as your talk.slides.html, then </span>
<span class="c1"># set &#39;url_prefix&#39;:&#39;reveal.js&#39;.</span>

<span class="n">c</span> <span class="o">=</span> <span class="n">Config</span><span class="p">({</span>
            <span class="s1">&#39;RevealHelpTransformer&#39;</span><span class="p">:{</span>
                <span class="s1">&#39;enabled&#39;</span><span class="p">:</span><span class="kc">True</span><span class="p">,</span>
                <span class="s1">&#39;url_prefix&#39;</span><span class="p">:</span><span class="s1">&#39;reveal.js&#39;</span><span class="p">,</span>
                <span class="p">},</span>                
            <span class="p">})</span>

<span class="n">exportHtml</span> <span class="o">=</span> <span class="n">SlidesExporter</span><span class="p">(</span><span class="n">config</span><span class="o">=</span><span class="n">c</span><span class="p">)</span>
<span class="p">(</span><span class="n">body</span><span class="p">,</span><span class="n">resources</span><span class="p">)</span> <span class="o">=</span> <span class="n">exportHtml</span><span class="o">.</span><span class="n">from_notebook_node</span><span class="p">(</span><span class="n">notebook_json</span><span class="p">)</span>

<span class="nb">open</span><span class="p">(</span><span class="n">outfile</span><span class="p">,</span> <span class="s1">&#39;w&#39;</span><span class="p">)</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="n">body</span><span class="o">.</span><span class="n">encode</span><span class="p">(</span><span class="s1">&#39;utf-8&#39;</span><span class="p">))</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Then, just serve the directory:</p>
<p><code>python -m SimpleHTTPServer 8000</code></p>
<p>open the browser and point it to <code>http://localhost:port</code>, ie:</p>
<p><code>xdg-open http://127.0.0.1:8000</code></p>
<p>OK, that's all... you don't need connectivity anymore ;-) OK, just kidding... he he!</p>
<p><strong>NOTE</strong>: If you are using master, it is even simpler... because now <code>--post serve</code> post-processor uses tornado to forward requests to the CDN if and only if local Reveal.js is unavailable (PR merged <a href="https://github.com/ipython/ipython/pull/4048">here</a>, thanks <strong>MinRK</strong>). So, just locate the <code>reveal.js</code> in the same directory as your talk.slides.html lives and run (as usually):</p>
<p><code>ipython nbconvert talk.ipynb --to slides --post serve</code></p>
<p>You can also point to another directory using the <code>--reveal-prefix</code> alias, ie:</p>
<p><code>ipython nbconvert talk.ipynb --to slides --post serve --reveal-prefix foo/reveal.js</code></p>
<p>Hope it helps.</p>
<p>Damián.</p>

</div>
</div>
</div>
 

