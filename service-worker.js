if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),b={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"archives/2021/10/index.html",revision:"b970b34e0fdf8d34ea090658e080863a"},{url:"archives/2021/index.html",revision:"3f23c291f673717ddd59ccad9bc91660"},{url:"archives/2022/01/index.html",revision:"2f697fa29cb203b8566d816819f9d67b"},{url:"archives/2022/index.html",revision:"339179a6f9f4adc1045365eabb05c874"},{url:"archives/index.html",revision:"67355824aa15ce489ff494fd5a90ad9b"},{url:"categories/CS和kali/index.html",revision:"62effe839fa56abedca835a65e87e631"},{url:"categories/index.html",revision:"bc438ae3952ef43a3982e826f64e8752"},{url:"categories/学习/index.html",revision:"75c3da209b5f8b183bfd01d19f3c887e"},{url:"categories/网络安全/index.html",revision:"7407f30a003595a0d7641dc77652755d"},{url:"categories/靶场/index.html",revision:"894c2c42dd011699b29389b205a2b1a3"},{url:"css/custom.css",revision:"1fa13b2d4c1e57e5856bdc0b7ae0294e"},{url:"css/index.css",revision:"2cd663cec88ab32968744261e207e557"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/头像.jpg",revision:"2879cd93c2fd0742e736a99d53189260"},{url:"index.html",revision:"2a3725366b04044b4f8d8847bf024b53"},{url:"JS/backgroound.js",revision:"ac1de5124c24ec1f1a070c6135c77f86"},{url:"JS/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"JS/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"JS/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"JS/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"JS/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"901b7f885b06de07d7cb1b2bbeb98406"},{url:"post/4a17b156.html",revision:"300047022c365b5bb3c34f875b9a6232"},{url:"post/8ab2dce2.html",revision:"dc3fc1ab97b5952a310cd8dfe04bc2c7"},{url:"post/d5b83abf.html",revision:"cd557a075d632d2ca3c3ecea6937c93b"},{url:"post/dbe362f1.html",revision:"1dc0bbefb4a1f0117a7099987df57570"},{url:"tags/index.html",revision:"366994f25ced39bfc786e8025ef28db2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
