document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('#menu a[href^="#"], #mobile-menu a[href^="#"]');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const currentYearSpan = document.getElementById('current-year');
    const contactForm = document.getElementById('contactForm');
    const welcomeSection = document.getElementById('welcome');

    const HEADER_SCROLL_THRESHOLD = 50;
    const SCROLL_TOP_THRESHOLD = 300;
    const THROTTLE_DELAY = 100;
    const DEBOUNCE_DELAY = 200;
    const MENU_TIMEOUT_DURATION = 5000;

    let menuTimeout;

    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const handleHeaderScroll = () => {
        if (window.scrollY > HEADER_SCROLL_THRESHOLD) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    const handleScrollTopButton = () => {
        if (window.scrollY > SCROLL_TOP_THRESHOLD) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };
    
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (!mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        }
    };
    
    const toggleMobileMenu = () => {
        clearTimeout(menuTimeout);
        const isHidden = mobileMenu.classList.toggle('hidden');
        const icon = menuToggle.querySelector('i');
        
        if (icon) {
            icon.classList.toggle('fa-bars', isHidden);
            icon.classList.toggle('fa-times', !isHidden);
        }
        
        menuToggle.setAttribute('aria-expanded', !isHidden);

        if (!isHidden) {
            const menuHeight = mobileMenu.offsetHeight;
            welcomeSection.style.marginTop = `${menuHeight}px`;
            menuTimeout = setTimeout(closeMobileMenu, MENU_TIMEOUT_DURATION);
        } else {
            welcomeSection.style.marginTop = '0px';
        }
    };

    const closeMobileMenu = () => {
        clearTimeout(menuTimeout);
        mobileMenu.classList.add('hidden');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
        menuToggle.setAttribute('aria-expanded', 'false');
        welcomeSection.style.marginTop = '0px';
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const submitButton = document.getElementById('submitButton');
        const buttonText = document.getElementById('buttonText');
        const buttonSpinner = document.getElementById('buttonSpinner');
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');

        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 2) {
            errorMessage.querySelector('span').textContent = "Por favor, insira um nome válido (mínimo 2 caracteres).";
            errorMessage.classList.remove('hidden');
            return;
        }

        if (!emailRegex.test(email)) {
            errorMessage.querySelector('span').textContent = "Por favor, insira um endereço de e-mail válido.";
            errorMessage.classList.remove('hidden');
            return;
        }
        
        const allowedDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'live.com', 'uol.com.br', 'bol.com.br'];
        const emailDomain = email.split('@')[1];

        if (!allowedDomains.includes(emailDomain)) {
            errorMessage.querySelector('span').textContent = "Por favor, utilize um provedor de e-mail conhecido (Ex: Gmail, Outlook).";
            errorMessage.classList.remove('hidden');
            return;
        }

        if (message.length < 10) {
            errorMessage.querySelector('span').textContent = "Sua mensagem precisa ter pelo menos 10 caracteres.";
            errorMessage.classList.remove('hidden');
            return;
        }

        buttonText.classList.add('hidden');
        buttonSpinner.classList.remove('hidden');
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                successMessage.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => successMessage.classList.add('hidden'), 5000);
            } else {
                throw new Error('Falha no envio.');
            }
        } catch (error) {
            errorMessage.querySelector('span').textContent = "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
            errorMessage.classList.remove('hidden');
            setTimeout(() => errorMessage.classList.add('hidden'), 5000);
        } finally {
            buttonText.classList.remove('hidden');
            buttonSpinner.classList.add('hidden');
            submitButton.disabled = false;
        }
    };

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    window.addEventListener('scroll', throttle(() => {
        handleHeaderScroll();
        if (scrollToTopBtn) handleScrollTopButton();
    }, THROTTLE_DELAY));

    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    }, DEBOUNCE_DELAY));

    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom', distance: '40px', duration: 1000, delay: 200, reset: false,
        });

        sr.reveal('#welcome h1, #welcome .text-lg, #welcome .text-xl', { origin: 'left' });
        sr.reveal('#welcome .gap-3, #welcome .gap-4, #welcome .gap-x-6', { origin: 'left', delay: 400 });
        sr.reveal('#welcome .flex-shrink-0', { origin: 'right', duration: 1200 });
        sr.reveal('.section-title');
        sr.reveal('#about > div', { origin: 'left' });
        sr.reveal('#services .grid > div', { interval: 150 });
        sr.reveal('#projects .grid > div', { interval: 150 });
        sr.reveal('#skills .grid > div', { interval: 100 });
        sr.reveal('#contact form > div, #contact form > button', { interval: 150 });
    }

    handleHeaderScroll();
});