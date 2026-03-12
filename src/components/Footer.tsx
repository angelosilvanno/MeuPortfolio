import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0b1120] text-slate-400 border-t border-slate-900">
            <div className="container mx-auto px-6 pt-10 pb-8">
                {/* Parte Superior: Grid de Colunas - Espaçamento reduzido */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Coluna 1: Logo e Bio Curta */}
                    <div className="space-y-4">
                        <a href="#welcome" className="text-xl font-mono font-bold text-white tracking-tighter hover:text-indigo-400 transition-colors">
                            &lt;Ângelo /&gt;
                        </a>
                        <p className="text-[13px] leading-relaxed max-w-xs opacity-80">
                            Desenvolvedor Front-end focado em construir interfaces modernas e performáticas.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h3 className="text-white text-[13px] font-bold mb-4 uppercase tracking-widest">Navegação</h3>
                        <ul className="grid grid-cols-1 gap-y-2 text-sm font-medium">
                            <li><a href="#welcome" className="hover:text-white transition-colors">Início</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
                            <li><a href="#experience" className="hover:text-white transition-colors">Experiência</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#projects" className="hover:text-white transition-colors">Projetos</a></li>
                            <li><a href="#skills" className="hover:text-white transition-colors">Habilidades</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Tecnologias */}
                    <div>
                        <h3 className="text-white text-[13px] font-bold mb-4 uppercase tracking-widest">Tecnologias</h3>
                        <ul className="space-y-2 text-sm font-medium">
                            <li><span className="cursor-default">Next.js</span></li>
                            <li><span className="cursor-default">TypeScript</span></li>
                            <li><span className="cursor-default">Tailwind CSS</span></li>
                            <li><span className="cursor-default">Node.js</span></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Redes Sociais */}
                    <div>
                        <h3 className="text-white text-[13px] font-bold mb-4 uppercase tracking-widest">Redes Sociais</h3>
                        <div className="flex gap-6 items-center">
                            <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-all transform hover:-translate-y-1" title="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-all transform hover:-translate-y-1" title="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="mailto:angelosilvano.dev@gmail.com" className="text-xl hover:text-white transition-all transform hover:-translate-y-1" title="E-mail">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divisor Linear Sutil */}
                <div className="w-full h-px bg-slate-800/50 mb-8"></div>

                {/* Parte Inferior: Copyright Totalmente Centralizado */}
                <div className="w-full flex justify-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">
                        © {currentYear} Ângelo Silvano. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;