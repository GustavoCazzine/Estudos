
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-salon flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <div className="text-2xl font-playfair font-bold text-salon-dark-text flex items-center">
            <span className="text-salon-gold">Natural</span>
            <span className="mx-1">Beauty</span>
            <span className="text-salon-gold">Space</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
            Home
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>
            Serviços
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
            Sobre
          </Link>
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'nav-link-active' : ''}`}>
            Portfólio
          </Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'nav-link-active' : ''}`}>
            Blog
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>
            Contato
          </Link>
          <Link to="/booking" className="btn-primary text-sm py-2 px-5">
            Agendar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-salon-dark-text" />
          ) : (
            <Menu className="h-6 w-6 text-salon-dark-text" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container-salon py-4 space-y-4 flex flex-col">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}
            onClick={closeMobileMenu}
          >
            Serviços
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            onClick={closeMobileMenu}
          >
            Sobre
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${isActive('/portfolio') ? 'nav-link-active' : ''}`}
            onClick={closeMobileMenu}
          >
            Portfólio
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${isActive('/blog') ? 'nav-link-active' : ''}`}
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contato
          </Link>
          <Link
            to="/booking"
            className="btn-primary w-full text-center py-2"
            onClick={closeMobileMenu}
          >
            Agendar
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
