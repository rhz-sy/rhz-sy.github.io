if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"archives/2021/10/index.html",revision:"de2e285509e0863cd43ff11544f3a492"},{url:"archives/2021/index.html",revision:"a171e0dcae9b63e14ca5455964052899"},{url:"archives/2022/01/index.html",revision:"e997f6347211212d0c7a2402fce0af6c"},{url:"archives/2022/index.html",revision:"693ef116e570f2d58e9546a6f97562d7"},{url:"archives/index.html",revision:"5763c7cb7383876ce5b8bacd43b053eb"},{url:"categories/CS和kali/index.html",revision:"52ee0096c00be9482de5a6e1cc5c5f79"},{url:"categories/index.html",revision:"9a10aa27b553424cedeae97d3c1771b3"},{url:"categories/学习/index.html",revision:"6e3aea2203e477dc62064ff5980fc9af"},{url:"categories/网络安全/index.html",revision:"6590b179ff0f95d6a248b755e1ae3987"},{url:"categories/靶场/index.html",revision:"fba0d2559f128144d27f882a8a78a008"},{url:"css/custom.css",revision:"1fa13b2d4c1e57e5856bdc0b7ae0294e"},{url:"css/index.css",revision:"2edfec24532afa93a17a1d0648772326"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/头像.jpg",revision:"2879cd93c2fd0742e736a99d53189260"},{url:"index.html",revision:"098bc8b881ede37caf70dff7e1922304"},{url:"JS/backgroound.js",revision:"ac1de5124c24ec1f1a070c6135c77f86"},{url:"JS/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"JS/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"JS/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"JS/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"JS/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"91d84acbf8d7c6706e7f78af32ddf62a"},{url:"post/4a17b156.html",revision:"5d0042f620b1366330308975642a50d5"},{url:"post/8ab2dce2.html",revision:"4a6ac30ef0d8e90fbd223878a060c991"},{url:"post/d5b83abf.html",revision:"3cd4ce7d5768c4c237da14a4fc904d02"},{url:"post/dbe362f1.html",revision:"edfcc05bb26e22d13bcf7fe6dfbace57"},{url:"tags/index.html",revision:"5ac0768bb9c192f89e86db4bf825873a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
