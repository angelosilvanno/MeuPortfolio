document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');
    let menuTimeout;
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');


    function closeMenu() {
        menu.classList.add('hidden');
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
        clearTimeout(menuTimeout);
    }

    function scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight; // Altura do cabeçalho
            const elementPosition = targetElement.offsetTop - headerOffset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    }

    function checkScreenSize() {
        if (window.innerWidth >= 768) {
            menu.classList.remove('hidden', 'active');
            menuToggle.classList.remove('active');
        } else if (!menuToggle.classList.contains('active')) {
            menu.classList.add('hidden');
        }
    }

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        clearTimeout(menuTimeout);

        if (menu.classList.contains('active')) {
            menuTimeout = setTimeout(closeMenu, 5000);
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            closeMenu();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    // **Adaptação para o envio do formulário com fetch**
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Coleta os dados do formulário
        const formData = new FormData(contactForm);

        // Envia os dados usando fetch
        fetch('processar_formulario.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar o formulário: ' + response.status);
                }
                return response.text();
            })
            .then(data => {
                // Exibe a mensagem de sucesso ou erro
                successMessage.textContent = data;
                successMessage.classList.remove('hidden');

                // Limpa o formulário (opcional)
                contactForm.reset();

                // Oculta a mensagem após alguns segundos (opcional)
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000); // Oculta após 5 segundos
            })
            .catch(error => {
                console.error('Erro:', error);
                successMessage.textContent = 'Oops! Algo deu errado e não pudemos enviar sua mensagem.';
                successMessage.classList.remove('hidden');
            });
    });
});