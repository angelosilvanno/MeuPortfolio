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

function App() {
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