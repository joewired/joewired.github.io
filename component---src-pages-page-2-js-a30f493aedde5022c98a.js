(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(177),o=a(184);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},177:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(176),s=a.n(u);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var c=a(179),l=a.n(c);a.d(t,"PageRenderer",function(){return l.a});var d=a(30);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},178:function(e,t,a){"use strict";a(29);var n=a(0),r=a.n(n),i=a(180);t.a=function(e){return r.a.createElement(i.Box,Object.assign({},e,{mx:"auto",width:1,css:{maxWidth:"1200px"}}))}},179:function(e,t,a){var n;e.exports=(n=a(181))&&n.default||n},181:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(51),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Blog"}}}}},183:function(e,t,a){},184:function(e,t,a){"use strict";var n=a(182),r=a(0),i=a.n(r),o=a(4),u=a.n(o),s=a(185),c=a.n(s),l=a(186),d=a(177),f=a(178),p=a(180),m=function(e){var t=e.siteTitle;return i.a.createElement(p.Box,{bg:"brand02",style:{borderBottom:"solid 1px #DFE3E6"}},i.a.createElement(f.a,null,i.a.createElement(p.Box,{p:4},i.a.createElement(d.Link,{to:"/"},i.a.createElement(p.Image,{height:16,src:"logos/wired-studios-logo.svg",alt:t})))))},h={fontSizes:[12,14,16,20,24,32,48,64],colors:{brand01:"#3D70B2",brand02:"#5596E6",brand03:"#41D6C3",ui01:"#FFFFFF",ui02:"#F4F7FB",ui03:"#DFE3E6",ui04:"#8897A2",ui05:"#5a6872",text01:"#152935",text02:"#5a6872",text03:"#cdd1d4",inverse01:"#ffffff",inverse02:"#272d33",field01:"#f4f7fb",field02:"#ffffff",hoverPrimary:"#30588c",hoverPrimaryText:"#294c86",hoverDanger:"#bd1427",hoverSecondary:"#3d70b2",hoverRow:"#5596E6",support01:"#e0182d",support02:"#5aa700",support03:"#efc100",support04:"#5aaafa"},space:[2,4,8,12,16,24,32,40,48,64,96,160],fonts:{sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},g=(a(183),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(l.ThemeProvider,{theme:h},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.title},{name:"keywords",content:e.site.siteMetadata.keywords}]}),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),t))},data:n})});g.propTypes={children:u.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-page-2-js-a30f493aedde5022c98a.js.map