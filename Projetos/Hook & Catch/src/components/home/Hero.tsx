
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Anchor, Fish, Compass, Waves, MapPin } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import OptimizedImage from '../ui/optimized-image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-10000 transform scale-110 animate-pulse-soft" 
        style={{ 
          backgroundPosition: isMobile ? 'center right -100px' : 'center', 
        }}
      >
        <OptimizedImage
          src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=2070&auto=format&fit=crop"
          alt="Hero background - fishing landscape"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fishing-900/90 via-fishing-800/70 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern bg-repeat-x bg-bottom opacity-20 animate-wave"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span 
            className={`inline-block glass-dark px-4 py-1 rounded-full text-white font-medium mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center">
              <Waves className="h-4 w-4 mr-2 text-fishing-300" /> 
              Equipamentos Premium para Pesca
            </div>
          </span>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 text-shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Capture os Melhores <span className="text-gradient-water">Momentos</span> Com Equipamentos de Qualidade
          </h1>
          
          <p 
            className={`text-lg text-white/90 mb-8 max-w-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Descubra nossa seleção premium de varas de pesca, molinetes e acessórios projetados para o pescador moderno.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link 
              to="/shop" 
              className="btn-hover-effect bg-fishing-500 hover:bg-fishing-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center shadow-lg shadow-fishing-500/30 transform hover:-translate-y-1 transition-all"
            >
              Comprar Agora
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/events" 
              className="glass-dark hover:bg-white/20 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explorar Eventos
            </Link>
          </div>
          
          {!isMobile && (
            <div 
              className={`mt-12 flex items-center space-x-6 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2">
                  <Fish className="h-5 w-5 text-fishing-300" />
                </div>
                <p className="text-white/90 text-sm">+500 produtos<br />para pesca</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2">
                  <Anchor className="h-5 w-5 text-fishing-300" />
                </div>
                <p className="text-white/90 text-sm">Envio para<br />todo o Brasil</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2">
                  <Compass className="h-5 w-5 text-fishing-300" />
                </div>
                <p className="text-white/90 text-sm">Eventos<br />exclusivos</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div 
        className={`absolute bottom-20 right-10 md:right-20 lg:right-40 hidden md:block transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="relative">
          <div className="absolute -top-12 -left-4 glass-dark rounded-full px-6 py-3 animate-float">
            <div className="flex items-center space-x-2">
              <Fish className="h-5 w-5 text-fishing-300" />
              <span className="text-white">Qualidade premium</span>
            </div>
          </div>
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1583160247711-3cd76353c04f?q=80&w=1972&auto=format&fit=crop" 
            alt="Vara de pesca" 
            className="h-[350px] object-cover rounded-lg shadow-xl transform rotate-2 border-4 border-white/20"
            width={300}
            height={350}
          />
          <div className="absolute -bottom-6 -right-6 glass-dark rounded-full px-5 py-2 animate-float animation-delay-300">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-fishing-300" />
              <span className="text-white text-sm">Aventuras incríveis</span>
            </div>
          </div>
        </div>
      </div>
      
      {!isMobile && (
        <>
          <div className="absolute top-1/4 right-10 md:right-[10%] hidden md:block">
            <div className="glass-dark rounded-full p-4 animate-float">
              <Anchor className="h-8 w-8 text-fishing-300" />
            </div>
          </div>
          
          <div className="absolute top-40 left-10 md:left-[10%] hidden md:block">
            <div className="glass-dark rounded-full p-3 animate-float animation-delay-500">
              <Compass className="h-6 w-6 text-fishing-300" />
            </div>
          </div>
          
          <div className="absolute bottom-24 left-[15%] hidden lg:block">
            <div className="glass-dark rounded-full p-2 animate-float animation-delay-700">
              <Waves className="h-4 w-4 text-fishing-300" />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
