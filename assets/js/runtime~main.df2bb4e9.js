(()=>{"use strict";var e,t,r,o,f,n={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=a,e=[],i.O=(t,r,o,f)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],f=e[u][2];for(var a=!0,d=0;d<r.length;d++)(!1&f||n>=f)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(a=!1,f<n&&(n=f));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}f=f||0;for(var u=e.length;u>0&&e[u-1][2]>f;u--)e[u]=e[u-1];e[u]=[r,o,f]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var f=Object.create(null);i.r(f);var n={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(f,n),f},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({52:"8e33b65d",53:"935f2afb",85:"1f391b9e",124:"82e10b7f",161:"7a5492c9",166:"9dc67cb9",195:"c4f5d8e4",363:"583db3ef",364:"88be5d74",434:"f5f78f72",514:"1be78505",618:"0f265e1c",719:"445e7840",869:"33b4f319",918:"17896441",980:"3d1a1f61"}[e]||e)+"."+{52:"27b2d6d4",53:"f92112e3",74:"8a951f9e",85:"546f0ec0",124:"183c4035",161:"c2098a6b",166:"50404d51",195:"79125941",363:"f6f175a2",364:"74cee473",434:"de3ff4ef",514:"bdca99dc",618:"9a27ecfd",719:"34f6bf70",869:"7a7fea25",893:"db1c5b06",918:"84ad9a53",980:"86b865ac"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},f="spec-untp-website:",i.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var a,d;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+r){a=l;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",f+r),a.src=e),o[e]=[t];var b=(t,r)=>{a.onerror=a.onload=null,clearTimeout(s);var f=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),f&&f.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),d&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/spec-untp/",i.gca=function(e){return e={17896441:"918","8e33b65d":"52","935f2afb":"53","1f391b9e":"85","82e10b7f":"124","7a5492c9":"161","9dc67cb9":"166",c4f5d8e4:"195","583db3ef":"363","88be5d74":"364",f5f78f72:"434","1be78505":"514","0f265e1c":"618","445e7840":"719","33b4f319":"869","3d1a1f61":"980"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise(((r,f)=>o=e[t]=[r,f]));r.push(o[2]=f);var n=i.p+i.u(t),a=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var f=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+f+": "+n+")",a.name="ChunkLoadError",a.type=f,a.request=n,o[1](a)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,f,n=r[0],a=r[1],d=r[2],c=0;if(n.some((t=>0!==e[t]))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(d)var u=d(i)}for(t&&t(r);c<n.length;c++)f=n[c],i.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return i.O(u)},r=self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();