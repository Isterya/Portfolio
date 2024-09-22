document.addEventListener('DOMContentLoaded', () => {
   // Menu
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

   // Interactive scroll
   const linkStyle = document.querySelectorAll('.sidepanel__link svg path'),
      textMenu = document.querySelectorAll('.sidepanel__text span'),
      menuDivider = document.querySelectorAll('.sidepanel__divider');

   const handleScroll = () => {
      const yOffset = window.pageYOffset;

      linkStyle.forEach((el) => {
         el.style.fill = yOffset >= 500 ? 'black' : '';
      });

      textMenu.forEach((el) => {
         el.style.color = yOffset >= 340 ? 'black' : '';
      });

      menuDivider.forEach((el) => {
         el.style.backgroundColor = yOffset >= 400 ? 'black' : '';
      });
   };

   document.addEventListener('scroll', () => {
      requestAnimationFrame(handleScroll);
   });

   // Automatic calculation of percentages
   const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

   const animateLines = (entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const index = Array.from(lines).indexOf(entry.target);
            let width = parseInt(counters[index].innerHTML);

            width = width < 0 ? 0 : width > 100 ? 100 : width;

            entry.target.style.width = width + '%';
            entry.target.style.transition = 'width 2s ease';

            observer.unobserve(entry.target);
         }
      });
   };

   const observer = new IntersectionObserver(animateLines, {
      threshold: 0.5,
   });

   // Отслеживаем все линии
   lines.forEach((line) => {
      line.style.width = '0';
      observer.observe(line);
   });

   // Forms
   const form = document.getElementById('contactForm');

   form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch('mailer/smart.php', {
         method: 'POST',
         body: formData,
      })
         .then((response) => response.text())
         .then((result) => {
            console.log('Success:', result);
            form.reset();
         })
         .catch((error) => {
            console.error('Error:', error);
         });
   });
});
