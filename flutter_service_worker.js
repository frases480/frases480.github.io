'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f8b497c842a044629b824c0ef09c93de",
"/": "f8b497c842a044629b824c0ef09c93de",
"main.dart.js": "7ba4c32d178cd9be2ff7a59449523a4f",
"favicon.png": "74e8812f970ef08da32d79b44363729d",
"icons/Icon-192.png": "4ed3230a4fba4884692b2c1b63744f2e",
"icons/Icon-512.png": "f27461162451c6bd88e36dda4c5a3c5f",
"manifest.json": "31f3dfd8e53f95f107530498183c8cbf",
"assets/LICENSE": "c218ddde7461222e360c6c3eb230b2f6",
"assets/AssetManifest.json": "41df06e53acb1914dcd9a91134b5bbf5",
"assets/secrets.json": "237b3f01d6d02e46ffb3d6eb046d4fb7",
"assets/ios/Flutter/App.framework/flutter_assets/secrets.json": "237b3f01d6d02e46ffb3d6eb046d4fb7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
