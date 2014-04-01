
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>Short Notice</strong>:</p>
<p><strong>After some months of silence, I am back... A lot of things have happened in my life lately, some of them are really good things... some others don't. And all those things kept me very busy, but finally I have made me some time to write again! ;-)</strong></p>
<p>OK, I have a long list of news, topics, ideas and developments I want to share with you, but we have to begin with one of them, and the chosen one is <code>Slideviewer</code>. <!-- TEASER_END --></p>
<p>When I was at <strong>SciPy 2013</strong>, one of the talks I presented was about the <strong>IPython slides</strong> (if you dont know what I am talking about, just check some of these <a href="http://www.damian.oquanta.info/categories/slideshow.html">posts</a>). And one of the last things I presented in that talk was an early prototype of <strong>Slideviewer</strong>, an <a href="http://nbviewer.ipython.org/"><strong>NBviewer</strong></a>'s clon, but able to render <strong>IPython slides</strong> instead of plain <strong>IPython notebooks</strong> (<code>.ipynb</code>).</p>
<p>The main idea behind <strong>Slideviewer</strong> was to provide you an easy way to share your <strong>IPython slides</strong>. As I pointed out in older posts and comments, you can <em>deploy</em> your <strong>IPython slides</strong> (the slides.html file plus the <strong>reveal.js</strong> library) using <strong>Github pages</strong> or any other service, but with <strong>Slideviewer</strong>, you only need to host your <code>.ipynb</code> somewhere (ie, <strong>Github</strong> repo, gist, etc.), and just pass the url to the <strong>Slideviewer</strong> service (the same way you do it with the NBviewer service) which will render your <code>.ipynb</code> to an IPython slide <em>automagically</em>.</p>
<p><strong>Slideviewer</strong> will follow <strong>NBviewer</strong> updates once a week, as close as it can be, essentially because some things are relevant for both apps, but others don't.</p>
<p>And, in the future, we can probably merge the <strong>Slideviewer</strong> app onto the <strong>NBviewer</strong> app, but we need to make some things first, so I think is useful to have a separate service running right now, to help people to easily spread their <strong>IPython slides</strong>.</p>
<p><strong>Slideviewer</strong> lives here (for now): <a href="http://slideviewer.herokuapp.com/">http://slideviewer.herokuapp.com/</a> and you can see it <em>iframed</em> below:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<iframe src="http://slideviewer.herokuapp.com/" width="800" height="800"></iframe>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>If you have an <strong>IPython slides</strong> worth to be included in the main page, just let me know and I will add it.</p>
<p><strong>Note</strong>: <strong>Slideviewer</strong> does not support <code>custom.css</code> from <strong>Github</strong> (because <strong>Github</strong> does not <em>serve</em> the css), but you can always use another place to host your <code>.ipynb</code> and <code>custom.css</code> or change the html source code pointing to another url where the css was deployed and served. If you need help with this issue, let me know. I will try to figure out a native solution soon.</p>
<p>OK, I hope you find this service useful!</p>
<p>See you soon.</p>
<p>Damián</p>
</div>