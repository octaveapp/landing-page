(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(142),o={green:{bg:"#fff",border:"#6CC566",color:"#6CC566",hover:{bg:"#6CC566",border:"#fff",color:"#fff"}},blue:{bg:"#008DD5",border:"#008DD5",color:"#fff",hover:{bg:"#fff",border:"#008DD5",color:"#008DD5"}},white:{bg:"#fff",border:"#008DD5",color:"#008DD5",hover:{bg:"#008DD5",border:"#fff",color:"#fff"}}},c=function(e){var t=o[e];return"\n  background-color: "+t.bg+";\n    border: 3px solid "+t.border+";\n    color: "+t.color+";\n    &:hover {\n      background-color: "+t.hover.bg+";\n      border: 3px solid "+t.hover.border+";\n      color: "+t.hover.color+";\n    }"},l=i.a.a.withConfig({displayName:"call-to-action__Button",componentId:"sc-1t7y6p-0"})(["display:inline-block;border-radius:2rem;padding:1.2rem 4rem;font-size:2rem;font-family:'Work Sans',sans-serif !important;cursor:pointer;text-decoration:none;font-weight:600;&:hover{text-decoration:none;}&.green{",";}&.blue{",";}&.white{",";}@media screen and (max-width:768px){&.small-green{",";}&.small-blue{",";}&.small-white{",";}}"],c("green"),c("blue"),c("white"),c("green"),c("blue"),c("white"));t.a=function(e){var t=e.children,a=e.className;return r.a.createElement(l,{href:"signup",className:a},t)}},147:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(156),s=a.n(l),u=a(149),d=(a(154),a(7)),m=a.n(d),g=a(48),f=a.n(g),p=a(142),h=a(150),b=a.n(h),v=a(169),w=a.n(v),y=a(146),E=a(177),I=a.n(E),x=p.a.div.withConfig({displayName:"menu__Popover",componentId:"sc-1vbrap1-0"})(["display:",";background-color:#008dd5;padding:7rem 1rem;z-index:10;position:fixed;overflow:hidden;text-align:center;top:0;bottom:0;left:0;right:0;.octave-logo{margin:0 auto 5rem auto;}a{font-size:2.5rem;margin-bottom:3rem;color:white;text-decoration:none;font-family:'Josefin Slab',serif;}.container{text-align:center;display:flex;flex-direction:column;}.close-btn{width:6rem;}"],function(e){return e.shown?"block":"none"}),N=function(e){var t=e.onClose,a=e.shown;return i.a.createElement(x,{shown:a},i.a.createElement("img",{className:"octave-logo",src:b.a,alt:"logo"}),i.a.createElement("nav",{className:"container"},i.a.createElement("a",{href:"#"},"Accueil"),i.a.createElement("a",{href:"team"},"L'équipe"),i.a.createElement("a",{href:"confidentiality"},"Politique de confidentialité"),i.a.createElement(y.a,{className:"white"},"Inscription")),i.a.createElement("img",{className:"close-btn",onClick:t,src:I.a,alt:"close"}))},k=p.a.header.withConfig({displayName:"header__Header",componentId:"sc-1s4cg9o-0"})(["background-color:#6cc566;padding:2rem 0 2rem 0;.row{display:flex;justify-content:space-between;align-items:center;.octave-logo-link{text-decoration:none;}.burger-menu{display:none;background-image:url('","');background-size:cover;width:3.2rem;height:3.2rem;content:' ';}@media (max-width:768px){.subscribe-container{display:none;}.burger-menu{display:block;}}}"],w.a),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isMenuShown:!1},a.toggleMenu=a.toggleMenu.bind(f()(f()(a))),a}m()(t,e);var a=t.prototype;return a.toggleMenu=function(){this.setState({isMenuShown:!this.state.isMenuShown})},a.render=function(){return i.a.createElement(k,null,i.a.createElement(N,{shown:this.state.isMenuShown,onClose:this.toggleMenu}),i.a.createElement("div",{className:"container auto-grid"},i.a.createElement("div",{className:"row col-12"},i.a.createElement("a",{href:"#",className:"octave-logo-link"},i.a.createElement("img",{className:"octave-logo",src:b.a,alt:this.props.siteTitle})),i.a.createElement("div",{className:"subscribe-container"},!this.props.hideCallToAction&&i.a.createElement(y.a,{className:"green"},"Inscription")),i.a.createElement("div",{className:"burger-menu",onClick:this.toggleMenu}))))},t}(r.Component),M=p.a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1uv2ofl-0"})(["background-color:#373f51;padding:5rem 0 15rem 0;color:#fff;.links{text-align:right;line-height:3 rem;a{text-decoration:none;color:#fff;}a:hover{text-decoration:underline;}}.logo-container{img{width:20rem;}margin-bottom:3rem;}.rights{font-size:1.4rem;margin-bottom:3rem;}.description{text-align:justify;}@media screen and (max-width:768px){.links,.logo-container,.rights{text-align:center;}.links{margin-top:5rem;}}"]),D=function(){return i.a.createElement(M,null,i.a.createElement("div",{className:"grid-12 has-gutter container"},i.a.createElement("div",{className:"col-1 hide-large"}),i.a.createElement("div",{className:"col-6-small-10"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{src:b.a,alt:"Octave logo"})),i.a.createElement("p",{className:"rights"},"© Octave 2018 - tous droits réservés"),i.a.createElement("p",{className:"description"},"Octave est une application mobile qui permet à ses utilisateurs de planifier simplement leurs repas et ceux de leurs familles parmi un large choix de recettes saines et goûteuses. Octave est un véritable assistant personnel qui aide également les utilisateurs à faire leurs courses facilement et en choisissant les produits les plus sains possibles.")),i.a.createElement("div",{className:"col-6-small-all links"},i.a.createElement("a",{href:""},"Accueil"),i.a.createElement("br",null),i.a.createElement("a",{href:"team"},"L’équipe"),i.a.createElement("br",null),i.a.createElement("a",{href:"signup"},"Inscription"),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:contact@octaveapp.fr"},"Contact"),i.a.createElement("br",null),i.a.createElement("a",{href:"confidentiality"},"Politique de confidentialité"))))},q=(a(178),a(180),a(183),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"4085570902",render:function(e){var a=e.site.siteMetadata,n=a.title,r=a.description,o=a.keywords;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:n,meta:[{name:"description",content:r},{name:"keywords",content:o}]},i.a.createElement("html",{lang:"fr"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"}),i.a.createElement("script",null,"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-126067793');"),i.a.createElement("base",{href:"https://octaveapp.github.io/landing-page/"})),i.a.createElement(C,{siteTitle:n}),t,i.a.createElement(D,null))},data:n})});q.propTypes={children:c.a.node.isRequired};t.a=q},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(153),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(46);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),g=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){e.exports=a.p+"static/octave-logo-3d4084e8b5366737a43692c28ec34d71.png"},153:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Octave App",description:"L'application mobile qui vous fait gagner un temps précieux dans votre cuisine et pour vos courses",keywords:"Famille, Manger sain, Equilibre alimentaire, Application"}}}}},167:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(70),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},169:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjEwLjYiIHJ4PSI1LjMiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHk9IjIxLjIiIHdpZHRoPSI1MyIgaGVpZ2h0PSIxMC42IiByeD0iNS4zIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSI0Mi40IiB3aWR0aD0iNTMiIGhlaWdodD0iMTAuNiIgcng9IjUuMyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},177:function(e,t,a){e.exports=a.p+"static/close-icon-cab8a28887706c4f8bfb085478e0ab33.png"},178:function(e,t,a){},180:function(e,t,a){},183:function(e,t,a){}}]);
//# sourceMappingURL=1-0f1d4fa61c35da1594e3.js.map