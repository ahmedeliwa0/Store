/* مجرد ملف خدمة بسيط علشان المتصفح يعتبر الموقع تطبيق قابل للتثبيت. مفيش تخزين مؤقت، فالتحديثات بتوصل دايماً. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
