
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you know (if not, probably the following lines gives you an idea), <strong>vIPer</strong> was originally designed to export from <em>ipynb</em> files to:</p>
<ul>
<li>a plain static html</li>
<li>a slideshow powered by Landslide</li>
</ul>
<p>With the last release, <strong>IPython</strong> support this kind of exportation using the well designed and easily extensible <code>IPython.nbconvert</code> library. Now, it is easier to incorporate the IPython machinery inside vIPer and support the exportation to several formats. <!-- TEASER_END --></p>
<p><strong>Note</strong>: if you want to know more about vIPer, just see the following talk I gave about it at <strong>SciPy 2013</strong>.</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<iframe width="640" height="360" src="//www.youtube.com/embed/NVf_giNcNro" frameborder="0" allowfullscreen></iframe>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Up to now, I have replaced the old converters by the new ones: the <code>HTMLExporter</code> and the <code>SlidesExporter</code> from <code>IPython.nbconvert</code>. As a consequence, vIPer now supports the generation of <strong>IPython slides</strong> (deprecating the use of Landslide to get the html-powered slideshow... thank you very much to the Landslide developers for their work... and to make my life easier at the first days of vIPer).</p>
<p>Remarkably, trying to serve the <strong>IPython slides</strong> inside <strong>vIPer</strong> was very educational, because <code>IPython.nbconvert</code> already supports the serve of the resulting slides, so I tried to use this functionality and, because I needed to work in parallel, this led me to work a little bit with <code>QtCore.QThreads</code>.</p>
<p>So, I essentially sub-classed the <code>QtCore.QThread</code>:</p>
<pre><code>class ServeThread(QtCore.QThread):
    def __init__(self, extension, container):
        QtCore.QThread.__init__(self)
        self.container = container
        self.extension = extension

    def run(self):
        localO = self.container.titleHistory[-1] + self.extension
        self.container.server.open_in_browser = False
        self.container.server(str(self.container.path) + &#39;/&#39; + localO) </code></pre>
<p><strong>Note</strong>: yes, I have to deal with the path in a better way, but I am too lazy to do it now ;-)</p>
<p>And then, I have instantiated the <code>ServerThread</code> class accordingly to my needs:</p>
<pre><code>class Converter:
    def __init__(self, exporter, extension, container):
        self.container = container
        self.extension = extension
        self.exporter = exporter

        self.container.nbConverter(self.exporter, self.extension)
        self.container.servePool.append(ServeThread(self.extension,
                                                    self.container))
        if len(self.container.servePool) == 1:
            self.container.servePool[0].start()
        else:
            pass</code></pre>
<p>It is important to highlight that I needed to call the <code>start()</code> method to <em>run</em> the <code>run()</code> method from the <code>ServeThread</code> class.</p>
<p>And now, <strong>vIPer</strong> support serving the IPython slides automatically after the conversion step with just a click of a button.</p>
<p>OK, just try <strong>vIPer</strong> (<a href="https://github.com/damianavila/vIPer">Github repo</a>) and let me know any bug... and I hope you find the Qt-derived threads information useful, or at least, interesting! ;-)</p>
<p>Damián</p>
</div>