document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu?.querySelectorAll('a') || [];
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const currentYearSpan = document.getElementById('current-year');
    const header = document.querySelector('header');
    const MESSAGE_TIMEOUT = 5000;
    const MOBILE_BREAKPOINT = 768;
    let menuTimeout;

    const closeMenu = () => {
        menu?.classList.add('hidden');
        menu?.classList.remove('active');
        menuToggle?.classList.remove('active');
        clearTimeout(menuTimeout);
    };

    const scrollToSection = (targetId) => {
        const targetElement = document.querySelector(targetId);
        if (targetElement && header) {
            const headerOffset = header.offsetHeight || 0;
            const elementPosition = targetElement.offsetTop - headerOffset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        } else if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        }
    };

    const checkScreenSize = () => {
        if (!menu || !menuToggle) return;
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            menu.classList.remove('hidden', 'active');
            menuToggle.classList.remove('active');
            menu.style.display = '';
        } else if (!menu.classList.contains('active')) {
            menu.classList.add('hidden');
        }
    };

    const showStatusMessage = (message, isError) => {
        if (!successMessage) return;
        successMessage.textContent = message;
        successMessage.classList.remove('hidden');
        successMessage.classList.toggle('bg-green-500', !isError);
        successMessage.classList.toggle('bg-red-500', isError);
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, MESSAGE_TIMEOUT);
    };

    const updateCopyrightYear = () => {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

    menuToggle?.addEventListener('click', () => {
        if (!menu) return;
        const isActive = menu.classList.toggle('active');
        menu.classList.toggle('hidden', !isActive);
        menuToggle.classList.toggle('active', isActive);
        clearTimeout(menuTimeout);
        if (isActive) {
            menuTimeout = setTimeout(closeMenu, MESSAGE_TIMEOUT);
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                closeMenu();
                scrollToSection(href);
            }
        });
    });

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    contactForm?.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showStatusMessage('Formulário enviado com sucesso!', false);
                contactForm.reset();
            } else {
                response.json().then(data => {
                    const errorMessage = data?.errors?.map(err => err.message).join(', ') || 'Ocorreu um erro ao enviar.';
                    showStatusMessage(`Erro: ${errorMessage}`, true);
                }).catch(() => {
                     showStatusMessage('Erro ao processar a resposta do servidor.', true);
                });
            }
        })
        .catch(error => {
            console.error('Erro na requisição fetch:', error);
            showStatusMessage('Erro de rede ao tentar enviar o formulário.', true);
        });
    });

    updateCopyrightYear();

});