import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="welcome" className="relative overflow-hidden bg-linear-to-b from-indigo-50/70 via-zinc-50 to-white">
            <div className="container mx-auto px-4 min-h-screen flex items-center justify-center pt-20 md:pt-0">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-12 lg:gap-20">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] md:text-sm text-indigo-600/80 font-black uppercase tracking-[0.3em] mb-2">Olá, eu sou</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.2] md:leading-[1.1] tracking-tighter my-2 drop-shadow-sm">Ângelo Silvano</h1>
                        <div className="flex items-center justify-center md:justify-start gap-3 md:gap-5">
                            <div className="w-10 h-1 md:w-14 md:h-1.5 bg-indigo-600 rounded-full shadow-sm shadow-indigo-200"></div>
                            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-semibold tracking-tight">Desenvolvedor Full Stack</p>
                        </div>

                    <div className="mt-8 md:mt-12 flex flex-wrap justify-center md:justify-start gap-3 md:gap-5">
                        <a href="/curriculo/Curriculo Angelo.pdf" download="Currículo - Angelo.pdf" className="bg-indigo-600 text-white text-sm md:text-base font-bold py-3 md:py-4 px-6 md:px-10 rounded-xl md:rounded-2xl hover:bg-indigo-700 transition-all duration-500 shadow-xl shadow-indigo-500/25 active:scale-95 border border-indigo-500">
                            Download CV
                        </a>
                        <a href="#contact" className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-800 text-sm md:text-base font-bold py-3 md:py-4 px-6 md:px-10 rounded-xl md:rounded-2xl hover:bg-white hover:border-slate-400 transition-all duration-500 shadow-lg shadow-slate-200/50 active:scale-95">
                            Entrar em Contato
                        </a>
                    </div>
                    
                    <div className="mt-8 md:mt-12 mb-12 md:mb-0 flex justify-center md:justify-start gap-x-8 md:gap-x-10 relative z-10">
                        <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-slate-400 hover:text-slate-950 transition-all transform hover:-translate-y-1.5 duration-300">
                            <i className="fab fa-github text-2xl md:text-3xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-slate-400 hover:text-indigo-600 transition-all transform hover:-translate-y-1.5 duration-300">
                            <i className="fab fa-linkedin-in text-2xl md:text-3xl"></i>
                        </a>
                    </div>
                </div>
                <div className="shrink-0 relative group">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[50px] md:blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    <img 
                        src="/image/angelodev.avif" 
                        alt="Foto de Ângelo Silvano" 
                        className="relative rounded-full w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-6 md:border-10 border-white shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1" 
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