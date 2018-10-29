importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "quanon.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d43c9b7f1da170af1eb6.js",
    "revision": "0d393755ed5d86111087f66ab968f7be"
  },
  {
    "url": "/_nuxt/layouts/default.bbf37e093b4f2e62e49a.js",
    "revision": "48a0dfcf852cac06229fdd346d7b49a2"
  },
  {
    "url": "/_nuxt/manifest.78bf3871c8f868723431.js",
    "revision": "5844fded2e391ec5086b9d6c1c1e191a"
  },
  {
    "url": "/_nuxt/pages/index.773606f0105264e99d50.js",
    "revision": "c67225d551b577980e7bf9f8372dea01"
  },
  {
    "url": "/_nuxt/vendor.00bddac802bc0134e2fd.js",
    "revision": "4c00876c5fc747278752776027ae9ad0"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

