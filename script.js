(function () {
  'use strict';

  const burger = document.getElementById('burgerBtn');
  const sidebar = document.getElementById('leftCol');
  const overlay = document.getElementById('overlay');

  if (!burger || !sidebar || !overlay) return;

  function setMenu(open) {
    sidebar.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  }

  burger.addEventListener('click', function () {
    setMenu(!sidebar.classList.contains('is-open'));
  });

  overlay.addEventListener('click', function () {
    setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) setMenu(false);
  });
})();
