const CACHE = 'query-v20';
const STATIC = [
  '/import.html', '/manifest.json', '/purify.min.js',
  '/icons/icon16.png', '/icons/icon32.png', '/icons/icon48.png',
  '/icons/icon128.png', '/icons/icon192.png', '/icons/icon512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.allSettled(STATIC.map(url => c.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

const store = (req, res) => {
  if (res && res.status === 200) {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
  }
  return res;
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Only our own files: CDN scripts, fonts and analytics go straight to the network.
  if (new URL(req.url).origin !== self.location.origin) return;

  // Pages: network first, so a new version is picked up as soon as we're online;
  // the cached copy is the offline fallback.
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).then(res => store(req, res)).catch(() =>
        caches.match(req, { ignoreSearch: true })
          .then(hit => hit || caches.match('/import.html'))
          .then(hit => hit || Response.error())
      )
    );
    return;
  }

  // Other assets: cache first, then network.
  e.respondWith(
    caches.match(req).then(hit =>
      hit || fetch(req).then(res => store(req, res)).catch(() => Response.error())
    )
  );
});
