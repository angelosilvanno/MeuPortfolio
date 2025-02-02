document.getElementById('contactForm').addEventListener('submit', function (event) {
    document.getElementById('success-message').classList.remove('hidden');
    setTimeout(function () {
        document.getElementById('success-message').classList.add('hidden');
    }, 5000);
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');
    let menuTimeout;

    function closeMenu() {
        menu.classList.add('hidden');
        menu.classList.remove('active');
        clearTimeout(menuTimeout);
    }

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        menu.classList.toggle('active');
        clearTimeout(menuTimeout);

        if (menu.classList.contains('active')) {
            menuTimeout = setTimeout(closeMenu, 5000);
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            closeMenu();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

     const desktopMenuLinks = document.querySelectorAll('#menu li a');
       desktopMenuLinks.forEach(link => {
           link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        })
      })
});