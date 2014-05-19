My customizations...

* toogle.tpl at the top directory
* Added toggle.js, and miniPageNav.js to js folder
* Added toggle.js, and miniPageNav.js to bundles: 
    assets/js/all-nocdn.js=jquery-1.10.2.min.js,jquery.timeago.js,toggle.js,miniPageNav.js
* add to {% macro html_sourcelink() %} in zen-ipython/templates/arusahni_helper.tmpl
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href='javascript:$.getScript("/assets/js/miniPageNav.js");'>Minimap</a>
* create zen-ipython/templates/post.tmpl and add:
        <p><b>Don't forget this blog post is an ipynb file itself! So, you can download it from the "Source" link
        at the top of the post if you want to play with it ;-)</b></p>
        <p class="gittip"> Btw, do you like the content? Great! Then help me to achieve a
        "Sustainable Crowdfunding"!</p>
        <script data-gittip-username="damianavila" src="//gttp.co/v1.js"></script>


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
