
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  User, 
  Heart, 
  LogOut, 
  Map, 
  Users, 
  Anchor,
  BookOpen,
  Search,
  Fish,
  ChevronDown,
  ShoppingBag,
  Phone
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import AuthModals from '../auth/AuthModals';
import ShoppingCartDrawer from '../shop/ShoppingCartDrawer';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';
import { useIsMobile } from '../../hooks/use-mobile';
import { toast } from 'sonner';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const { items: cartItems } = useCart();
  const { items: favoriteItems } = useFavorites();
  const [showMenu, setShowMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Verify current page
    setIsHomePage(location.pathname === '/');
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ensure scroll state is verified on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setShowMenu(false);
    setShowUserMenu(false);
    setShowSearchBar(false);
  }, [location.pathname]);

  useEffect(() => {
    if (showSearchBar && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchBar]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Início', icon: <Anchor className="h-4 w-4 mr-2" /> },
    { path: '/shop', label: 'Loja', icon: <ShoppingBag className="h-4 w-4 mr-2" /> },
    { path: '/events', label: 'Eventos', icon: <Users className="h-4 w-4 mr-2" /> },
    { path: '/fishing-map', label: 'Mapa de Pesca', icon: <Map className="h-4 w-4 mr-2" /> },
    { path: '/community', label: 'Comunidade', icon: <Users className="h-4 w-4 mr-2" /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { path: '/about', label: 'Sobre', icon: <User className="h-4 w-4 mr-2" /> },
  ];

  const handleFavoritesClick = () => {
    if (isAuthenticated) {
      window.location.href = '/favorites';
    } else {
      setShowAuthModal(true);
      toast.error("Você precisa estar logado para acessar seus favoritos");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setShowSearchBar(false);
    }
  };

  const getNavbarStyles = () => {
    const baseStyles = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500';
    
    if (scrolled) {
      return `${baseStyles} bg-primary shadow-lg py-2`;
    }
    
    return `${baseStyles} bg-primary/80 backdrop-blur-md py-4`;
  };

  return (
    <header className={getNavbarStyles()}>
      <div className="container-fluid">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <div className="relative mr-2">
              <Fish className="h-7 w-7 text-white transition-all duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-white tracking-wider font-serif">
                Hook <span className="text-accent">&</span> Catch
              </span>
              <span className="text-xs text-white/70 -mt-1">Equipamentos de Pesca</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button 
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="relative p-2 text-white hover:scale-110 transition-transform duration-300"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Favorites Button */}
            <button 
              onClick={handleFavoritesClick}
              className="relative p-2 text-white hover:scale-110 transition-transform duration-300 group"
              aria-label="Favorites"
            >
              <Heart className="h-5 w-5" />
              {favoriteItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 text-xs font-medium text-primary bg-white rounded-full px-1.5">
                  {favoriteItems.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button 
              onClick={() => setShowCart(true)}
              className="relative p-2 text-white hover:scale-110 transition-transform duration-300 group"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 text-xs font-medium text-primary bg-white rounded-full px-1.5">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* User Menu/Login Button */}
            {isAuthenticated ? (
              <div className="relative ml-1" ref={userMenuRef}>
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)} 
                  className="flex items-center focus:outline-none group"
                >
                  <Avatar className="h-9 w-9 border-2 border-white/30 hover:border-white transition-all duration-300">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-secondary text-white">
                      {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </button>

                {/* User dropdown menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-60 rounded-xl overflow-hidden transition-all duration-300 animate-slide-down origin-top-right z-50">
                    <div className="bg-white shadow-xl">
                      <div className="p-4 border-b border-gray-100">
                        <p className="font-medium text-gray-800">{user?.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>
                      
                      <div className="py-1">
                        <Link 
                          to="/profile" 
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="h-4 w-4 mr-3 text-primary" />
                          Meu Perfil
                        </Link>
                        <Link 
                          to="/favorites" 
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Heart className="h-4 w-4 mr-3 text-primary" />
                          Meus Favoritos
                        </Link>
                        <Link 
                          to="/fishing-map" 
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Map className="h-4 w-4 mr-3 text-primary" />
                          Mapa de Pesca
                        </Link>
                        <Link 
                          to="/community" 
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Users className="h-4 w-4 mr-3 text-primary" />
                          Comunidade
                        </Link>
                        <button 
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <LogOut className="h-4 w-4 mr-3 text-primary" />
                          Sair
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Login Button for Desktop */}
                <Button 
                  onClick={() => setShowAuthModal(true)} 
                  variant="default"
                  size="sm"
                  className="hidden md:flex ml-1 bg-white text-primary hover:bg-white/90"
                >
                  <User className="h-4 w-4 mr-1" />
                  Entrar
                </Button>
                
                {/* Login Icon for Mobile */}
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="md:hidden relative p-2 text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Login"
                >
                  <User className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden ml-1 p-2 text-white focus:outline-none hover:scale-110 transition-transform duration-300"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search Bar (Expandable) */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showSearchBar ? 'max-h-20 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}>
          <form onSubmit={handleSearch} className="flex items-center w-full">
            <div className="relative flex-grow">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="O que você está procurando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-l-lg py-2 px-4 text-white placeholder-white/60 focus:outline-none"
              />
              <button 
                type="button" 
                onClick={() => setShowSearchBar(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent/80 text-white font-medium py-2 px-4 rounded-r-lg transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`menu-mobile ${
          showMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div 
          ref={menuRef}
          className="min-h-screen px-6 py-8 flex flex-col"
        >
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <Fish className="h-7 w-7 text-accent mr-2" />
              <span className="text-xl font-bold text-white font-serif">Hook & Catch</span>
            </div>
            <button 
              onClick={() => setShowMenu(false)}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          
          {isAuthenticated && (
            <div className="mb-8">
              <div className="flex items-center p-4 rounded-lg bg-white/5">
                <Avatar className="h-14 w-14 mr-4 border-2 border-accent/50">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="bg-secondary text-white">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white text-lg">{user?.name}</p>
                  <p className="text-sm text-white/70 truncate">{user?.email}</p>
                </div>
              </div>
            </div>
          )}
          
          <nav className="flex-grow space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center py-4 text-lg ${
                  isActive(link.path) 
                    ? 'text-white font-medium' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setShowMenu(false)}
              >
                <div className={`mr-4 p-2 rounded-full ${isActive(link.path) ? 'bg-accent/20' : 'bg-white/5'}`}>
                  {React.cloneElement(link.icon, { className: 'h-5 w-5' })}
                </div>
                <span>{link.label}</span>
              </Link>
            ))}
            
            <div className="border-t border-white/10 my-6 pt-6">
              <Link
                to="/contact"
                className="flex items-center py-4 text-lg text-white/70 hover:text-white"
                onClick={() => setShowMenu(false)}
              >
                <div className="mr-4 p-2 rounded-full bg-white/5">
                  <Phone className="h-5 w-5" />
                </div>
                <span>Contato</span>
              </Link>
              
              <Link
                to="/faq"
                className="flex items-center py-4 text-lg text-white/70 hover:text-white"
                onClick={() => setShowMenu(false)}
              >
                <div className="mr-4 p-2 rounded-full bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <span>FAQ</span>
              </Link>
            </div>
          </nav>
          
          {!isAuthenticated && (
            <div className="mt-8">
              <Button 
                onClick={() => {
                  setShowAuthModal(true);
                  setShowMenu(false);
                }}
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                <User className="h-4 w-4 mr-2" />
                Entrar ou Cadastrar
              </Button>
            </div>
          )}
          
          {isAuthenticated && (
            <button 
              onClick={() => {
                logout();
                setShowMenu(false);
              }}
              className="mt-8 flex items-center justify-center w-full p-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sair da conta
            </button>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModals
        loginOpen={showAuthModal}
        registerOpen={false}
        onLoginOpenChange={setShowAuthModal}
        onRegisterOpenChange={() => {}}
      />

      {/* Shopping Cart Drawer */}
      <ShoppingCartDrawer 
        open={showCart} 
        onClose={() => setShowCart(false)} 
      />
    </header>
  );
};

export default Navbar;
