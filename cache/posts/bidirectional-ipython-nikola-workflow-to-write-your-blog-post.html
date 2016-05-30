
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>The idea of this blog post is to show you how you can achieve an efficient <em>bidirectional</em> workflow to write your blog posts using great tools/features derived from <strong>IPython</strong> and <strong>Nikola</strong>.</p>
<p>Probably, this would be interesting not only for the people using <strong>IPython</strong> and <strong>Nikola</strong> to write their blog post, but also to other people because this would be a simple but nice example of how you can integrate this two applications to better suit your needs.</p>
<p>OK, first of all, let's go to the folder containing my blog:
<!-- TEASER_END --></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">

<pre><code>damian@damian-S400CA:~$ cd /media/datos/Desarrollos/damian_blog

damian@damian-S400CA:/media/datos/Desarrollos/damian_blog$</code></pre>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Then I activate my <strong>virtualenv</strong> specifically filled to build my blog:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">

<pre><code>damian@damian-S400CA:/media/datos/Desarrollos/damian_blog$ workon blog

(blog)damian@damian-S400CA:/media/datos/Desarrollos/damian_blog$ </code></pre>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Now, we are ready to the next step, calling the <code>nikola console</code>:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">

<pre><code>(blog)damian@damian-S400CA:/media/datos/Desarrollos/damian_blog$ nikola console
Scanning posts......done!
Python 2.7.4 (default, Apr 19 2013, 18:28:01) 
Type "copyright", "credits" or "license" for more information.

IPython 1.1.0 -- An enhanced Interactive Python.
?         -&gt; Introduction and overview of IPython's features.
%quickref -&gt; Quick reference.
help      -&gt; Python's own help system.
object?   -&gt; Details about 'object', use 'object??' for extra details.


Nikola v6.1.1 -- IPython Console (conf = configuration, SITE = site engine)</code></pre>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Yes... <strong>Nikola</strong> offers a feature called <code>nikola console</code> which immediately opens an <strong>IPython</strong> console (if you have installed IPython, of course) where you can do a lot of things, as I will show you later, but also have direct access to <strong>Nikola</strong> internals through the <code>conf</code> (configuration) and <code>SITE</code> (site engine) objects. We can explore this objects using the <em>tab completion</em> from the IPython machinery:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">

<pre><code>In [1]: conf.&lt;TAB&gt;
conf.BLOG_AUTHOR             conf.LICENSE
conf.BLOG_DESCRIPTION        conf.MATHJAX_CONFIG
conf.BLOG_EMAIL              conf.NAVIGATION_LINKS
conf.BLOG_TITLE              conf.PAGES
conf.BODY_END                conf.POSTS
conf.COMMENT_SYSTEM_ID       conf.py
conf.COMPILERS               conf.pyc
conf.CONTENT_FOOTER          conf.SITE_URL
conf.CREATE_MONTHLY_ARCHIVE  conf.SOCIAL_BUTTONS_CODE
conf.DEFAULT_LANG            conf.THEME
conf.DEPLOY_COMMANDS         conf.time
conf.GLOBAL_CONTEXT          conf.TRANSLATIONS
conf.INDEX_TEASERS           conf.unicode_literals
conf.IPYNB_CONFIG </code></pre>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">

<pre><code>In [1]: SITE.&lt;TAB&gt;
SITE.abs_link                    SITE.MESSAGES
SITE.clean_task_paths            SITE.pages
SITE.commands                    SITE.path
SITE.compilers                   SITE.plugin_manager
SITE.config                      SITE.post_per_file
SITE.configured                  SITE.posts_per_category
SITE.current_lang                SITE.posts_per_month
SITE.default_lang                SITE.posts_per_tag
SITE.EXTRA_PLUGINS               SITE.posts_per_year
SITE.file_exists                 SITE.rel_link
SITE.generic_page_renderer       SITE.render_template
SITE.generic_post_list_renderer  SITE.scan_posts
SITE.gen_tasks                   SITE.strict
SITE.get_compiler                SITE.template_system
SITE.GLOBAL_CONTEXT              SITE.THEMES
SITE.global_data                 SITE.timeline
SITE.inverse_compilers           SITE.translations
SITE.link </code></pre>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>But, we will probably go back to these objects in another blog post... now, we go again to the <strong>Nikola IPython</strong> console because we want to create a new post. The easiest way to do it is just calling the proper <strong>Nikola</strong> command using the <code>!</code> to pass it from the <strong>Nikola IPython</strong> console to the shell.</p>

<pre><code>In [1]: !nikola new_post -f ipynb

</code></pre>
<p>But we can do it better ;-) 
We can pass arguments to the <code>nikola new_post</code> command such as the <code>title</code>, <code>tags</code>, <code>format</code> (we have already pass the format with <code>-f ipynb</code>), etc. So, let me create some variables for these arguments inside my <strong>Nikola IPython</strong> console session:</p>

<pre><code>In [1]: title = "Bidirectional IPython-Nikola workflow to write your blog post"

In [2]: tags_list = ['python', 'IPython', 'nikola', 'blog', 'extension', 'gh-pages', 'git', 'workflow']

In [3]: tags = ', '.join(tags_list)

In [4]: tags
Out[4]: u'python, IPython, nikola, blog, extension, gh-pages, git, workflow'

</code></pre>
<p>Here I have the string <code>title</code> containing the title for the current blog post and a list called <code>tags_list</code> containing the corresponding tags. Later I call the <code>.join</code> method because I will need to pass a string with the tags sepatarated by commas to the <code>nikola new_post</code> command.</p>
<p>But, <strong>wait a minute</strong>... I have <strong>Python</strong> variables containing the title and the tags for my blog post. How can pass this variables to the shell to use them as arguments of the <code>nikola new_post</code> command???</p>
<p>OK, to solve this problem we will use an exciting feature from <strong>IPython</strong>, just see the following line:</p>

<pre><code>In [5]: !nikola new_post -f ipynb -t "{title}" --tags="{tags}"

</code></pre>
<p>which will create the desired <code>ipynb</code> and the corresponding <code>.meta</code> file containing the title and tags.</p>

<pre><code>Creating New Post
-----------------

Title: Bidirectional IPython-Nikola workflow to write your blog post
Scanning posts......done!
Your post's metadata is at:  posts/bidirectional-ipython-nikola-workflow-to-write-your-blog-post.meta
[2013-10-15T19:21:28Z] NOTICE: new_post: Your post's text is at: posts/bidirectional-ipython-nikola-workflow-to-write-your-blog-post.ipynb

</code></pre>
<p><em>Que me contusi!</em> (or... do you see the bidirectional nature of this interaction? Nice, don't you think?)</p>
<p>Yes, inside <strong>IPython</strong>, we can use the braces to pass <strong>Python</strong> variables to the shell... ;-)</p>
<p><em>Do you see the possibilities we have with this little feature?</em></p>
<p>Now, I <em>cd</em> into the post folder of my site and open the <strong>IPython notebook</strong> with my custom extensions.</p>

<pre><code>In [6]: cd posts/
/media/datos/Desarrollos/damian_blog/posts

In [7]: !ipython notebook --profile=myext

</code></pre>
<p>In the <strong>IPython Dashboard</strong>, I will open the new <code>ipynb</code> called <code>bidirectional-ipython-nikola-workflow-to-write-your-blog-post.ipynb</code> and write the content (I am writing right now).</p>
<p>Then, when I am done with the blog post, I need to deploy my new content to somewhere to make available to the public...</p>
<p>And this is very easy...</p>
<p>First, <strong>Nikola</strong> have a <code>nikola deploy</code> command which you can customize with your conf.py file. You can see it here my configuration:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[8]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">!</span>sed -n 197,208p conf.py
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
<pre># Commands to execute to deploy. Can be anything, for example,
# you may use rsync:
# &#34;rsync -rav output/* joe@my.site:/srv/www/site&#34;
# And then do a backup, or ping pingomatic.
# To do manual deployment, set it to []
DEPLOY_COMMANDS = [&#34;git add .&#34;,
                   &#34;git commit -am &#39;Update&#39;&#34;,
                   &#34;git push origin master&#34;,
                   &#34;git subtree split --prefix output -b gh-pages&#34;,
                   &#34;git push -f origin gh-pages:gh-pages&#34;,
                   &#34;git branch -D gh-pages&#34;]

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
<p>The instructions are very easy to understand, if you need more details just read this <a href="http://www.damian.oquanta.info/posts/one-line-deployment-of-your-site-to-gh-pages.html">post</a> I wrote some weeks ago.</p>
<p>I am essentially pushing the content to master, creating a split and deploy it later to <strong>gh-pages</strong>.</p>
<p>OK, but because I am <em>lazy</em> ;-), some weeks ago I wrote an <strong>IPython</strong> <em>javascript</em> extension which let me execute this <code>nikola deploy</code> command from a button in the <strong>IPython notebook toolbar</strong>. Essentially something like this (don't worry, I will release the extension soon):</p>

<pre><code>function nikolaDeploy(path, clean) {
  IPython.notebook.kernel.execute('cd ' + path);
  if (clean=="True") {
    IPython.notebook.kernel.execute('!nikola clean');
  }else{
  //do nothing
  }
  IPython.notebook.kernel.execute('!nikola build');
  IPython.notebook.kernel.execute('!nikola deploy');
  messager();
}

</code></pre>
<p>As you can see, I call <code>nikola clean</code> to clean my site, the I built it with <code>nikola build</code>, and deploy it with my customized <code>nikola deploy</code>... and all these actions with just a click!</p>
<p>And now you have the complete workflow! A very simple one, because you can make a lot of modifications to improve it. However, this workflow show you how you can integrate two exciting projects, communicate one with the other and viceversa, and get beautiful results.</p>
<p>Hope you enjoy it!</p>
<p>Damián.</p>

</div>
</div>
</div>