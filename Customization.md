My customizations...

* toogle.tpl at the top directory
* Added toggle.js, and miniPageNav.js to js folder
* Added toggle.js, and miniPageNav.js to bundles: 
    assets/js/all-nocdn.js=jquery-1.10.2.min.js,jquery.timeago.js,toggle.js,miniPageNav.js
* add to {% macro html_sourcelink() %} in zen-ipython/templates/arusahni_helper.tmpl
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href='javascript:$.getScript("/assets/js/miniPageNav.js");'>Minimap</a>
* create zen-ipython/templates/post.tmpl and add:
        <p>Did you like the content? Great!</p>
        <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script>
        <script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#2e2e2e', 'F1F41HSJ8');kofiwidget2.draw();</script>
        <p>Or visit my <a href="https://damianavila.github.io/blog/stories/support-me/index.html">support</a> page for more information.</p>
        <br>
        <p>Btw, don't forget this blog post is an ipynb file itself! So, you can download it from the "Source" link
        at the top of the post if you want to play with it ;-)</p>
* create zen-ipython/templates/index.tmpl and add:
        {% block extra_head %}
            {{ super() }}
            <style>
            div.input_prompt {
            display: none;
            }
            </style>
        {% endblock %}
* add to nikola-ipython.css:
        .page-content > .content h1, .page-content > .content .h1 {
        text-align: center;
        }
* change bundles:
        assets/css/all-nocdn.css=bitter.css,main.css,rst.css,code.css,ipython.min.css,nikola_ipython.css,custom.css
        assets/css/all.css=main.css,rst.css,code.css,ipython.min.css,nikola_ipython.css,custom.css
        assets/js/all-nocdn.js=jquery-1.10.2.min.js,jquery.timeago.js,toggle.js,miniPageNav.js
* Fontawesome through https
        https://github.com/getnikola/nikola-themes/commit/c9039ee96cd2322de435f526f3eb384d6234649b

Last iteration (Nov 2024)

I commented out the toogle piece from the conf.py file becuase it is curerntly broken and less useful for now.
I commented out the kofi support on each page.
I commented out the support link from the left bar.
TODO: Remove all these toogle pieces.
TODO: Remove all the minipage nav as well (not working with Github).
TODO: Use newer font awesome or some alternative.