/* Notifications push — à charger depuis sw.js avec :  importScripts("push-handler.js");  */

self.addEventListener("push", (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; }
  catch (e) { d = { body: event.data ? event.data.text() : "" }; }
  const title = d.title || "Excellence Medical Group";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: d.body || "",
      icon: d.icon || "icon-192.png",
      badge: "icon-192.png",
      tag: d.tag || undefined,
      renotify: !!d.tag,
      data: { url: d.url || "./" }
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const cible = new URL((event.notification.data && event.notification.data.url) || "./", self.registration.scope);
  event.waitUntil((async () => {
    const fenetres = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of fenetres) {
      if (c.url.startsWith(self.registration.scope)) {
        await c.focus();
        c.postMessage({ type: "push-nav", p: cible.searchParams.get("p"), s: cible.searchParams.get("s") });
        return;
      }
    }
    await clients.openWindow(cible.href);
  })());
});
