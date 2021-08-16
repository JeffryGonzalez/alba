import{o as n,c as s,a,b as t,e,d as p}from"./app.144e7b1a.js";const o='{"title":"Setting Request Headers","description":"","frontmatter":"title:Working with Headers editLink:true","headers":[{"level":2,"title":"Setting Request Headers","slug":"setting-request-headers"},{"level":2,"title":"Asserting on Expected Response Headers","slug":"asserting-on-expected-response-headers"}],"relativePath":"scenarios/headers.md","lastUpdated":1629143282944}',c={},u=t("p",null,"We really didn't worry much about HTTP niceties when I started web programming in the late 90's, but you can no longer get away with that in today's world. To more correctly use HTTP, Alba comes with some helpers to deal with HTTP header values.",-1),l=t("h2",{id:"setting-request-headers"},[t("a",{class:"header-anchor",href:"#setting-request-headers","aria-hidden":"true"},"#"),e(" Setting Request Headers")],-1),i=t("p",null,[e("To set request headers, you can directly write against the "),t("code",null,"HttpContext.Request.Headers"),e(" collection:")],-1),r=p('<p><a id="snippet-sample_setting_request_headers"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">setting_request_headers</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        _<span class="token punctuation">.</span><span class="token function">SetRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Headers.cs#L29-L38" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_setting_request_headers" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>There are also some specific helpers for very common <a href="https://en.wikipedia.org/wiki/Content_negotiation" target="_blank" rel="noopener noreferrer">content negotiation-related</a> headers:</p>',4),k=p('<p><a id="snippet-sample_conneg_helpers"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">conneg_helpers</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Set the accepts header on the request</span>\n        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Accepts</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Specify the etag header value</span>\n        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Etag</span><span class="token punctuation">(</span><span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Set the content-type header on the request</span>\n        _<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// This is a superset of the code above that</span>\n        <span class="token comment">// will set the content-type header as well</span>\n        _<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">InputModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Headers.cs#L8-L27" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_conneg_helpers" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p><strong>Do add extension methods off of the Alba <code>Scenario</code> class for common operations in your tests to remove some of the tedium.</strong></p><h2 id="asserting-on-expected-response-headers"><a class="header-anchor" href="#asserting-on-expected-response-headers" aria-hidden="true">#</a> Asserting on Expected Response Headers</h2><p>Alba comes with some out of the box assertions to declaratively check expected header values:</p>',6),d=p('<p><a id="snippet-sample_asserting_on_header_values"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">asserting_on_header_values</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Assert that there is one and only one value equal to &quot;150&quot;</span>\n        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;content-length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SingleValueShouldEqual</span><span class="token punctuation">(</span><span class="token string">&quot;150&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Assert that there is no value for this response header</span>\n        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;connection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldNotBeWritten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Only write one value for this header</span>\n        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;set-cookie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldHaveOneNonNullValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Assert that the header has the given values</span>\n        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;www-authenticate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldHaveValues</span><span class="token punctuation">(</span><span class="token string">&quot;NTLM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Negotiate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Assert that the header matches a regular expression</span>\n        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SingleValueShouldMatch</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Regex</span><span class="token punctuation">(</span><span class="token string">@&quot;^/items/\\d*$&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Check the content-type header</span>\n        _<span class="token punctuation">.</span><span class="token function">ContentTypeShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;text/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Headers.cs#L41-L65" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_asserting_on_header_values" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>You do also have the ability to just interrogate the <code>HttpContext.Response</code> in your unit test methods for anything not covered in the helpers above.</p>',4);c.render=function(t,e,p,o,c,h){return n(),s("div",null,[u,l,i,a(" snippet: sample_setting_request_headers "),r,a(" snippet: sample_conneg_helpers "),k,a(" snippet: sample_asserting_on_header_values "),d])};export{o as __pageData,c as default};
