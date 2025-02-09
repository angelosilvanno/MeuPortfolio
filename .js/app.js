document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');
    let menuTimeout;
  
    function closeMenu() {
      menu.classList.add('hidden');
      menu.classList.remove('active');
      menuToggle.classList.remove('active');
      clearTimeout(menuTimeout);
    }
  
    function scrollToSection(targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  
    function checkScreenSize() {
      if (window.innerWidth >= 768) {
        menu.classList.remove('hidden', 'active');
        menuToggle.classList.remove('active');
      } else if (!menuToggle.classList.contains('active')) {
        menu.classList.add('hidden');
      }
    }
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('hidden');
      menu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      clearTimeout(menuTimeout);
  
      if (menu.classList.contains('active')) {
        menuTimeout = setTimeout(closeMenu, 5000);
      }
    });
  
    menuLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        closeMenu();
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
      });
    });
  
    checkScreenSize();
  
    window.addEventListener('resize', checkScreenSize);
});