import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-zinc-50">
            <div className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
                <h2 className="text-3xl font-bold text-center mb-4 section-title text-indigo-600!">Meus Projetos</h2>
                <p className="text-lg text-center mb-12 text-slate-700 max-w-3xl mx-auto font-medium">
                    Confira alguns dos projetos que desenvolvi, com foco em resolução de problemas e experiência do usuário:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"> 
                    {/* Projeto 1: VibePlay */}
                    <div className="bg-white shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full overflow-hidden group">
                        <div className="h-48 bg-slate-50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-music text-indigo-100 text-7xl absolute transition-transform duration-500 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://vibeplay-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col grow">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">VibePlay</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                                <p className="mb-4">Desenvolvi o VibePlay para ser um player de música intuitivo e focado em interatividade. A ideia foi criar uma experiência onde o usuário tem controle total do som.</p>
                                <ul className="list-none space-y-2 text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Controle de áudio completo com ajuste individual.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Sistema de busca por nome e navegação por gêneros.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Seção dedicada para biografias e curiosidades.</li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6 font-medium">
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">Next.js</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">Tailwind CSS</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">TypeScript</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://vibeplay-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/vibe-play" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-all" title="Código no GitHub">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 2: FootCoder */}
                    <div className="bg-white shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full overflow-hidden group">
                        <div className="h-48 bg-slate-50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-futbol text-indigo-100 text-7xl absolute transition-transform duration-500 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col grow">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">FootCoder</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                                <p className="mb-4">Criei esta loja de camisetas de futebol focada em simular um fluxo de compra real, garantindo uma experiência intuitiva do catálogo ao checkout.</p>
                                <ul className="list-none space-y-2 text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Catálogo organizado com visualização clara.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Carrinho de compras para gerenciamento dinâmico.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Simulação de checkout com opções de pagamento.</li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6 font-medium">
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">HTML5</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">CSS3</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">JavaScript</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">Bootstrap</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/FootCoder" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-all" title="Código no GitHub">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 3: Lógica Quiz */}
                    <div className="bg-white shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full overflow-hidden group">
                        <div className="h-48 bg-slate-50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-lightbulb text-indigo-100 text-7xl absolute transition-transform duration-500 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col grow">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">Lógica Quiz</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                                <p className="mb-4">Um jogo educativo voltado para o estudo de Matemática Discreta, focado em tornar o aprendizado de lógica proposicional mais prático.</p>
                                <ul className="list-none space-y-2 text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Feedback instantâneo para reforço do aprendizado.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Sistema de pontuação e progressão gamificada.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Interface intuitiva focada na experiência.</li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6 font-medium">
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">JavaScript</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">TypeScript</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">HTML5</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/LogicaQuiz" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-all" title="Código no GitHub">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 4: Coffee Delivery */}
                    <div className="bg-white shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full overflow-hidden group">
                        <div className="h-48 bg-slate-50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-mug-hot text-indigo-100 text-7xl absolute transition-transform duration-500 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col grow">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">Coffee Delivery</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                                <p className="mb-4">Landing page de um serviço de entrega de café, com foco em design limpo e um processo de escolha rápido para o cliente.</p>
                                <ul className="list-none space-y-2 text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Cardápio visual imersivo com fotos detalhadas.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Fluxo de adição ao carrinho simplificado.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Design responsivo otimizado para celulares.</li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6 font-medium">
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">Bootstrap</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">JavaScript</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">CSS3</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/CoffeeDelivery" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-all" title="Código no GitHub">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 5: RunTech */}
                    <div className="bg-white shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full overflow-hidden group">
                        <div className="h-48 bg-slate-50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-running text-indigo-100 text-7xl absolute transition-transform duration-500 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col grow">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">RunTech</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                                <p className="mb-4">O RunTech é um e-commerce focado em artigos de corrida, com o objetivo de construir uma experiência de compra completa e fluida.</p>
                                <ul className="list-none space-y-2 text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Fluxo de compra do catálogo ao checkout.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Filtros por categoria para busca rápida.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Interface responsiva otimizada para desktops.</li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6 font-medium">
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">TypeScript</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">CSS3</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">HTML5</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/RunTech" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-all" title="Código no GitHub">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 6: O Show do Código */}
                    <div className="bg-white shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full overflow-hidden group">
                        <div className="h-48 bg-slate-50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-terminal text-indigo-100 text-7xl absolute transition-transform duration-500 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col grow">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">O Show do Código</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                                <p className="mb-4">Quiz inspirado no clássico "Show do Milhão", focado em testar conhecimentos técnicos de programação de um jeito lúdico.</p>
                                <ul className="list-none space-y-2 text-slate-500">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Trilhas em Frontend, Backend e Fullstack.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Sistema de ajudas (Pular e Universitários).</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Feedback sonoro e visual para imersão.</li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6 font-medium">
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">Vite</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">React</span>
                                    <span className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200">TypeScript</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/show-do-codigo" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-50 transition-all" title="Código no GitHub">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <a href="https://github.com/angelosilvanno?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-4 px-10 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm transform hover:-translate-y-1">
                        <i className="fab fa-github text-xl"></i>
                        Ver repositório completo no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;