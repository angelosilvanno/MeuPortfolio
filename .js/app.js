document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu ? menu.querySelectorAll('a') : [];
    let menuTimeout;
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    function closeMenu() {
        if (menu) {
            menu.classList.add('hidden');
            menu.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
        clearTimeout(menuTimeout);
    }

    function scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = targetElement.offsetTop - headerOffset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    }

    function checkScreenSize() {
        if (!menu || !menuToggle) return;

        if (window.innerWidth >= 768) {
            menu.classList.remove('hidden', 'active');
            menuToggle.classList.remove('active');
        } else if (!menuToggle.classList.contains('active')) {
            menu.classList.add('hidden');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            if (!menu) return;
            menu.classList.toggle('hidden');
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            clearTimeout(menuTimeout);

            if (menu.classList.contains('active')) {
                menuTimeout = setTimeout(closeMenu, 5000);
            }
        });
    }

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

    // **Adaptação para simulação de envio do formulário**
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Simula um envio bem-sucedido
            successMessage.textContent = 'Formulário enviado com sucesso!';
            successMessage.classList.remove('hidden');
            successMessage.classList.add('bg-green-500');
            successMessage.classList.remove('bg-red-500');
            contactForm.reset(); // Limpa os campos do formulário

            // Oculta a mensagem após alguns segundos
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);


        });
    }
});