document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a') || [];
    const contactForm = document.getElementById('contactForm');
    const successMessageDiv = document.getElementById('success-message');
    const errorMessageDiv = document.getElementById('error-message');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const currentYearSpan = document.getElementById('current-year');

    let menuTimeout;

    const closeMenu = () => {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        clearTimeout(menuTimeout);
    };

    const openMenu = () => {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('active');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        clearTimeout(menuTimeout);
        menuTimeout = setTimeout(closeMenu, 5000);
    }

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
        if (!mobileMenu || !menuToggle) return;
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    };

    const handleScroll = () => {
         if (scrollToTopBtn) {
             if (window.pageYOffset > 300) {
                 scrollToTopBtn.classList.remove('opacity-0');
                 scrollToTopBtn.classList.add('opacity-100');
             } else {
                 scrollToTopBtn.classList.remove('opacity-100');
                 scrollToTopBtn.classList.add('opacity-0');
             }
         }
     };

    const updateFooterYear = () => {
        if (currentYearSpan) {
             currentYearSpan.textContent = new Date().getFullYear();
         }
    }

    menuToggle?.addEventListener('click', () => {
        if (mobileMenu?.classList.contains('hidden')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    mobileMenuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                closeMenu();
                scrollToSection(href);
            }
        });
    });

    window.addEventListener('resize', checkScreenSize);

    window.addEventListener('scroll', handleScroll);

    contactForm?.addEventListener('submit', async function (event) {
        event.preventDefault();

        successMessageDiv?.classList.add('hidden');
        errorMessageDiv?.classList.add('hidden');

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : 'Enviar Mensagem';
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
        }

        const formData = new FormData(contactForm);
        const object = {};
        formData.forEach((value, key) => { object[key] = value });
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
                if(successMessageDiv) {
                    successMessageDiv.classList.remove('hidden');
                }
                contactForm.reset();
                setTimeout(() => {
                    successMessageDiv?.classList.add('hidden');
                }, 5000);
            } else {
                 const data = await response.json().catch(() => ({}));
                 const errorText = data?.error || 'Ocorreu um erro ao enviar. Tente novamente.';
                if(errorMessageDiv) {
                    const span = errorMessageDiv.querySelector('span');
                    if (span) span.textContent = errorText;
                    errorMessageDiv.classList.remove('hidden');
                 }
                setTimeout(() => {
                    errorMessageDiv?.classList.add('hidden');
                }, 5000);
            }
        } catch (error) {
            console.error('Erro de rede ao enviar o formulário:', error);
            if(errorMessageDiv) {
                 const span = errorMessageDiv.querySelector('span');
                 if (span) span.textContent = 'Erro de conexão. Verifique sua internet.';
                 errorMessageDiv.classList.remove('hidden');
            }
            setTimeout(() => {
                errorMessageDiv?.classList.add('hidden');
            }, 5000);
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
    });

    updateFooterYear();
    checkScreenSize();
    handleScroll();

});