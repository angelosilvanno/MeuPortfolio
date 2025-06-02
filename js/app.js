document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('#mobile-menu a, header nav #menu a[href^="#"]');
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

    const TIMEOUT = 5000;
    const MOBILE_BREAKPOINT = 768;
    const SCROLL_OFFSET_PADDING = 20;
    const DEBOUNCE_DELAY = 250;
    const THROTTLE_LIMIT = 200;

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    const adjustWelcomeMargin = () => {
        if (!welcomeSection || !mobileMenu || !header) return;
        if (window.innerWidth < MOBILE_BREAKPOINT && mobileMenu.classList.contains('active')) {
            const menuHeight = mobileMenu.offsetHeight;
            welcomeSection.style.marginTop = `${menuHeight}px`;
        } else {
            welcomeSection.style.marginTop = '0px';
        }
    };

    const closeMenu = () => {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');

        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        adjustWelcomeMargin();
    };

    const scrollToSection = (targetId) => {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        const headerHeight = header?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const position = targetPosition - headerHeight - SCROLL_OFFSET_PADDING;

        window.scrollTo({ top: position, behavior: 'smooth' });
    };

    const checkScreenSize = () => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            closeMenu();
        } else {
            if (!mobileMenu.classList.contains('active')) {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
            adjustWelcomeMargin();
        }
    };

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

    const updateYear = () => {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

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

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('hidden', !isActive);
            menuToggle.classList.toggle('active', isActive);
            menuToggle.setAttribute('aria-expanded', isActive.toString());
            mobileMenu.setAttribute('aria-hidden', (!isActive).toString());

            const icon = menuToggle.querySelector('i');
            if (isActive) {
                icon?.classList.remove('fa-bars');
                icon?.classList.add('fa-times');
            } else {
                icon?.classList.remove('fa-times');
                icon?.classList.add('fa-bars');
            }
            adjustWelcomeMargin();
        });
    } else {
        console.error("Menu toggle ou mobile menu não encontrado.");
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                if (window.innerWidth < MOBILE_BREAKPOINT && mobileMenu.classList.contains('active')) {
                    closeMenu();
                    setTimeout(() => scrollToSection(href), 50);
                } else {
                    scrollToSection(href);
                }
            }
        });
    });

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
            
            const headerHeightForScroll = header?.offsetHeight || 0;
            const formScrollOffset = headerHeightForScroll + SCROLL_OFFSET_PADDING;

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: json,
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
                });

                if (response.ok) {
                    successMessage.textContent = "Mensagem enviada com sucesso! Obrigado por entrar em contato. Retornarei em breve.";
                    successMessage.classList.remove('hidden');
                    contactForm.reset();
                    window.scrollTo({ top: successMessage.offsetTop - formScrollOffset, behavior: 'smooth' });
                } else {
                    const data = await response.json().catch(() => ({}));
                    const errorText = data.errors ? data.errors.map(error => error.message).join(", ") : "Ocorreu um erro ao enviar. Tente novamente.";
                    errorMessage.textContent = errorText;
                    errorMessage.classList.remove('hidden');
                    window.scrollTo({ top: errorMessage.offsetTop - formScrollOffset, behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Erro no envio:', error);
                errorMessage.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';
                errorMessage.classList.remove('hidden');
                window.scrollTo({ top: errorMessage.offsetTop - formScrollOffset, behavior: 'smooth' });
            } finally {
                buttonText.classList.remove('hidden');
                buttonSpinner.classList.add('hidden');
                submitButton.disabled = false;
            }
        });
    }

    if (scrollToTopBtn) {
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, THROTTLE_LIMIT));

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener('resize', debounce(checkScreenSize, DEBOUNCE_DELAY));

    updateYear();
    checkScreenSize();
    if (menuToggle && mobileMenu) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
});

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