
<div class="text_cell_render border-box-sizing rendered_html">
<p>It is time to release some extensions I wrote the last weeks. And because it is <strong>Friday</strong>, and it is a great moment to begin with the &quot;relax&quot; and procrastination, I will release the tweet me extension... <!-- TEASER_END --></p>
<p>You don't have any idea what I am talking about? OK, a few words... Probably you know that spend a lot of time inside <strong>IPython</strong> notebooks and I was tired to switch windows to send or answer a tweet. So, I wrote a little <em>js</em> extension to capture the input of the selected cell and tweet it just pressing the <em>twitter</em> icon at the <strong>IPython</strong> toolbar.</p>
<div class="figure">
<img src="http://www.damian.oquanta.info/galleries/twitter/1.png" />
</div>
<p>But this <em>js</em> extension is <strong>IPython</strong>-powered itself, because I am using the <strong>IPython</strong> js machinery to execute <em>python</em> files calling the <em>python kernel</em>! Yes... it seems weird, but once you get the idea, you can achieve a <strong>lot</strong> of things. You can see the relevant part of the code below:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">!</span>sed -n 59,74p /media/datos/Desarrollos/mIPyex/custom/tweet_me/main.js
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
function tweetMe(path) {
  var entry = IPython.notebook.get_selected_cell().get_text();
  if (entry.length == 0) {
    zeroMessager(); 
  }
  if (entry.length &gt; 0 &amp;&amp; entry.length &lt;= 140) {
    IPython.notebook.kernel.execute(&apos;%bookmark root&apos;);
    IPython.notebook.kernel.execute(&apos;%cd &apos; + path);
    IPython.notebook.kernel.execute(&apos;%run tweet_helper.py &quot;&apos; + entry + &apos;&quot;&apos;);
    IPython.notebook.kernel.execute(&apos;%cd -b root&apos;);
    sucessMessager();
  }
  if (entry.length &gt; 140) {
    wrongMessager();
  }
}

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>The secret is to use the <code>IPython.notebook.kernel.execute(whatever)</code> method and pass it whatever you want, even <strong>IPython</strong> <em>magics functions</em>! Yes again... too much <em>Inception</em> movie for the last weeks ;-)</p>
<p>OK, the extension lives in this new repo: <a href="https://github.com/damianavila/mIPyex">mIPyex</a>, where I will upload the development versions of my own extensions. When I get them enough stable, I will make a copy of them in the <a href="https://github.com/ipython-contrib/IPython-notebook-extensions">IPython notebook extensions</a> repo where you can get a lot of and useful interesting extensions.</p>
<p>Do you want to try it? It is easy... just follow the README to install all the necessary tools (I used the <a href="http://mike.verdone.ca/twitter/">PTT</a> library to deal with the Twitter API) and then just <em>click</em> the <em>twitter</em> button when you want to share something with the world!</p>
<p>Hope you enjoy it a lot!</p>
<p>Damián</p>
<p>PD: I will use the next cell to tweet about this new blog post! ;-)</p>
</div>