/* Arctic Talent – mobiilivalikko */
(function () {
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.nav-toggle');
  if (!button) return;
  var label = button.querySelector('.nav-toggle-label');
  var mq = window.matchMedia('(max-width: 900px)');

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    label.textContent = open ? 'Sulje' : 'Valikko';
  }

  button.addEventListener('click', function () {
    setOpen(!header.classList.contains('is-open'));
  });
  Array.prototype.forEach.call(header.querySelectorAll('.nav a'), function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      setOpen(false);
      button.focus();
    }
  });
  var onChange = function (e) { if (!e.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
})();
