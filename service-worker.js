if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"archives/2022/02/index.html",revision:"8988db41ad51cc61392095d2fce1f535"},{url:"archives/2022/index.html",revision:"3c0d204e3bde2dafc58540220790adc8"},{url:"archives/index.html",revision:"84f0b466aa41d698a1212a7b5cb56441"},{url:"categories/index.html",revision:"0710728efa0e82f4cf42c0917a4b54d1"},{url:"categories/学习笔记/index.html",revision:"7691bf775e6ce50b818bbbd73d067d17"},{url:"css/custom.css",revision:"1fa13b2d4c1e57e5856bdc0b7ae0294e"},{url:"css/index.css",revision:"2edfec24532afa93a17a1d0648772326"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/头像.jpg",revision:"2879cd93c2fd0742e736a99d53189260"},{url:"index.html",revision:"9452f35d2cb15ae7b6f493ab90651863"},{url:"JS/backgroound.js",revision:"ac1de5124c24ec1f1a070c6135c77f86"},{url:"JS/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"JS/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"JS/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"JS/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"JS/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"cff5faf4ab87beb4b97d3bda94f87cd9"},{url:"post/41f2e8ee.html",revision:"b92e0d8bcb51838e349cb76d598f8874"},{url:"post/c7fe651a.html",revision:"ea8423abfab1b0ec2fed9097a4a092e6"},{url:"post/f3914fba.html",revision:"5a32a2ac17601ce5a3f9412c8ad2eef5"},{url:"tags/index.html",revision:"117138bee014da3c9eaff506c115efc7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
