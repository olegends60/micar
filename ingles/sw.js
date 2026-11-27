// Service Worker de "Talk with Jake": la app funciona sin internet después de la primera visita.
// (El reconocimiento de voz de Chrome sí necesita internet.)
// Cambia el número cada vez que subas cambios para que los celulares los reciban.
const CACHE_NAME = 'ingles-jake-v27';
const APP_SHELL = ['./', 'index.html', 'data.js', 'extra.js', 'course.js', 'more.js', 'words.js', 'ai.js', 'texting.js', 'groserias.js', 'explain.js', 'fun.js', 'songs2.js', 'context.js', 'zero.js', 'street.js', 'integrate.js', 'manifest.json', 'icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('ingles-jake-') && k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero internet (para recibir cambios) y, sin internet, la copia guardada.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        if (res && res.status === 200 && new URL(event.request.url).origin === location.origin) {
          const copia = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, copia));
        }
        return res;
      })
      .catch(() => caches.match(event.request).then((r) => r || caches.match('index.html')))
  );
});
