(()=>{var e,t,r,n,o,a={28:(e,t,r)=>{"use strict";var n=r(341),o=r(229),a={class:"app-container"};r(588);var i=r(502),s={class:"navigation-container_links-container"},u={class:"navigation-container_menu-container"},c={class:"navigation-container_menu-container_dropdown_sub-container"},l={width:"50",height:"50",viewBox:"0 -42.5 256 256",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},p=[(0,o._)("path",{fill:"#30F2A2",d:"M0 0l85.333 41.813v85.334L0 85.333zM171.52 0L256 41.813l-84.48 43.52z"},null,-1),(0,o._)("path",{fill:"#14CC80",d:"M171.52 0L85.333 41.813v85.334l86.187-41.814zM256 41.813l-84.48 43.52v85.334l84.48-43.52z"},null,-1)],d=r(21);const f={},g={name:"NavigationBar",components:{svgLogo:(0,d.Z)(f,[["render",function(e,t){return(0,o.wg)(),(0,o.iD)("svg",l,p)}]]),closeButton:r(549).Z},data:function(){return{menuIsOpen:!1,pages:[{id:1,name:"Home",path:"/"},{id:2,name:"Products",path:"/products"},{id:3,name:"Categories",path:"/categories"}]}},methods:{toggleMenu:function(){this.menuIsOpen=!this.menuIsOpen;var e=document.querySelector(".app-container");this.menuIsOpen?e.classList.add("blur-app"):e.classList.remove("blur-app")}}},v={name:"App",components:{NavigationBar:(0,d.Z)(g,[["render",function(e,t,r,n,a,l){var p=(0,o.up)("svg-logo"),d=(0,o.up)("router-link"),f=(0,o.up)("close-button");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["navigation-container",{"blur-container":a.menuIsOpen}])},[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p)]})),_:1}),(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages,(function(e){return(0,o.wg)(),(0,o.j4)(d,{class:"navigation-container_links-container_router-page",key:e.id+e.name,to:e.path},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,i.zw)(e.name),1)]})),_:2},1032,["to"])})),128))]),(0,o._)("div",u,[(0,o._)("button",{class:"navigation-container_links-container_router-page navigation-menu",onClick:t[0]||(t[0]=function(){return l.toggleMenu&&l.toggleMenu.apply(l,arguments)})}," Menu "),(0,o._)("div",{class:(0,i.C_)(["navigation-container_menu-container_dropdown",{"open-menu":a.menuIsOpen}])},[(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages,(function(e){return(0,o.wg)(),(0,o.j4)(d,{class:"navigation-container_links-container_router-page navigation-container_menu-container_dropdown_link",key:e.id+e.name,to:e.path},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,i.zw)(e.name),1)]})),_:2},1032,["to"])})),128)),(0,o.Wm)(f,{class:"close-button",onClick:l.toggleMenu},null,8,["onClick"])])],2)])],2)}],["__scopeId","data-v-7cdecad5"]])},methods:{dispatchApiCall:function(){this.$store.dispatch("apiCall")}},created:function(){this.dispatchApiCall()}},m=(0,d.Z)(v,[["render",function(e,t,r,n,i,s){var u=(0,o.up)("navigation-bar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(u,{class:"navigation-bar"}),(0,o.Wm)(c)])}]]);var h=r(666);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=[{path:"/",name:"Home"},{path:"/products",name:"Products"},{path:"/categories",name:"Categories"}].map((function(e){return y(y({},e),{},{component:function(){return r(275)("./".concat(e.name,".vue"))}})}));const O=(0,h.p7)({history:(0,h.PO)("/sales/"),base:"/",routes:_});function k(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}const C=(0,r(979).MT)({state:function(){return{products:[],filters:[],sort:{type:"rating",sign:"-"}}},mutations:{updateProducts:function(e,t){e.products=t},addFilter:function(e,t){e.filters.push(t)},deleteFilter:function(e,t){e.filters.splice(e.filters.indexOf(t),1)}},getters:{getProducts:function(e){return e.products.sort((function(t,r){if("+"===e.sort.sign){var n=t;t=r,r=n}return"rating"===e.sort.type?t[e.sort.type].rate-r[e.sort.type].rate:t[e.sort.type]-r[e.sort.type]}))},getCategories:function(e){return e.products.map((function(e){return e.category.toUpperCase()}))}},actions:{apiCall:function(e){return(t=regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.commit;try{fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return r("updateProducts",e)}))}catch(e){console.log("Api error: "+e)}case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(e){k(a,n,o,i,s,"next",e)}function s(e){k(a,n,o,i,s,"throw",e)}i(void 0)}))})();var t}}});var P;document.body.appendChild(((P=document.createElement("div")).classList.add("app-root"),P));var j=(0,n.ri)(m);j.use(O),j.use(C),j.mount(".app-root")},549:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(229),o={width:"24",height:"24",viewBox:"0 0 24 25",xmlns:"http://www.w3.org/2000/svg"},a=[(0,n._)("g",{"clip-path":"url(#clip0_2_28)"},[(0,n._)("path",{d:"M24 3.474L21.221.443l-9.095 9.095L3.032.443 0 3.474l9.095 9.095L0 21.664l3.032 2.779 9.094-9.095 9.095 9.095L24 21.663l-9.095-9.094L24 3.474z"})],-1),(0,n._)("defs",null,[(0,n._)("clipPath",{id:"clip0_2_28"},[(0,n._)("path",{fill:"#fff",transform:"translate(0 .443)",d:"M0 0h24v24H0z"})])],-1)];const i={},s=(0,r(21).Z)(i,[["render",function(e,t){return(0,n.wg)(),(0,n.iD)("svg",o,a)}]])},275:(e,t,r)=>{var n={"./Categories.vue":[806,906],"./Home.vue":[81,111],"./Products.vue":[576,840]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=275,e.exports=o}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.m=a,e=[],s.O=(t,r,n,o)=>{if(!r){var a=1/0;for(l=0;l<e.length;l++){for(var[r,n,o]=e[l],i=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](r[u])))?r.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>({111:"Home-vue",840:"Products-vue",906:"Categories-vue"}[e]+"."+{111:"e8108bdb112644b3a046",840:"e15d5b9bb2ede1412322",906:"67524f30dfb65306d7e4"}[e]+".js"),s.miniCssF=e=>e+".main.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="sales:",s.l=(e,n,o,a)=>{if(t[e])t[e].push(n);else{var i,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+o){i=p;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",r+o),i.src=e),t[e]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),n=e=>new Promise(((t,r)=>{var n=s.miniCssF(e),o=s.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),n(u)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),o={179:0},s.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{111:1,840:1,906:1}[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={179:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=s.p+s.u(t),i=new Error;s.l(a,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,u]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)var l=u(s)}for(t&&t(r);c<a.length;c++)o=a[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},r=self.webpackChunksales=self.webpackChunksales||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var u=s.O(void 0,[37],(()=>s(28)));u=s.O(u)})();