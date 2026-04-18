import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-slate-50/30 border-b border-slate-100">
            <div className="container mx-auto px-6 py-20 md:py-28 scroll-mt-20">
                {/* Título com margem reduzida para maior aproximação */}
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12 section-title text-slate-950 tracking-tighter">Serviços</h2>
                
                
                <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                    {/* Serviço 1: Desenvolvimento Web */}
                    <div className="bg-white border border-slate-100 rounded-4xl p-8 md:p-10 text-center shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center hover:-translate-y-2 group">
                        <div className="mb-6 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                            <i className="fas fa-laptop-code text-3xl md:text-4xl w-12 h-12 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-xl font-black mb-3 text-slate-950 tracking-tight">Desenvolvimento Web</h3>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                            Desenvolvo sites rápidos e modernos, com navegação fácil em qualquer dispositivo.
                        </p>
                    </div>

                    {/* Serviço 2: Loja Virtual */}
                    <div className="bg-white border border-slate-100 rounded-4xl p-8 md:p-10 text-center shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center hover:-translate-y-2 group">
                        <div className="mb-6 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                            <i className="fas fa-store text-3xl md:text-4xl w-12 h-12 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-xl font-black mb-3 text-slate-950 tracking-tight">Loja Virtual</h3>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                            Monto sua loja virtual com vitrine, carrinho e pagamentos, pronta pra vender 24h por dia.
                        </p>
                    </div>

                    {/* Serviço 3: Manutenção */}
                    <div className="bg-white border border-slate-100 rounded-4xl p-8 md:p-10 text-center shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center hover:-translate-y-2 group">
                        <div className="mb-6 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                            <i className="fas fa-tools text-3xl md:text-4xl w-12 h-12 flex items-center justify-center"></i>
                        </div>
                        <h3 className="text-xl font-black mb-3 text-slate-950 tracking-tight">Manutenção</h3>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                            Deixo seu site sempre seguro, atualizado e funcionando bem, sem preocupações para você.
                        </p>
                    </div>
                </div>

                {/* Botão de Contato mantendo o padrão sóbrio aprovado */}
                <div className="text-center mt-16 md:mt-20">
                    <a 
                        href="https://wa.me/5584999566634?text=Olá,%20Ângelo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-slate-950 text-white text-sm md:text-base font-bold py-4 px-10 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-95"
                    >
                        <i className="fab fa-whatsapp text-xl text-emerald-400"></i> Vamos conversar sobre seu projeto?
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;