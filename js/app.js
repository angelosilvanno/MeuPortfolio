document.addEventListener('DOMContentLoaded', () => {
    // Seleção de Elementos
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    // Seleciona links do menu desktop e mobile
    const menuLinks = document.querySelectorAll('#menu a[href^="#"], #mobile-menu a[href^="#"]');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const currentYearSpan = document.getElementById('current-year');
    const contactForm = document.getElementById('contactForm');
    
    // Constantes de Configuração
    const HEADER_SCROLL_THRESHOLD = 50;
    const SCROLL_TOP_THRESHOLD = 300;
    const THROTTLE_DELAY = 100;
    const DEBOUNCE_DELAY = 200;

    // Funções Utilitárias (Throttle e Debounce para performance)
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

    // Manipula a aparência do Header ao rolar
    const handleHeaderScroll = () => {
        if (window.scrollY > HEADER_SCROLL_THRESHOLD) {
            header.classList.add('shadow-md', 'bg-white/95'); // Mais opaco ao rolar
            header.classList.remove('bg-white/90');
        } else {
            header.classList.remove('shadow-md', 'bg-white/95');
            header.classList.add('bg-white/90');
        }
    };

    // Manipula a visibilidade do botão "Voltar ao topo"
    const handleScrollTopButton = () => {
        if (!scrollToTopBtn) return;
        
        if (window.scrollY > SCROLL_TOP_THRESHOLD) {
            // Remove as classes que escondem o botão
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            // Adiciona as classes que escondem o botão
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
    };
    
    // Rolagem suave ao clicar nos links
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

            // Se o menu mobile estiver aberto (controlado pelo Alpine ou classe), fecha ele
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                // Aqui despachamos um evento para o Alpine fechar o menu, se necessário
                // Ou apenas removemos a classe se estiver usando JS puro
                if(menuToggle) menuToggle.dispatchEvent(new Event('click')); 
            }
        }
    };

    // Lógica do Formulário de Contato
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const submitButton = document.getElementById('submitButton');
        const successMessage = document.getElementById('success-message');
        
        // Texto original do botão
        const originalBtnText = submitButton.innerHTML;
        
        // Reset de mensagens
        if(successMessage) successMessage.classList.add('hidden');

        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validações Básicas
        if (name.length < 2) {
            alert("Por favor, insira um nome válido.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
        
        // Validação de domínios (opcional, mantida do seu código)
        const allowedDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'live.com', 'uol.com.br', 'bol.com.br', 'proton.me'];
        const emailDomain = email.split('@')[1];

        if (!allowedDomains.includes(emailDomain)) {
            // Aviso mais suave, ou remova se quiser aceitar e-mails corporativos
            const confirmDomain = confirm("Este provedor de e-mail não é comum. Deseja enviar mesmo assim?");
            if(!confirmDomain) return;
        }

        if (message.length < 10) {
            alert("Sua mensagem precisa ser um pouco mais detalhada (mínimo 10 caracteres).");
            return;
        }

        // Estado de "Enviando..."
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
            // Restaura o botão
            submitButton.innerHTML = originalBtnText;
            submitButton.disabled = false;
        }
    };

    // Event Listeners
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

    // Scroll Events
    window.addEventListener('scroll', throttle(() => {
        handleHeaderScroll();
        if (scrollToTopBtn) handleScrollTopButton();
    }, THROTTLE_DELAY));

    // Resize Event (Fecha menu ao redimensionar pra desktop)
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth >= 768) {
            // Se estiver usando Alpine no HTML, o JS aqui é só preventivo
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                 // Lógica segura para fechar
            }
        }
    }, DEBOUNCE_DELAY));

    // Inicialização do ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom', distance: '30px', duration: 1000, delay: 200, reset: false,
        });

        sr.reveal('#welcome h1, #welcome p', { origin: 'left', interval: 100 });
        sr.reveal('#welcome img', { origin: 'right', delay: 400 });
        sr.reveal('.section-title', { origin: 'top' });
        
        // Animação para os Grids (Serviços e Projetos)
        sr.reveal('#services .grid > div', { interval: 150 });
        sr.reveal('#projects .grid > div', { interval: 150 });
        
        // Animação para as Skills (agora separadas em grupos)
        sr.reveal('#skills .grid > div', { interval: 100 });
        
        // Animação Contato
        sr.reveal('#contact .bg-blue-50', { delay: 200 });
    }

    // Executa verificação inicial do header
    handleHeaderScroll();
});