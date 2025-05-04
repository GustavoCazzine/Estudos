
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-20 hero-gradient relative overflow-hidden">
      <div className="container-salon">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="order-2 md:order-1 space-y-6 z-10">
            <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              Beleza Natural & Única
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              Transforme seu olhar com cuidados personalizados
            </h1>
            
            <p className="text-base md:text-lg text-salon-light-text animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              Descubra nossa abordagem única para extensão de cílios e design de sobrancelhas,
              potencializando sua beleza natural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
              <Link to="/booking" className="btn-primary flex items-center justify-center group">
                Agendar Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-secondary flex items-center justify-center">
                Ver Transformações
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-right opacity-0 relative z-10">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-salon-pink rounded-full opacity-30 animate-subtle-float"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-salon-gold rounded-full opacity-20 animate-subtle-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="rounded-2xl overflow-hidden shadow-salon relative z-10 border-2 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1562165038-6ab991cfafa0?q=80&w=2000&auto=format&fit=crop" 
                  alt="Olhar com cílios e sobrancelhas perfeitas" 
                  className="w-full h-[300px] md:h-[450px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 md:hidden"></div>
    </section>
  );
};

export default Hero;
