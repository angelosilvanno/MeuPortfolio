import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="bg-slate-50/50 border-y border-slate-100">
            <div className="container mx-auto px-6 py-20 md:py-28 scroll-mt-20">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-12 section-title text-slate-950 tracking-tighter">
                    {t('experience.title')}
                </h2>
                

                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Experiência 1 */}
                        <div className="relative flex flex-col w-full h-full">
                            <div className="h-full flex">
                                <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col">
                                    <div className="mb-6">
                                        <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-5 py-2 rounded-full shadow-lg shadow-slate-200">
                                            {t('experience.exp1.date')}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight text-left">
                                        {t('experience.exp1.title')}
                                    </h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-6 text-sm tracking-tight text-left italic">
                                        {t('experience.exp1.sub')}
                                    </p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-4 text-sm md:text-base leading-relaxed text-left marker:text-slate-300 grow">
                                        {t('experience.exp1.desc').map((item: string, i: number) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 2 */}
                        <div className="relative flex flex-col w-full h-full">
                            <div className="h-full flex">
                                <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col">
                                    <div className="mb-6">
                                        <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-5 py-2 rounded-full shadow-lg shadow-slate-200">
                                            {t('experience.exp2.date')}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight text-left">
                                        {t('experience.exp2.title')}
                                    </h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-6 text-sm tracking-tight text-left italic">
                                        {t('experience.exp2.sub')}
                                    </p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-4 text-sm md:text-base leading-relaxed text-left marker:text-slate-300 grow">
                                        {t('experience.exp2.desc').map((item: string, i: number) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experiência 3 */}
                        <div className="relative flex flex-col w-full h-full">
                            <div className="h-full flex">
                                <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group w-full flex flex-col">
                                    <div className="mb-6">
                                        <span className="inline-block text-[10px] font-black text-white uppercase tracking-widest bg-slate-950 px-5 py-2 rounded-full shadow-lg shadow-slate-200">
                                            {t('experience.exp3.date')}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight text-left">
                                        {t('experience.exp3.title')}
                                    </h3>
                                    <p className="text-indigo-600 font-bold mt-2 mb-6 text-sm tracking-tight text-left italic">
                                        {t('experience.exp3.sub')}
                                    </p>
                                    <ul className="list-disc list-outside ml-5 text-slate-600 space-y-4 text-sm md:text-base leading-relaxed text-left marker:text-slate-300 grow">
                                        {t('experience.exp3.desc').map((item: string, i: number) => (
                                            <li key={i}>{item}</li>
                                        ))}
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