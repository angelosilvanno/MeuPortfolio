import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="welcome" className="relative overflow-hidden bg-linear-to-b from-indigo-50/50 to-zinc-50">
            <div className="container mx-auto px-4 min-h-screen flex items-center justify-center pt-24 md:pt-0">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl gap-12">
                    <div className="text-center md:text-left">
                        <p className="text-sm md:text-base text-indigo-600 font-bold uppercase tracking-[0.2em] mb-2">Olá, eu sou</p>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter my-2">Ângelo Silvano</h1>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
                            <p className="text-lg md:text-xl text-slate-600 font-medium tracking-tight">Desenvolvedor Front-end</p>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                            <a href="/curriculo/Curriculo Angelo.pdf" download="Currículo - Angelo.pdf" className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-500/20 active:scale-95">
                                Download CV
                            </a>
                            <a href="#contact" className="bg-white border border-slate-200 text-slate-700 font-bold py-4 px-8 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 active:scale-95">
                                Entrar em Contato
                            </a>
                        </div>
                        
                        <div className="mt-10 mb-16 md:mb-0 flex justify-center md:justify-start gap-x-8 relative z-10">
                            <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-slate-400 hover:text-slate-900 transition-all transform hover:-translate-y-1">
                                <i className="fab fa-github text-3xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-slate-400 hover:text-indigo-600 transition-all transform hover:-translate-y-1">
                                <i className="fab fa-linkedin-in text-3xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="shrink-0 relative group">
                        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <img 
                            src="/image/angelodev.avif" 
                            alt="Foto de Ângelo Silvano" 
                            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-2xl shadow-indigo-500/10 transition-transform duration-500 group-hover:scale-[1.02]" 
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,115,110.57,172,110.57c62,0,123-11.41,149.39-54.13Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;