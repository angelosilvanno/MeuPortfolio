document.addEventListener('DOMContentLoaded', () => {
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

    const TIMEOUT = 5000;
    const MOBILE_BREAKPOINT = 768;

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
        return true;
    };

    menuToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        mobileMenu.classList.toggle('hidden', !isActive);
        const icon = menuToggle.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                scrollToSection(href);
            }
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    contactForm?.addEventListener('submit', async (e) => {
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
                successMessage.classList.remove('hidden');
                contactForm.reset();
                window.scrollTo({ top: contactForm.offsetTop - 100, behavior: 'smooth' });
            } else {
                const data = await response.json();
                errorMessage.textContent = data.errors ? data.errors.map(error => error.message).join(", ") : "Ocorreu um erro ao enviar.";
                errorMessage.classList.remove('hidden');
                window.scrollTo({ top: contactForm.offsetTop - 100, behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Erro no envio:', error);
            errorMessage.textContent = 'Erro de conexão. Verifique sua internet.';
            errorMessage.classList.remove('hidden');
            window.scrollTo({ top: contactForm.offsetTop - 100, behavior: 'smooth' });
        } finally {
            buttonText.classList.remove('hidden');
            buttonSpinner.classList.add('hidden');
            submitButton.disabled = false;
        }
    });

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

    updateYear();
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
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