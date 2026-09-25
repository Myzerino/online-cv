(() => {
 document.documentElement.classList.add('js');
 const menu = document.querySelector('.menu-toggle');
 const nav = document.querySelector('#navigation');
 menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
 nav.addEventListener('click', event => { if (event.target.closest('a')) { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); } });
 document.addEventListener('keydown', event => { if(event.key === 'Escape' && nav.classList.contains('open')) { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); menu.focus(); } });
 document.querySelector('#year').textContent = new Date().getFullYear();
 // Keep the reader at the same section when switching languages.
 document.querySelectorAll('.language-switch a').forEach(link => {
   link.addEventListener('click', () => {
     try {
       localStorage.setItem('marcio-language', link.hreflang === 'pt-PT' ? 'pt' : 'en');
     } catch (_) { /* Navigation still works when storage is unavailable. */ }
     const target = new URL(link.href);
     target.hash = window.location.hash;
     link.href = target.href;
   });
 });
})();
