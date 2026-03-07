import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    // --- Lógica de Scroll Spy (Destaque do Menu) ---
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('#menu a[href^="#"]');

    const handleScrollSpy = () => {
      let currentSectionId = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSectionId = section.getAttribute('id') || "";
        }
      });

      menuLinks.forEach((link) => {
        link.classList.remove('text-indigo-600', 'font-bold');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('text-indigo-600', 'font-bold');
        }
      });
    };

    // --- Inicialização do ScrollReveal ---
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal('#welcome h1, #welcome p', { origin: 'left', interval: 100 });
    sr.reveal('#welcome img', { origin: 'right', delay: 400 });
    sr.reveal('.section-title', { origin: 'top' });
    sr.reveal('#services .grid > div', { interval: 150 });
    sr.reveal('#projects .grid > div', { interval: 150 });
    sr.reveal('#skills .grid > div', { interval: 100 });

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="font-sans bg-zinc-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;