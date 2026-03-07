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
            className={`fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-40 hover:bg-indigo-700 active:scale-90 ${
                isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-10'
            }`}
            title="Voltar ao topo"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTop;