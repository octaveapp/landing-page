(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(155),s=a.n(l),u=a(148),d=a(142),m=a(152),f=a.n(m),p=a(146),g=d.a.header.withConfig({displayName:"header__Header",componentId:"sc-1s4cg9o-0"})(["background-color:#6cc566;padding:2rem 0 2rem 0;.octave-logo-link{text-decoration:none;.octave-logo{width:20rem;}}.subscribe-container{text-align:right;}h1{margin:0;text-align:left;}"]),h=function(e){var t=e.siteTitle,a=e.hideCallToAction,n=void 0!==a&&a;return i.a.createElement(g,null,i.a.createElement("div",{className:"content grid-12"},i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-6"},i.a.createElement("h1",null,i.a.createElement("a",{href:"/",className:"octave-logo-link"},i.a.createElement("img",{className:"octave-logo",src:f.a,alt:t})))),i.a.createElement("div",{className:"col-4 subscribe-container"},!n&&i.a.createElement(p.a,{green:!0},"Inscription")),i.a.createElement("div",{className:"col-1"})))},v=d.a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1uv2ofl-0"})(["background-color:#373f51;padding:5rem 0 15rem 0;color:#fff;.links{text-align:right;line-height:3 rem;a{text-decoration:none;color:#fff;}}.logo{width:20rem;}"]),E=function(){return i.a.createElement(v,{className:"grid-12"},i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-4"},i.a.createElement("img",{style:{marginBottom:"3rem"},className:"logo",src:f.a,alt:"Octave logo"}),i.a.createElement("p",{style:{marginBottom:"3rem"}},"© Octave 2018 - tous droits réservés"),i.a.createElement("p",{style:{textAlign:"justify"}},"Octave est une application mobile qui permet à ses utilisateurs de planifier simplement leurs repas et ceux de leurs familles parmi un large choix de recettes saines et goûteuses. Octave est un véritable assistant personnel qui aide également les utilisateurs à faire leurs courses facilement et en choisissant les produits les plus sains possibles.")),i.a.createElement("div",{className:"col-6 links"},i.a.createElement("a",{href:"/"},"Accueil"),i.a.createElement("br",null),i.a.createElement("a",{href:"/team"},"L’équipe Octave"),i.a.createElement("br",null),i.a.createElement("a",{href:"signup"},"Inscription"),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:contact@octaveapp.fr"},"Contact"),i.a.createElement("br",null),i.a.createElement("a",{href:"confidentiality"},"Politique de confidentialité")),i.a.createElement("div",{className:"col-1"}))},y=(a(174),a(176),a(179),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"4085570902",render:function(e){var a=e.site.siteMetadata,n=a.title,r=a.description,o=a.keywords;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:n,meta:[{name:"description",content:r},{name:"keywords",content:o}]},i.a.createElement("html",{lang:"fr"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"}),i.a.createElement("script",null,"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-126067793');")),i.a.createElement(h,{siteTitle:n}),t,i.a.createElement(E,null))},data:n})});y.propTypes={children:c.a.node.isRequired};t.a=y},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(142).a.a.withConfig({displayName:"call-to-action__Button",componentId:"sc-1t7y6p-0"})(["display:inline-block;border-radius:2rem;padding:1.2rem 4rem;font-size:2rem;cursor:pointer;text-decoration:none;background-color:",";border:3px solid ",";color:","!important;font-weight:600;&:hover{background-color:",";border:3px solid ",";color:"," !important;text-decoration:none;}"],function(e){return e.green?"#fff":"#008DD5"},function(e){return e.green?"#6CC566":"#008DD5"},function(e){return e.green?"#6CC566":"#fff"},function(e){return e.green?"#6CC566":"#fff"},function(e){return e.green?"#fff":"#008DD5"},function(e){return e.green?"#fff":"#008DD5"});t.a=function(e){var t=e.children,a=e.green;return r.a.createElement(i,{green:a,href:"signup"},t)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(151),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(46);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},152:function(e,t,a){e.exports=a.p+"static/octave-logo-3d4084e8b5366737a43692c28ec34d71.png"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Octave App",description:"L'application mobile qui vous fait gagner un temps précieux dans votre cuisine et pour vos courses",keywords:"Famille, Manger sain, Equilibre alimentaire, Application"}}}}},166:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(70),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},174:function(e,t,a){},176:function(e,t,a){},179:function(e,t,a){}}]);
//# sourceMappingURL=1-0239396d0084da53a7f1.js.map