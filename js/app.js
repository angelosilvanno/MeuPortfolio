document.addEventListener('DOMContentLoaded', () => {
    // --- Seleção de Elementos ---
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const welcomeSection = document.getElementById('welcome'); // Recuperado
    const menuLinks = document.querySelectorAll('#menu a[href^="#"], #mobile-menu a[href^="#"]');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const currentYearSpan = document.getElementById('current-year');
    const contactForm = document.getElementById('contactForm');
    
    // --- Configurações ---
    const HEADER_SCROLL_THRESHOLD = 50;
    const SCROLL_TOP_THRESHOLD = 300;
    const THROTTLE_DELAY = 100;
    const DEBOUNCE_DELAY = 200;

    // --- Funções Utilitárias ---
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

    // --- Lógica do Menu Mobile (Restaurada) ---
    const toggleMobileMenu = () => {
        // Alterna a classe hidden
        const isHidden = mobileMenu.classList.toggle('hidden');
        const icon = menuToggle.querySelector('i');
        
        // Troca o ícone (Hamburger <-> X)
        if (icon) {
            icon.classList.toggle('fa-bars', isHidden);
            icon.classList.toggle('fa-times', !isHidden);
        }
        
        // Acessibilidade
        menuToggle.setAttribute('aria-expanded', !isHidden);

        // Lógica de "Empurrar o conteúdo" restaurada
        if (!isHidden && welcomeSection) {
            const menuHeight = mobileMenu.scrollHeight; // Pega a altura real do menu
            welcomeSection.style.marginTop = `${menuHeight}px`;
            welcomeSection.style.transition = 'margin-top 0.3s ease-in-out'; // Adicionei uma transição suave
        } else if (welcomeSection) {
            welcomeSection.style.marginTop = '0px';
        }
    };

    const closeMobileMenu = () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            
            // Reseta ícone
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
            menuToggle.setAttribute('aria-expanded', 'false');

            // Reseta a margem (traz o conteúdo de volta pro topo)
            if (welcomeSection) {
                welcomeSection.style.marginTop = '0px';
            }
        }
    };

    // --- Manipulação do Header e Scroll ---
    const handleHeaderScroll = () => {
        if (window.scrollY > HEADER_SCROLL_THRESHOLD) {
            header.classList.add('shadow-md', 'bg-white/95');
            header.classList.remove('bg-white/90');
        } else {
            header.classList.remove('shadow-md', 'bg-white/95');
            header.classList.add('bg-white/90');
        }
    };

    const handleScrollTopButton = () => {
        if (!scrollToTopBtn) return;
        if (window.scrollY > SCROLL_TOP_THRESHOLD) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
    };
    
    // --- Navegação Suave ---
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            // Fecha o menu antes de rolar
            closeMobileMenu();

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // --- Formulário de Contato ---
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const submitButton = document.getElementById('submitButton');
        const successMessage = document.getElementById('success-message');
        const originalBtnText = submitButton.innerHTML;
        
        if(successMessage) successMessage.classList.add('hidden');

        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 2) {
            alert("Por favor, insira um nome válido.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
        
        const allowedDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'live.com', 'uol.com.br', 'bol.com.br', 'proton.me'];
        const emailDomain = email.split('@')[1];

        if (!allowedDomains.includes(emailDomain)) {
            const confirmDomain = confirm("Este provedor de e-mail não é comum. Deseja enviar mesmo assim?");
            if(!confirmDomain) return;
        }

        if (message.length < 10) {
            alert("Sua mensagem precisa ser um pouco mais detalhada (mínimo 10 caracteres).");
            return;
        }

        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                if(successMessage) successMessage.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => {
                    if(successMessage) successMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Falha no envio.');
            }
        } catch (error) {
            alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
        } finally {
            submitButton.innerHTML = originalBtnText;
            submitButton.disabled = false;
        }
    };

    // --- Event Listeners ---
    
    // Botão do Menu Mobile (Agora controlando o empurrão do conteúdo)
    if (menuToggle) {
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

    // Fecha o menu ao redimensionar para Desktop
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    }, DEBOUNCE_DELAY));

    // --- ScrollReveal ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom', distance: '30px', duration: 1000, delay: 200, reset: false,
        });

        sr.reveal('#welcome h1, #welcome p', { origin: 'left', interval: 100 });
        sr.reveal('#welcome img', { origin: 'right', delay: 400 });
        sr.reveal('.section-title', { origin: 'top' });
        sr.reveal('#services .grid > div', { interval: 150 });
        sr.reveal('#projects .grid > div', { interval: 150 });
        sr.reveal('#skills .grid > div', { interval: 100 });
        sr.reveal('#contact .bg-blue-50', { delay: 200 });
    }

    handleHeaderScroll();
});