"use strict";var precacheConfig=[["/index.html","48d286b244cb2d2c7cbeecd5ce52e1c4"],["/static/css/main.2636c787.css","2e1971d789db64dffd086e74d8d46f1f"],["/static/js/main.7b2b7818.js","27be4b5a430fc1c6202e5d89c5b173b9"],["/static/media/bg_chennai.3bfb8377.jpg","3bfb837798c971b8d1d1a98663c837a9"],["/static/media/datacamp.8d37c64f.svg","8d37c64f7fdfee469018e623b150e7f6"],["/static/media/dev_bg.ff038a7b.jpg","ff038a7b0c7038dc4d18f4d1618b83f1"],["/static/media/down-arrow.8f33311b.svg","8f33311bcfaa6f15f41659e79069fc9c"],["/static/media/education.2ffa123d.jpg","2ffa123d96244a8b1c83719ab2207f0c"],["/static/media/network.b6c69f5c.svg","b6c69f5c1046a7e7fd4d5bf1edbe5f2c"],["/static/media/nodejs.36700bee.png","36700bee9a1831f2691165d291d62d78"],["/static/media/pdf.390ef900.svg","390ef9004d1a0ebcd61dcf816a170be4"],["/static/media/profile_image.57944086.jpg","57944086f88e1426f5f99a0f073712f4"],["/static/media/stopwatch.a3e987a1.svg","a3e987a1ca6397e0483bf1481ec12feb"],["/static/media/student.c80716f8.svg","c80716f8a4461be63d38a1eb181e263e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});