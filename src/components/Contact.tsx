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
        <section id="contact" className="bg-slate-50/30 text-slate-800 border-b border-slate-100">
            <div className="container mx-auto px-4 py-10 md:py-14 scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-8">
                        <span className="inline-block p-3 rounded-xl bg-white shadow-sm ring-1 ring-slate-100 text-indigo-600 mb-4 animate-pulse">
                            <i className="fas fa-comment-dots text-xl"></i>
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black mb-0 text-slate-950 tracking-tighter">Vamos Conversar?</h2>
                        
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-4 space-y-4">
                            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-slate-300 transition-all group">
                                <h3 className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-2">Disponibilidade</h3>
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <p className="text-slate-900 font-bold text-[13px] tracking-tight">Aberto a novos projetos</p>
                                </div>
                            </div>

                            <a href="mailto:angelosilvano.dev@gmail.com" className="block bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:bg-slate-50 transition-all group">
                                <div className="bg-indigo-50 w-9 h-9 rounded-lg flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-105 transition-transform shadow-sm">
                                    <i className="fas fa-envelope text-sm"></i>
                                </div>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">E-mail</p>
                                <p className="text-slate-900 font-bold break-all text-[13px] tracking-tight">angelosilvano.dev@gmail.com</p>
                            </a>

                            <a href="https://wa.me/5584999566634" target="_blank" rel="noopener noreferrer" className="block bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:bg-slate-50 transition-all group">
                                <div className="bg-indigo-50 w-9 h-9 rounded-lg flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-105 transition-transform shadow-sm">
                                    <i className="fab fa-whatsapp text-sm"></i>
                                </div>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                                <p className="text-slate-900 font-bold text-[13px] tracking-tight">+55 (84) 99956-6634</p>
                            </a>

                            <div className="flex gap-4 mt-2">
                                <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" className="w-full py-3 flex justify-center items-center text-slate-400 bg-white border border-slate-100 rounded-xl hover:text-indigo-600 hover:border-indigo-200 transition-all duration-500 group">
                                    <i className="fab fa-linkedin text-2xl group-hover:scale-110 transition-transform"></i>
                                </a>
                                <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" className="w-full py-3 flex justify-center items-center text-slate-400 bg-white border border-slate-100 rounded-xl hover:text-slate-950 hover:border-slate-400 transition-all duration-500 group">
                                    <i className="fab fa-github text-2xl group-hover:scale-110 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-8">
                            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
                                <h3 className="text-lg md:text-xl font-black text-slate-950 mb-6 tracking-tight">Envie uma mensagem</h3>
                                
                                {/* Feedbacks Visuais */}
                                {status === 'success' && (
                                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-3 rounded-xl mb-6 text-[13px] flex items-center animate-in fade-in duration-500">
                                        <i className="fas fa-check-circle mr-2"></i> Mensagem enviada com sucesso!
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-[13px] flex items-center animate-in fade-in duration-500">
                                        <i className="fas fa-exclamation-circle mr-2"></i> Ops! Ocorreu um erro ao enviar. Tente novamente.
                                    </div>
                                )}
                                {status === 'confirm_domain' && (
                                    <div className="bg-indigo-50 border border-indigo-100 text-indigo-900 px-5 py-4 rounded-xl mb-6 text-[13px] flex flex-col gap-2 animate-in slide-in-from-top-4 duration-500">
                                        <p><i className="fas fa-info-circle mr-2"></i> Este provedor de e-mail não é comum. Deseja enviar mesmo assim?</p>
                                        <button onClick={() => setStatus('idle')} className="text-[10px] font-black uppercase tracking-widest underline underline-offset-4 hover:text-indigo-600 transition-colors">Não, vou corrigir</button>
                                    </div>
                                )}

                                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="block text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Seu Nome</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className={`w-full p-3.5 bg-slate-50/50 border-2 ${fieldErrors.name ? 'border-red-400' : 'border-transparent focus:border-indigo-600'} rounded-xl focus:outline-none transition-all text-[13px] font-semibold text-slate-900 placeholder:text-slate-400`} 
                                            placeholder="Como te chamam?" 
                                            required 
                                        />
                                        {fieldErrors.name && <p className="text-red-500 text-[10px] font-black uppercase tracking-wider ml-1">{fieldErrors.name}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="block text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Seu E-mail</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className={`w-full p-3.5 bg-slate-50/50 border-2 ${fieldErrors.email ? 'border-red-400' : 'border-transparent focus:border-indigo-600'} rounded-xl focus:outline-none transition-all text-[13px] font-semibold text-slate-900 placeholder:text-slate-400`} 
                                            placeholder="seu@email.com" 
                                            required 
                                        />
                                        {fieldErrors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-wider ml-1">{fieldErrors.email}</p>}
                                    </div>
                                    <div className="md:col-span-2 space-y-1.5">
                                        <label htmlFor="message" className="block text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Sua Mensagem</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={4} 
                                            className={`w-full p-3.5 bg-slate-50/50 border-2 ${fieldErrors.message ? 'border-red-400' : 'border-transparent focus:border-indigo-600'} rounded-xl focus:outline-none transition-all text-[13px] font-semibold text-slate-900 placeholder:text-slate-400 resize-none`} 
                                            placeholder="No que eu posso te ajudar hoje?" 
                                            required 
                                        ></textarea>
                                        {fieldErrors.message && <p className="text-red-500 text-[10px] font-black uppercase tracking-wider ml-1">{fieldErrors.message}</p>}
                                    </div>
                                    <div className="md:col-span-2 pt-2">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className="w-full bg-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <><i className="fas fa-spinner fa-spin mr-2"></i> Enviando...</>
                                            ) : status === 'confirm_domain' ? (
                                                <>Confirmar e Enviar Agora <i className="fas fa-check ml-2"></i></>
                                            ) : (
                                                <>Enviar Proposta <i className="fas fa-paper-plane ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i></>
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