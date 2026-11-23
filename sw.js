// Service Worker para "Venta de jabon micar"
// Permite que la app funcione sin internet / sin datos móviles después de la primera visita.
//
// IMPORTANTE: este archivo debe subirse al mismo lugar (misma carpeta) que index.html y
// manifest.json, y debe registrarse como 'sw.js' (una URL normal), nunca como blob:,
// porque Chrome rechaza explícitamente registrar Service Workers desde blob: URLs.

// Cambia este número cada vez que subas una versión nueva de index.html para que los celulares la reciban.
const CACHE_NAME = 'pos-micar-v6';

// Archivos base de la app que se guardan de inmediato al instalar el Service Worker.
// IMPORTANTE: si alguno de estos nombres no coincide EXACTO con el archivo subido
// (mayúsculas/minúsculas, guiones, extensión), falla la instalación completa del
// Service Worker y el modo sin conexión no queda activado.
// Archivos obligatorios (si falta uno, no se activa el modo sin conexión).
const APP_SHELL = [
  './',
  'index.html',
  'manifest.json'
];

// Íconos opcionales: si todavía no están subidos, NO deben tumbar la instalación.
const ICONOS_OPCIONALES = [
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'favicon-32.png',
  'favicon-16.png',
  'icon-maskable-192.png',
  'icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL).then(() =>
        Promise.all(ICONOS_OPCIONALES.map((url) => cache.add(url).catch(() => null)))
      ))
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

  // La página principal: primero internet (para recibir cambios al momento) y, sin internet, la copia guardada.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copia = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((r) => r || caches.match('index.html')))
    );
    return;
  }

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
