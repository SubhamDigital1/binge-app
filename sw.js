const CACHE_NAME = "binge-offline-v3";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Binge Offline</title>
        <style>
          body {
            margin:0;
            background:#000;
            color:#fff;
            font-family:sans-serif;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            height:100vh;
            text-align:center;
          }
          img { width:120px; margin-bottom:15px; }
          h2 { font-size:22px; margin:10px 0; }
          p { font-size:16px; margin:5px 0 15px; }
          button {
            padding:12px 25px;
            font-size:17px;
            background:#E50914;
            border:none;
            border-radius:6px;
            color:#fff;
          }
        </style>
        </head>
        <body>
        <img src="https://i.postimg.cc/mDL8HQws/1748143362878.png">
        <h2>You Are Offline</h2>
        <p>Check your internet connection & try again</p>
        <button onclick="location.reload()">Retry</button>
        </body>
        </html>
      `, {
        headers: { "Content-Type": "text/html" }
      });
    })
  );
});
