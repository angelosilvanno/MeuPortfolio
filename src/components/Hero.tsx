import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="welcome" className="relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            
            <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center relative z-10 pt-10">
                <div className="flex flex-col items-center text-center w-full max-w-3xl">
                    
                    {/* Badge Compacto */}
                    <div className="inline-flex items-center gap-2 bg-slate-950 text-white px-3 py-1.5 rounded-full mb-6 shadow-lg border border-slate-800 transition-transform hover:scale-105 cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-widest">{t('hero.badge')}</span>
                    </div>

                    {/* Título mais equilibrado */}
                    <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-tight mb-2">
                        Ângelo Silvano
                    </h1>

                    {/* Subtítulo dinâmico */}
                    <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">
                        <span className="text-indigo-600">{t('hero.role_1')}</span> {t('hero.role_2')}
                    </h2>

                    {/* Descrição compacta */}
                    <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl leading-relaxed mb-10">
                        {t('hero.description')}
                    </p>

                    {/* Botões centrais */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <a href="#contact" className="bg-slate-950 text-white text-xs md:text-sm font-bold py-3.5 px-8 md:px-10 rounded-xl hover:bg-indigo-600 transition-all duration-500 shadow-xl active:scale-95 border border-slate-900">
                            {t('hero.buttonMain')}
                        </a>
                        <a href="#projects" className="bg-white border-2 border-slate-100 text-slate-800 text-xs md:text-sm font-bold py-3.5 px-8 md:px-10 rounded-xl hover:bg-slate-50 transition-all duration-500 active:scale-95">
                            {t('hero.buttonSecondary')}
                        </a>
                    </div>
                </div>

                {/* Esteira de Tecnologias Animada */}
                <div className="w-full mt-4 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10"></div>
                    
                    <div className="flex whitespace-nowrap gap-12 md:gap-20 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
                        {/* Primeira sequência de ícones */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Next.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="TypeScript" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Tailwind CSS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Supabase" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="PostgreSQL" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Figma" />
                        
                        {/* Repetição para loop infinito */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Next.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="TypeScript" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Tailwind CSS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-8 h-8 md:w-10 md:h-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-500" alt="Supabase" />
                    </div>
                </div>
            </div>

            {/* Divisor inferior suave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12 fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,115,110.57,172,110.57c62,0,123-11.41,149.39-54.13Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;