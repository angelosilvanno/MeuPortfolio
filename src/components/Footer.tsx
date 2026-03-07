import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">© <span>{currentYear}</span> Ângelo Silvano. Todos os direitos reservados.</p>
                <div className="flex items-center gap-x-6">
                    <a href="https://github.com/angelosilvanno" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/angelosilvanno/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
                        <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="mailto:angelosilvano.dev@gmail.com" className="hover:text-white transition-colors" title="E-mail">
                        <i className="fas fa-envelope text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;