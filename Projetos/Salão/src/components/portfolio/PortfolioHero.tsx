
import { ArrowDown } from 'lucide-react';

const PortfolioHero = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('portfolio-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center py-24 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070)`,
          backgroundPositionY: '20%'
        }}
      />
      
      <div className="container-salon relative">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium fade-in-up">
            Nossa Galeria
          </span>
          
          <h1 className="text-4xl md:text-6xl font-playfair font-bold fade-in-up delay-100">
            Transformações que revelam sua beleza natural
          </h1>
          
          <p className="text-lg text-salon-light-text fade-in-up delay-200">
            Confira os resultados do nosso trabalho através das transformações de nossas clientes.
            Cada caso é único e mostra nosso compromisso com resultados naturais e duradouros.
          </p>
          
          <div className="pt-4 fade-in-up delay-300">
            <button 
              onClick={scrollToContent}
              className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <ArrowDown className="h-6 w-6 text-salon-terracota" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
