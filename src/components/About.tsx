import React from 'react';

const About: React.FC = () => {
    // Cálculo automático dos anos de experiência
    const anoInicio = 2022;
    const anosExperiencia = new Date().getFullYear() - anoInicio;

    return (
        <section id="about" className="bg-white">
            <div className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                    <img 
                        srcSet="/image/angelo.avif 256w, /image/angelo.avif 384w, /image/angelo.avif 512w" 
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px" 
                        src="/image/angelo.avif" 
                        alt="Foto de Ângelo Silvano, um desenvolvedor web" 
                        loading="lazy" 
                        className="rounded-full shadow-lg w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover border-4 border-white ring-2 ring-indigo-50" 
                    />
                    <div className="text-center md:text-left max-w-2xl">
                        <h2 className="text-3xl font-bold mb-6 section-title text-indigo-600">Sobre Mim</h2>
                        <div className="text-lg leading-relaxed text-slate-700 space-y-4 text-justify">
                            <p>
                                Olá! Me chamo <span className="font-semibold text-indigo-600">Ângelo Silvano</span> e trabalho com <strong className="text-indigo-600">desenvolvimento front-end</strong> há cerca de <strong className="text-indigo-600">{anosExperiencia} anos</strong>.
                            </p>
                            <p>
                                Sou graduando em <span className="font-semibold">Tecnologia da Informação</span> na <span className="font-semibold text-indigo-600">UFERSA</span> e, ao longo da minha trajetória, acumulei experiências práticas importantes. Atuei como desenvolvedor front-end no <span className="font-semibold">Projeto Carcará (LISA/UFERSA)</span> e também realizei projetos como freelancer na <span className="font-semibold">CraftSix</span>, focando sempre em interfaces modernas e responsivas.
                            </p>
                            <p>
                                Hoje, minhas tecnologias principais são <span className="font-semibold">Next.js</span>, <span className="font-semibold">TypeScript</span> e <span className="font-semibold">Tailwind CSS</span>. Busco unir o conhecimento acadêmico com a vivência de mercado para criar aplicações que sejam rápidas, acessíveis e fáceis de usar.
                            </p>

                            {/* Subseção de Certificações */}
                            <div className="mt-8 pt-6 border-t border-indigo-50">
                                <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2">
                                    <i className="fas fa-certificate text-indigo-600"></i> Certificações
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-left">
                                    <div className="flex items-center gap-3 bg-zinc-50 p-3 rounded-lg border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span><strong className="text-slate-800">Front-end em React</strong> — Ada Tech</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-zinc-50 p-3 rounded-lg border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span><strong className="text-slate-800">JavaScript: O Guia Completo de A - Z</strong> — Udemy</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-zinc-50 p-3 rounded-lg border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span><strong className="text-slate-800">NLW Connect Fullstack</strong> — Rocketseat</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-zinc-50 p-3 rounded-lg border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span><strong className="text-slate-800">Imersão com Google Gemini</strong> — Alura</span>
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