(function(){
  'use strict';
  // По ТЗ функциональность кнопок/меню/форм не требуется.
  // Единственное исключение — раскрытие бокового меню на мобильных,
  // это часть адаптивной вёрстки, а не функциональность интерфейса ВК.

  const burgerBtn = document.getElementById('burgerBtn');
  const leftCol = document.getElementById('leftCol');
  const overlay = document.getElementById('overlay');

  if (!burgerBtn || !leftCol || !overlay) return;

  function close(){
    leftCol.classList.remove('is-open');
    overlay.classList.remove('is-open');
  }
  function open(){
    leftCol.classList.add('is-open');
    overlay.classList.add('is-open');
  }

  burgerBtn.addEventListener('click', () => {
    leftCol.classList.contains('is-open') ? close() : open();
  });
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
