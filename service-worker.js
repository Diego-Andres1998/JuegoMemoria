const CACHE_NAME = 'memoria-cft-cache-v1';
const urlsToCache = [
  './', // Caches the root (index.html)
  'index.html',
  'script.js',
  'styles.css',
  'images/ic_card_back.png',
  'images/ic_pair_1.png',
  'images/ic_pair_2.png',
  'images/ic_pair_3.png',
  'images/ic_pair_4.png',
  'images/ic_pair_5.png',
  'images/ic_pair_6.png',
  'images/ic_pair_7.png',
  'images/ic_pair_8.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});