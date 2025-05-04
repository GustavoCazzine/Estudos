
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PromotionBanner = () => {
  return (
    <section className="py-16 bg-salon-gold/10">
      <div className="container-salon">
        <div className="bg-gradient-to-r from-salon-dourado-claro/90 to-salon-terracota/90 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden hover-shine">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/5 rounded-full"></div>
          
          <div className="relative z-10 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-cormorant font-bold mb-3">Mês do Olhar</h3>
              <p className="text-white/90 text-lg">
                20% OFF em laminação de sobrancelhas para novas clientes.
              </p>
            </div>
            <Link 
              to="/booking" 
              className="inline-block bg-white text-salon-terracota px-6 py-3 rounded-md font-medium transition duration-300 hover:bg-white/90 transform hover:-translate-y-1 hover:shadow-salon"
            >
              Agendar Agora
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
