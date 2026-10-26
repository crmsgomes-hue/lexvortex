// Endereço antigo: substitui a versão guardada e reencaminha para a CG VERTEX.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => { if (e.request.mode === 'navigate') e.respondWith(Response.redirect('https://crmsgomes-hue.github.io/cg-vertex/', 302)); });
