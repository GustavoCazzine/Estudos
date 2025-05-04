
import { Link } from 'react-router-dom';
import { Users, Award, Star } from 'lucide-react';

const CommunityPreview = () => {
  return (
    <section className="section-padding bg-salon-verde-salgia/10">
      <div className="container-salon">
        <div className="text-center mb-16">
          <span className="inline-block bg-salon-verde-salgia/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
            Nossa Comunidade
          </span>
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
            Beleza em Rede
          </h2>
          <div className="w-20 h-1 bg-salon-dourado-claro mx-auto mb-6"></div>
          <p className="text-salon-light-text max-w-2xl mx-auto">
            Faça parte da nossa comunidade exclusiva e compartilhe experiências com outras clientes apaixonadas por beleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Membership */}
          <div className="salon-card hover-shine transform transition-all hover:-translate-y-2">
            <div className="h-14 w-14 rounded-full bg-salon-rosa-poeira/20 flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-salon-terracota" />
            </div>
            <h3 className="text-xl font-cormorant font-semibold mb-3">Perfil Personalizado</h3>
            <p className="text-salon-light-text mb-4">
              Acompanhe sua jornada de beleza, veja seu histórico de agendamentos e receba recomendações personalizadas.
            </p>
            <Link
              to="/community/membership"
              className="inline-flex items-center text-salon-dourado-claro hover:text-salon-terracota transition-colors font-medium"
            >
              Criar meu perfil
              <svg 
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Forum */}
          <div className="salon-card hover-shine transform transition-all hover:-translate-y-2">
            <div className="h-14 w-14 rounded-full bg-salon-dourado-claro/20 flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-salon-terracota" />
            </div>
            <h3 className="text-xl font-cormorant font-semibold mb-3">Fórum Exclusivo</h3>
            <p className="text-salon-light-text mb-4">
              Troque dicas com outras clientes e tire suas dúvidas diretamente com nossas profissionais em nosso fórum dedicado.
            </p>
            <Link
              to="/community/forum"
              className="inline-flex items-center text-salon-dourado-claro hover:text-salon-terracota transition-colors font-medium"
            >
              Acessar fórum
              <svg 
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Monthly Challenges */}
          <div className="salon-card hover-shine transform transition-all hover:-translate-y-2">
            <div className="h-14 w-14 rounded-full bg-salon-terracota/20 flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-salon-terracota" />
            </div>
            <h3 className="text-xl font-cormorant font-semibold mb-3">Desafios Mensais</h3>
            <p className="text-salon-light-text mb-4">
              Participe dos desafios mensais, compartilhe suas fotos e concorra a prêmios exclusivos do nosso salão.
            </p>
            <Link
              to="/community/challenges"
              className="inline-flex items-center text-salon-dourado-claro hover:text-salon-terracota transition-colors font-medium"
            >
              Ver desafio atual
              <svg 
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/community" className="btn-secondary inline-flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Explorar Comunidade
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;
