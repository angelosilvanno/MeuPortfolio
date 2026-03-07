import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="bg-slate-50/50 border-y border-slate-100">
            <div className="container mx-auto px-6 py-20 md:py-28 scroll-mt-20">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-4 section-title text-slate-950 tracking-tighter">Experiência</h2>
                <p className="text-sm md:text-base text-center mb-20 text-slate-500 font-medium uppercase tracking-[0.2em]">Minha trajetória profissional e acadêmica no desenvolvimento</p>

                <div className="max-w-4xl mx-auto relative">
                    {/* Linha da Timeline */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-linear-to-b from-indigo-500 via-slate-200 to-transparent"></div>

                    <div className="space-y-16">
                        {/* Experiência 1: Projeto Carcará */}
                        <div className="relative flex flex-col md:flex-row items-center">
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10"></div>
                            <div className="ml-10 md:ml-0 md:w-1/2 md:pr-16 md:text-right w-full">
                                <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group">
                                    <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-5 py-2 rounded-full shadow-lg shadow-slate-200 mb-6">Fev/2025 — Ago/2025</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight text-left md:text-right">Desenvolvedor Front-End | Bolsista</h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-6 text-sm tracking-tight text-left md:text-right italic">Projeto Carcará | LISA - UFERSA</p>
                                    <ul className="list-disc list-outside ml-5 md:ml-0 md:mr-0 text-slate-600 space-y-4 text-sm md:text-base leading-relaxed text-left marker:text-slate-300">
                                        <li>Desenvolvi a nova interface do site institucional utilizando tecnologias modernas.</li>
                                        <li>Reestruturei a navegação e organização das páginas para melhor clareza e usabilidade.</li>
                                        <li>Trabalhei em conjunto com a equipe participando das definições e entregas por etapa.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 2: Monitoria */}
                        <div className="relative flex flex-col md:flex-row items-center justify-end">
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10"></div>
                            <div className="ml-10 md:ml-0 md:w-1/2 md:pl-16 w-full">
                                <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group">
                                    <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-5 py-2 rounded-full shadow-lg shadow-slate-200 mb-6">Jul/2024 — Nov/2024</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight text-left">Monitor de Disciplina</h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-6 text-sm tracking-tight text-left italic">Qualidade de Software | UFERSA</p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-4 text-sm md:text-base leading-relaxed text-left marker:text-slate-300">
                                        <li>Auxiliei o professor na correção de atividades e avaliações da disciplina.</li>
                                        <li>Apoiei alunos na resolução de dúvidas sobre os conteúdos trabalhados em sala.</li>
                                        <li>Reforcei conceitos práticos de usabilidade e manutenibilidade de software.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 3: Freelancer */}
                        <div className="relative flex flex-col md:flex-row items-center">
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10"></div>
                            <div className="ml-10 md:ml-0 md:w-1/2 md:pr-16 md:text-right w-full">
                                <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group">
                                    <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-5 py-2 rounded-full shadow-lg shadow-slate-200 mb-6">Dez/2023 — Fev/2024</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight text-left md:text-right">Desenvolvedor Front-End | Freelancer</h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-6 text-sm tracking-tight text-left md:text-right italic">CraftSix</p>
                                    <ul className="list-disc list-outside ml-5 md:ml-0 md:mr-0 text-slate-600 space-y-4 text-sm md:text-base leading-relaxed text-left marker:text-slate-300">
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