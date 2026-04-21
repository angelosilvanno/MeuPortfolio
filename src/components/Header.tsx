import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out border-b ${isScrolled ? 'py-2 bg-white/70 backdrop-blur-xl shadow-sm border-slate-200/60' : 'py-4 bg-transparent border-transparent'}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center relative">
                <a href="#welcome" aria-label="Ângelo Silvano - Voltar ao início" className="text-xl md:text-2xl font-mono font-bold tracking-tighter transition-all transform hover:scale-105 active:scale-95 bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    &lt;Ângelo /&gt;
                </a>
                
                <button 
                    id="menu-toggle" 
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none text-slate-600 hover:text-indigo-600 transition-all transform active:scale-90" 
                    aria-label="Abrir menu"
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                </button>

                <ul id="menu" className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-x-1 text-slate-500 font-semibold items-center">
                    <li><a href="#about" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-indigo-600 hover:bg-indigo-50/50 transition-all tracking-tight">{t('nav.about')}</a></li>
                    <li><a href="#projects" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-indigo-600 hover:bg-indigo-50/50 transition-all tracking-tight">{t('nav.projects')}</a></li>
                    <li><a href="#skills" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-indigo-600 hover:bg-indigo-50/50 transition-all tracking-tight">{t('nav.skills')}</a></li>
                    <li><a href="#contact" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-indigo-600 hover:bg-indigo-50/50 transition-all tracking-tight">{t('nav.contact')}</a></li>
                </ul>

                <ul className="hidden md:flex items-center">
                    <li className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/40 text-[10px] font-black uppercase tracking-widest">
                        <button 
                            onClick={() => setLanguage('pt')} 
                            className={`px-3 py-1 rounded-full transition-all ${language === 'pt' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            PT
                        </button>
                        <button 
                            onClick={() => setLanguage('en')} 
                            className={`px-3 py-1 rounded-full transition-all ${language === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            EN
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Menu Mobile */}
            <ul id="mobile-menu" className={`${isMenuOpen ? 'flex animate-in fade-in slide-in-from-top-4' : 'hidden'} md:hidden bg-white/98 backdrop-blur-2xl w-full relative left-0 shadow-2xl border-t border-slate-100 py-8 flex-col font-bold text-slate-800`}>
                <li><a href="#about" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.about')}</a></li>
                <li><a href="#projects" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.projects')}</a></li>
                <li><a href="#skills" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.skills')}</a></li>
                <li><a href="#contact" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.contact')}</a></li>
                <li className="px-10 py-6 flex items-center gap-2">
                    <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 w-full justify-around uppercase tracking-widest text-[11px]">
                        <button onClick={() => { setLanguage('pt'); closeMenu(); }} className={`flex-1 py-3 rounded-lg transition-all ${language === 'pt' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400'}`}>Português</button>
                        <button onClick={() => { setLanguage('en'); closeMenu(); }} className={`flex-1 py-3 rounded-lg transition-all ${language === 'en' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400'}`}>English</button>
                    </div>
                </li>
            </ul>
        </header>
    );
};

export default Header;