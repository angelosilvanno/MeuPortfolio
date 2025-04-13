document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const currentYearSpan = document.getElementById('current-year');
    const header = document.querySelector('header');

    const MESSAGE_TIMEOUT = 5000;
    const MOBILE_BREAKPOINT = 768;
    let menuTimeout;

    // Fecha o menu mobile
    const closeMenu = () => {
        menu.classList.add('hidden');
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
        clearTimeout(menuTimeout);
    };

    // Scroll suave para seções
    const scrollToSection = (targetId) => {
        const target = document.querySelector(targetId);
        if (!target) return;

        const offset = header?.offsetHeight || 0;
        const position = target.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

    // Responsividade do menu
    const checkScreenSize = () => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            menu.classList.remove('hidden', 'active');
            menuToggle.classList.remove('active');
            menu.style.display = '';
        } else if (!menu.classList.contains('active')) {
            menu.classList.add('hidden');
        }
    };

    // Mensagem de status do formulário
    const showStatusMessage = (message, isError = false) => {
        if (!successMessage) return;

        successMessage.textContent = message;
        successMessage.classList.remove('hidden');
        successMessage.classList.toggle('bg-green-500', !isError);
        successMessage.classList.toggle('bg-red-500', isError);

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, MESSAGE_TIMEOUT);
    };

    // Atualiza o ano no footer
    const updateCopyrightYear = () => {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

    // Toggle do menu mobile
    menuToggle.addEventListener('click', () => {
        const isActive = menu.classList.toggle('active');
        menu.classList.toggle('hidden', !isActive);
        menuToggle.classList.toggle('active', isActive);

        clearTimeout(menuTimeout);
        if (isActive) {
            menuTimeout = setTimeout(closeMenu, MESSAGE_TIMEOUT);
        }
    });

    // Navegação interna
    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                scrollToSection(href);
            }
        });
    });

    // Envio do formulário
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(res => {
            if (res.ok) {
                showStatusMessage('Formulário enviado com sucesso!');
                contactForm.reset();
            } else {
                return res.json().then(data => {
                    const msg = data?.errors?.map(err => err.message).join(', ') || 'Erro ao enviar.';
                    showStatusMessage(`Erro: ${msg}`, true);
                });
            }
        })
        .catch(err => {
            console.error('Erro na requisição:', err);
            showStatusMessage('Erro de rede ao tentar enviar o formulário.', true);
        });
    });

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    updateCopyrightYear();
});
