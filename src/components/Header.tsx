import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle'; // Mantido, mas não usado
import logo from "../assets/logo.png"
import logobranca from "../assets/logobranca.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se a posição de scroll vertical (scrollY) é maior que 10
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Classe CSS dinâmica para o HEADER (Background + Gradiente)
  const headerClasses = isScrolled
    ? "bg-white/90 backdrop-blur-lg shadow-sm" // Scrollado (Branco)
    // ADICIONAMOS O GRADIENTE PRETO/TRANSPARENTE ABAIXO:
    : "bg-transparent "; // No Topo (Transparente + Gradiente)

  // 2. Classe CSS dinâmica para o TEXTO
  const textClasses = isScrolled
    ? "text-gray-700"  // Scrollado (Texto escuro)
    : "text-white";    // No Topo (Texto branco)

  // Caminhos das Logos
  const logoOriginal = logo; // Logo Original (Dourada/Escura)
  const logoBranca = logobranca; // Logo Branca

  const shadowClass = isScrolled
    ? "" // Scrollado (fundo branco), sem sombra
    : "text-contrast-shadow"; // No Topo (fundo transparente/escuro), aplica a sombra




  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <nav className="container mx-auto px-10 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO - Lógica de Troca por Breakpoint LG */}
          <a href="#home">
            {/* 1. Versão Desktop (Sempre Dourada/Original) */}
            <img
              src={logoOriginal}
              alt="Donas D'Luxe Original"
              // Visível SOMENTE em telas >= 1024px
              className='h-8 lg:h-10 hidden lg:block'
            />

            {/* 2. Versão Mobile/Tablet (Troca dinâmica de cor com scroll) */}
            <img
              // Troca de cor dinâmica
              src={isScrolled ? logoOriginal : logoBranca}
              alt="Donas D'Luxe Dinâmico"
              // Visível SOMENTE em telas < 1024px
              className='h-8 lg:h-10 lg:hidden'
            />
          </a>

          {/* Desktop Navigation (Visível em LG e acima) */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Aplicamos a classe de sombra aqui */}
            <a href="#home" className={`${textClasses} ${shadowClass} hover:text-gray-300 transition-colors`}>
              Home
            </a>
            <a href="#sobre" className={`${textClasses} ${shadowClass} hover:text-gray-300 transition-colors`}>
              Sobre
            </a>
            <a href="#Produtos" className={`${textClasses} ${shadowClass} hover:text-gray-300 transition-colors`}>
              Produtos
            </a>
            <a href="#contact" className={`${textClasses} ${shadowClass} hover:text-gray-300 transition-colors`}>
              Contato
            </a>

            {/* Botão CTA (Não precisa de text-shadow) */}
          </div>


          {/* Mobile Actions (Visível abaixo de LG) */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost" // Mantém o fundo transparente e sem bordas
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              // A cor do ícone muda dinamicamente
              className={`${textClasses} hover:bg-black/20 transition-colors`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation (Visível abaixo de LG) */}
        {isMenuOpen && (
          // Adicionamos 'rounded-xl' e 'px-6' para um espaçamento/borda maior
          // O 'shadow-xl' ajuda a dar profundidade ao menu
          <div className="lg:hidden py-4 px-6 border-t border-gray-200 bg-white rounded-xl shadow-xl animate-in fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#Produtos"
                className="text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;