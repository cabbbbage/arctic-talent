/* Arctic Talent – scroll reveal (ei kirjastoja) */
(function () {
  var root = document.documentElement;
  window.__revealReady = true;
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('reveal-off');
    return;
  }
  var selectors = [
    '.hero-copy > *', '.horizon', '.hero-bottom',
    '.next-hero .intro > div',
    '.section-top', '.section > .eyebrow', '.intro > *',
    '.strategy-words > div', '.question-grid > article', '.partner-steps > div',
    '.process > div', '.process li', '.session-detail', '.outcome', '.package-price',
    '.bio-reflection', '.invest', '.confidential', '.experience-strip',
    '.quiet-note', '.section > .text-link'
  ].join(',');
  var els = Array.prototype.slice.call(document.querySelectorAll(selectors));
  els.forEach(function (el) {
    el.classList.add('reveal');
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) {
      return c.matches(selectors);
    });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.transitionDelay = Math.min(i, 5) * 90 + 'ms';
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
  root.classList.add('reveal-ready');
})();
