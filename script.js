(function(){
  'use strict';

  const burgerBtn = document.getElementById('burgerBtn');
  const leftCol = document.getElementById('leftCol');
  const overlay = document.getElementById('overlay');

  if (burgerBtn && leftCol && overlay) {
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
  }

  // Используем изображения из репозитория вместо внешних заглушек.
  const avatar = 'images/ava.webp';
  const background = 'images/background.webp';
  const post = 'images/post.webp';

  document.querySelectorAll('.cover img').forEach((img) => {
    img.src = background;
    img.alt = 'Фоновое изображение профиля';
  });

  document.querySelectorAll('.avatar, .tb-user img, .comment-input-row > img, .own-comment-row img').forEach((img) => {
    img.src = avatar;
    if (!img.alt) img.alt = 'Семён Стариков';
  });

  document.querySelectorAll('.post-photo img').forEach((img) => {
    img.src = post;
    img.alt = 'Фото публикации';
  });

  // Описание публикации.
  const postDescription = document.querySelector('.wall-text p');
  if (postDescription) {
    postDescription.textContent = 'Недавно побывали на ULD. Очень понравилось — всё круто, особенно компания друзей!';
  }
})();
