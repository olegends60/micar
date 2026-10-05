// Service Worker para "Venta de jabon micar"
// Permite que la app funcione sin internet / sin datos móviles después de la primera visita.
//
// IMPORTANTE: este archivo debe subirse al mismo lugar (misma carpeta) que index.html y
// manifest.json, y debe registrarse como 'sw.js' (una URL normal), nunca como blob:,
// porque Chrome rechaza explícitamente registrar Service Workers desde blob: URLs.

const CACHE_NAME = 'pos-micar-v1';

// Archivos base de la app que se guardan de inmediato al instalar el Service Worker.
const APP_SHELL = [
  './',
  'index.html',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Estrategia: responder desde la caché de inmediato (rápido y funciona sin internet),
// y en paralelo ir a la red para actualizar la caché para la próxima vez.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchAndUpdate = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copia = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchAndUpdate;
    })
  );
});
