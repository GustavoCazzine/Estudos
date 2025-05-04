
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fishing-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-6 w-6" />
              <span className="text-xl font-serif font-bold">Hook & Catch</span>
            </div>
            <p className="text-fishing-100 opacity-80 max-w-xs">
              Equipamentos de pesca premium para o pescador moderno. Produtos de qualidade para todas as aventuras de pesca.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-white hover:text-fishing-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-fishing-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-fishing-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-fishing-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-fishing-100 hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/shop" className="text-fishing-100 hover:text-white transition-colors">Loja</Link>
              </li>
              <li>
                <Link to="/events" className="text-fishing-100 hover:text-white transition-colors">Eventos</Link>
              </li>
              <li>
                <Link to="/blog" className="text-fishing-100 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-fishing-100 hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contact" className="text-fishing-100 hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Atendimento ao Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-fishing-100 hover:text-white transition-colors">Perguntas Frequentes</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-fishing-100 hover:text-white transition-colors">Envio & Devoluções</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-fishing-100 hover:text-white transition-colors">Garantia</Link>
              </li>
              <li>
                <Link to="/terms" className="text-fishing-100 hover:text-white transition-colors">Termos & Condições</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-fishing-100 hover:text-white transition-colors">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contate-nos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-fishing-400 flex-shrink-0 mt-0.5" />
                <span className="text-fishing-100">Av. dos Pescadores, 123, São Paulo - SP, 01234-567, Brasil</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fishing-400 flex-shrink-0" />
                <span className="text-fishing-100">(11) 91234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fishing-400 flex-shrink-0" />
                <span className="text-fishing-100">contato@hookandcatch.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-fishing-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-fishing-100 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Hook & Catch. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <img src="https://placehold.co/40x24/png" alt="Visa" className="h-6" />
              <img src="https://placehold.co/40x24/png" alt="Mastercard" className="h-6" />
              <img src="https://placehold.co/40x24/png" alt="American Express" className="h-6" />
              <img src="https://placehold.co/40x24/png" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
