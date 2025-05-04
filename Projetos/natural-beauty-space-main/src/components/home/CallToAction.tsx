
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-salon">
        <div className="bg-salon-rosa-poeira/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden hover-shine">
          <div className="absolute top-0 right-0 w-40 h-40 bg-salon-rosa-poeira/30 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-salon-dourado-claro/20 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6">
              Pronta para realçar sua beleza natural?
            </h2>
            <p className="text-salon-light-text text-lg mb-8">
              Entre em contato para tirar suas dúvidas ou agende seu horário online agora mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary">
                Agendar Horário
              </Link>
              <a 
                href="https://wa.me/123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp Direto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
