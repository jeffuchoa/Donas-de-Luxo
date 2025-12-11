import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import logoOriginal from "/src/assets/logo.png"
import whatsap from '../../public/whatsapp.png'
import assinatura from "/src/assets/assinatura2.png"


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-card-border py-16 px-4 lg:px-8">
    
      <div className="container mx-auto">
          <img
                  src={logoOriginal}
                  alt="Donas D'Luxe Original"
                  // Visível SOMENTE em telas >= 1024px
                  className='h-8 lg:h-10 logo-footer'
                />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            
            <p className="text-muted-foreground leading-relaxed">
              Oferecendo não apenas produtos de qualidade, mas também experiências únicas para suas clientes.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5588921796197&text&type=phone_number&app_absent=0&utm_source=ig"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="Twitter"
              >
                <img src={whatsap} className='icon-botao-contact2'/>
              </a>
              <a
                href="https://www.instagram.com/donasdluxo/"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="LinkedIn"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Donas d' Luxo</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#Produtos" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Produtos
                </a>
              </li>
              
            </ul>
          </div>


        
        </div>
        <div className="desenvolvido">
          <p>Desenvolvido por</p>
          <a href="https://github.com/jeffuchoa"><img src={assinatura} alt="" /></a>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;