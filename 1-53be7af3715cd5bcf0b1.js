(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(141),o={green:{bg:"#fff",border:"#6CC566",color:"#6CC566",hover:{bg:"#6CC566",border:"#fff",color:"#fff"}},blue:{bg:"#008DD5",border:"#008DD5",color:"#fff",hover:{bg:"#fff",border:"#008DD5",color:"#008DD5"}},white:{bg:"#fff",border:"#008DD5",color:"#008DD5",hover:{bg:"#008DD5",border:"#fff",color:"#fff"}}},c=function(e){var t=o[e];return"\n  background-color: "+t.bg+";\n    border: 3px solid "+t.border+";\n    color: "+t.color+";\n    &:hover {\n      background-color: "+t.hover.bg+";\n      border: 3px solid "+t.hover.border+";\n      color: "+t.hover.color+";\n    }"},l=i.a.a.withConfig({displayName:"call-to-action__Button",componentId:"sc-1t7y6p-0"})(["display:inline-block;border-radius:2rem;padding:1.2rem 4rem;font-size:2rem;font-family:'Work Sans',sans-serif !important;cursor:pointer;text-decoration:none;font-weight:600;&:hover{text-decoration:none;}&.green{",";}&.blue{",";}&.white{",";}@media screen and (max-width:768px){&.small-green{",";}&.small-blue{",";}&.small-white{",";}}"],c("green"),c("blue"),c("white"),c("green"),c("blue"),c("white"));t.a=function(e){var t=e.children,n=e.className;return r.a.createElement(l,{href:"signup",className:n},t)}},146:function(e,t,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(155),s=n.n(l),u=n(151),d=(n(153),n(7)),m=n.n(d),g=n(48),f=n.n(g),p=n(141),h=n(148),b=n.n(h),v=n(168),w=n.n(v),y=n(145),E=n(176),x=n.n(E),I=p.a.div.withConfig({displayName:"menu__Popover",componentId:"sc-1yghb2m-0"})(["display:",";flex-direction:column;align-items:center;justify-content:space-between;background-color:#008dd5;padding:7rem 1rem;z-index:10;position:fixed;overflow:hidden;text-align:center;top:0;bottom:0;left:0;right:0;.octave-logo{margin:0 auto 5rem auto;}a{font-size:2.5rem;margin-bottom:3rem;color:white;text-decoration:none;font-family:'Josefin Slab',serif;}.container{text-align:center;display:flex;flex-direction:column;}.close-btn{width:6rem;}"],function(e){return e.shown?"flex":"none"}),j=function(e){var t=e.onClose,n=e.shown;return i.a.createElement(I,{shown:n},i.a.createElement("img",{className:"octave-logo",src:b.a,alt:"logo"}),i.a.createElement("nav",{className:"container"},i.a.createElement("a",{href:"index"},"Accueil"),i.a.createElement("a",{href:"team"},"L'équipe"),i.a.createElement("a",{href:"confidentiality"},"Politique de confidentialité"),i.a.createElement(y.a,{className:"white"},"Inscription")),i.a.createElement("img",{className:"close-btn",onClick:t,src:x.a,alt:"close"}))},N=p.a.header.withConfig({displayName:"header__Header",componentId:"sc-1hxzvcr-0"})(["background-color:#6cc566;padding:2rem 0 2rem 0;.row{display:flex;justify-content:space-between;align-items:center;.octave-logo-link{text-decoration:none;}.burger-menu{display:none;background-image:url('","');background-size:cover;width:3.2rem;height:3.2rem;content:' ';}@media (max-width:768px){.subscribe-container{display:none;}.burger-menu{display:block;}}}"],w.a),C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isMenuShown:!1},n.toggleMenu=n.toggleMenu.bind(f()(f()(n))),n}m()(t,e);var n=t.prototype;return n.toggleMenu=function(){var e=this;this.setState({isMenuShown:!this.state.isMenuShown},function(){document.body.style.overflow=e.state.isMenuShown?"hidden":"auto"})},n.render=function(){return i.a.createElement(N,null,i.a.createElement(j,{shown:this.state.isMenuShown,onClose:this.toggleMenu}),i.a.createElement("div",{className:"container auto-grid"},i.a.createElement("div",{className:"row col-12"},i.a.createElement("a",{href:"/",className:"octave-logo-link"},i.a.createElement("img",{className:"octave-logo",src:b.a,alt:this.props.siteTitle})),i.a.createElement("div",{className:"subscribe-container"},!this.props.hideCallToAction&&i.a.createElement(y.a,{className:"green"},"Inscription")),i.a.createElement("div",{className:"burger-menu",onClick:this.toggleMenu}))))},t}(r.Component),k=p.a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1uv2ofl-0"})(["background-color:#373f51;padding:5rem 0 15rem 0;color:#fff;.links{text-align:right;line-height:3 rem;a{text-decoration:none;color:#fff;}a:hover{text-decoration:underline;}}.logo-container{img{width:20rem;}margin-bottom:3rem;}.rights{font-size:1.4rem;margin-bottom:3rem;}.description{text-align:justify;}@media screen and (max-width:768px){.links,.logo-container,.rights{text-align:center;}.links{margin-top:5rem;}}"]),M=function(){return i.a.createElement(k,null,i.a.createElement("div",{className:"grid-12 has-gutter container"},i.a.createElement("div",{className:"col-1 hide-large"}),i.a.createElement("div",{className:"col-6-small-10"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{src:b.a,alt:"Octave logo"})),i.a.createElement("p",{className:"rights"},"© Octave 2018 - tous droits réservés"),i.a.createElement("p",{className:"description"},"Octave est une application mobile qui permet à ses utilisateurs de planifier simplement leurs repas et ceux de leurs familles parmi un large choix de recettes saines et goûteuses. Octave est un véritable assistant personnel qui aide également les utilisateurs à faire leurs courses facilement et en choisissant les produits les plus sains possibles.")),i.a.createElement("div",{className:"col-6-small-all links"},i.a.createElement("a",{href:"/"},"Accueil"),i.a.createElement("br",null),i.a.createElement("a",{href:"team"},"L’équipe"),i.a.createElement("br",null),i.a.createElement("a",{href:"signup"},"Inscription"),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:contact@octaveapp.fr"},"Contact"),i.a.createElement("br",null),i.a.createElement("a",{href:"confidentiality"},"Politique de confidentialité"))))},D=(n(177),n(179),n(182),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"4085570902",render:function(e){var n=e.site.siteMetadata,a=n.title,r=n.description,o=n.keywords;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:a,meta:[{name:"description",content:r},{name:"keywords",content:o}]},i.a.createElement("base",{href:"https://www.octaveapp.fr/"}),i.a.createElement("html",{lang:"fr"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"}),i.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n\n                gtag('config', 'UA-126067793');"),i.a.createElement("script",null,"\n                (function(h,o,t,j,a,r){\n                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                    h._hjSettings={hjid:1096949,hjsv:6};\n                    a=o.getElementsByTagName('head')[0];\n                    r=o.createElement('script');r.async=1;\n                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                    a.appendChild(r);\n                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n              ")),i.a.createElement(C,{siteTitle:a}),t,i.a.createElement(M,null))},data:a})});D.propTypes={children:c.a.node.isRequired};t.a=D},148:function(e,t,n){e.exports=n.p+"static/octave-logo-3d4084e8b5366737a43692c28ec34d71.png"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return g});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(144),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(46);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),g=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Octave App",description:"L'application mobile qui vous fait gagner un temps précieux dans votre cuisine et pour vos courses",keywords:"Famille, Manger sain, Equilibre alimentaire, Application"}}}}},166:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(70),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},168:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjEwLjYiIHJ4PSI1LjMiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHk9IjIxLjIiIHdpZHRoPSI1MyIgaGVpZ2h0PSIxMC42IiByeD0iNS4zIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSI0Mi40IiB3aWR0aD0iNTMiIGhlaWdodD0iMTAuNiIgcng9IjUuMyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},176:function(e,t,n){e.exports=n.p+"static/close-icon-cab8a28887706c4f8bfb085478e0ab33.png"},177:function(e,t,n){},179:function(e,t,n){},182:function(e,t,n){}}]);
//# sourceMappingURL=1-53be7af3715cd5bcf0b1.js.map