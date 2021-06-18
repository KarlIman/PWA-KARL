self.addEventListener("install", e => { 
    e.waitUntil(
      caches.open("offlineFiles").then(cache => {
         return cache.addAll([
             "./",
             "./index.js",
             "./styles.css",
             "./123.jpg",
             "./123.jpg"
         ]);
      })
    );
});

self.addEventListener("fetch", e => {
   console.log("Intercepting request :"+ e.request.url);
   e.respondWith(
       caches.match(e.request).then(response => {
            return response || fetch(e.request);
       })
   );
});