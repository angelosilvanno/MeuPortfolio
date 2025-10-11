document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

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
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    successMessage.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    throw new Error('Falha no envio do formulário.');
                }
            } catch (error) {
                errorMessage.querySelector('span').textContent = "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.";
                errorMessage.classList.remove('hidden');
            } finally {
                buttonText.classList.remove('hidden');
                buttonSpinner.classList.add('hidden');
                submitButton.disabled = false;
            }
        });
    }

    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '40px',
            duration: 1000,
            delay: 200,
            reset: false,
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
});