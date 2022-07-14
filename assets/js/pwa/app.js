---
layout: compress
permalink: '/app.js'
---

<<<<<<< HEAD
/* Registering Service Worker */
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('{{ "/sw.js" | relative_url }}');
};
=======
const $notification = $('#notification');
const $btnRefresh = $('#notification .toast-body>button');

if ('serviceWorker' in navigator) {
  /* Registering Service Worker */
  navigator.serviceWorker.register('{{ "/sw.js" | relative_url }}')
    .then(registration => {

      /* in case the user ignores the notification */
      if (registration.waiting) {
        $notification.toast('show');
      }

      registration.addEventListener('updatefound', () => {
        registration.installing.addEventListener('statechange', () => {
          if (registration.waiting) {
            if (navigator.serviceWorker.controller) {
              $notification.toast('show');
            }
          }
        });
      });

      $btnRefresh.click(() => {
        if (registration.waiting) {
          registration.waiting.postMessage('SKIP_WAITING');
        }
        $notification.toast('hide');
      });
    }
  );

  let refreshing = false;

  /* Detect controller change and refresh all the opened tabs */
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      window.location.reload();
      refreshing = true;
    }
  });
}
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
