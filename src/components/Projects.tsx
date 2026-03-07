import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-slate-50/50 border-b border-slate-100">
            <div className="container mx-auto px-6 py-16 md:py-24 scroll-mt-20">
                {/* Título com margem aumentada para compensar a remoção do texto */}
                <h2 className="text-3xl md:text-4xl font-black text-center mb-16 section-title text-slate-950 tracking-tighter">Meus Projetos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch"> 
                    {/* Projeto 1: VibePlay */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-44 bg-slate-50/80 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-music text-indigo-50/50 text-7xl absolute transition-transform duration-700 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://vibeplay-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col grow">
                            <h3 className="text-xl font-black mb-2 text-slate-950 tracking-tight">VibePlay</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left">
                                <p className="mb-4 font-medium">Desenvolvi o VibePlay para ser um player de música intuitivo e focado em interatividade. A ideia foi criar uma experiência onde o usuário tem controle total do som.</p>
                                <ul className="list-none space-y-2 text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Controle de áudio completo com ajuste individual.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Sistema de busca por nome e navegação por gêneros.</li>
                                </ul>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">Next.js</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">Tailwind</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">TypeScript</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://vibeplay-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/vibe-play" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-950 hover:bg-slate-50 transition-all">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 2: FootCoder */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-44 bg-slate-50/80 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-futbol text-indigo-50/50 text-7xl absolute transition-transform duration-700 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col grow">
                            <h3 className="text-xl font-black mb-2 text-slate-950 tracking-tight">FootCoder</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left">
                                <p className="mb-4 font-medium">Criei esta loja de camisetas de futebol com o foco em simular um fluxo de compra real e completo. O objetivo foi garantir uma experiência intuitiva.</p>
                                <ul className="list-none space-y-2 text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Catálogo organizado com visualização clara.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Carrinho de compras para gerenciamento dinâmico.</li>
                                </ul>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">HTML5</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">CSS3</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">JS</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">Bootstrap</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/FootCoder" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-950 hover:bg-slate-50 transition-all">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 3: Lógica Quiz */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-44 bg-slate-50/80 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-lightbulb text-indigo-50/50 text-7xl absolute transition-transform duration-700 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col grow">
                            <h3 className="text-xl font-black mb-2 text-slate-950 tracking-tight">Lógica Quiz</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left">
                                <p className="mb-4 font-medium">Um jogo educativo voltado para o estudo de Matemática Discreta, focado em tornar o aprendizado de lógica proposicional mais prático.</p>
                                <ul className="list-none space-y-2 text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Feedback instantâneo para reforço do aprendizado.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Sistema de pontuação e progressão gamificada.</li>
                                </ul>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">JS</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">TypeScript</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">HTML5</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/LogicaQuiz" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-950 hover:bg-slate-50 transition-all">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 4: Coffee Delivery */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-44 bg-slate-50/80 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-mug-hot text-indigo-50/50 text-7xl absolute transition-transform duration-700 group-hover:scale-110"></i>
                            <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col grow">
                            <h3 className="text-xl font-black mb-2 text-slate-950 tracking-tight">Coffee Delivery</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left">
                                <p className="mb-4 font-medium">Landing page de um serviço de entrega de café, com foco em um design limpo e um processo de escolha rápido para o cliente.</p>
                                <ul className="list-none space-y-2 text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Cardápio visual imersivo com fotos.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Fluxo de adição ao carrinho simplificado.</li>
                                </ul>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">Bootstrap</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">JS</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">CSS3</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/CoffeeDelivery" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-950 hover:bg-slate-50 transition-all">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 5: RunTech */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-44 bg-slate-50/80 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-running text-indigo-50/50 text-7xl absolute transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"></i>
                            <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col grow">
                            <h3 className="text-xl font-black mb-2 text-slate-950 tracking-tight">RunTech</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left">
                                <p className="mb-4 font-medium">O RunTech é um e-commerce que criei focado em quem pratica corrida, garantindo uma experiência de compra completa e fluida.</p>
                                <ul className="list-none space-y-2 text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Fluxo completo do catálogo ao checkout.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Filtros por categoria e busca dinâmica.</li>
                                </ul>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">TypeScript</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">CSS3</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">HTML5</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/RunTech" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-950 hover:bg-slate-50 transition-all">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 6: O Show do Código */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-44 bg-slate-50/80 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-terminal text-indigo-50/50 text-7xl absolute transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"></i>
                            <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Visitar Site</a>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col grow">
                            <h3 className="text-xl font-black mb-2 text-slate-950 tracking-tight">O Show do Código</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left">
                                <p className="mb-4 font-medium">Criei o Show do Código para ser um quiz divertido, inspirado no clássico Show do Milhão, para testar conhecimentos técnicos.</p>
                                <ul className="list-none space-y-2 text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Trilhas em Frontend, Backend e Mobile.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Mecânicas imersivas e feedback sonoro.</li>
                                </ul>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">Vite</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">React</span>
                                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-100">TS</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="grow inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-[13px] font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95">
                                        Ver Projeto <i className="fas fa-external-link-alt text-[10px]"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/show-do-codigo" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-slate-200 text-slate-400 rounded-xl hover:text-slate-950 hover:bg-slate-50 transition-all">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <a href="https://github.com/angelosilvanno?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold py-4 px-10 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm">
                        <i className="fab fa-github text-xl"></i>
                        Ver repositório completo no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;