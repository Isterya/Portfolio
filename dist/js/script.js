document.addEventListener('DOMContentLoaded', () => {
   const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      linkStyle = document.querySelectorAll('.sidepanel__link svg path'),
      textMenu = document.querySelectorAll('.sidepanel__text span'),
      menuDivider = document.querySelectorAll('.sidepanel__divider');

   const handleScroll = () => {
      const yOffset = window.pageYOffset;

      linkStyle.forEach((el) => {
         el.style.fill = yOffset >= 500 ? 'black' : '';
      });

      textMenu.forEach((el) => {
         el.style.color = yOffset >= 300 ? 'black' : '';
      });

      menuDivider.forEach((el) => {
         el.style.backgroundColor = yOffset >= 400 ? 'black' : '';
      });
   };

   const closeMenu = () => {
      menu.classList.remove('active');
   };

   hamburger.addEventListener('click', () => {
      menu.classList.add('active');
   });

   closeElem.addEventListener('click', closeMenu);
   overlay.addEventListener('click', closeMenu);

   document.addEventListener('scroll', () => {
      requestAnimationFrame(handleScroll);
   });
});
