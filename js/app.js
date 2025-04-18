document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const currentYearSpan = document.getElementById('current-year');
    const submitButton = document.getElementById('submitButton');
    const buttonText = document.getElementById('buttonText');
    const buttonSpinner = document.getElementById('buttonSpinner');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const header = document.querySelector('header');
    const welcomeSection = document.getElementById('welcome');

    // --- Constantes ---
    const TIMEOUT = 5000;
    const MOBILE_BREAKPOINT = 768; // Ponto de quebra para mobile (Tailwind md: 768px)

    // --- Funções auxiliares ---

    // Função para ajustar a margem superior da seção welcome
    const adjustWelcomeMargin = () => {
        if (!welcomeSection || !mobileMenu || !header) return;

        // Verifica se estamos em visualização mobile E se o menu está aberto
        if (window.innerWidth < MOBILE_BREAKPOINT && !mobileMenu.classList.contains('hidden')) {
            const menuHeight = mobileMenu.offsetHeight;
            welcomeSection.style.marginTop = `${menuHeight}px`;
            welcomeSection.style.transition = 'margin-top 0.3s ease-in-out'; // Transição suave (opcional)
        } else {
            // Remove a margem se estiver no desktop ou se o menu estiver fechado
            welcomeSection.style.marginTop = '0px';
        }
    };

    // closeMenu agora também chama adjustWelcomeMargin
    const closeMenu = () => {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');

        // Reseta o ícone do botão para 'bars'
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        adjustWelcomeMargin(); // Ajusta a margem após fechar
    };

    // Função scrollToSection
    const scrollToSection = (targetId) => {
        const target = document.querySelector(targetId);
        if (!target) return;

        const headerHeight = header?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const position = targetPosition - headerHeight;

        window.scrollTo({ top: position, behavior: 'smooth' });
    };

    // checkScreenSize agora também chama adjustWelcomeMargin
    const checkScreenSize = () => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            closeMenu();
        } else {
            adjustWelcomeMargin();
             // Garante que o menu esteja escondido se não estiver ativo
             if (!mobileMenu.classList.contains('active')) {
                mobileMenu.classList.add('hidden');
            }
        }
    };

    // Função showStatusMessage
    const showStatusMessage = (message, isError = false) => {
        if (!successMessage || !errorMessage) return;

        const messageDiv = isError ? errorMessage : successMessage;
        const otherDiv = isError ? successMessage : errorMessage;

        messageDiv.textContent = message;
        messageDiv.classList.remove('hidden');
        otherDiv.classList.add('hidden');

        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, TIMEOUT);
    };

    // Função updateYear
    const updateYear = () => {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

    // Função validateForm
    const validateForm = (formData) => {
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        if (!name || name.length < 2) {
            showStatusMessage('Nome inválido. Mínimo 2 caracteres.', true);
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showStatusMessage('E-mail inválido.', true);
            return false;
        }
        if (!message || message.length < 5) {
            showStatusMessage('Mensagem muito curta.', true);
            return false;
        }
        successMessage?.classList.add('hidden');
        errorMessage?.classList.add('hidden');
        return true;
    };

    // --- Event Listeners ---

    // Listener do menuToggle agora chama adjustWelcomeMargin
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('hidden', !isActive);
            const icon = menuToggle.querySelector('i');

            if (mobileMenu.classList.contains('hidden')) {
                icon?.classList.remove('fa-times');
                icon?.classList.add('fa-bars');
            } else {
                icon?.classList.remove('fa-bars');
                icon?.classList.add('fa-times');
            }
            adjustWelcomeMargin(); // Ajusta a margem após abrir/fechar
        });
    } else {
        console.error("Menu toggle ou mobile menu não encontrado.");
    }

    // Listener dos links do menu - closeMenu já ajusta a margem
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                closeMenu(); // Fecha o menu E ajusta a margem
                // Pequeno delay para garantir que a margem foi removida antes de calcular a posição
                setTimeout(() => {
                    scrollToSection(href);
                }, 50); // 50ms de delay
            }
        });
    });

    // Listener do formulário
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            if (!validateForm(formData)) return;

            buttonText.classList.add('hidden');
            buttonSpinner.classList.remove('hidden');
            submitButton.disabled = true;
            successMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');

            const object = {};
            formData.forEach((value, key) => { object[key] = value; });
            const json = JSON.stringify(object);

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: json,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    successMessage.textContent = "Mensagem enviada com sucesso! Obrigado por entrar em contato. Retornarei em breve.";
                    successMessage.classList.remove('hidden');
                    contactForm.reset();
                    window.scrollTo({ top: contactForm.offsetTop - 150, behavior: 'smooth' });
                } else {
                    const data = await response.json().catch(() => ({}));
                    const errorText = data.errors ? data.errors.map(error => error.message).join(", ") : "Ocorreu um erro ao enviar. Tente novamente.";
                    errorMessage.textContent = errorText;
                    errorMessage.classList.remove('hidden');
                    window.scrollTo({ top: contactForm.offsetTop - 150, behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Erro no envio:', error);
                errorMessage.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';
                errorMessage.classList.remove('hidden');
                window.scrollTo({ top: contactForm.offsetTop - 150, behavior: 'smooth' });
            } finally {
                buttonText.classList.remove('hidden');
                buttonSpinner.classList.add('hidden');
                submitButton.disabled = false;
            }
        });
    }

    // Listener do scroll para o botão "Voltar ao Topo"
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Listener de resize
    window.addEventListener('resize', checkScreenSize);

    // --- Inicialização ---
    updateYear();
    checkScreenSize();
    adjustWelcomeMargin(); // Garante que a margem inicial esteja correta (0px)

});

// --- Código Preloader ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
});
window.addEventListener('beforeunload', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.remove('fade-out');
    }
});