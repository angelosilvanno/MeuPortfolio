import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
                <h2 className="text-4xl font-black text-center mb-4 section-title text-slate-900 tracking-tight">Experiência</h2>
                <p className="text-base text-center mb-16 text-indigo-600 font-bold uppercase tracking-widest">Minha trajetória profissional e acadêmica no desenvolvimento</p>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-indigo-500 via-indigo-100 to-transparent"></div>

                    <div className="space-y-12">
                        {/* Experiência 1: Projeto Carcará */}
                        <div className="relative flex flex-col md:flex-row items-center">
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] z-10"></div>
                            <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 w-full">
                                <div className="bg-white p-8 rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group">
                                    <span className="inline-block text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full ring-1 ring-indigo-100 mb-4">Fev/2025 — Ago/2025</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">Desenvolvedor Front-End (Bolsista)</h3>
                                    <p className="text-indigo-500 font-semibold mb-6 italic text-sm">Projeto Carcará | LISA - UFERSA</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-3 text-sm md:text-base leading-relaxed text-left marker:text-indigo-500">
                                        <li>Desenvolvi a nova interface do site institucional utilizando tecnologias modernas.</li>
                                        <li>Reestruturei a navegação e organização das páginas para melhor clareza e usabilidade.</li>
                                        <li>Trabalhei em conjunto com a equipe participando das definições e entregas por etapa.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 2: Monitoria */}
                        <div className="relative flex flex-col md:flex-row items-center justify-end">
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] z-10"></div>
                            <div className="ml-10 md:ml-0 md:w-1/2 md:pl-12 w-full">
                                <div className="bg-white p-8 rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group">
                                    <span className="inline-block text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full ring-1 ring-indigo-100 mb-4">Jul/2024 — Nov/2024</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">Monitor de Disciplina</h3>
                                    <p className="text-indigo-500 font-semibold mb-6 italic text-sm">Qualidade de Software | UFERSA</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-3 text-sm md:text-base leading-relaxed text-left marker:text-indigo-500">
                                        <li>Auxiliei o professor na correção de atividades e avaliações da disciplina.</li>
                                        <li>Apoiei alunos na resolução de dúvidas sobre os conteúdos trabalhados em sala.</li>
                                        <li>Reforcei conceitos práticos de usabilidade e manutenibilidade de software.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 3: Freelancer */}
                        <div className="relative flex flex-col md:flex-row items-center">
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] z-10"></div>
                            <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 w-full">
                                <div className="bg-white p-8 rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group">
                                    <span className="inline-block text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full ring-1 ring-indigo-100 mb-4">Dez/2023 — Fev/2024</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">Desenvolvedor Front-End</h3>
                                    <p className="text-indigo-500 font-semibold mb-6 italic text-sm">Freelancer | CraftSix</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-3 text-sm md:text-base leading-relaxed text-left marker:text-indigo-500">
                                        <li>Desenvolvi interfaces web e landing pages voltadas à apresentação de serviços.</li>
                                        <li>Estruturei layouts responsivos com foco em clareza visual e organização das informações.</li>
                                        <li>Implementei componentes modernos priorizando a performance e a experiência do usuário.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;