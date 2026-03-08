import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-slate-50/30 border-b border-slate-100">
            <div className="container mx-auto px-6 py-16 md:py-24 scroll-mt-20">
                {/* Título com margem aumentada para compensar a remoção do texto de apoio */}
                <h2 className="text-2xl md:text-3xl font-black text-center mb-16 section-title text-slate-950 tracking-tight">Serviços</h2>
                
                
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Serviço 1: Desenvolvimento Web */}
                    <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center hover:-translate-y-1.5 group">
                        <div className="mb-5 text-slate-950 bg-white shadow-sm ring-1 ring-slate-100 rounded-2xl p-4 inline-block group-hover:scale-105 transition-transform duration-500">
                            <i className="fas fa-laptop-code fa-lg w-6 h-6 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Desenvolvimento Web</h3>
                        <p className="text-slate-600 leading-relaxed text-[13px] md:text-sm font-medium">
                            Desenvolvo sites rápidos e modernos, com navegação fácil em qualquer dispositivo.
                        </p>
                    </div>

                    {/* Serviço 2: Loja Virtual */}
                    <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center hover:-translate-y-1.5 group">
                        <div className="mb-5 text-slate-950 bg-white shadow-sm ring-1 ring-slate-100 rounded-2xl p-4 inline-block group-hover:scale-105 transition-transform duration-500">
                            <i className="fas fa-store fa-lg w-6 h-6 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Loja Virtual</h3>
                        <p className="text-slate-600 leading-relaxed text-[13px] md:text-sm font-medium">
                            Monto sua loja virtual com vitrine, carrinho e pagamentos, pronta pra vender 24h por dia.
                        </p>
                    </div>

                    {/* Serviço 3: Manutenção */}
                    <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center hover:-translate-y-1.5 group">
                        <div className="mb-5 text-slate-950 bg-white shadow-sm ring-1 ring-slate-100 rounded-2xl p-4 inline-block group-hover:scale-105 transition-transform duration-500">
                            <i className="fas fa-tools fa-lg w-6 h-6 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Manutenção</h3>
                        <p className="text-slate-600 leading-relaxed text-[13px] md:text-sm font-medium">
                            Deixo seu site sempre seguro, atualizado e funcionando bem, sem preocupações para você.
                        </p>
                    </div>
                </div>

                {/* Botão de Contato mantendo o padrão sóbrio aprovado */}
                <div className="text-center mt-16">
                    <a 
                        href="https://wa.me/5584999566634?text=Olá,%20Ângelo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-slate-950 text-white text-[13px] md:text-sm font-bold py-3.5 px-8 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200 active:scale-95"
                    >
                        <i className="fab fa-whatsapp text-xl text-emerald-400"></i> Vamos conversar sobre seu projeto?
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;