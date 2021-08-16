import{o as n,c as s,a,b as t,e,d as p}from"./app.144e7b1a.js";const o='{"title":"Sending Xml in the Request","description":"","frontmatter":"title:Sending and Checking Xml editLink:true","headers":[{"level":2,"title":"Sending Xml in the Request","slug":"sending-xml-in-the-request"},{"level":2,"title":"Reading Xml from the Response","slug":"reading-xml-from-the-response"}],"relativePath":"scenarios/xml.md","lastUpdated":1629143282968}',c={},l=t("p",null,"I wasn't sure that Xml over HTTP was all that common of a use case anymore, but the very first project we used Alba on turned out to be an Xml API, so here we are.",-1),u=t("p",null,[e("In all cases, Alba just uses the old, built in "),t("code",null,"XmlSerializer"),e(" from the .Net BCL.")],-1),i=t("h2",{id:"sending-xml-in-the-request"},[t("a",{class:"header-anchor",href:"#sending-xml-in-the-request","aria-hidden":"true"},"#"),e(" Sending Xml in the Request")],-1),r=t("p",null,"There's a similar helper for Xml serialization that allows you to send an object as xml to the web request:",-1),k=p('<p><a id="snippet-sample_sending_xml"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">send_xml</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> host<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// This serializes the Input object to xml,</span>\n        <span class="token comment">// writes it to the HttpRequest.Body, and sets</span>\n        <span class="token comment">// the accepts &amp; content-type header values to</span>\n        <span class="token comment">// application/xml</span>\n        _<span class="token punctuation">.</span>Post\n            <span class="token punctuation">.</span><span class="token function">Xml</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Input</span> <span class="token punctuation">{</span>Name <span class="token operator">=</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> Age <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">ToUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// OR, if url lookup is enabled, this is an equivalent:</span>\n        _<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Xml</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Input</span> <span class="token punctuation">{</span>Name <span class="token operator">=</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> Age <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/JsonAndXml.cs#L27-L44" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_sending_xml" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="reading-xml-from-the-response"><a class="header-anchor" href="#reading-xml-from-the-response" aria-hidden="true">#</a> Reading Xml from the Response</h2><p>There&#39;s a helper off of the <code>HttpResponseBody</code> for reading Xml from the response:</p>',5),m=p('<p><a id="snippet-sample_read_xml"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">read_xml</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> host<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/output&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// This deserializes the response body to the</span>\n    <span class="token comment">// designated Output type</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> output <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ReadAsXml</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Output<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// do assertions against the Output model</span>\n\n    <span class="token comment">// OR, if you just want the XmlDocument itself:</span>\n    <span class="token class-name">XmlDocument</span> document <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">ReadAsXml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/JsonAndXml.cs#L115-L132" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_read_xml" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);c.render=function(t,e,p,o,c,d){return n(),s("div",null,[l,u,i,r,a(" snippet: sample_sending_xml "),k,a(" snippet: sample_read_xml "),m])};export{o as __pageData,c as default};
