// ===== Scroll reveal animations =====
(function () {
  var reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        // small stagger for grouped items
        var delay = entry.target.dataset.delay || (i % 4) * 90;
        setTimeout(function () { entry.target.classList.add('in'); }, delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  reveals.forEach(function (el) { io.observe(el); });
})();

// ===== Stagger dish cards & gallery within their row =====
(function () {
  function stagger(selector) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      el.dataset.delay = (i % 4) * 110;
    });
  }
  stagger('.dish-card');
  stagger('.g-item');
  stagger('.review-card');
})();

// ===== Sticky header shadow =====
(function () {
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ===== Full menu modal =====
(function () {
  var modal = document.getElementById('menuModal');
  var openBtn = document.getElementById('openMenu');
  if (!modal || !openBtn) return;

  function open() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }
  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  openBtn.addEventListener('click', open);
  modal.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
})();

// ===== Mobile nav toggle =====
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); });
  });
})();
