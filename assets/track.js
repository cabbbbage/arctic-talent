/* Arctic Talent – Fathom-konversiot
   Tapahtumat syntyvät Fathomiin automaattisesti ensimmäisestä klikkauksesta.
   Nimen voi ohittaa yksittäiselle linkille: <a data-event="Oma nimi" ...> */
(function () {
  function eventName(a) {
    if (a.dataset.event) return a.dataset.event;
    var href = a.getAttribute('href') || '';
    var path = location.pathname;
    var page = path === '/' ? 'Etusivu' : (path.indexOf('/next-chapter') === 0 ? 'Next Chapter' : 'Muu sivu');
    if (href.indexOf('tel:') === 0) return 'Puhelu (' + page + ')';
    if (href.indexOf('mailto:') === 0) {
      var subject = decodeURIComponent((href.split('subject=')[1] || '')).toLowerCase();
      if (subject.indexOf('yhteistyö') > -1) return 'Sähköposti: yhteistyö';
      if (subject.indexOf('next chapter') > -1) return 'Sähköposti: Next Chapter -tutustuminen';
      return 'Sähköposti (' + page + ')';
    }
    if (page === 'Etusivu' && href.indexOf('/next-chapter/') === 0) return 'Etusivulta Next Chapteriin';
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var name = eventName(a);
    if (name && window.fathom && typeof window.fathom.trackEvent === 'function') {
      window.fathom.trackEvent(name);
    }
  });
})();
