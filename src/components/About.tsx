import React from 'react';

const About: React.FC = () => {
    const anoInicio = 2022;
    const anosExperiencia = new Date().getFullYear() - anoInicio;
    
    const dataMigracao = new Date(2026, 1, 1);
    const mesesFullStack = (new Date().getFullYear() - dataMigracao.getFullYear()) * 12 + (new Date().getMonth() - dataMigracao.getMonth());

    return (
        <section id="about" className="bg-slate-50/30 border-b border-slate-100">
            <div className="container mx-auto px-6 py-20 md:py-28 scroll-mt-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                    <img 
                        srcSet="/image/angelo.avif 256w, /image/angelo.avif 384w, /image/angelo.avif 512w" 
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px" 
                        src="/image/angelo.avif" 
                        alt="Foto de Ângelo Silvano, um desenvolvedor web" 
                        loading="lazy" 
                        className="rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover border-4 border-white ring-4 ring-slate-50 transition-transform duration-700 hover:scale-105" 
                    />
                    <div className="text-center md:text-left max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 section-title text-slate-900 tracking-tight">Sobre Mim</h2>
                        
                        <div className="text-base md:text-lg leading-relaxed text-slate-600 text-justify hyphens-auto">
                            <p>
                                Sou graduando em <span className="font-semibold text-slate-800">Tecnologia da Informação na UFERSA</span> e atuo no <strong className="text-slate-950 font-bold">desenvolvimento Front-End há {anosExperiencia} anos</strong>. Há cerca de <strong className="text-slate-950 font-bold">{mesesFullStack} meses</strong> decidi expandir meu domínio para <strong className="text-slate-950 font-bold">Full-Stack</strong>. Recentemente finalizei minha colaboração no <span className="font-semibold text-slate-800">Projeto Carcará do Laboratório de Inovação em Software e Automação da UFERSA</span> e atuei na <span className="font-semibold text-slate-800">CraftSix</span> com foco em performance. Meu diferencial é a base sólida em <strong className="text-slate-950 font-bold">Qualidade de Software</strong> vinda da monitoria onde apliquei normas como a <strong className="text-slate-950 font-bold">ISO IEC 25010</strong>. Meu projeto <span className="font-bold text-indigo-600">PedeAí</span> reflete esse compromisso com estruturas seguras e confiáveis. Hoje busco unir interfaces intuitivas com arquiteturas sólidas em <span className="font-bold text-indigo-600">Node.js</span> e <span className="font-bold text-indigo-600">TypeScript</span>.
                            </p>

                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <h3 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-3 uppercase tracking-wider">
                                    <i className="fas fa-certificate text-slate-400"></i> Certificações
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] md:text-sm text-left">
                                    <div className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-indigo-100 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-500 group-hover:text-slate-700 transition-colors"><strong className="text-slate-900 font-bold">Front-end em React</strong> — Ada Tech</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-indigo-100 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-500 group-hover:text-slate-700 transition-colors"><strong className="text-slate-900 font-bold">JavaScript: O Guia Completo</strong> — Udemy</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-indigo-100 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-500 group-hover:text-slate-700 transition-colors"><strong className="text-slate-900 font-bold">NLW Connect Fullstack</strong> — Rocketseat</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-indigo-100 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-500 group-hover:text-slate-700 transition-colors"><strong className="text-slate-900 font-bold">Imersão com Google Gemini</strong> — Alura</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;