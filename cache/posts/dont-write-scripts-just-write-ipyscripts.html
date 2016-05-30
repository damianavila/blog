
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>I usually have some repetitive tasks in my daily work-flow. You probably have some of those too. To save some minutes from your day, you probably write little scripts to do these jobs.</p>
<p>I used to do that... but now I am only writing little IPython notebooks to do these simple jobs, I call them <em>ipyscripts</em> (yes, I won a prize for originality, he he!).</p>
<p>These <em>ipyscripts</em> are IPython-powered, so we can use all the IPython's machinery to do complex things in a simple way...
<!-- TEASER_END --></p>
<p>In fact, you are reading a example <em>ipyscript</em>, because this is an IPython notebook (and a blog post too), and the following example deal with a repetitive task I do frequently: the <em>git update</em> of some projects (I contribute to some of them, I follow some others).</p>
<p>First, I load a simple list with the projects I want to update:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">list_of_projects</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;ipython&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;kilink&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;live_reveal&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;nbviewer&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;nikola&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;reveal.js&quot;</span><span class="p">]</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Second, I save my current directory using the IPython bookmark system:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">%</span><span class="k">bookmark</span> root
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Third, I define a function to deal with the <em>git update</em> itself:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">update</span><span class="p">(</span><span class="n">folder</span><span class="p">):</span>
    <span class="o">%</span><span class="k">cd</span> {folder}
    <span class="o">!</span>git status
    <span class="o">!</span>git checkout master
    <span class="o">!</span>git remote -v
    <span class="o">!</span>git pull origin
    <span class="o">%</span><span class="k">cd</span> -b root
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>You can see here how I am using a lot of tricks from the IPython machinery to make a lot of things in a couple of lines.</p>
<p>The main idea is <code>cd</code> into a specific project folder. I use the braces to pass python variables and expressions to the shell. In this case, I will pass an element of the <code>list_of_projects</code>, I mean the name of the folder containing the desired project. Then, I do the <em>git</em> stuff, just prepending the command with the <code>!</code> sign to pass them to the underlying shell. Finally, I <code>cd</code> into the main directory to get the things prepared to the next loop.</p>
<p>Fourth, I do a simple <code>for</code> loop to iterate through the elements inside the <code>list_of_projects</code> and to do the <em>git update</em> in each of these projects.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">xrange</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_of_projects</span><span class="p">)):</span>
    <span class="n">update</span><span class="p">(</span><span class="n">list_of_projects</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>
    <span class="nb">print</span> <span class="s2">&quot;---------------------------------&quot;</span>
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
<pre>/media/datos/Desarrollos/ipython
# En la rama master
nothing to commit, working directory clean
Ya está en «master»
damianavila	git@github.com:damianavila/ipython.git (fetch)
damianavila	git@github.com:damianavila/ipython.git (push)
origin	git@github.com:ipython/ipython.git (fetch)
origin	git@github.com:ipython/ipython.git (push)
Already up-to-date.
(bookmark:root) -&gt; /media/datos/Desarrollos
/media/datos/Desarrollos
---------------------------------
/media/datos/Desarrollos/kilink
# En la rama master
nothing to commit, working directory clean
Ya está en «master»
damianavila	git@github.com:damianavila/kilink.git (fetch)
damianavila	git@github.com:damianavila/kilink.git (push)
origin	git@github.com:facundobatista/kilink.git (fetch)
origin	git@github.com:facundobatista/kilink.git (push)
Already up-to-date.
(bookmark:root) -&gt; /media/datos/Desarrollos
/media/datos/Desarrollos
---------------------------------
/media/datos/Desarrollos/live_reveal
# En la rama master
nothing to commit, working directory clean
Ya está en «master»
origin	git@github.com:ipython-contrib/live_reveal.git (fetch)
origin	git@github.com:ipython-contrib/live_reveal.git (push)
Already up-to-date.
(bookmark:root) -&gt; /media/datos/Desarrollos
/media/datos/Desarrollos
---------------------------------
/media/datos/Desarrollos/nbviewer
# En la rama master
nothing to commit, working directory clean
Ya está en «master»
heroku	git@heroku.com:zarara.git (fetch)
heroku	git@heroku.com:zarara.git (push)
origin	git@github.com:ipython/nbviewer.git (fetch)
origin	git@github.com:ipython/nbviewer.git (push)
zarara	git@heroku.com:zarara.git (fetch)
zarara	git@heroku.com:zarara.git (push)
Already up-to-date.
(bookmark:root) -&gt; /media/datos/Desarrollos
/media/datos/Desarrollos
---------------------------------
/media/datos/Desarrollos/nikola
# En la rama master
nothing to commit, working directory clean
Ya está en «master»
damianavila	git@github.com:damianavila/nikola.git (fetch)
damianavila	git@github.com:damianavila/nikola.git (push)
origin	git@github.com:getnikola/nikola.git (fetch)
origin	git@github.com:getnikola/nikola.git (push)
Already up-to-date.
(bookmark:root) -&gt; /media/datos/Desarrollos
/media/datos/Desarrollos
---------------------------------
/media/datos/Desarrollos/reveal.js
# En la rama master
nothing to commit, working directory clean
Ya está en «master»
origin	git@github.com:hakimel/reveal.js.git (fetch)
origin	git@github.com:hakimel/reveal.js.git (push)
Already up-to-date.
(bookmark:root) -&gt; /media/datos/Desarrollos
/media/datos/Desarrollos
---------------------------------
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
<hr>
<p><strong>ADDENDUM</strong>:</p>
<p>You can actually do:</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">list_of_projects</span><span class="p">:</span> 
    <span class="n">update</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="k">print</span> <span class="s2">&quot;---------------------------------&quot;</span>
</pre></div>
<p>But, this is an example, and I wanted to emphasize the fact that you can pass complex arguments inside the braces... Thanks Lex for your comment, I forgot to add this explanation!</p>
<hr>
<p>And that's all! The next time you have to do this task, just run this notebook (properly customized for your projects) and you will get the job done!</p>
<p><strong>NOTE</strong>: And now, the <em>icing on the cake</em>... if you are in IPython master, you do not even need to open the notebook to run it... just open an IPython console or notebook and write the next sentence:</p>
<p><code>%run your_ipyscript.ipynb</code></p>
<p>Yes, you can use the <code>%run</code> magic to <em>run</em> all the code cells from the notebook you pass as an argument ;-) Niceeeeeeeeeee!</p>
<p><strong>NOTE 2</strong>: There is an ongoing <a href="https://github.com/ipython/ipython/pull/4634">PR</a> to make this <em>%run</em> notebook extensive to notebooks containing non-code cells.</p>
<p>OK, I hope you enjoy this post. And I also hope you begin to write <em>ipyscripts</em>.</p>
<p>See you!</p>
<p>Damián</p>

</div>
</div>
</div>