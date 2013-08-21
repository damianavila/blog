
<div class="text_cell_render border-box-sizing rendered_html">
<p>Do you want to <strong>easily</strong> deploy your site to Github pages?</p>
<p>OK, here we go...</p>
<ol style="list-style-type: decimal">
<li><p>You have to upload your complete blog/site to a new Github repository (you know how to do it... if not, probably you need to learn some things before try this one, hehe). As a plus, now your blog/site is version-controlled!</p></li>
<li><p>Almost for sure, your site/blog lives in the master branch of the new repository, but you need to generated a <code>gh-pages</code> branch to push your <code>build</code> or <code>output</code> folder, I mean your site/blog content to deploy... not all the machinery of your site/blog platform (<strong>Nikola</strong> in my case):</p></li>
</ol>
<ul>
<li><code>git checkout -b gh-pages</code></li>
<li><code>git rm -rf .</code></li>
<li><code>git commit -am &quot;First commit to gh-pages branch&quot;</code></li>
<li><code>git push origin gh-pages</code></li>
</ul>
<ol start="3" style="list-style-type: decimal">
<li>Now, we will use a <strong>git-subtree</strong> technique to push the <code>build</code> or <code>output</code> content to the <code>gh-pages</code> branch:</li>
</ol>
<ul>
<li><code>git checkout master</code></li>
<li><p><code>git push origin `git subtree split --prefix output gh-pages`:gh-pages --force</code></p>
<p><strong>Sweet</strong> line... uhh ;-)</p></li>
</ul>
<ol start="4" style="list-style-type: decimal">
<li>Finally, you will need to run the following line every time you want to update your site/blog!</li>
</ol>
<ul>
<li><code>git subtree push --prefix output origin gh-pages</code></li>
</ul>
<p><strong>Note</strong>: If you get <code>git</code> errors... just use again the <strong>sweet</strong> line again and force the update...</p>
<p>If you are using <strong>Nikola</strong>, you can add this line to the <code>DEPLOY_COMMANDS</code> in your conf.py file and just run <code>nikola deploy</code> after building your site/blog.</p>
<p>More easier... impossible... ;-)</p>
<p>Damián.</p>
</div>