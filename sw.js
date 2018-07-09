var cacheName = 'restaurant-review';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/restaurant.html',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg ',
        '/img/2.jpg ',
        '/img/3.jpg ',
        '/img/4.jpg ',
        '/img/5.jpg ',
        '/img/6.jpg ',
        '/img/7.jpg ',
        '/img/8.jpg ',
        '/img/9.jpg ',
        '/img/10.jpg ',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
        'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true})
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
