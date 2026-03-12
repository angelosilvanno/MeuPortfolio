import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50/30 text-slate-500 border-t border-slate-200">
            <div className="container mx-auto px-6 pt-10 pb-8">
            
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-10 text-left">
            
                    <div className="col-span-2 lg:col-span-1 space-y-4">
                        <a href="#welcome" className="text-xl font-mono font-bold text-slate-900 tracking-tighter hover:text-indigo-600 transition-colors">
                            &lt;Ângelo /&gt;
                        </a>
                        <p className="text-[13px] leading-relaxed max-w-xs font-medium">
                            Desenvolvedor Front-end focado em construir interfaces modernas e performáticas.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.15em] mb-4">Navegação</h3>
                        <ul className="grid grid-cols-1 gap-y-2 text-[13px] font-bold">
                            <li><a href="#welcome" className="hover:text-indigo-600 transition-colors">Início</a></li>
                            <li><a href="#about" className="hover:text-indigo-600 transition-colors">Sobre</a></li>
                            <li><a href="#experience" className="hover:text-indigo-600 transition-colors">Experiência</a></li>
                            <li><a href="#services" className="hover:text-indigo-600 transition-colors">Serviços</a></li>
                            <li><a href="#projects" className="hover:text-indigo-600 transition-colors">Projetos</a></li>
                            <li><a href="#skills" className="hover:text-indigo-600 transition-colors">Habilidades</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.15em] mb-4">Tecnologias</h3>
                        <ul className="space-y-2 text-[13px] font-bold">
                            <li><span className="cursor-default">Next.js</span></li>
                            <li><span className="cursor-default">TypeScript</span></li>
                            <li><span className="cursor-default">Tailwind CSS</span></li>
                            <li><span className="cursor-default">Node.js</span></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.15em] mb-4">Redes Sociais</h3>
                        <div className="flex gap-6 items-center">
                            <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" className="text-xl text-slate-400 hover:text-slate-950 transition-all transform hover:-translate-y-1" title="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" className="text-xl text-slate-400 hover:text-slate-950 transition-all transform hover:-translate-y-1" title="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:angelosilvano.dev@gmail.com" className="text-xl text-slate-400 hover:text-slate-950 transition-all transform hover:-translate-y-1" title="E-mail">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-slate-200 mb-8"></div>

                <div className="w-full flex justify-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 text-center">
                        © {currentYear} Ângelo Silvano. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;