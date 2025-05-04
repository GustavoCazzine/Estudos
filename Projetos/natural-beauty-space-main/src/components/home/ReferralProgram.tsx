
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const ReferralProgram = () => {
  return (
    <section className="section-padding bg-salon-rosa-poeira/10">
      <div className="container-salon">
        <div className="text-center mb-12">
          <span className="inline-block bg-salon-rosa-poeira/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
            Programa de Indicação
          </span>
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
            Indique Amigas e Ganhe Descontos
          </h2>
          <div className="w-24 h-1 bg-salon-dourado-claro mx-auto mb-6"></div>
          <p className="text-salon-light-text max-w-2xl mx-auto">
            Indique uma amiga e ambas ganham 15% de desconto no próximo agendamento.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-salon">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-4">Como funciona:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-salon-dourado-claro rounded-full flex items-center justify-center text-white font-medium mr-3 shadow-sm">1</span>
                  <span>Envie o link convite para sua amiga</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-salon-dourado-claro rounded-full flex items-center justify-center text-white font-medium mr-3 shadow-sm">2</span>
                  <span>Ela faz o primeiro agendamento através do seu link</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-salon-dourado-claro rounded-full flex items-center justify-center text-white font-medium mr-3 shadow-sm">3</span>
                  <span>Vocês duas recebem automaticamente 15% de desconto</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/community/referral" className="btn-primary inline-flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Gerar Meu Link
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-salon-dourado-claro/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-salon-rosa-poeira/20 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Amigas sorridentes"
                className="rounded-lg w-full relative z-10 shadow-salon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
