document.addEventListener('DOMContentLoaded', () => {
   const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

   const closeMenu = () => {
      menu.classList.remove('active');
   };

   hamburger.addEventListener('click', () => {
      menu.classList.add('active');
   });

   closeElem.addEventListener('click', closeMenu);
   overlay.addEventListener('click', closeMenu);
});
