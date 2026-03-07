import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-white">
            <div className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
                <h2 className="text-3xl font-bold text-center mb-4 section-title text-indigo-600">O que eu faço na prática</h2>
                <p className="text-lg text-center mb-12 text-slate-700 max-w-3xl mx-auto">
                    Com minhas habilidades, sua ideia se torna uma presença online de sucesso. Veja como posso te ajudar:
                </p>
                
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Serviço 1: Desenvolvimento Web */}
                    <div className="bg-zinc-50 border border-indigo-50 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-1">
                        <div className="mb-4 text-indigo-600 bg-indigo-50 rounded-full p-4 inline-block">
                            <i className="fas fa-laptop-code fa-2x w-8 h-8 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Desenvolvimento Web</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            Desenvolvo sites rápidos e modernos, com navegação fácil em qualquer dispositivo.
                        </p>
                    </div>

                    {/* Serviço 2: Loja Virtual */}
                    <div className="bg-zinc-50 border border-indigo-50 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-1">
                        <div className="mb-4 text-indigo-600 bg-indigo-50 rounded-full p-4 inline-block">
                            <i className="fas fa-store fa-2x w-8 h-8 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Loja Virtual</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            Monto sua loja virtual com vitrine, carrinho e pagamentos, pronta pra vender 24h por dia.
                        </p>
                    </div>

                    {/* Serviço 3: Manutenção */}
                    <div className="bg-zinc-50 border border-indigo-50 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-1">
                        <div className="mb-4 text-indigo-600 bg-indigo-50 rounded-full p-4 inline-block">
                            <i className="fas fa-tools fa-2x w-8 h-8 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Manutenção</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            Deixo seu site sempre seguro, atualizado e funcionando bem, sem preocupações para você.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://wa.me/5584999566634?text=Olá,%20Ângelo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow hover:shadow-md transform hover:-translate-y-1"
                    >
                        <i className="fab fa-whatsapp text-2xl"></i> Vamos conversar sobre seu projeto?
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;