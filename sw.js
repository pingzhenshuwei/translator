// 最簡單的 Service Worker：不做任何離線快取，純粹只是讓瀏覽器判定
// 這個網站符合「可安裝成 PWA」的條件（部分瀏覽器版本會檢查是否有註冊
// Service Worker），不影響網站原本的行為，每次請求都直接照常向網路要資料。

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // 不做任何快取攔截，直接照常讓瀏覽器處理原本的請求
  return;
});
