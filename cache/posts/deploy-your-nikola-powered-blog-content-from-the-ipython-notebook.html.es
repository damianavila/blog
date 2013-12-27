
<div class="text_cell_render border-box-sizing rendered_html">
<p>Following the idea to release all the extensions I had working on in the last few weeks/months, today I will release an old but very useful IPython notebook extension for people blogging with Nikola: the nikola_deploy extension. <!-- TEASER_END --></p>
<p>Yes, I am always very original picking the names of the extensions ;-). A pic to illustrate the extension button at the toolbar:</p>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/deploy/1.png" />
</div>
<blockquote>
<p>NOTE: Nikola supports the ipynb file as an input... and using the IPython.nbconvert machinery it is able to render the static HTML representation of your ipynbs inside the complete infrastructure of a powerful static site engine.</p>
</blockquote>
<p>First, to know some things about my blogging workflow using IPython, Nikola, git and gh-pages, I suggest you to re-read these previous posts:</p>
<ul>
<li><a href="http://www.damian.oquanta.info/posts/bidirectional-ipython-nikola-workflow-to-write-your-blog-post.html">Bidirectional IPython-Nikola workflow to write your blog post</a></li>
<li><a href="http://www.damian.oquanta.info/posts/one-line-deployment-of-your-site-to-gh-pages.html">One line deployment of your site to gh-pages</a></li>
</ul>
<p>OK, coming back to the extension, the idea behind this one is very simple: I will call the nikola deploy command from inside the IPython notebook using our beloved IPython.notebook.kernel.execute method, and also taking the advantage of passing commands to the underlying system just pre-pending with the <code>!</code> mark. The relevant lines are below:</p>
<pre class="sourceCode javascript"><code class="sourceCode javascript"><span class="dv">36</span>    <span class="kw">if</span> (clean==<span class="st">&quot;True&quot;</span>) {
<span class="dv">37</span>      <span class="kw">IPython.notebook.kernel</span>.<span class="fu">execute</span>(<span class="ch">&#39;!nikola clean&#39;</span>);
<span class="dv">38</span>    }
<span class="dv">39</span>    <span class="kw">IPython.notebook.kernel</span>.<span class="fu">execute</span>(<span class="ch">&#39;!nikola build&#39;</span>);
<span class="dv">40</span>    <span class="kw">IPython.notebook.kernel</span>.<span class="fu">execute</span>(<span class="ch">&#39;!nikola deploy&#39;</span>);</code></pre>
<p>After writing the content of my post following the workflow explained in previous posts, I just click on the nikola_deploy extension button and the site is cleaned (if you choose this option to True in the config file, please set it to False if you want a quick building), built and deployed automatically ;-)</p>
<p>And that's all... the complete code below:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">cat</span> <span class="o">-</span><span class="n">n</span> <span class="o">/</span><span class="n">media</span><span class="o">/</span><span class="n">datos</span><span class="o">/</span><span class="n">Desarrollos</span><span class="o">/</span><span class="n">mIPyex</span><span class="o">/</span><span class="n">custom</span><span class="o">/</span><span class="n">nikola_deploy</span><span class="o">/</span><span class="n">main</span><span class="o">.</span><span class="n">js</span>
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
     7	* A little extension to deploy a nikola site/blog from the IPython notebook.
     8	* -----------------------------------------------------------------------------
     9	*/
    10	
    11	function messager() {
    12	  var message = $(&apos;&lt;div/&gt;&apos;).append(
    13	                  $(&quot;&lt;p/&gt;&lt;/p&gt;&quot;).addClass(&apos;dialog&apos;).html(
    14	                    &quot;Your ipynb-based site/blog post is being deployed now...&quot;
    15	                    )
    16	                ).append(
    17	                  $(&quot;&lt;p/&gt;&lt;/p&gt;&quot;).addClass(&apos;dialog&apos;).html(
    18	                    &quot;We clean (configurable), build and deploy your Nikola &quot; +
    19	                    &quot;site/blog for you!&quot;
    20	                    )
    21	                );
    22	
    23	  IPython.dialog.modal({
    24	    title : &quot;Nikola deployment&quot;,
    25	    body : message,
    26	    buttons : {
    27	        OK : {class: &quot;btn-danger&quot;}
    28	    }
    29	  });
    30	
    31	}
    32	
    33	function nikolaDeploy(path, clean) {
    34	  IPython.notebook.kernel.execute(&apos;%bookmark root&apos;);
    35	  IPython.notebook.kernel.execute(&apos;%cd &apos; + path);
    36	  if (clean==&quot;True&quot;) {
    37	    IPython.notebook.kernel.execute(&apos;!nikola clean&apos;);
    38	  }
    39	  IPython.notebook.kernel.execute(&apos;!nikola build&apos;);
    40	  IPython.notebook.kernel.execute(&apos;!nikola deploy&apos;);
    41	  IPython.notebook.kernel.execute(&apos;%cd -b root&apos;);
    42	  messager();
    43	}
    44	
    45	define(function() {
    46	  return {
    47	    parameters: function setup(param1, param2) {
    48	      IPython.toolbar.add_buttons_group([
    49	        {
    50	        &apos;label&apos;   : &apos;Deploy Nikola site/blog&apos;,
    51	        &apos;icon&apos;    : &apos;icon-upload-alt&apos;,
    52	        &apos;callback&apos;: function(){nikolaDeploy(param1, param2)},
    53	        &apos;id&apos;      : &apos;start_nikola_deploy&apos;
    54	        },
    55	      ])
    56	    }
    57	  }
    58	});

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Again, the extension lives in this new repo: <a href="https://github.com/damianavila/mIPyex">mIPyex</a>, where I will upload the development versions of my own extensions. When I get them enough stable, I will make a copy of them in the <a href="https://github.com/ipython-contrib/IPython-notebook-extensions">IPython notebook extensions</a> repo where you can get a lot of and useful interesting extensions.</p>
<p>OK, as you can see... it is very simple to blog with IPython and Nikola, so I invite you to try it now and let me know any ideas, comments or critics.</p>
<p>Enjoy!</p>
<p>Damián</p>
</div>