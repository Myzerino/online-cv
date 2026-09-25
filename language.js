(() => {
  // Only the neutral entry point negotiates language; direct links always win.
  if (!window.location.pathname.endsWith('/') && !window.location.pathname.endsWith('/index.html')) return;
  let preferred;
  try { preferred = localStorage.getItem('marcio-language'); } catch (_) {}
  const browserLanguage = navigator.languages?.[0] || navigator.language || 'en';
  const language = ['pt', 'en'].includes(preferred)
    ? preferred
    : (/^pt(?:-|$)/i.test(browserLanguage) ? 'pt' : 'en');
  const target = new URL(language === 'pt' ? 'pt.html' : 'en.html', window.location.href);
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();
