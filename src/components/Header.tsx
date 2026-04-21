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
        <header className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out border-b ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-slate-200/60' : 'bg-transparent border-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 md:py-5 flex justify-between items-center">
                <a href="#welcome" aria-label="Ângelo Silvano - Voltar ao início" className="text-xl md:text-2xl font-mono font-bold text-slate-900 tracking-tighter hover:text-indigo-600 transition-all transform hover:scale-105 active:scale-95">
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

                <ul id="menu" className="hidden md:flex gap-x-2 lg:gap-x-4 text-slate-500 font-semibold items-center">
                    <li><a href="#about" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100/80 transition-all tracking-tight">{t('nav.about')}</a></li>
                    <li><a href="#projects" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100/80 transition-all tracking-tight">{t('nav.projects')}</a></li>
                    <li><a href="#skills" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100/80 transition-all tracking-tight">{t('nav.skills')}</a></li>
                    <li><a href="#contact" className="text-[13px] lg:text-sm px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100/80 transition-all tracking-tight">{t('nav.contact')}</a></li>
                    
                    <li className="ml-2 pl-2 border-l border-slate-200 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                        <button 
                            onClick={() => setLanguage('pt')} 
                            className={`transition-colors ${language === 'pt' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            PT
                        </button>
                        <span className="text-slate-300">/</span>
                        <button 
                            onClick={() => setLanguage('en')} 
                            className={`transition-colors ${language === 'en' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            EN
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Menu Mobile */}
            <ul id="mobile-menu" className={`${isMenuOpen ? 'flex animate-in fade-in slide-in-from-top-4' : 'hidden'} md:hidden bg-white/98 backdrop-blur-2xl w-full absolute left-0 shadow-2xl border-t border-slate-100 py-8 flex-col font-bold text-slate-800`}>
                <li><a href="#about" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.about')}</a></li>
                <li><a href="#projects" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.projects')}</a></li>
                <li><a href="#skills" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.skills')}</a></li>
                <li><a href="#contact" onClick={closeMenu} className="px-10 py-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50/50">{t('nav.contact')}</a></li>
                <li className="px-10 py-6 flex gap-4 uppercase tracking-widest text-xs">
                    <button onClick={() => { setLanguage('pt'); closeMenu(); }} className={language === 'pt' ? 'text-indigo-600' : 'text-slate-400'}>Português</button>
                    <button onClick={() => { setLanguage('en'); closeMenu(); }} className={language === 'en' ? 'text-indigo-600' : 'text-slate-400'}>English</button>
                </li>
            </ul>
        </header>
    );
};

export default Header;