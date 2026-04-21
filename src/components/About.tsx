import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
    const { t } = useLanguage();
    
    const anoInicio = 2022;
    const anosExperiencia = new Date().getFullYear() - anoInicio;
    
    const dataMigracao = new Date(2026, 1, 1);
    const mesesFullStack = (new Date().getFullYear() - dataMigracao.getFullYear()) * 12 + (new Date().getMonth() - dataMigracao.getMonth());

    return (
        <section id="about" className="bg-slate-50/50 border-b border-slate-100">
            <div className="container mx-auto px-6 py-14 md:py-20 scroll-mt-20">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
                    
                    <div className="relative shrink-0 w-full max-w-65 md:max-w-75 aspect-4/5 bg-slate-100 rounded-4xl overflow-hidden shadow-lg border border-slate-200/60 group flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(79,70,229,0.12),transparent_70%)]"></div>
                        <img 
                            src="/image/angelo.png" 
                            alt="Ângelo Silvano" 
                            loading="lazy" 
                            className="relative w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>

                    <div className="flex-1 text-left bg-white border border-slate-100 p-6 md:p-10 rounded-4xl shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-black mb-5 section-title text-slate-950 tracking-tighter">
                            {t('about.title')}
                        </h2>
                        
                        <div className="text-[13px] md:text-sm lg:text-[15px] leading-relaxed text-slate-600 space-y-4">
                            <p>{t('about.para1', anosExperiencia, mesesFullStack)}</p>
                            <p>{t('about.para2')}</p>
                            <p>{t('about.para3')}</p>

                            <div className="mt-6 pt-5 border-t border-slate-50">
                                <h3 className="text-[10px] font-black mb-3 text-slate-400 flex items-center gap-2 uppercase tracking-widest">
                                    <i className="fas fa-certificate text-indigo-500/60"></i> {t('about.certificationsTitle')}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                    <div className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 py-2 px-4 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                        <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0"></div>
                                        <span className="text-slate-500 text-[12px] group-hover:text-slate-800 transition-colors">
                                            <strong className="text-slate-900 font-bold">{t('about.cert1')}</strong> — Ada Tech
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 py-2 px-4 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                        <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0"></div>
                                        <span className="text-slate-500 text-[12px] group-hover:text-slate-800 transition-colors">
                                            <strong className="text-slate-900 font-bold">{t('about.cert2')}</strong> — Udemy
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 py-2 px-4 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                        <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0"></div>
                                        <span className="text-slate-500 text-[12px] group-hover:text-slate-800 transition-colors">
                                            <strong className="text-slate-900 font-bold">{t('about.cert3')}</strong> — Rocketseat
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 py-2 px-4 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                        <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0"></div>
                                        <span className="text-slate-500 text-[12px] group-hover:text-slate-800 transition-colors">
                                            <strong className="text-slate-900 font-bold">{t('about.cert4')}</strong> — Alura
                                        </span>
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