document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu?.querySelectorAll('a') || [];
    let menuTimeout;
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    const closeMenu = () => {
        menu?.classList.add('hidden');
        menu?.classList.remove('active');
        menuToggle?.classList.remove('active');
        clearTimeout(menuTimeout);
    };

    const scrollToSection = (targetId) => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = targetElement.offsetTop - headerOffset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    };

    const checkScreenSize = () => {
        if (!menu || !menuToggle) return;

        if (window.innerWidth >= 768) {
            menu.classList.remove('hidden', 'active');
            menuToggle.classList.remove('active');
        } else if (!menuToggle.classList.contains('active')) {
            menu.classList.add('hidden');
        }
    };

    menuToggle?.addEventListener('click', () => {
        if (!menu) return;
        menu.classList.toggle('hidden');
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        clearTimeout(menuTimeout);

        if (menu.classList.contains('active')) {
            menuTimeout = setTimeout(closeMenu, 5000);
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            closeMenu();
            scrollToSection(link.getAttribute('href'));
        });
    });

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    contactForm?.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('https://formspree.io/f/xpwpwprz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    successMessage.textContent = 'Formulário enviado com sucesso!';
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('bg-green-500');
                    successMessage.classList.remove('bg-red-500');
                    contactForm.reset();
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                    }, 5000);
                } else {
                    successMessage.textContent = 'Erro ao enviar o formulário.';
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('bg-red-500');
                    successMessage.classList.remove('bg-green-500');
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                    }, 5000);
                }
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                successMessage.textContent = 'Erro ao enviar o formulário.';
                successMessage.classList.remove('hidden');
                successMessage.classList.add('bg-red-500');
                successMessage.classList.remove('bg-green-500');
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            });
    });
});