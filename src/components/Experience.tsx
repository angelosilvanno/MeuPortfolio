import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="bg-slate-50/50 border-y border-slate-100">
            <div className="container mx-auto px-6 pt-12 pb-20 scroll-mt-20">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-10 section-title text-slate-950 tracking-tighter">Experiência</h2>
                

                <div className="max-w-6xl mx-auto relative">
                    {/* Linha da Timeline - Oculta no desktop */}
                    <div className="absolute left-4 md:hidden h-full w-px bg-linear-to-b from-indigo-500 via-slate-200 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Experiência 1: Projeto Carcará */}
                        <div className="relative flex flex-col w-full h-full">
                            <div className="absolute left-4 md:hidden transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10"></div>
                            <div className="ml-10 md:ml-0 h-full flex">
                                <div className="bg-white p-7 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col">
                                    <div className="mb-4">
                                        <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-4 py-1.5 rounded-full shadow-lg shadow-slate-200">Fev/2025 — Ago/2025</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight text-left">Desenvolvedor Front-End | Bolsista</h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-4 text-sm tracking-tight text-left italic">Projeto Carcará | LISA - UFERSA</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-3 text-sm md:text-base leading-relaxed text-left marker:text-slate-300 grow">
                                        <li>Desenvolvi a nova interface do site institucional utilizando tecnologias modernas.</li>
                                        <li>Reestruturei a navegação e organização das páginas para melhor clareza e usabilidade.</li>
                                        <li>Trabalhei em conjunto com a equipe participando das definições e entregas por etapa.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 2: Monitoria */}
                        <div className="relative flex flex-col w-full h-full">
                            <div className="absolute left-4 md:hidden transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10"></div>
                            <div className="ml-10 md:ml-0 h-full flex">
                                <div className="bg-white p-7 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col">
                                    <div className="mb-4">
                                        <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-4 py-1.5 rounded-full shadow-lg shadow-slate-200">Jul/2024 — Nov/2024</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight text-left">Monitor de Disciplina | Apoio Acadêmico</h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-4 text-sm tracking-tight text-left italic">Qualidade de Software | UFERSA</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-3 text-sm md:text-base leading-relaxed text-left marker:text-slate-300 grow">
                                        <li>Auxiliei o professor na correção de atividades e avaliações da disciplina.</li>
                                        <li>Apoiei alunos na resolução de dúvidas sobre os conteúdos trabalhados em sala.</li>
                                        <li>Reforcei conceitos práticos de usabilidade e manutenibilidade de software.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 3: Freelancer */}
                        <div className="relative flex flex-col w-full h-full">
                            <div className="absolute left-4 md:hidden transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10"></div>
                            <div className="ml-10 md:ml-0 h-full flex">
                                <div className="bg-white p-7 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col">
                                    <div className="mb-4">
                                        <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-4 py-1.5 rounded-full shadow-lg shadow-slate-200">Dez/2023 — Fev/2024</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight text-left">Desenvolvedor Front-End | Freelancer</h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-4 text-sm tracking-tight text-left italic">CraftSix</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-3 text-sm md:text-base leading-relaxed text-left marker:text-slate-300 grow">
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