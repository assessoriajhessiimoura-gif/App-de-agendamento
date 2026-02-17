import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('inicio')}
          className="text-xl font-serif text-[#3A2E2A] font-semibold tracking-wide hover:text-[#C6A75E] transition-colors duration-300"
        >
          BIANCA MOURA
        </button>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-[#3A2E2A] hover:text-[#C6A75E] transition-all duration-300 relative group"
          >
            Início
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A75E] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('procedimentos')}
            className="text-[#3A2E2A] hover:text-[#C6A75E] transition-all duration-300 relative group"
          >
            Procedimentos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A75E] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-[#3A2E2A] hover:text-[#C6A75E] transition-all duration-300 relative group"
          >
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A75E] group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
