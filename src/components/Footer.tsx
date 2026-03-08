import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50/30 text-slate-500 border-t border-slate-100">
            <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[13px] font-bold tracking-tight">© <span>{currentYear}</span> Ângelo Silvano. Todos os direitos reservados.</p>
                <div className="flex items-center gap-x-8">
                    <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all transform hover:-translate-y-1 duration-300" title="GitHub">
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all transform hover:-translate-y-1 duration-300" title="LinkedIn">
                        <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="mailto:angelosilvano.dev@gmail.com" className="text-slate-400 hover:text-slate-900 transition-all transform hover:-translate-y-1 duration-300" title="E-mail">
                        <i className="fas fa-envelope text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;