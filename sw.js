const cacheName = 'restaurant-review';

const staticList = [
  '/',
  '/restaurant.html',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
]

const responsiveSizes = [270, 540];

for (let i = 1; i <= 10; i++) {
  staticList.push(`/img/${i}.jpg`);
  const responsiveImages = responsiveSizes.map(size => `/img/responsive/${i}-${size}.jpg`);
  staticList.push.apply(staticList, responsiveImages);
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(staticList);
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
