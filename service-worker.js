if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const l=e=>d(e,s),f={module:{uri:s},exports:n,require:l};i[s]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/01/24/hello-world/index.html",revision:"d74b1a549395d4f9cc7dc53e9d1b16da"},{url:"2022/01/24/test1/index.html",revision:"1e59791ba14179b09507fd413224d465"},{url:"archives/2022/01/index.html",revision:"401d0241b019d2f4dcbac7e70b8aa577"},{url:"archives/2022/index.html",revision:"13c6f4d0e247b789fcf82f7c12a2627a"},{url:"archives/index.html",revision:"8c0cf2cf3f1e9bc114c6c91209f1a289"},{url:"categories/index.html",revision:"3c21da269b3c8042dddc0e0ae2a2449c"},{url:"css/index.css",revision:"b0ad6bb52bd3b76cf5845cdded6416a5"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/头像.jpg",revision:"2879cd93c2fd0742e736a99d53189260"},{url:"index.html",revision:"9c57e525b569f133c114bc8996e3075f"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"be53bbf3f32073f62d0e80556a139b47"},{url:"tags/index.html",revision:"b0fc0a7c9958fe38194014f0d8ffd05c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
