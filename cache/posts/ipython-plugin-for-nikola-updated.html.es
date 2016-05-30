
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>I am pleased to announce the new version of the IPython plugin for Nikola.</strong></p>
<p>This new version has been incorporated into Nikola master a few weeks ago, so it is now available in the last release of <strong>Nikola, 5.5.1.</strong></p>
<p>Now that <strong>IPython</strong> has achieved the <strong>1.0 release</strong>, and with the incorporation of nbconvert as a part of the IPython machinery, the IPython plugin no longer needs to use a customized version of the old nbconvert, instead it is now using the the power of the new <strong>IPython.nbconvert</strong> infrastructure to export the ipynb files to HTML pieces to be rendered by <strong>Nikola</strong>.</p>
<p>With the simplification of the infrastructure, it is now easier to setup your blog to use the plugin following this five steps:
<!-- TEASER_END --></p>
<p><strong>Note</strong>: I will explain from the ground, you probably can skip some steps if you are an <strong>IPython</strong> and <strong>Nikola</strong> user...</p>
<ol>
<li><p><strong>Install</strong> (you can do it using <code>pip install</code> inside a virtualenv):</p>
<ul>
<li>IPython 1.0 (also pyzmq, tornado and jinja2, as notebook dependencies)</li>
<li>Nikola 5.5.1</li>
<li>Requests</li>
<li>Sphinx</li>
</ul>
</li>
<li><p><strong>Init</strong> your site:</p>
<ul>
<li><code>nikola init your_blog</code></li>
<li>cd in your_blog</li>
</ul>
</li>
<li><p><strong>Download</strong> the <strong>IPython</strong> theme:</p>
<ul>
<li><code>nikola install_theme -l</code> to list all the available themes in Nikola</li>
<li><code>nikola install_theme jinja-site-ipython</code> or any theme with the <code>ipython</code> word in their names ie, you have a <code>xkcd-site-ipython</code> theme if you want a <strong>xkcd sytling</strong> for your blog ;-).</li>
</ul>
</li>
</ol>
<p><strong>Note</strong>: Beware of the available sub_themes because probably you will need some css adjustments to use it. You can also write your custom theme if you want ;-).</p>
<ol>
<li><p><strong>Modify</strong> your <code>conf.py</code> file:</p>
<ul>
<li><p>add the following lines to your post_pages:</p>
<p><code>("posts/*.ipynb", "posts", "post.tmpl", True),</code>
 <code>("stories/*.ipynb", "stories", "story.tmpl", False),</code></p>
</li>
<li><p>and make explicit to use the IPython theme:</p>
<p><code>THEME = 'jinja-site-ipython'</code></p>
</li>
</ul>
</li>
</ol>
<p><strong>Note</strong>: You have to do all this four steps just once, then you will only do step 5 for writing your post.</p>
<ol>
<li><strong>Finally</strong>:<ul>
<li>To write a new post, just: <code>nikola new_post -f ipynb</code> (you can avoid <code>-f ipynb</code> if you have only ipynb references in your post_pages).</li>
<li>Then, <code>nikola build</code> to build the site and <code>nikola serve</code> to see it.</li>
</ul>
</li>
</ol>
<p>Easier, don't you think?</p>
<p>Ok, if you need any help or find any bug, just let us known open an issue on github or blame on me here ;-)</p>
<p>Cheers.</p>
<p>Damián</p>

</div>
</div>
</div>