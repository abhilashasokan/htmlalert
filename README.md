<h1>Html Alert Plugin for jQuery</h1> 	
Show application messages as HTML alert

<h2>Requirements</h2>
<ul>
	<li><a href="http://jquery.com/">jQuery</a> (&gt;= 1.7)</li>
</ul>
<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.some-time-inputs<span class="pl-pds">'</span></span>).<span class="pl-en">htmlAlert</span>(options);</pre></div>

<p>Include <code>bootstrap.min.css</code> ,<code>jquery.min.jsand</code> and <code>bootstrap.min.js</code> in your page.</p>

<p><code>options</code> is an optional javascript object with parameters explained below.</p>

<p>You can also set options as <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes">data attributes</a> on the intput elements, like <code>&lt;input type="text" data-time-format="H:i:s" /&gt;</code>. htmlAlert still needs to be initialized by calling <code>$('#someElement').htmlAlert();</code>.</p>

<p>The defaults for all options are exposed through the <code>$.fn.htmlAlert.defaults</code> object. Properties changed in this object (same properties configurable through the constructor) will take effect for every instance created after the change.</p>
