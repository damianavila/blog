
<div class="text_cell_render border-box-sizing rendered_html">
<p>A tweet arrived...</p>
<blockquote class="twitter-tweet" data-partner="tweetdeck"><p>
<a href="https://twitter.com/damian_avila">@damian_avila</a> Is there a way to only show the output of a cell in an NB slideshow?
</p>
— Thomas Wiecki (@TWiecki) <a href="https://twitter.com/TWiecki/statuses/388378339716505601">October 10, 2013</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p>And my answer was <strong>YES</strong>...</p>
<p>How we can easily do it? Just follow these few steps: <!-- TEASER_END --></p>
<p><strong>Rational</strong>: We are going to use the power of <code>IPython.nbconvert</code> library to use a modified <strong>jinja</strong> template which will let us hide the<code>input cells</code> in our <strong>IPython slides</strong>. To achieve this goal, we are going to use the same approach described in a previous <a href="http://www.damian.oquanta.info/posts/mimic-the-ipython-notebook-cell-execution.html">post</a>. Hence, our <code>input cells</code> will be hidden by default, but they will show up if we click on the corresponding <code>output cell</code> area.</p>
<p>OK, I first wrote a custom template and named it as <code>output_toggle.tpl</code>:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">!</span>cat /media/datos/Ejemplos/output_toggle.tpl
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
{%- extends &apos;slides_reveal.tpl&apos; -%}

{% block input_group -%}
&lt;div class=&quot;input_hidden&quot;&gt;
{{ super() }}
&lt;/div&gt;
{% endblock input_group %}

{%- block header -%}
{{ super() }}

&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js&quot;&gt;&lt;/script&gt;

&lt;style type=&quot;text/css&quot;&gt;
//div.output_wrapper {
//  margin-top: 0px;
//}
.input_hidden {
  display: none;
//  margin-top: 5px;
}
&lt;/style&gt;

&lt;script&gt;
$(document).ready(function(){
  $(&quot;.output_wrapper&quot;).click(function(){
      $(this).prev(&apos;.input_hidden&apos;).slideToggle();
  });
})
&lt;/script&gt;
{%- endblock header -%}


</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>The code is simple, but for a detailed explanation see my previous <a href="http://www.damian.oquanta.info/posts/mimic-the-ipython-notebook-cell-execution.htm">post</a>.</p>
<p>Briefly, I just changed obvious things such as the encompassing of the <code>input_group</code> and the calling of <code>.prev()</code> method (instead of <code>.next(</code>) one) inside the little <em>javascript</em> snippet.</p>
<p>Now, the second and last step was:</p>
<p><code>ipython nbconvert your_slides.ipynb --to slides --template output_toggle --post serve</code></p>
<p>and I got something like this (navigate and try it!):</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<iframe src="http://damianavila.github.io/miscellaneus/test_slides.slides.html#/3/2" width="800" height="600"></iframe>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>OK, as you have seen in the example, your <strong>IPython slides</strong> will be delivered showing just the <code>output cells</code>... but if you need to show some <code>input cells</code>, just click on the corresponding <code>output cell</code> and you will get them. Nice, uh!</p>
<p>Hope it helps Thomas (and all the other people using the <strong>IPython slides</strong>)!</p>
<p>Damián.</p>
</div>