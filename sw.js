// Service worker: lets the app open instantly and install like an app.
//
// Your own files (index.html, config.js, ...) are always fetched fresh
// when there is a connection, so changes you upload show up the next
// time the app opens. The saved copy is only used when you're offline.
//
// The balance itself is never stored here; it always comes from Firebase.

const CACHE = 'shared-balance-v1';
const APP_FILES = ['./', './index.html', './config.js', './manifest.json',
                   './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Your own files: network first, saved copy if offline.
  if (url.origin === self.location.origin){
    event.respondWith(
      fetch(req).then(res => {
        if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Firebase library files (fixed version, never change): saved copy first.
  if (url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/')){
    event.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }))
    );
  }
  // Everything else (the Firebase database and login) goes straight to the network.
});
