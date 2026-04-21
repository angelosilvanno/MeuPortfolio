import React, { createContext, useState, useContext } from 'react';

type Language = 'pt' | 'en';

type TranslationValue = string | { [key: string]: TranslationValue };

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (path: string, ...args: (string | number)[]) => string;
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
            para1: "Minha base vem da graduação em Tecnologia da Informação na UFERSA e hoje estou me formando na área. Trabalho com Front-End há {0} anos e, de uns {1} meses pra cá, comecei a ir além e estudar também o lado de back-end.",
            para2: "Participei do Projeto Carcará no laboratório da UFERSA e também tive uma experiência na CraftSix, onde foquei bastante em melhorar desempenho das aplicações. Um ponto que me destaca é a experiência com qualidade de software, por conta da monitoria, onde tive contato com boas práticas e padrões que ajudam a deixar os sistemas mais confiáveis.",
            para3: "O projeto PedeAí mostra bem isso, foi feito pensando em ser seguro e funcionar bem no dia a dia. Hoje meu foco é juntar interfaces simples de usar com um back-end bem organizado usando Node.js e TypeScript.",
            certificationsTitle: "Certificações"
        }
    },
    en: {
        nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
        hero: {
            badge: "Available for new projects",
            role_1: "Full Stack",
            role_2: "Developer.",
            description: "I build complete web applications, focusing on performance, scalability, and the real user experience.",
            buttonMain: "Start a project",
            buttonSecondary: "View projects"
        },
        about: {
            title: "About Me",
            para1: "My foundation comes from my degree in Information Technology at UFERSA, and today I am graduating in the field. I've been working in Front-End for {0} years, and for about {1} months now, I've started going further and studying the back-end side as well.",
            para2: "I participated in the Carcará Project at the UFERSA lab and also had an experience at CraftSix, where I focused heavily on improving application performance. A point that sets me apart is my experience with software quality due to my teaching assistantship, where I had contact with best practices and patterns that help make systems more reliable.",
            para3: "The PedeAí project shows this well; it was built with security and daily reliability in mind. Today my focus is on combining easy-to-use interfaces with a well-organized back-end using Node.js and TypeScript.",
            certificationsTitle: "Certifications"
        }
    }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        return navigator.language.startsWith('en') ? 'en' : 'pt';
    });

    const t = (path: string, ...args: (string | number)[]): string => {
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
        return path;
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