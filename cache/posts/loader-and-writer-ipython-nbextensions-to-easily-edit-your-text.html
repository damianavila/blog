
<div class="text_cell_render border-box-sizing rendered_html">
<p>Coming back to the nice practice of release my own <strong>IPython</strong> <em>nbextensions</em>, today I will release two extensions I use a lot in my daily workflow: <code>loader</code> and <code>writer</code>, useful extensions to load files into the <strong>IPython notebook</strong> and to write the content to the same (or another) file. <!-- TEASER_END --></p>
<p><strong>Note</strong>: These extensions were developed some months ago, and probably you can write better versions of them using the new IPython widget infrastructure, but these were nice <code>hacks</code> and they are still useful in th IPython 1.x and 2.x series, so I think they deserve to go public.</p>
<p>I used the <strong>IPython notebook</strong> a lot, you know that if you are frequently reading my blog. Not only to write blog posts, but also to write other kind of stuff, for instance: code. Some time ago, I used to write code in a plain text editor next to an IPython console, sometimes I used <a href="http://ninja-ide.org/"><strong>NINJA-IDE</strong></a> because it is a nice and featured platform. But right now, I am developing inside the <strong>IPython notebook</strong> because it gives me the text editor and the console in one place, with a lot of other useful features. But I will postpone the description of my workflow for some post to come in the future.</p>
<p>I just want to tell you how I easily fixed a missing feature (for now, because I will be present in the future, for sure) in the <strong>IPython notebook</strong> using <em>nbextensions</em>. The problem was simple, you can use the <code>%load</code> and <code>%write_file</code> magic to load and write files. But I want some minimal user inteface to:</p>
<ol style="list-style-type: decimal">
<li>select which file to load,</li>
<li>write a cell content to a file with just a click.</li>
</ol>
<p>So I wrote <code>loader</code> and <code>writer</code>...</p>
<p><code>loader</code> <em>nbextension</em> use <code>FileReader()</code> capability of modern browsers. The implementation is simple and you can find more complex examples on the web:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">function</span> loadFileAsText() {
    <span class="kw">var</span> fileToLoad = <span class="kw">document</span>.<span class="fu">getElementById</span>(<span class="st">&quot;fileToLoad_&quot;</span> + i).<span class="fu">files</span>[<span class="dv">0</span>];
    <span class="kw">var</span> fileReader = <span class="kw">new</span> FileReader();
    <span class="kw">fileReader</span>.<span class="fu">onload</span> = <span class="kw">function</span>(fileLoadedEvent) {
        <span class="kw">var</span> textFromFileLoaded = <span class="kw">fileLoadedEvent.target</span>.<span class="fu">result</span>;
        <span class="kw">IPython.notebook</span>.<span class="fu">get</span>_<span class="fu">selected</span>_<span class="fu">cell</span>().<span class="fu">set</span>_<span class="fu">text</span>(<span class="ch">&#39;name: &#39;</span> + <span class="kw">fileToLoad</span>.<span class="fu">name</span> + <span class="ch">&#39;\n&#39;</span> +
                                                      <span class="ch">&#39;type: &#39;</span> + <span class="kw">fileToLoad</span>.<span class="fu">type</span> + <span class="ch">&#39;\n&#39;</span> +
                                                      <span class="ch">&#39;size: &#39;</span> + <span class="kw">fileToLoad</span>.<span class="fu">size</span> + <span class="ch">&#39; bytes \n&#39;</span> +
                                                      <span class="ch">&#39;---- \n&#39;</span> + textFromFileLoaded);
    };
    <span class="kw">fileReader</span>.<span class="fu">readAsText</span>(fileToLoad, <span class="st">&quot;UTF-8&quot;</span>);
}</code></pre>
<p>So after selecting a cell, I click on the <code>loader</code> button, I get this:</p>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/loadwrite/loader1.png" />
</div>
<p>And if I click on <em>Seleccionar archivo</em> (Select file) I can navigate trough my file system to get the file I want to load. For instance, I will load some text, in this case a <a href="http://bokeh.pydata.org/"><strong>Bokeh</strong></a> plot, in the next cell:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">name</span><span class="p">:</span> <span class="n">themes</span><span class="o">.</span><span class="n">py</span>
<span class="nb">type</span><span class="p">:</span> <span class="n">text</span><span class="o">/</span><span class="n">x</span><span class="o">-</span><span class="n">python</span>
<span class="n">size</span><span class="p">:</span> <span class="mi">1055</span> <span class="nb">bytes</span> 
<span class="o">----</span> 
<span class="c"># -*- coding: utf-8 -*-</span>

<span class="kn">import</span> <span class="nn">numpy</span> <span class="kn">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">scipy.special</span>
<span class="kn">from</span> <span class="nn">bokeh.plotting</span> <span class="kn">import</span> <span class="o">*</span>

<span class="n">mu</span><span class="p">,</span> <span class="n">sigma</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="mf">0.5</span>

<span class="n">measured</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="n">mu</span><span class="p">,</span> <span class="n">sigma</span><span class="p">,</span> <span class="mi">1000</span><span class="p">)</span>
<span class="n">hist</span><span class="p">,</span> <span class="n">edges</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">histogram</span><span class="p">(</span><span class="n">measured</span><span class="p">,</span> <span class="n">density</span><span class="o">=</span><span class="bp">True</span><span class="p">,</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">)</span>

<span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="o">-</span><span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">1000</span><span class="p">)</span>
<span class="n">pdf</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">/</span> <span class="p">(</span><span class="n">sigma</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">pi</span><span class="p">))</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="o">-</span><span class="p">(</span><span class="n">x</span> <span class="o">-</span> <span class="n">mu</span><span class="p">)</span> <span class="o">**</span> <span class="mi">2</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">sigma</span> <span class="o">**</span> <span class="mi">2</span><span class="p">))</span>
<span class="n">cdf</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">scipy</span><span class="o">.</span><span class="n">special</span><span class="o">.</span><span class="n">erf</span><span class="p">((</span><span class="n">x</span> <span class="o">-</span> <span class="n">mu</span><span class="p">)</span> <span class="o">/</span> <span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">sigma</span> <span class="o">**</span> <span class="mi">2</span><span class="p">)))</span> <span class="o">/</span> <span class="mi">2</span>

<span class="n">output_file</span><span class="p">(</span><span class="s">&#39;histogram.html&#39;</span><span class="p">)</span>

<span class="n">hold</span><span class="p">()</span>

<span class="n">figure</span><span class="p">(</span><span class="n">title</span><span class="o">=</span><span class="s">&quot;Normal Distribution (μ=0, σ=0.5)&quot;</span><span class="p">,</span> <span class="n">tools</span><span class="o">=</span><span class="s">&quot;previewsave&quot;</span><span class="p">,</span>
       <span class="n">background_fill</span><span class="o">=</span><span class="s">&quot;#E5E5E5&quot;</span><span class="p">)</span>
<span class="n">quad</span><span class="p">(</span><span class="n">top</span><span class="o">=</span><span class="n">hist</span><span class="p">,</span> <span class="n">bottom</span><span class="o">=</span><span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">hist</span><span class="p">)),</span> <span class="n">left</span><span class="o">=</span><span class="n">edges</span><span class="p">[:</span><span class="o">-</span><span class="mi">1</span><span class="p">],</span> <span class="n">right</span><span class="o">=</span><span class="n">edges</span><span class="p">[</span><span class="mi">1</span><span class="p">:],</span>
     <span class="n">fill_color</span><span class="o">=</span><span class="s">&quot;#333333&quot;</span><span class="p">,</span> <span class="n">line_color</span><span class="o">=</span><span class="s">&quot;#E5E5E5&quot;</span><span class="p">,</span> <span class="n">line_width</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>

<span class="c"># Use `line` renderers to display the PDF and CDF</span>
<span class="n">line</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">pdf</span><span class="p">,</span> <span class="n">line_color</span><span class="o">=</span><span class="s">&quot;#348abd&quot;</span><span class="p">,</span> <span class="n">line_width</span><span class="o">=</span><span class="mi">8</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.7</span><span class="p">,</span> <span class="n">legend</span><span class="o">=</span><span class="s">&quot;PDF&quot;</span><span class="p">)</span>
<span class="n">line</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">cdf</span><span class="p">,</span> <span class="n">line_color</span><span class="o">=</span><span class="s">&quot;#7a68a6&quot;</span><span class="p">,</span> <span class="n">line_width</span><span class="o">=</span><span class="mi">8</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.7</span><span class="p">,</span> <span class="n">legend</span><span class="o">=</span><span class="s">&quot;CDF&quot;</span><span class="p">)</span>

<span class="n">xgrid</span><span class="p">()</span><span class="o">.</span><span class="n">grid_line_color</span> <span class="o">=</span> <span class="s">&quot;white&quot;</span>
<span class="n">xgrid</span><span class="p">()</span><span class="o">.</span><span class="n">grid_line_width</span> <span class="o">=</span> <span class="mi">3</span>
<span class="n">ygrid</span><span class="p">()</span><span class="o">.</span><span class="n">grid_line_color</span> <span class="o">=</span> <span class="s">&quot;white&quot;</span>
<span class="n">ygrid</span><span class="p">()</span><span class="o">.</span><span class="n">grid_line_width</span> <span class="o">=</span> <span class="mi">3</span>

<span class="n">legend</span><span class="p">()</span><span class="o">.</span><span class="n">orientation</span> <span class="o">=</span> <span class="s">&quot;top_left&quot;</span>

<span class="n">show</span><span class="p">()</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Which gives me this nice plot... but I will post in detail about <strong>Bokeh</strong> soon ;-)</p>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/loadwrite/themes1.png" />
</div>
<p>As you can see, the three first lines of the loaded text give you information about the file itself. Under the <code>----</code> rule, you will have the file content. Then, you can do whatever modification you want and write it to a file (the same or another one) using the <code>writer</code> <em>nbextension</em>:</p>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/loadwrite/writer1.png" />
</div>
<p><code>writer</code> <em>nbextension</em> is using <code>%writefile</code> magic under the hood:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">IPython.dialog</span>.<span class="fu">modal</span>({
    <span class="dt">title</span>: <span class="st">&quot;Create a file with your cell content&quot;</span>,
    <span class="dt">body</span>: dialogform,
        <span class="dt">buttons</span>: {
            <span class="st">&quot;OK&quot;</span>: { <span class="dt">class </span>: <span class="st">&quot;btn-primary&quot;</span>,
                <span class="dt">click</span>: <span class="kw">function</span>() {
                   <span class="kw">var</span> corr_input = <span class="st">&quot;%%writefile &quot;</span> + $.<span class="fu">trim</span>($(textarea).<span class="fu">val</span>()) + 
                                    <span class="st">&quot;</span><span class="ch">\n</span><span class="st">&quot;</span> + input;
                   <span class="kw">IPython.notebook.kernel</span>.<span class="fu">execute</span>(corr_input);
            }},
            <span class="dt">Cancel</span>: {}
        }
});</code></pre>
<p>but it takes care about writing only the miningful content, I mean it will avoid writing the four first lines of you cell.</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="kw">var</span> preInput = <span class="kw">IPython.notebook</span>.<span class="fu">get</span>_<span class="fu">selected</span>_<span class="fu">cell</span>().<span class="fu">get</span>_<span class="fu">text</span>();
<span class="kw">var</span> input = <span class="kw">preInput</span>.<span class="fu">split</span>(<span class="ch">&#39;\n&#39;</span>).<span class="fu">slice</span>(<span class="dv">4</span>).<span class="fu">join</span>(<span class="ch">&#39;\n&#39;</span>);</code></pre>
<p>As you can see <code>loader</code> and <code>writer</code> work in pairs! And they make the laod, edit and save of any text file really quick and successful. I want to keep this post short, so I will stop here, but you can easily see how these simple extensions can help you a lot in your daily workflow.</p>
<p>As usual, the extensions live in this repo: <a href="https://github.com/damianavila/mIPyex">mIPyex</a>, where I will upload the development versions of my own extensions. You can see the full implementation there. When I get them enough stable, I will make a copy of them in the <a href="https://github.com/ipython-contrib/IPython-notebook-extensions">IPython notebook extensions</a> repo where you can get a lot of and useful interesting extensions.</p>
<p>OK, as you can see... now it is very simple to load, edit an save text with the <strong>IPython notebook</strong>. And it will be easier in the future...</p>
<p>Enjoy!</p>
<p>Damián</p>
</div>