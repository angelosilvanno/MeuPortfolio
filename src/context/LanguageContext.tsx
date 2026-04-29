import React, { createContext, useState, useContext } from 'react';

type Language = 'pt' | 'en';

type TranslationValue = string | string[] | { [key: string]: TranslationValue };

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t: (path: string, ...args: (string | number)[]) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, TranslationValue>> = {
    pt: {
        nav: { about: "Sobre", projects: "Projetos", skills: "Habilidades", contact: "Contato" },
        hero: {
            badge: "Disponível para novos projetos",
            role_1: "Desenvolvedor",
            role_2: "Full Stack.",
            description: "Eu construo aplicações web completas, focadas em performance, escalabilidade e na experiência real do usuário.",
            buttonMain: "Iniciar um projeto",
            buttonSecondary: "Ver projetos"
        },
        about: {
            title: "Sobre Mim",
            para1: "Sou um Desenvolvedor Full Stack apaixonado por construir aplicações web escaláveis e de alta performance. Com {0} anos de experiência no ecossistema Front-End e sólida formação em Tecnologia da Informação pela UFERSA, hoje domino o ciclo completo de desenvolvimento utilizando Node.js, TypeScript e React.",
            para2: "Minha vivência com Qualidade de Software moldou um diferencial técnico raro: aplico normas rigorosas de usabilidade e manutenibilidade (como a ISO/IEC 25010) em todo código que escrevo.",
            para3: "Após entregar soluções reais para laboratórios de inovação (Projeto Carcará - LISA) e otimizar performances para clientes (CraftSix), meu foco atual é unir interfaces intuitivas com arquiteturas sólidas, limpas e seguras.",
            certificationsTitle: "Certificações",
            cert1: "Front-end em React",
            cert2: "JavaScript: O Guia Completo",
            cert3: "NLW Connect Fullstack",
            cert4: "Imersão com Google Gemini"
        },
        services: {
            title: "Serviços",
            serv1: { title: "Desenvolvimento Web", desc: "Desenvolvo sites rápidos e modernos, com navegação fácil em qualquer dispositivo." },
            serv2: { title: "Loja Virtual", desc: "Monto sua loja virtual com vitrine, carrinho e pagamentos, pronta pra vender 24h por dia." },
            serv3: { title: "Manutenção", desc: "Deixo seu site sempre seguro, atualizado e funcionando bem, sem preocupações para você." },
            button: "Vamos conversar sobre seu projeto?"
        },
        experience: {
            title: "Experiência",
            exp1: {
                title: "Desenvolvedor Front-End | Bolsista",
                sub: "Projeto Carcará | LISA - UFERSA",
                date: "Fev/2025 — Ago/2025",
                desc: [
                    "Desenvolvi a nova interface do site institucional utilizando tecnologias modernas.",
                    "Reestruturei a navegação e organização das páginas para melhor clareza e usabilidade.",
                    "Trabalhei em conjunto com a equipe participando das definições e entregas por etapa."
                ]
            },
            exp2: {
                title: "Monitor de Disciplina | Apoio Acadêmico",
                sub: "Qualidade de Software | UFERSA",
                date: "Jul/2024 — Nov/2024",
                desc: [
                    "Auxiliei o professor na correção de atividades e avaliações da disciplina.",
                    "Apoiei alunos na resolução de dúvidas sobre os conteúdos trabalhados em sala.",
                    "Reforcei conceitos práticos de usabilidade e manutenibilidade de software."
                ]
            },
            exp3: {
                title: "Desenvolvedor Front-End | Freelancer",
                sub: "CraftSix",
                date: "Dez/2023 — Fev/2024",
                desc: [
                    "Desenvolvi interfaces web e landing pages voltadas à apresentação de serviços.",
                    "Estruturei layouts responsivos com foco em clareza visual e organização das informações.",
                    "Implementei componentes modernos priorizando a performance e a experiência do usuário."
                ]
            }
        },
        projects: {
            title: "Meus Projetos",
            viewProject: "Ver Projeto",
            proj1: {
                title: "AchadosCampus",
                desc: "Desenvolvi o AchadosCampus para centralizar a recuperação de objetos no ambiente universitário. O sistema conecta alunos e servidores de forma ágil, substituindo murais físicos e grupos de mensagens por uma plataforma organizada e segura.",
                items: ["Filtros inteligentes por categoria e local do achado.", "Integração em tempo real para busca de pertences."]
            },
            proj2: {
                title: "FootCoder",
                desc: "Criei esta loja de camisetas de futebol com o foco em simular um fluxo de compra real e completo. O objetivo foi garantir uma experiência intuitiva para o torcedor que busca praticidade na escolha do seu manto.",
                items: ["Catálogo organizado com visualização clara dos produtos.", "Carrinho de compras funcional para gerenciamento dinâmico."]
            },
            proj3: {
                title: "Lógica Quiz",
                desc: "Um jogo educativo voltado para o estudo de Matemática Discreta, focado em tornar o aprendizado de lógica proposicional mais prático. A ideia é transformar um conteúdo denso em algo interativo e acessível.",
                items: ["Feedback instantâneo para reforço imediato do aprendizado.", "Sistema de pontuação e progressão com elementos de jogo."]
            },
            proj4: {
                title: "Coffee Delivery",
                desc: "Landing page de um serviço de entrega de café, com foco em um design limpo e um processo de escolha rápido para o cliente. O projeto prioriza a facilidade de navegação para converter visitas em pedidos.",
                items: ["Cardápio visual imersivo com fotografias detalhadas.", "Fluxo de adição ao carrinho e checkout simplificado."]
            },
            proj5: {
                title: "RunTech",
                desc: "O RunTech é um e-commerce que criei focado em quem pratica corrida, garantindo uma experiência de compra completa e fluida. O design foi pensado para passar energia e confiança ao atleta.",
                items: ["Fluxo completo desde a escolha no catálogo até o checkout.", "Filtros por categoria e sistema de busca dinâmica eficiente."]
            },
            proj6: {
                title: "O Show do Código",
                desc: "Quiz inspirado no clássico \"Show do Milhão\", focado em testar conhecimentos técnicos de programação de um jeito lúdico. É uma forma divertida de desafiar o que aprendemos no dia a dia do desenvolvimento.",
                items: ["Trilhas variadas cobrindo temas de Frontend e Backend.", "Mecânicas imersivas com efeitos de áudio e temporizador."]
            },
            githubBtn: "Veja mais no GitHub"
        },
        skills: {
            title: "Hard Skills",
            subtitle: "FRONTEND / BACKEND / FERRAMENTAS / NUVEM / METODOLOGIAS"
        },
        contact: {
            title: "Vamos Conversar?",
            availability: "Disponibilidade",
            statusText: "Aberto a novos projetos",
            emailLabel: "E-mail",
            whatsappLabel: "WhatsApp",
            formTitle: "Envie uma mensagem",
            labels: { name: "Seu Nome", email: "Seu E-mail", message: "Sua Mensagem" },
            placeholders: { name: "Como te chamam?", email: "seu@email.com", message: "No que eu posso te ajudar hoje?" },
            button: "Enviar Proposta"
        }
    },
    en: {
        nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
        hero: {
            badge: "Available for new projects",
            role_1: "Full Stack",
            role_2: "Developer.",
            description: "I build complete web applications, focusing on performance, scalability, and real user experience.",
            buttonMain: "Start a project",
            buttonSecondary: "View projects"
        },
        about: {
            title: "About Me",
            para1: "I am a Full Stack Developer passionate about building scalable, high-performance web applications. With {0} years of experience in the Front-End ecosystem and a solid background in IT from UFERSA, I now master the full development cycle using Node.js, TypeScript and React.",
            para2: "My experience with Software Quality has shaped a rare technical differentiator: I apply rigorous usability and maintainability standards (such as ISO/IEC 25010) to every code I write.",
            para3: "After delivering real solutions for innovation labs (Project Carcará - LISA) and optimizing performance for clients (CraftSix), my current focus is uniting intuitive interfaces with solid, clean and secure architectures.",
            certificationsTitle: "Certifications",
            cert1: "Front-end in React",
            cert2: "JavaScript: The Complete Guide",
            cert3: "NLW Connect Fullstack",
            cert4: "Immersion with Google Gemini"
        },
        services: {
            title: "Services",
            serv1: { title: "Web Development", desc: "I develop fast and modern websites with easy navigation on any device." },
            serv2: { title: "Online Store", desc: "I build your online store with a showcase, cart, and payments, ready to sell 24/7." },
            serv3: { title: "Maintenance", desc: "I keep your site secure, updated, and running smoothly, without worries for you." },
            button: "Let's talk about your project?"
        },
        experience: {
            title: "Experience",
            exp1: {
                title: "Front-End Developer | Scholarship Holder",
                sub: "Carcará Project | LISA - UFERSA",
                date: "Feb/2025 — Aug/2025",
                desc: [
                    "Developed the new institutional website interface using modern technologies.",
                    "Restructured navigation and page organization for better clarity and usability.",
                    "Worked within a team participating in stage definitions and deliveries."
                ]
            },
            exp2: {
                title: "Teaching Assistant | Academic Support",
                sub: "Software Quality | UFERSA",
                date: "Jul/2024 — Nov/2024",
                desc: [
                    "Assisted the professor in grading activities and course evaluations.",
                    "Supported students in resolving doubts regarding classroom content.",
                    "Reinforced practical concepts of software usability and maintainability."
                ]
            },
            exp3: {
                title: "Front-End Developer | Freelancer",
                sub: "CraftSix",
                date: "Dec/2023 — Feb/2024",
                desc: [
                    "Developed web interfaces and landing pages for service presentation.",
                    "Structured responsive layouts focusing on visual clarity and information organization.",
                    "Implemented modern components prioritizing performance and user experience."
                ]
            }
        },
        projects: {
            title: "My Projects",
            viewProject: "View Project",
            proj1: {
                title: "AchadosCampus",
                desc: "Developed AchadosCampus to centralize object recovery in the university environment. The system connects students and staff quickly, replacing physical boards and message groups with an organized and secure platform.",
                items: ["Smart filters by category and location.", "Real-time integration for belongings search."]
            },
            proj2: {
                title: "FootCoder",
                desc: "Created this football jersey store focused on simulating a real and complete purchase flow. The goal was to ensure an intuitive experience for fans seeking practicality when choosing their jersey.",
                items: ["Organized catalog with clear product visualization.", "Functional cart for dynamic management."]
            },
            proj3: {
                title: "Logic Quiz",
                desc: "An educational game for Discrete Mathematics study, focused on making propositional logic learning more practical. The idea is to transform dense content into something interactive and accessible.",
                items: ["Instant feedback for immediate learning reinforcement.", "Scoring and progression system with game elements."]
            },
            proj4: {
                title: "Coffee Delivery",
                desc: "Landing page for a coffee delivery service, focusing on clean design and a fast process for customers to choose and order. The project prioritizes ease of navigation to convert visits into orders.",
                items: ["Immersive visual menu with detailed photography.", "Simplified add-to-cart and checkout flow."]
            },
            proj5: {
                title: "RunTech",
                desc: "An e-commerce I created focused on runners, ensuring a complete and fluid shopping experience. The design was thought to convey energy and confidence to the athlete.",
                items: ["Complete flow from catalog selection to checkout.", "Category filters and efficient dynamic search system."]
            },
            proj6: {
                title: "The Code Show",
                desc: "Quiz inspired by the classic 'Who Wants to Be a Millionaire', focused on testing technical programming knowledge in a fun way. It's a fun way to challenge what we learn in daily development.",
                items: ["Various tracks covering Frontend and Backend themes.", "Immersive mechanics with audio effects and timer."]
            },
            githubBtn: "See more on GitHub"
        },
        skills: {
            title: "Hard Skills",
            subtitle: "FRONTEND / BACKEND / TOOLS / CLOUD / METHODOLOGIES"
        },
        contact: {
            title: "Let's Talk?",
            availability: "Availability",
            statusText: "Open to new projects",
            emailLabel: "Email",
            whatsappLabel: "WhatsApp",
            formTitle: "Send a message",
            labels: { name: "Your Name", email: "Your Email", message: "Your Message" },
            placeholders: { name: "What's your name?", email: "your@email.com", message: "How can I help you today?" },
            button: "Send Proposal"
        }
    }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        return navigator.language.startsWith('en') ? 'en' : 'pt';
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = (path: string, ...args: (string | number)[]): any => {
        const keys = path.split('.');
        
        const result = keys.reduce((prev: TranslationValue | undefined, curr: string) => {
            if (prev && typeof prev === 'object' && !Array.isArray(prev)) {
                return (prev as Record<string, TranslationValue>)[curr];
            }
            return undefined;
        }, translations[language] as TranslationValue);

        if (typeof result === 'string') {
            let formatted = result;
            args.forEach((arg, index) => {
                formatted = formatted.replace(`{${index}}`, String(arg));
            });
            return formatted;
        }
        return result || path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};