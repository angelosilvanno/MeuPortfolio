import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-slate-50/30 border-b border-slate-100">
            <div className="container mx-auto px-6 py-14 md:py-20 scroll-mt-20">
                {/* Título Principal */}
                <h2 className="text-2xl md:text-4xl font-black text-center mb-12 section-title text-slate-950! tracking-tighter">Meus Projetos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"> 
                    {/* Projeto 1: VibePlay */}
                    <div className="bg-white shadow-sm rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-40 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-music text-slate-200/60 text-6xl absolute transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-500/10"></i>
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://vibeplay-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">VibePlay</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left font-medium">
                                <p className="mb-4">Desenvolvi o VibePlay para ser um player de música intuitivo e focado em interatividade. A ideia foi criar uma experiência onde o usuário tem controle total do som.</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Controle de áudio completo com ajuste individual.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Sistema de busca por nome e navegação por gêneros.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span title="Next.js" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-6 h-6" alt="Next.js" />
                                    </span>
                                    <span title="Tailwind CSS" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" alt="Tailwind CSS" />
                                    </span>
                                    <span title="TypeScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://vibeplay-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        Ver Projeto <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/vibe-play" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 2: FootCoder */}
                    <div className="bg-white shadow-sm rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-40 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-futbol text-slate-200/60 text-6xl absolute transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-50/10"></i>
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">FootCoder</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left font-medium">
                                <p className="mb-4">Criei esta loja de camisetas de futebol com o foco em simular um fluxo de compra real e completo. O objetivo foi garantir uma experiência intuitiva.</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Catálogo organizado com visualização clara.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Carrinho de compras para gerenciamento dinâmico.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span title="HTML5" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML5" />
                                    </span>
                                    <span title="CSS3" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" alt="CSS3" />
                                    </span>
                                    <span title="JavaScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />
                                    </span>
                                    <span title="Bootstrap" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="w-6 h-6" alt="Bootstrap" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        Ver Projeto <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/FootCoder" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 3: Lógica Quiz */}
                    <div className="bg-white shadow-sm rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-40 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-lightbulb text-slate-200/60 text-6xl absolute transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-50/10"></i>
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">Lógica Quiz</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left font-medium">
                                <p className="mb-4">Um jogo educativo voltado para o estudo de Matemática Discreta, focado em tornar o aprendizado de lógica proposicional mais prático.</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Feedback instantâneo para reforço do aprendizado.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Sistema de pontuação e progressão gamificada.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span title="JavaScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />
                                    </span>
                                    <span title="TypeScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                                    </span>
                                    <span title="HTML5" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML5" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        Ver Projeto <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/LogicaQuiz" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 4: Coffee Delivery */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-40 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-mug-hot text-slate-200/60 text-6xl absolute transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-50/10"></i>
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">Coffee Delivery</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left font-medium">
                                <p className="mb-4">Landing page de um serviço de entrega de café, com foco em um design limpo e um processo de escolha rápido para o cliente.</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Cardápio visual imersivo com fotos detalhadas.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Fluxo de adição ao carrinho simplificado.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span title="Bootstrap" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="w-6 h-6" alt="Bootstrap" />
                                    </span>
                                    <span title="JavaScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />
                                    </span>
                                    <span title="CSS3" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" alt="CSS3" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        Ver Projeto <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/CoffeeDelivery" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 5: RunTech */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-40 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-running text-slate-200/60 text-6xl absolute transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-50/10"></i>
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">RunTech</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left font-medium">
                                <p className="mb-4">O RunTech é um e-commerce que criei focado em quem pratica corrida, garantindo uma experiência de compra completa e fluida.</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Fluxo completo do catálogo ao checkout.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Filtros por categoria e busca dinâmica.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span title="TypeScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                                    </span>
                                    <span title="CSS3" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" alt="CSS3" />
                                    </span>
                                    <span title="HTML5" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML5" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        Ver Projeto <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/RunTech" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 6: O Show do Código */}
                    <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-40 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <i className="fas fa-terminal text-slate-200/60 text-6xl absolute transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-50/10"></i>
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">O Show do Código</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-6 grow text-left font-medium">
                                <p className="mb-4">Quiz inspirado no clássico "Show do Milhão", focado em testar conhecimentos técnicos de programação de um jeito lúdico.</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Trilhas em Frontend e Backend.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> Mecânicas imersivas com áudio.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span title="Vite" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="w-6 h-6" alt="Vite" />
                                    </span>
                                    <span title="React" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
                                    </span>
                                    <span title="TypeScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        Ver Projeto <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/show-do-codigo" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <a href="https://github.com/angelosilvanno?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border-2 border-slate-100 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] py-4 px-12 rounded-full hover:bg-slate-950 hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl active:scale-95">
                        <i className="fab fa-github text-xl"></i>
                        Veja mais no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;