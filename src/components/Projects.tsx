import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="projects" className="bg-slate-50/30 border-b border-slate-100">
            <div className="container mx-auto px-6 py-14 md:py-20 scroll-mt-20">
                <h2 className="text-2xl md:text-4xl font-black text-center mb-12 section-title text-slate-950! tracking-tighter">{t('projects.title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"> 
                    {/* Projeto 1: AchadosCampus */}
                    <div className="bg-white shadow-sm rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-56 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                           <img src="/image/projects/achados-campus.png" className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" alt="AchadosCampus" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://achadoscampus.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">{t('projects.proj1.title')}</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-4 text-left font-medium">
                                <p className="mb-4">{t('projects.proj1.desc')}</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj1.items') as string[])[0]}</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj1.items') as string[])[1]}</li>
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-50 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                    <span title="Vite" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="w-6 h-6" alt="Vite" />
                                    </span>
                                    <span title="Tailwind CSS" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" alt="Tailwind CSS" />
                                    </span>
                                    <span title="TypeScript" className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://achadoscampus.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3.5 px-10 rounded-xl transition-all shadow-lg active:scale-95 border border-slate-800">
                                        {t('projects.viewProject')} <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
                                    </a>
                                    <a href="https://github.com/angelosilvanno/achados-campus" target="_blank" rel="noopener noreferrer" className="px-4 py-3 border-2 border-slate-100 text-slate-400 rounded-xl hover:text-slate-950 hover:border-slate-950 transition-all active:scale-95">
                                        <i className="fab fa-github text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 2: FootCoder */}
                    <div className="bg-white shadow-sm rounded-4xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col h-full overflow-hidden group">
                        <div className="h-56 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <img src="/image/projects/foot-coder.png" className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" alt="FootCoder" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://foot-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">{t('projects.proj2.title')}</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-4 text-left font-medium">
                                <p className="mb-4">{t('projects.proj2.desc')}</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj2.items') as string[])[0]}</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj2.items') as string[])[1]}</li>
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-50 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
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
                                        {t('projects.viewProject')} <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
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
                        <div className="h-56 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <img src="/image/projects/logica-quiz.png" className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" alt="Lógica Quiz" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://logicaquiz.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">{t('projects.proj3.title')}</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-4 text-left font-medium">
                                <p className="mb-4">{t('projects.proj3.desc')}</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj3.items') as string[])[0]}</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj3.items') as string[])[1]}</li>
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-50 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
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
                                        {t('projects.viewProject')} <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
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
                        <div className="h-56 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <img src="/image/projects/coffee-delivery.png" className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" alt="Coffee Delivery" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://coffeeexpresso.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">{t('projects.proj4.title')}</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-4 text-left font-medium">
                                <p className="mb-4">{t('projects.proj4.desc')}</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj4.items') as string[])[0]}</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj4.items') as string[])[1]}</li>
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-50 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
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
                                        {t('projects.viewProject')} <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
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
                        <div className="h-56 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                            <img src="/image/projects/run-tech.png" className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" alt="RunTech" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://runtechweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white border border-transparent hover:border-slate-700">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">{t('projects.proj5.title')}</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-4 text-left font-medium">
                                <p className="mb-4">{t('projects.proj5.desc')}</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj5.items') as string[])[0]}</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj5.items') as string[])[1]}</li>
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-50 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
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
                                        {t('projects.viewProject')} <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
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
                        <div className="h-56 bg-slate-50/50 border-b border-slate-100 w-full overflow-hidden relative flex items-center justify-center">
                           <img src="/image/projects/show-do-codigo.png" className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" alt="O Show do Código" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center">
                                <a href="https://showdocodigo.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-950 hover:text-white">Site</a>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 flex flex-col grow">
                            <h3 className="text-lg md:text-xl font-black mb-2 text-slate-950 tracking-tight">{t('projects.proj6.title')}</h3>
                            <div className="text-[13px] text-slate-600 leading-relaxed mb-4 text-left font-medium">
                                <p className="mb-4">{t('projects.proj6.desc')}</p>
                                <ul className="list-none space-y-1.5">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj6.items') as string[])[0]}</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-950"></div> {(t('projects.proj6.items') as string[])[1]}</li>
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-50 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
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
                                        {t('projects.viewProject')} <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
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
                        {t('projects.githubBtn')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;