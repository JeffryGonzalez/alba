import{_ as n,c as s,o as a,a as t}from"./app.bb080ae4.js";const g='{"title":"Working with Headers","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setting Request Headers","slug":"setting-request-headers"},{"level":2,"title":"Asserting on Expected Response Headers","slug":"asserting-on-expected-response-headers"}],"relativePath":"scenarios/headers.md","lastUpdated":1644151252704}',e={},p=t(`<h1 id="working-with-headers" tabindex="-1">Working with Headers <a class="header-anchor" href="#working-with-headers" aria-hidden="true">#</a></h1><p>We really didn&#39;t worry much about HTTP niceties when I started web programming in the late 90&#39;s, but you can no longer get away with that in today&#39;s world. To more correctly use HTTP, Alba comes with some helpers to deal with HTTP header values.</p><h2 id="setting-request-headers" tabindex="-1">Setting Request Headers <a class="header-anchor" href="#setting-request-headers" aria-hidden="true">#</a></h2><p>To set request headers, you can directly write against the <code>HttpContext.Request.Headers</code> collection:</p><p><a id="snippet-sample_setting_request_headers"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">setting_request_headers</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        _<span class="token punctuation">.</span><span class="token function">SetRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Headers.cs#L29-L38" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_setting_request_headers" title="Start of snippet">anchor</a></sup></p><p>There are also some specific helpers for very common <a href="https://en.wikipedia.org/wiki/Content_negotiation" target="_blank" rel="noopener noreferrer">content negotiation-related</a> headers:</p><p><a id="snippet-sample_conneg_helpers"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">conneg_helpers</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Set the accepts header on the request</span>
        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Accepts</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Specify the etag header value</span>
        _<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Etag</span><span class="token punctuation">(</span><span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Set the content-type header on the request</span>
        _<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// This is a superset of the code above that</span>
        <span class="token comment">// will set the content-type header as well</span>
        _<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">InputModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Headers.cs#L8-L27" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_conneg_helpers" title="Start of snippet">anchor</a></sup></p><p><strong>Do add extension methods off of the Alba <code>Scenario</code> class for common operations in your tests to remove some of the tedium.</strong></p><h2 id="asserting-on-expected-response-headers" tabindex="-1">Asserting on Expected Response Headers <a class="header-anchor" href="#asserting-on-expected-response-headers" aria-hidden="true">#</a></h2><p>Alba comes with some out of the box assertions to declaratively check expected header values:</p><p><a id="snippet-sample_asserting_on_header_values"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">asserting_on_header_values</span><span class="token punctuation">(</span><span class="token class-name">IAlbaHost</span> system<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> system<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Assert that there is one and only one value equal to &quot;150&quot;</span>
        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;content-length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SingleValueShouldEqual</span><span class="token punctuation">(</span><span class="token string">&quot;150&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Assert that there is no value for this response header</span>
        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;connection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldNotBeWritten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Only write one value for this header</span>
        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;set-cookie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldHaveOneNonNullValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Assert that the header has the given values</span>
        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;www-authenticate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldHaveValues</span><span class="token punctuation">(</span><span class="token string">&quot;NTLM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Negotiate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Assert that the header matches a regular expression</span>
        _<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SingleValueShouldMatch</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Regex</span><span class="token punctuation">(</span><span class="token string">@&quot;^/items/\\d*$&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Check the content-type header</span>
        _<span class="token punctuation">.</span><span class="token function">ContentTypeShouldBe</span><span class="token punctuation">(</span><span class="token string">&quot;text/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Headers.cs#L41-L65" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_asserting_on_header_values" title="Start of snippet">anchor</a></sup></p><p>You do also have the ability to just interrogate the <code>HttpContext.Response</code> in your unit test methods for anything not covered in the helpers above.</p>`,18),o=[p];function c(u,l,i,r,k,d){return a(),s("div",null,o)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};