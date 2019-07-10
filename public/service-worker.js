"use strict";var precacheConfig=[["assets/css/app.css","2fa52afb98a55f79f01dedca4e75313f"],["assets/css/jquery.minicolors.css","93ae5c82933ff00fe567d39b6de447ad"],["assets/css/styles.css","a9bb46e87d47bef8ab7b6d1451ebb7ad"],["assets/css/styles.min.css","2c5fe26d7cc604cb79742e4d6005cb75"],["assets/css/themes.css","2cb91cb1dae001b4b0307739bf213767"],["assets/css/themes.min.css","10a80a926d121ef494868ed05d05bc52"],["assets/img/favicon/safari-pinned-tab.svg","5aa7924fb7758024ce339eee552b35f7"],["assets/img/filters.svg","9a939eb38796f36d781b26fbc1506f0d"],["assets/img/illustrations/authentication.svg","4b6c5567be4012fe363fae956c7ef2c5"],["assets/img/illustrations/camera_2.svg","8ffb266419f2233f0cc11d27e5e511cb"],["assets/img/illustrations/code_css.svg","825fdb4bbf4a861cb6ebf25d5fde4dc5"],["assets/img/illustrations/creative_process_2.svg","48f746c057d116e0c61376a4fd9f82a6"],["assets/img/illustrations/designer_1.svg","4ad94510390e9cf2c6b6689bb15640ac"],["assets/img/illustrations/designer_3.svg","c20c735205b46aa88f039920b1a45c4f"],["assets/img/illustrations/drink_coffee_with_laptop_in_cafe.svg","3bfef86648035ecbe14592483a0a3952"],["assets/img/illustrations/growing_up.svg","a3272835e11dcf92a4e234c4f2dba8c3"],["assets/img/illustrations/like.svg","94d7905926e37dbb0e46168694ebd847"],["assets/img/illustrations/password.svg","04b50e76ece489dc2a9143f90756692b"],["assets/img/illustrations/search_engine.svg","32c7e9b0f84bb3751a2d797b5027e8c9"],["assets/img/illustrations/start_up.svg","a92456195108ccc581fc020e2a44de39"],["assets/img/logo-form.svg","d556eff9460314bc9ccab129605104da"],["assets/js/app.js","a3f5076f952ebe3a71752abd951ca1d0"],["assets/js/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["assets/js/color-conversion.js","77264d9eb7681f5b53804593514b67cc"],["assets/js/color-thief.js","8d01644f29bc06f84fef3b837002e880"],["assets/js/dark-mode.js","8936dbffbe6d3c33ff78a80c7e9a55bc"],["assets/js/jquery.mask.min.js","acb54232967a36f1df1d0c0623a89d65"],["assets/js/jquery.minicolors.js","efb80a4f7ec93bc8fd5bfa4de3b4b725"],["css/app.css","0ecb85ad649f1a7ac0be8966cfc13173"],["js/app.js","4deed7baea36d184c469c0e1cfdc0962"],["js/validation.js","510235d85b85e01c845e728727ba841b"],["service-worker.js","8944ddbcea9b388cd2ec6f6d91f5d337"],["svg/403.svg","93d6475bd2581cb5aa1b527aa8152a95"],["svg/404.svg","ea2bc467605d3d3aa715c6a3655a4e42"],["svg/500.svg","f56a358742db1d15fc06934278e59703"],["svg/503.svg","bb681f2ad0a2a75161eea851ff83b4e2"],["templates/coming-soon/css/particles.css","48ed3c0cf38028c9b3af98e39f764708"],["templates/coming-soon/css/styles.css","a4fef3fa66ad67a9d94e30f286c775c0"],["templates/coming-soon/js/particles.js","81ffda38972db93ae037396ca18d3177"],["templates/coming-soon/js/scripts.js","71c1f363294c4fe4f36ff54237fc1312"],["templates/dashboard-v2/css/sidebar.css","01cb693f6dd205c98e53567374686f86"],["templates/dashboard-v2/css/styles.css","6455bb4f5a7e455a18e4fbd0b182bfc9"],["templates/dashboard-v2/js/dark-mode.js","ab46a93f1a00a088392352ecb9819846"],["templates/dashboard-v2/js/sidebar.js","8e3112d4ced9468f96e25da814cbb8c1"],["templates/dashboard-v2/js/vendor/chart.min.js","e6b351a021414530cd42a228f0ae0427"],["templates/dashboard-v2/js/vendor/demo-line.js","8174b4953e58b5b9dcef333fbf934632"],["templates/download-now/css/styles.css","3aeb2633be8c3b5a5964902ddf6b704e"],["templates/landing-page-demo/css/floating-labels.css","15cd21b1edcfcf8f1f4a69c3fab03f85"],["templates/landing-page-demo/css/styles.css","3991491830dfda63ddab5a4b676b1f9a"],["templates/landing-page-demo/img/startup_1.svg","0f516a31bbb9a39eaff6eb2506e737df"],["templates/landing-page/css/styles.css","01adf6b2959a61fe717a31fee90595d8"],["templates/landing-page/img/career_1.svg","ca8db2aaece6e55784e2e4e274ee68b7"],["templates/landing-page/img/creative_process.svg","fd573ac8407ca9adf9bdb0f81e9b79d6"],["templates/photo-portafolio/css/styles.css","18f46f6b8bf90962ae0f104e24e883e4"]],cacheName="sw-precache-v3-pwa-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),s=createCacheKey(r,hashParamName,n,!1);return[r.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function s(o,c){if(!n[o]){if(!t[o]){var i="function"==typeof require&&require;if(!c&&i)return i(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n||e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function s(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function a(e,t,n){var s=e.url,a=n.maxAgeSeconds,o=n.maxEntries,c=n.name,i=Date.now();return r("Updating LRU order for "+s+". Max entries is "+o+", max age is "+a),u.getDb(c).then(function(e){return u.setTimestampForUrl(e,s,i)}).then(function(e){return u.expireEntries(e,o,a,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function o(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&s(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);c=c?c.then(r):r()}(e,n,r)})}),r.clone()})},openCache:s,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return s(t).then(function(t){return t.add(e)})},uncache:function(e,t){return s(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||o(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:o,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",s=1,a="store",o="url",c="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,s);i.onupgradeneeded=function(){i.result.createObjectStore(a,{keyPath:o}).createIndex(c,c,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,s){var o=e.transaction(a,"readwrite");o.objectStore(a).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){s(o.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,s){var i=1e3*t,u=[],f=e.transaction(a,"readwrite"),l=f.objectStore(a);l.index(c).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[c]){var r=t.value[o];u.push(r),l.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=s}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var s=[],i=e.transaction(a,"readwrite"),u=i.objectStore(a),f=u.index(c),l=f.count();f.count().onsuccess=function(){var e=l.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[o];s.push(a),u.delete(a),e-s.length>t&&r.continue()}})},i.oncomplete=function(){n(s)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){s.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(o.preCacheItems).then(r).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,s=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=s(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),s=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),s=[];!r.done;){new RegExp(r.value[0]).test(t)&&s.push(r.value[1]),r=n.next()}return s},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){o.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),o.prototype.add=function(e,t,n,a){var o;a=a||{},t instanceof RegExp?o=RegExp:o=(o=a.origin||self.location.origin)instanceof RegExp?o.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(o),e=e.toLowerCase();var c=new r(e,t,n,a);this.routes.has(o)||this.routes.set(o,new Map);var i=this.routes.get(o);i.has(e)||i.set(e,new Map);var u=i.get(e),f=c.regexp||c.fullUrlRegExp;u.has(f.source)&&s.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,c)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,s=n.pathname;return this._match(e,a(this.routes,r),s)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var s=t[r],o=s&&s.get(e.toLowerCase());if(o){var c=a(o,n);if(c.length>0)return c[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),s=e("../helpers");t.exports=function(e,t,n){return n=n||{},s.debug("Strategy: cache first ["+e.url+"]",n),s.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,o=Date.now();return s.isResponseFresh(t,a.maxAgeSeconds,o)?t:s.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),s=e("../helpers");t.exports=function(e,t,n){return n=n||{},s.debug("Strategy: cache only ["+e.url+"]",n),s.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(s.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),s=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,o){var c=!1,i=[],u=function(e){i.push(e.toString()),c?o(new Error('Both cache and network failed: "'+i.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),s(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),s=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,o=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return s.debug("Strategy: network first ["+e.url+"]",n),s.openCache(n).then(function(t){var c,i,u=[];if(o){var f=new Promise(function(a){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now(),c=t.maxAgeSeconds;s.isResponseFresh(e,c,o)&&a(e)})},1e3*o)});u.push(f)}var l=s.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),a.test(e.status))return e;throw s.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return s.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(l),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),s=e("./router"),a=e("./helpers"),o=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:s,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],s=0,a=0,o="",u=t&&t.delimiter||"/";null!=(n=d.exec(e));){var f=n[0],l=n[1],h=n.index;if(o+=e.slice(a,h),a=h+f.length,l)o+=l[1];else{var p=e[a],m=n[2],g=n[3],b=n[4],v=n[5],w=n[6],x=n[7];o&&(r.push(o),o="");var y=null!=m&&null!=p&&p!==m,E="+"===w||"*"===w,R="?"===w||"*"===w,j=n[2]||u,k=b||v;r.push({name:g||s++,prefix:m||"",delimiter:j,optional:R,repeat:E,partial:y,asterisk:!!x,pattern:k?i(k):x?".*":"[^"+c(j)+"]+?"})}}return a<e.length&&(o+=e.substr(a)),o&&r.push(o),r}function s(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",c=n||{},i=(r||{}).pretty?s:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var l,h=c[f.name];if(null==h){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(p(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=i(h[d]),!t[u].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?a(h):i(h),!t[u].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');o+=f.prefix+l}}else o+=f}return o}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function l(e,t,n){p(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,s=!1!==n.end,a="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)a+=c(i);else{var l=c(i.prefix),h="(?:"+i.pattern+")";t.push(i),i.repeat&&(h+="(?:"+l+h+")*"),a+=h=i.optional?i.partial?l+"("+h+")?":"(?:"+l+"("+h+"))?":l+"("+h+")"}}var d=c(n.delimiter||"/"),m=a.slice(-d.length)===d;return r||(a=(m?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=s?"$":r&&m?"":"(?="+d+"|$)",u(new RegExp("^"+a,f(n)),t)}function h(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):p(e)?function(e,t,n){for(var r=[],s=0;s<e.length;s++)r.push(h(e[s],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return l(r(e,n),t,n)}(e,t,n)}var p=e("isarray");t.exports=h,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=l;var d=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/fonts\.gstatic\.com/,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/use\.fontawesome\.com\/releases\/v5.5.0\/css\/all\/.css/,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/stackpath\.bootstrapcdn\.com\/bootstrap\/4.2.1\/css\/bootstrap\/.min\/.css/,toolbox.cacheFirst,{});