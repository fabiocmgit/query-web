const CACHE = 'query-v21';
const STATIC = [
  '/import.html', '/query.css', '/query.js',
  '/manifest.json', '/purify.min.js', '/peerjs.min.js', '/qrcode.min.js',
  '/icons/icon16.png', '/icons/icon32.png', '/icons/icon48.png',
  '/icons/icon128.png', '/icons/icon192.png', '/icons/icon512.png',
];
// Délai au-delà duquel une page est servie depuis le cache quand le réseau répond trop lentement.
const PAGE_TIMEOUT_MS = 3000;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      // cache:'reload' : le pré-cache ne doit pas reprendre une vieille copie du cache HTTP.
      Promise.allSettled(STATIC.map(url => c.add(new Request(url, { cache: 'reload' })).catch(() => {})))
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

function putInCache(req, res) {
  if (!res || res.status !== 200) return;
  const copy = res.clone();
  caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
}

// Pages : réseau d'abord, pour qu'une mise en ligne soit visible dès le chargement suivant
// sans avoir à changer le nom du cache. Le cache ne sert qu'hors ligne ou si le réseau traîne.
// Le code de l'app (query.js, query.css) suit la même règle : la page et son code doivent
// toujours être de la même version, sinon une page neuve tournerait avec un vieux script.
function pageStrategy(req, isPage) {
  const cached = () =>
    caches.match(req, { ignoreSearch: true }).then(hit => hit || (isPage ? caches.match('/import.html') : undefined));
  // cache:'no-cache' = revalidation auprès du serveur, pour ne pas reprendre une copie périmée du cache HTTP.
  const network = fetch(isPage ? req : new Request(req.url, { cache: 'no-cache' }))
    .then(res => { putInCache(req, res); return res; });
  const timeout = new Promise(resolve => setTimeout(resolve, PAGE_TIMEOUT_MS));
  return Promise.race([network, timeout.then(cached)])
    .then(res => res || network)   // rien en cache : on attend le réseau
    .catch(() => cached());        // réseau en échec : cache
}

// Fichiers du site (scripts, icônes, manifeste) : réponse immédiate depuis le cache,
// rafraîchie en arrière-plan pour le chargement suivant.
function staleWhileRevalidate(req) {
  return caches.match(req).then(hit => {
    const network = fetch(req).then(res => { putInCache(req, res); return res; });
    if (hit) { network.catch(() => {}); return hit; }
    return network;
  });
}

// Ressources externes (polices, bibliothèques à URL versionnée) : cache d'abord.
function cacheFirst(req) {
  return caches.match(req).then(hit =>
    hit || fetch(req).then(res => { putInCache(req, res); return res; })
  );
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(pageStrategy(req, true));
  } else if (url.origin === self.location.origin && (req.destination === 'script' || req.destination === 'style')) {
    e.respondWith(pageStrategy(req, false));
  } else if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req));
  } else {
    e.respondWith(cacheFirst(req));
  }
});
