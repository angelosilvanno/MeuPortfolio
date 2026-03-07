import React from 'react';

const About: React.FC = () => {
    // Cálculo automático dos anos de experiência
    const anoInicio = 2022;
    const anosExperiencia = new Date().getFullYear() - anoInicio;

    return (
        <section id="about" className="bg-white border-b border-slate-50">
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
                        
                        {/* Texto em parágrafo único e justificado */}
                        <div className="text-base md:text-lg leading-relaxed text-slate-600 text-justify hyphens-auto">
                            <p>
                                Olá! Me chamo <span className="font-bold text-slate-900">Ângelo Silvano</span> e atuo como <strong className="text-slate-950 font-bold">desenvolvedor front-end</strong> há cerca de <strong className="text-slate-950 font-bold">{anosExperiencia} anos</strong>. Sou graduando em <span className="font-semibold text-slate-800">Tecnologia da Informação</span> na <span className="font-semibold text-indigo-600">UFERSA</span> e, ao longo da minha trajetória, acumulei experiências práticas como desenvolvedor no <span className="font-semibold text-slate-800">Projeto Carcará (LISA/UFERSA)</span> e freelancer na <span className="font-semibold text-slate-800">CraftSix</span>, focando na criação de interfaces modernas e responsivas. Hoje, minhas tecnologias principais envolvem <span className="font-bold text-indigo-600">Next.js</span>, <span className="font-bold text-indigo-600">TypeScript</span> e <span className="font-bold text-indigo-600">Tailwind CSS</span>, ferramentas que utilizo para unir o conhecimento acadêmico com a vivência de mercado, entregando aplicações que sejam rápidas, acessíveis e fáceis de usar.
                            </p>

                            {/* Subseção de Certificações */}
                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                                    <i className="fas fa-certificate text-slate-400"></i> Certificações
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-left">
                                    <div className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md group">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-600 group-hover:text-slate-900 transition-colors"><strong className="text-slate-800 font-bold">Front-end em React</strong> — Ada Tech</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md group">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-600 group-hover:text-slate-900 transition-colors"><strong className="text-slate-800 font-bold">JavaScript: O Guia Completo</strong> — Udemy</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md group">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-600 group-hover:text-slate-900 transition-colors"><strong className="text-slate-800 font-bold">NLW Connect Fullstack</strong> — Rocketseat</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md group">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-500 shrink-0 transition-colors"></div>
                                        <span className="text-slate-600 group-hover:text-slate-900 transition-colors"><strong className="text-slate-800 font-bold">Imersão com Google Gemini</strong> — Alura</span>
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