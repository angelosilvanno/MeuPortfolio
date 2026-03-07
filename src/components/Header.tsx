import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Lógica para mudar o estilo do header ao rolar (substitui o handleHeaderScroll do JS antigo)
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
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out border-b ${isScrolled ? 'bg-white/95 shadow-md border-slate-100' : 'bg-white/90 backdrop-blur-md border-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#welcome" aria-label="Ângelo Silvano - Voltar ao início" className="text-xl font-mono font-bold text-slate-900 tracking-tight hover:text-indigo-600 transition-colors">
                    &lt;Ângelo /&gt;
                </a>
                
                <button 
                    id="menu-toggle" 
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none text-slate-600 hover:text-indigo-600 transition-all" 
                    aria-label="Abrir menu"
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                </button>

                <ul id="menu" className="hidden md:flex gap-x-2 text-slate-600 font-semibold items-center">
                    <li><a href="#welcome" className="text-sm px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">Início</a></li>
                    <li><a href="#about" className="text-sm px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">Sobre</a></li>
                    <li><a href="#experience" className="text-sm px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">Experiência</a></li>
                    <li><a href="#services" className="text-sm px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">Serviços</a></li>
                    <li><a href="#projects" className="text-sm px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">Projetos</a></li>
                    <li><a href="#skills" className="text-sm px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">Habilidades</a></li>
                    <li><a href="#contact" className="ml-2 bg-indigo-600 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 active:scale-95">Contato</a></li>
                </ul>
            </nav>

            {/* Menu Mobile */}
            <ul id="mobile-menu" className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden bg-white w-full absolute left-0 shadow-2xl border-t border-slate-100 py-6 flex-col font-bold text-slate-700`}>
                <li><a href="#welcome" onClick={closeMenu} className="px-10 py-4 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50">Início</a></li>
                <li><a href="#about" onClick={closeMenu} className="px-10 py-4 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50">Sobre</a></li>
                <li><a href="#experience" onClick={closeMenu} className="px-10 py-4 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50">Experiência</a></li>
                <li><a href="#services" onClick={closeMenu} className="px-10 py-4 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50">Serviços</a></li>
                <li><a href="#projects" onClick={closeMenu} className="px-10 py-4 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50">Projetos</a></li>
                <li><a href="#skills" onClick={closeMenu} className="px-10 py-4 hover:bg-indigo-50 hover:text-indigo-600 transition-colors block border-b border-slate-50">Habilidades</a></li>
                <li><a href="#contact" onClick={closeMenu} className="px-10 py-4 bg-indigo-600 text-white text-center mx-6 my-4 rounded-xl shadow-lg shadow-indigo-100">Contato</a></li>
            </ul>
        </header>
    );
};

export default Header;