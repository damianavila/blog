
<div class="text_cell_render border-box-sizing rendered_html">
<p>OK, today I will release another IPython js extension: Spellchecker, which obviously do what you are thinking... spell check the content of your IPython notebook cells.</p>
<p>And why it is a <em>poor man</em> extension? Because it is a simple workaround to get the spell checker functionality and not a broad solution... but it works, and solve my spelling problems! <!-- TEASER_END --></p>
<p>The main idea here is to use the spell checker functionality provided by your browser [yes, let to the others the complex things ;-)]. But, as you know, the spell checking functionality is disable inside the IPython notebook... and this is because each cell you actually see is a codemirror instance... and codemirror does not support spell checking by design... in fact, the codemirror text area (editor) is not a common html text area, hence the browser can actually run the spell checker in this new text area.</p>
<p>So, are we prohibited to apply a spell checker functionality over a codemirror instance In fact, no... there is a way to do it applying something called codemirror layouts and using js spell checker libraries...</p>
<p>But, I don't want to do this job yet (because of several causes which I do not describe here now), so I think workaround and use the IPython js machinery to get a simple, narrow but useful solution.</p>
<p>The workaround is simple:</p>
<ul>
<li>The spell checker will do its job at the cell level.</li>
</ul>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/spellchecker/1.png" />
</div>
<ul>
<li><p>We need a way to get the content of the selected IPython notebook cell:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="dv">24</span>      <span class="kw">var</span> input = <span class="kw">IPython.notebook</span>.<span class="fu">get</span>_<span class="fu">selected</span>_<span class="fu">cell</span>().<span class="fu">get</span>_<span class="fu">text</span>()</code></pre></li>
<li><p>Put the content in a common html text area, and use the spell checker capabilities from the browser:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="dv">26</span>      <span class="kw">var</span> textarea = $(<span class="ch">&#39;&lt;textarea/&gt;&#39;</span>)
<span class="dv">27</span>          .<span class="fu">attr</span>(<span class="ch">&#39;rows&#39;</span>,<span class="ch">&#39;15&#39;</span>)
<span class="dv">28</span>          .<span class="fu">attr</span>(<span class="ch">&#39;cols&#39;</span>,<span class="ch">&#39;80&#39;</span>)
<span class="dv">29</span>          .<span class="fu">attr</span>(<span class="ch">&#39;name&#39;</span>,<span class="ch">&#39;source&#39;</span>)
<span class="dv">30</span>          .<span class="fu">text</span>(input);</code></pre></li>
<li><p>Make the corrections.</p></li>
</ul>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/spellchecker/2.png" />
</div>
<ul>
<li><p>Get back the corrected content into the selected IPython notebook cell.</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="dv">60</span>      <span class="kw">var</span> corr_input = `$`.<span class="fu">trim</span>(`$`(textarea).<span class="fu">val</span>()); <span class="co">// note: backticks to avoid mathjax rendering, sorry.</span>
<span class="dv">61</span>      <span class="kw">console</span>.<span class="fu">log</span>(corr_input);
<span class="dv">62</span>      <span class="kw">IPython.notebook</span>.<span class="fu">get</span>_<span class="fu">selected</span>_<span class="fu">cell</span>().<span class="fu">set</span>_<span class="fu">text</span>(corr_input);</code></pre></li>
</ul>
<p>And that's all... the complete code below:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">cat</span> <span class="o">-</span><span class="n">n</span> <span class="o">/</span><span class="n">media</span><span class="o">/</span><span class="n">datos</span><span class="o">/</span><span class="n">Desarrollos</span><span class="o">/</span><span class="n">mIPyex</span><span class="o">/</span><span class="n">custom</span><span class="o">/</span><span class="n">spellchecker</span><span class="o">/</span><span class="n">main</span><span class="o">.</span><span class="n">js</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
     1	/*
     2	* ----------------------------------------------------------------------------
     3	* Copyright (c) 2013 - Damián Avila
     4	*
     5	* Distributed under the terms of the Modified BSD License.
     6	*
     7	* A little extension to spell check the selected cell from the IPython notebook.
     8	* ----------------------------------------------------------------------------
     9	*/
    10	
    11	function spellCheckerCSS() {
    12	    var link = document.createElement(&quot;link&quot;);
    13	    link.type = &quot;text/css&quot;;
    14	    link.rel = &quot;stylesheet&quot;;
    15	    link.href = require.toUrl(&quot;./custom/spellchecker/main.css&quot;);
    16	    document.getElementsByTagName(&quot;head&quot;)[0].appendChild(link);
    17	}
    18	
    19	function spellChecker(dummy) {
    20	    console.log(dummy);
    21	
    22	    spellCheckerCSS();
    23	
    24	    var input = IPython.notebook.get_selected_cell().get_text()
    25	
    26	    var textarea = $(&apos;&lt;textarea/&gt;&apos;)
    27	        .attr(&apos;rows&apos;,&apos;15&apos;)
    28	        .attr(&apos;cols&apos;,&apos;80&apos;)
    29	        .attr(&apos;name&apos;,&apos;source&apos;)
    30	        .text(input);
    31	
    32	    var dialogform = $(&apos;&lt;div/&gt;&apos;)
    33	        .append(
    34	            $(&apos;&lt;form/&gt;&apos;).append(
    35	                $(&apos;&lt;fieldset/&gt;&apos;).append(
    36	                    $(&apos;&lt;label/&gt;&apos;)
    37	                    .attr(&apos;for&apos;,&apos;source&apos;)
    38	                    .text(&quot;Now you can edit the cell content and use &quot; +
    39	                    &quot;the spellchecker support of your browser over it. &quot; +
    40	                    &quot;In Chromium, just focus in the text area and &quot; +
    41	                    &quot;select the text you want to spell check. Then you will &quot; +
    42	                    &quot;be able to use the contextual menu (right click) to get &quot; +
    43	                    &quot;words suggestion and other configuration options (lang). &quot; +
    44	                    &quot;Finally press OK to get the corrected cell content into &quot; +
    45	                    &quot;your selected IPython notebook cell.&quot;)
    46	                    )
    47	                    .append($(&apos;&lt;br/&gt;&apos;))
    48	                    .append(
    49	                        textarea
    50	                    )
    51	                )
    52	        );
    53	
    54	    IPython.dialog.modal({
    55	        title: &quot;Edit and spell check your cell content&quot;,
    56	        body: dialogform,
    57	            buttons: {
    58	                &quot;OK&quot;: { class : &quot;btn-primary&quot;,
    59	                    click: function() {
    60	                       var corr_input = $.trim($(textarea).val());
    61	                       console.log(corr_input);
    62	                       IPython.notebook.get_selected_cell().set_text(corr_input);
    63	                }},
    64	                Cancel: {}
    65	            }
    66	    });
    67	
    68	}
    69	
    70	define(function() {
    71	  return {
    72	    parameters: function setup(param1) {
    73	      IPython.toolbar.add_buttons_group([
    74	        {
    75	        &apos;label&apos;   : &apos;Spell check your selected cell content&apos;,
    76	        &apos;icon&apos;    : &apos;icon-check-sign&apos;,
    77	        &apos;callback&apos;: function(){spellChecker(param1)},
    78	        &apos;id&apos;      : &apos;start_spellcheck&apos;
    79	        },
    80	      ]);
    81	      var document_keydown = function(event) {
    82	        if (event.which == 83 &amp;&amp; event.altKey) {
    83	          spellChecker(param1);
    84	          return false;
    85	        };
    86	        return true;
    87	      };
    88	      $(document).keydown(document_keydown);
    89	    }
    90	  }
    91	});

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you can see at the end of the code... you have not only a button but also a keyboard shortcut to activate the spell checker extension: ALT + S (remember that the same goes for the Tweet me extension, but with ALT + T).</p>
<p>Again, the extension lives in this new repo: <a href="https://github.com/damianavila/mIPyex">mIPyex</a>, where I will upload the development versions of my own extensions. When I get them enough stable, I will make a copy of them in the <a href="https://github.com/ipython-contrib/IPython-notebook-extensions">IPython notebook extensions</a> repo where you can get a lot of and useful interesting extensions.</p>
<p>OK, I hope you enjoy and use this extension... because the IPython notebook is not only for write code... it is also to write other things, such as this blog post, and we have to keep spelling mistakes as low as possible to make the read of our content pleasant...</p>
<p>See you...</p>
<p>Damián</p>
</div>