
<div class="text_cell_render border-box-sizing rendered_html">
<p>Some people are asking me how to change the <code>IPython slides's</code> defaults. You can see the description of the request <a href="http://stackoverflow.com/questions/18820253/modifying-reveal-js-defaults-in-ipython-notebook-slide-generation">here</a>. Essentially, he wants to change the default transition between the slides.</p>
<p>To solve this question, we introduce the notion of IPython config files, which let us easily change <em>things</em> inside <code>Ipython.nbconvert</code> (the library where the <code>IPython slides</code> lives) to achieve our desires, at least in the slideshow generation issue ;-) teaser</p>
<p>First of all, you need to know some details:</p>
<ul>
<li>The <code>IPython slides</code> are generated using a series of <code>Jinja</code> templates, so we are going to modify one of the templates to render the slideshow accordingly with our own defaults.</li>
<li>The <code>IPython.nbconvert</code> library was developed taking into account the need from some users to use customized <code>things</code> (where <code>thing</code> will be a <code>template</code> in this case, but we could modify other parts of <code>IPython.nbconvert</code>, probably I will cover this ideas in other posts).</li>
<li>The <code>IPython</code> machinery is very configurable through a <code>Traitlets</code> system! And because of this feature, <code>IPython.nbconvert</code> is able to take a custom config file and use it to render our <code>IPython slides</code> (or any other <code>IPython.nbconvert</code> <em>formats</em>).</li>
</ul>
<p>OK, can you show me an example config file? Of course, here we go:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">!</span>cat /media/datos/Ejemplos/slides_config.py
</pre></div>

</div>
</div>

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
c = get_config()

c.Exporter.template_file = &apos;default_transition&apos;

</pre>
</div>
</div>

</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>From the IPython docs:</p>
<blockquote>
<p>A configuration file is simply a pure Python file that sets the attributes of a global, pre-created configuration object. This configuration object is a Config instance. While in a configuration file, to get a reference to this object, simply call the get_config() function. We inject this function into the global name-space that the configuration file is executed in,</p>
</blockquote>
<p>So, we have to call the <code>get_config()</code> function and then use a custom template called <code>'default_transition'</code> and assign it to <code>c.Exporter.template_file</code> attribute.</p>
<p>Oh, we need to write the <code>'default_transition'</code> template yet, so here we go... again:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[2]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">!</span>cat /media/datos/Ejemplos/default_transition.tpl
</pre></div>

</div>
</div>

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
{%- extends &apos;slides_reveal.tpl&apos; -%}


{% block body %}

{{ super() }}

&lt;script&gt;

Reveal.initialize({

    // Display controls in the bottom right corner
    //controls: true,

    // Display a presentation progress bar
    //progress: true,

    // Push each slide change to the browser history
    //history: false,

    // Enable keyboard shortcuts for navigation
    //keyboard: true,

    // Enable touch events for navigation
    //touch: true,

    // Enable the slide overview mode
    //overview: true,

    // Vertical centering of slides
    //center: true,

    // Loop the presentation
    //loop: false,

    // Change the presentation direction to be RTL
    //rtl: false,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    //autoSlide: 0,

    // Enable slide navigation via mouse wheel
    //mouseWheel: false,

    // Transition style
    transition: &apos;concave&apos;, // default/cube/page/concave/zoom/linear/fade/none

    // Transition speed
    //transitionSpeed: &apos;default&apos;, // default/fast/slow

    // Transition style for full page backgrounds
    //backgroundTransition: &apos;default&apos;, // default/linear/none

    // Theme
    theme: &apos;sky&apos; // available themes are in /css/theme

});

&lt;/script&gt;

&lt;/body&gt;
{% endblock body %}

</pre>
</div>
</div>

</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>In the first line, <code>{%- extends 'slides_reveal.tpl' -%}</code> we tell to the <code>Jinja</code> system that we are going to extend <code>slides_reveal</code> template (the default one, which <code>IPython.nbconvert</code> uses to build our common slides by default). Then, inside the <code>{% block body %}</code>, we call <code>super()</code>:</p>
<p>From the <code>Jinja</code> docs:</p>
<blockquote>
<p>Super Blocks It’s possible to render the contents of the parent block by calling super.</p>
</blockquote>
<p>We did it in this way because we want to render all the parent content and, after that, add our own content, essentially a config script for Reveal.js, calling <code>Reveal.initialize</code>.</p>
<p>OK, I have written a lot of configurable options you can play with, but I only left uncommented (and hence, they will be applied) the <code>transition: 'concave'</code> and <code>theme: 'sky'</code> options with my new choices, you can use your own ones.</p>
<p>Finally, you have to use the <code>IPython.nbconvert</code> library from command line, as usual, but pointing to the <code>IPython</code> config file you pretend to apply:</p>
<p><code>ipython nbconvert your_talk.ipynb --to slides --post serve --config slides_config.py</code></p>
<p>And you are done!</p>
<p><strong>NOTE</strong>: Don't forget to put your <code>ipynb</code>, <code>slides_config.py</code> and <code>default_transition.tpl</code> files in the same folder where you will run the <code>Ipython.nbconvert</code> command.</p>
<p>As you can see, the potentiality of this system (<code>Jinja</code> templating plus a powerful config system) is really big! We can achieve awesome <code>things</code> in a very easy way!</p>
<p>Any help, just let me know!</p>
<p>Damián</p>
</div>