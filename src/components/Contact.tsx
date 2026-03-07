import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'confirm_domain'>('idle');
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        
        const name = (formData.get('name') as string).trim();
        const email = (formData.get('email') as string).trim();
        const message = (formData.get('message') as string).trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset de estados
        setFieldErrors({});
        setStatus('idle');

        // Validações de campo (Substituindo alerts)
        const errors: { [key: string]: string } = {};
        if (name.length < 2) errors.name = "Por favor, insira seu nome completo.";
        if (!emailRegex.test(email)) errors.email = "Insira um e-mail válido.";
        if (message.length < 10) errors.message = "Sua mensagem deve ter pelo menos 10 caracteres.";

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        // Validação de Domínio (Aviso em vez de window.confirm)
        const allowedDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'live.com', 'uol.com.br', 'bol.com.br', 'proton.me'];
        const emailDomain = email.split('@')[1];
        if (!allowedDomains.includes(emailDomain) && status !== 'confirm_domain') {
            setStatus('confirm_domain');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xpwpwprz", {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error();
            }
        } catch {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-zinc-50 text-slate-800 border-b border-indigo-50">
            <div className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="inline-block p-3 rounded-full bg-indigo-100 text-indigo-600 mb-4 animate-pulse">
                            <i className="fas fa-comment-dots text-2xl"></i>
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Vamos Conversar?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">Seja para um projeto, uma oportunidade ou apenas networking, estou à disposição para transformar suas ideias em realidade.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-indigo-500/50 transition-all group">
                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Disponibilidade</h3>
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <p className="text-slate-800 font-medium">Aberto a novos projetos</p>
                                </div>
                            </div>

                            <a href="mailto:angelosilvano.dev@gmail.com" className="block bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:bg-slate-50 transition-all group">
                                <div className="bg-indigo-100 w-12 h-12 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">E-mail</p>
                                <p className="text-slate-800 font-medium break-all text-sm">angelosilvano.dev@gmail.com</p>
                            </a>

                            <a href="https://wa.me/5584999566634" target="_blank" rel="noopener noreferrer" className="block bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:bg-slate-50 transition-all group">
                                <div className="bg-emerald-100 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fab fa-whatsapp text-xl"></i>
                                </div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                                <p className="font-medium text-black">+55 (84) 99956-6634</p>
                            </a>

                            <div className="flex gap-4 mt-2">
                                <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" className="w-full py-4 flex justify-center items-center text-slate-600 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all group">
                                    <i className="fab fa-linkedin text-2xl group-hover:scale-110 transition-transform"></i>
                                </a>
                                <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" className="w-full py-4 flex justify-center items-center text-slate-600 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all group">
                                    <i className="fab fa-github text-2xl group-hover:scale-110 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-8">
                            <div className="bg-white border border-slate-200 rounded-4xl p-8 md:p-10 shadow-xl shadow-indigo-500/5">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Envie uma mensagem</h3>
                                
                                {/* Feedbacks Visuais */}
                                {status === 'success' && (
                                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 text-sm flex items-center animate-bounce">
                                        <i className="fas fa-check-circle mr-2"></i> Mensagem enviada com sucesso!
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm flex items-center">
                                        <i className="fas fa-exclamation-circle mr-2"></i> Ops! Ocorreu um erro ao enviar. Tente novamente.
                                    </div>
                                )}
                                {status === 'confirm_domain' && (
                                    <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl mb-6 text-sm flex flex-col gap-2">
                                        <p><i className="fas fa-info-circle mr-2"></i> Este provedor de e-mail não é comum. Deseja enviar mesmo assim?</p>
                                        <button onClick={() => setStatus('idle')} className="text-xs font-bold underline text-left">Não, vou corrigir</button>
                                    </div>
                                )}

                                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 ml-1">Seu Nome</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className={`w-full p-4 bg-zinc-50 border ${fieldErrors.name ? 'border-red-500' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition text-slate-900`} 
                                            placeholder="Como te chamam?" 
                                        />
                                        {fieldErrors.name && <p className="text-red-500 text-xs font-semibold ml-1">{fieldErrors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 ml-1">Seu E-mail</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className={`w-full p-4 bg-zinc-50 border ${fieldErrors.email ? 'border-red-500' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition text-slate-900`} 
                                            placeholder="seu@email.com" 
                                        />
                                        {fieldErrors.email && <p className="text-red-500 text-xs font-semibold ml-1">{fieldErrors.email}</p>}
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 ml-1">Sua Mensagem</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={5} 
                                            className={`w-full p-4 bg-zinc-50 border ${fieldErrors.message ? 'border-red-500' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition resize-none text-slate-900`} 
                                            placeholder="No que eu posso te ajudar hoje?" 
                                        ></textarea>
                                        {fieldErrors.message && <p className="text-red-500 text-xs font-semibold ml-1">{fieldErrors.message}</p>}
                                    </div>
                                    <div className="md:col-span-2 pt-2">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className="w-full bg-indigo-600 text-white py-5 px-8 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <><i className="fas fa-spinner fa-spin mr-2"></i> Enviando...</>
                                            ) : status === 'confirm_domain' ? (
                                                <>Confirmar e Enviar Agora <i className="fas fa-check"></i></>
                                            ) : (
                                                <>Enviar Proposta <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;