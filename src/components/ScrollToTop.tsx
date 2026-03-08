import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-slate-950/90 backdrop-blur-md text-white p-3.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-800 transition-all duration-500 z-50 hover:bg-slate-800 hover:-translate-y-1.5 active:scale-95 ${
                isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-12'
            }`}
            title="Voltar ao topo"
        >
            <i className="fas fa-arrow-up text-sm"></i>
        </button>
    );
};

export default ScrollToTop;