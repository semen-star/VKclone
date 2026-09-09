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

  const postDescription = document.querySelector('.wall-text p');
  if (postDescription) {
    postDescription.textContent = 'Недавно побывали на ULD. Очень понравилось — всё круто, особенно компания друзей!';
  }

  const infoLine = document.querySelector('.profile-name-row .info-line');
  if (infoLine) {
    let profileDescription = document.querySelector('.profile-description');
    if (!profileDescription) {
      profileDescription = document.createElement('p');
      profileDescription.className = 'profile-description';
      infoLine.insertAdjacentElement('afterend', profileDescription);
    }
    profileDescription.textContent = 'Без цели, Без плана, Без конечного пункта назначения';
  }

  const communities = [
    { name: 'Кафедра мемологии МГТУ им. Г.И. Носова', url: 'https://vk.ru/mgtu_mem' },
    { name: 'Информационная безопасность МГТУ им. Г.И.Носова', url: 'https://vk.ru/informationsecurity_nmstu' },
    { name: 'Институт энергетики и автоматизированных систем', url: 'https://vk.ru/ieias_mgtu' }
  ];

  document.querySelectorAll('.sub-list li').forEach((item, index) => {
    const community = communities[index];
    if (!community) return;
    const oldName = item.querySelector(':scope > span');
    if (!oldName) return;
    const link = document.createElement('a');
    link.href = community.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = community.name;
    link.title = community.name;
    oldName.replaceWith(link);
  });

  const responsiveStyle = document.createElement('style');
  responsiveStyle.textContent = `
    .profile-top{flex-wrap:wrap;}
    .profile-name-row{min-width:0;}
    .profile-description{margin:8px 0 0;color:var(--text-secondary);font-size:13.5px;line-height:1.45;overflow-wrap:anywhere;}
    .sub-list a{min-width:0;color:var(--link);font-size:13.5px;font-weight:600;line-height:1.3;text-decoration:none;overflow-wrap:anywhere;}
    .sub-list a:hover{text-decoration:underline;}
    @media (max-width:1180px){
      .page{grid-template-columns:190px minmax(0,1fr) 280px;gap:12px;padding:0 12px;}
      .profile-top{padding-left:16px;padding-right:16px;}
      .avatar{width:140px;height:140px;}
      .profile-actions{width:100%;padding-top:0;margin-left:156px;}
    }
    @media (max-width:900px){
      .page{grid-template-columns:180px minmax(0,1fr);max-width:900px;}
      .right-col,.stories-col{display:none;}
      .profile-name-row{flex:1 1 300px;}
      .profile-actions{margin-left:0;}
    }
    @media (max-width:760px){
      .page{width:100%;max-width:none;grid-template-columns:minmax(0,1fr);margin:10px auto;padding:0 8px;}
      .profile-card,.wall-post{width:100%;}
      .cover{height:clamp(150px,38vw,250px);}
      .profile-top{align-items:flex-start;gap:10px;padding:0 12px 12px;margin-top:-48px;}
      .avatar{width:96px;height:96px;border-width:3px;}
      .avatar-plus{width:24px;height:24px;right:0;bottom:0;}
      .profile-name-row{flex:1 1 calc(100% - 108px);padding-top:50px;}
      .name-line h1{font-size:20px;}
      .player-row{flex-wrap:wrap;gap:6px;}
      .player-track{flex:1 1 90px;width:auto;min-width:70px;}
      .info-line{gap:8px;}
      .profile-actions{width:100%;display:flex;flex-wrap:wrap;padding-top:0;margin-left:0;}
      .btn-primary{flex:1 1 auto;min-width:0;}
      .content-tabs{padding:0 8px;}
      .photo-grid img{height:clamp(90px,28vw,170px);}
      .post-photo img{max-height:none;height:auto;}
      .comment-foot{flex-wrap:wrap;}
    }
    @media (max-width:430px){
      .topbar{gap:8px;padding:0 8px;}
      .search{padding:7px 9px;}
      .topbar-icons .tb-icon{display:none;}
      .tb-user svg{display:none;}
      .profile-top{margin-top:-38px;}
      .avatar{width:76px;height:76px;}
      .profile-name-row{flex-basis:calc(100% - 86px);padding-top:42px;}
      .name-line h1{font-size:18px;}
      .player-row svg{display:none;}
      .profile-description{font-size:13px;}
      .profile-actions .btn-primary{width:100%;flex-basis:100%;}
      .btn-icon,.btn-more{flex:1;}
    }
  `;
  document.head.appendChild(responsiveStyle);
})();
