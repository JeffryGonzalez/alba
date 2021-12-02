import{o as n,c as s,a,b as t,d as p,e}from"./app.ba9243e9.js";const o='{"title":"Integrating with NUnit","description":"","frontmatter":{},"relativePath":"guide/nunit.md","lastUpdated":1638457516090}',c={},l=t("h1",{id:"integrating-with-nunit"},[t("a",{class:"header-anchor",href:"#integrating-with-nunit","aria-hidden":"true"},"#"),p(" Integrating with NUnit")],-1),i=t("p",null,[p("When using Alba within "),t("a",{href:"./.html"},"NUnit testing projects"),p(", you probably want to reuse the "),t("code",null,"IAlbaHost"),p(" across tests and test fixtures because "),t("code",null,"AlbaHost"),p(" is relatively expensive to create (it's bootstrapping your whole application more than Alba itself is slow). To do that with NUnit, you could track a single "),t("code",null,"AlbaHost"),p(" on a static class like this one:")],-1),u=e('',4),k=e('',3);c.render=function(t,p,e,o,c,r){return n(),s("div",null,[l,i,a(" snippet: sample_NUnit_Application "),u,a(" snippet: sample_NUnit_scenario_test "),k])};export{o as __pageData,c as default};
