import{o as e,c as t,e as r}from"./app.14495198.js";const a='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is Alba?","slug":"what-is-alba"},{"level":2,"title":"History","slug":"history"}],"relativePath":"guide/index.md","lastUpdated":1630653321105}',n={},o=[r('<h1 id="getting-started"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>As of 5.0+, Alba only supports .Net 5.0 or greater. You can still use older versions of Alba to test previous versions of <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core.</p></div><h2 id="what-is-alba"><a class="header-anchor" href="#what-is-alba" aria-hidden="true">#</a> What is Alba?</h2><p>Alba is a class library that you use in combination with unit testing tools like <a href="https://xunit.github.io" target="_blank" rel="noopener noreferrer">xUnit.Net</a> or <a href="https://docs.nunit.org/" target="_blank" rel="noopener noreferrer">NUnit</a> to author integration tests against <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core HTTP endpoints. Alba <em>scenarios</em> actually exercise the full <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core application by running HTTP requests through your <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> system <strong>in memory</strong> using the built in <a href="https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">ASP.Net Core TestServer</a>.</p><p>You can certainly write integration tests by hand using the lower level <code>TestServer</code> and <code>HttpClient</code>, but you&#39;ll write much less code with Alba to author integration tests against your <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core web services. Moreover, Alba <em>scenarios</em> were meant to be declarative to maximize the readability of the integration tests, making those tests much more valuable as living technical documentation.</p><h2 id="history"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><p>What is now Alba was originally created in the early 2010&#39;s as a mechanism to test the content negotiation features in <a href="https://fubumvc.github.io" target="_blank" rel="noopener noreferrer">FubuMVC</a>, an alternative web application framework that predates <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core. We needed to run the entire web handling stack including all the middleware and HTTP endpoints just as the application would be configured. The <a href="https://jeremydmiller.com/2015/11/05/testing-http-handlers-with-no-web-server-in-sight/" target="_blank" rel="noopener noreferrer">early <em>scenario</em> support in FubuMVC</a> was a way to run HTTP requests end to end completely in memory and make declarative checks on expected HTTP behavior.</p><p>As FubuMVC wound down as a project, the scenario testing code was first extracted out into its own library called <em>Alba</em>, then ported to depend on an <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/owin?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">OWIN-based</a> execution pipeline. And then again with the advent of <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core and the deprecation of OWIN, Alba was again re-wired to use the newer HTTP abstractions from the <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httpcontext?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">HttpContext</a> type. At this point, Alba is a value added wrapper around the <a href="https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-5.0" target="_blank" rel="noopener noreferrer">ASP.Net Core TestServer</a>.</p><p>The <em>scenario</em> testing in Alba was inspired by the <a href="https://www.playframework.com/documentation/2.8.x/ScalaFunctionalTestingWithSpecs2" target="_blank" rel="noopener noreferrer">testing support in the Scala PlayFramework</a>.</p>',9)];n.render=function(r,a,n,i,s,l){return e(),t("div",null,o)};export{a as __pageData,n as default};