import{_ as n,c as s,o as a,a as t}from"./app.bb080ae4.js";const h='{"title":"Writing Custom Assertions","description":"","frontmatter":{},"relativePath":"scenarios/assertions.md","lastUpdated":1644151252703}',p={},e=t(`<h1 id="writing-custom-assertions" tabindex="-1">Writing Custom Assertions <a class="header-anchor" href="#writing-custom-assertions" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All of the assertions are applied during the Scenario execution, and any failures will be reported out in the Exception message thrown by Alba on Scenario failures.</p></div><p>The Scenario assertions in Alba are completely extensible and you can happily add your own via extension methods - but please send anything that&#39;s generally useful as a pull request to Alba itself;-)</p><p>The first step is to write your own implementation of this interface:</p><p><a id="snippet-sample_iscenarioassertion"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IScenarioAssertion</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Assert</span><span class="token punctuation">(</span><span class="token class-name">Scenario</span> scenario<span class="token punctuation">,</span> <span class="token class-name">HttpContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ScenarioAssertionException</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba/IScenarioAssertion.cs#L6-L11" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_iscenarioassertion" title="Start of snippet">anchor</a></sup></p><p>As an example, here&#39;s the assertion from Alba that validates that the response body is supposed to</p><p><a id="snippet-sample_bodycontainsassertion"></a></p><div class="language-cs"><pre><code><span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">BodyContainsAssertion</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IScenarioAssertion</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Text <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">BodyContainsAssertion</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Text <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Assert</span><span class="token punctuation">(</span><span class="token class-name">Scenario</span> scenario<span class="token punctuation">,</span> <span class="token class-name">HttpContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ScenarioAssertionException</span> ex<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> body <span class="token operator">=</span> ex<span class="token punctuation">.</span><span class="token function">ReadBody</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>body<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>Text<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// Add the failure message to the exception. This exception only</span>
            <span class="token comment">// gets thrown if there are failures.</span>
            ex<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Expected text &#39;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Text</span><span class="token punctuation">}</span></span><span class="token string">&#39; was not found in the response body&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba/Assertions/BodyContainsAssertion.cs#L5-L26" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_bodycontainsassertion" title="Start of snippet">anchor</a></sup></p><p>Once you have your assertion class, you can apply it to a scenario through an extension method against the <code>Scenario</code> class. Here&#39;s the <code>Scenario.ContentShouldContain(text)</code> implementation from Alba itself:</p><p><a id="snippet-sample_contentshouldcontain"></a></p><div class="language-cs"><pre><code><span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// Assert that the Http response contains the designated text</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token comment">/// &lt;param name=&quot;scenario&quot;&gt;&lt;/param&gt;</span>
<span class="token comment">/// &lt;param name=&quot;text&quot;&gt;&lt;/param&gt;</span>
<span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Scenario</span> <span class="token function">ContentShouldContain</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">Scenario</span> scenario<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> scenario<span class="token punctuation">.</span><span class="token function">AssertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BodyContainsAssertion</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba/ScenarioExpectationsExtensions.cs#L8-L19" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_contentshouldcontain" title="Start of snippet">anchor</a></sup></p><p>Finally, use your new assertion in a Scenario like this:</p><p><a id="snippet-sample_using_contentshouldbe"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">using_scenario_with_ContentShouldContain_declaration_happy_path</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    router<span class="token punctuation">.</span>Handlers<span class="token punctuation">[</span><span class="token string">&quot;/one&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> c <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>Response<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;**just the marker**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> host<span class="token punctuation">.</span><span class="token function">Scenario</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        x<span class="token punctuation">.</span>Get<span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token string">&quot;/one&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        x<span class="token punctuation">.</span><span class="token function">ContentShouldContain</span><span class="token punctuation">(</span><span class="token string">&quot;just the marker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Acceptance/asserting_against_the_response_body_text.cs#L10-L26" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_using_contentshouldbe" title="Start of snippet">anchor</a></sup></p>`,19),o=[e];function c(i,l,u,r,k,d){return a(),s("div",null,o)}var y=n(p,[["render",c]]);export{h as __pageData,y as default};