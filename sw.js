/* Service worker. This is the part that makes it work with no signal.
 *
 * Bump CACHE when you change any file, or phones keep serving the old one.
 */
var CACHE = "learn-english-v2";

var ASSETS = [
  "./",
  "index.html",
  "content.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-192.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png",
  "favicon.png",
  "cover.jpg"
];

self.addEventListener("install", function (ev) {
  ev.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (a) {
        return c.add(a).catch(function () { /* one missing asset must not fail the install */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (ev) {
  if (ev.request.method !== "GET") return;

  /* Network first so an edit reaches the phone, cache as the fallback so
     the lesson still opens on a train. */
  ev.respondWith(
    fetch(ev.request).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(ev.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(ev.request).then(function (hit) {
        return hit || caches.match("index.html");
      });
    })
  );
});
