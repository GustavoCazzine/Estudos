
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import ClientTestimonials from '@/components/portfolio/ClientTestimonials';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useIsMobile();

  return (
    <div className="w-full overflow-x-hidden">
      <div className={`${isMobile ? 'pt-12' : 'pt-16'} pb-16 w-full`}>
        <PortfolioHero />
        
        <section id="portfolio-content" className="py-12 md:py-16 bg-white w-full">
          <div className="container-salon w-full mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
              <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4 fade-in-up">
                Antes & Depois
              </span>
              <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-4 md:mb-6 fade-in-up delay-100">
                Galeria de transformações
              </h2>
              <p className="text-base md:text-lg text-salon-light-text fade-in-up delay-200 mb-4">
                Veja como nosso trabalho transforma e realça a beleza natural de cada cliente.
                Cada imagem conta uma história de cuidado e dedicação.
              </p>
              <div className="text-sm bg-salon-cream p-3 rounded-lg inline-block fade-in-up delay-300 animate-pulse-once">
                <strong>Como usar:</strong> Clique em qualquer imagem para ver a transformação antes/depois e deslize para comparar os resultados
              </div>
            </div>
            
            <PortfolioGrid />
          </div>
        </section>
        
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default Portfolio;
