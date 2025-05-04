
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Mail, Instagram, Facebook, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-salon-beige pt-16 pb-6">
      <div className="container-salon">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="text-2xl font-playfair font-bold">
              <span className="text-salon-gold">Natural</span>
              <span className="mx-1">Beauty</span>
              <span className="text-salon-gold">Space</span>
            </div>
            <p className="text-salon-light-text">
              Especialistas em design de sobrancelhas e extensão de cílios, com foco em realçar 
              sua beleza natural com tratamentos personalizados.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" className="text-salon-light-text hover:text-salon-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-salon-light-text hover:text-salon-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/123456789" className="text-salon-light-text hover:text-salon-gold transition-colors" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-medium">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-salon-light-text hover:text-salon-gold transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-salon-light-text hover:text-salon-gold transition-colors">
                  Agendar Horário
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-salon-light-text hover:text-salon-gold transition-colors">
                  Galeria de Trabalhos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-salon-light-text hover:text-salon-gold transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-salon-light-text hover:text-salon-gold transition-colors">
                  Dicas de Beleza
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-medium">Contato & Horários</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-salon-light-text">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Rua dos Cílios, 123<br />Centro<br />Piracicaba - SP</span>
              </li>
              <li className="flex items-center text-salon-light-text">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 9876-5432</span>
              </li>
              <li className="flex items-center text-salon-light-text">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@naturalbeauty.com</span>
              </li>
            </ul>
            
            <h4 className="text-md font-playfair font-medium mt-4">Horário de Funcionamento</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-salon-light-text">
                <Clock className="h-4 w-4 mr-2" />
                <span>Terça - Sexta: 9h às 19h</span>
              </li>
              <li className="flex items-center text-salon-light-text">
                <Clock className="h-4 w-4 mr-2" />
                <span>Sábado: 9h às 18h</span>
              </li>
              <li className="flex items-center text-salon-light-text">
                <Clock className="h-4 w-4 mr-2" />
                <span>Domingo - Segunda: Fechado</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link to="/booking" className="text-salon-gold hover:text-salon-terracotta transition-colors font-medium">
                Agende seu horário →
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 py-8 border-t border-b border-salon-pink/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <h3 className="text-xl font-playfair font-medium">Receba Novidades</h3>
              <p className="text-salon-light-text mt-2">10% OFF no primeiro agendamento.</p>
            </div>
            <div className="md:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="input-salon flex-1" 
                  required
                  aria-label="Seu email para newsletter"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-salon-light-text text-sm">
          <p>© {new Date().getFullYear()} Natural Beauty Space. Todos os direitos reservados.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-salon-gold transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-salon-gold transition-colors">
              Termos de Uso
            </Link>
            <Link to="/cancellation" className="hover:text-salon-gold transition-colors">
              Política de Cancelamento
            </Link>
            <Link to="/cookies" className="hover:text-salon-gold transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
