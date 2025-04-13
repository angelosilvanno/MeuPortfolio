document.addEventListener('DOMContentLoaded', () => {
    // Variáveis
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const currentYearSpan = document.getElementById('current-year');
    const header = document.querySelector('header');
    const mobileMenu = document.getElementById('mobile-menu'); 

    const TIMEOUT = 5000;
    const MOBILE_BREAKPOINT = 768;

    // Funções auxiliares
    const closeMenu = () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    };

    const scrollToSection = (targetId) => {
        const target = document.querySelector(targetId);
        if (!target) return;
        const offset = header?.offsetHeight || 0;
        const position = target.offsetTop - offset;

        window.scrollTo({ top: position, behavior: 'smooth' });
    };

    const checkScreenSize = () => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            mobileMenu.classList.remove('hidden');
        } else if (!mobileMenu.classList.contains('active')) {
            mobileMenu.classList.add('hidden');
        }
    };

    const showStatusMessage = (message, isError = false) => {
        if (!successMessage) return;
        successMessage.textContent = message;
        successMessage.className = `mt-4 p-2 rounded text-white ${isError ? 'bg-red-500' : 'bg-green-500'}`;
        successMessage.classList.remove('hidden');

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, TIMEOUT);
    };

    const updateYear = () => {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

    // Eventos
    menuToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        mobileMenu.classList.toggle('hidden', !isActive);
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                scrollToSection(href);
            }
        });
    });

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
            .catch(() => {
                showStatusMessage('Erro de rede ao tentar enviar o formulário.', true);
            });
    });

    // Inicialização
    updateYear();
    checkScreenSize();

    // Event listener para redimensionamento da tela
    window.addEventListener('resize', checkScreenSize);
});
