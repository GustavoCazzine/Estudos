
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Anchor, Fish, Compass, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Sobre Nós | Hook & Catch';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative bg-fishing-800 py-20 text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1485452499676-62ab02c20e83?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-fishing-100">
              Desde 2010 fornecendo os melhores equipamentos para pescadores apaixonados
            </p>
          </div>
        </section>
        
        {/* Nossa Missão */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-flex items-center justify-center p-2 bg-fishing-100 rounded-full">
                  <Compass className="h-6 w-6 text-fishing-700" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
                <p className="text-gray-700 mb-4">
                  Na Hook & Catch, nossa missão é proporcionar aos pescadores equipamentos de alta qualidade 
                  que melhoram suas experiências de pesca. Acreditamos que a pesca não é apenas um hobby, 
                  mas uma maneira de se conectar com a natureza e criar memórias duradouras.
                </p>
                <p className="text-gray-700">
                  Estamos comprometidos não apenas com a qualidade dos nossos produtos, mas também com a 
                  preservação dos ambientes aquáticos e a promoção de práticas de pesca sustentáveis.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=2070&auto=format&fit=crop" 
                  alt="Pescador em ação" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                  <Fish className="h-10 w-10 text-fishing-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nossos Valores */}
        <section className="py-16 bg-fishing-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Guiamos nosso trabalho diário com base em valores que refletem nossa paixão pela pesca e respeito pela natureza.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex items-center justify-center p-2 bg-fishing-100 rounded-full">
                  <Fish className="h-6 w-6 text-fishing-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade</h3>
                <p className="text-gray-700">
                  Selecionamos cuidadosamente cada produto que oferecemos, garantindo que atendam aos mais altos padrões de qualidade e desempenho.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex items-center justify-center p-2 bg-fishing-100 rounded-full">
                  <Anchor className="h-6 w-6 text-fishing-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustentabilidade</h3>
                <p className="text-gray-700">
                  Promovemos práticas de pesca responsáveis e sustentáveis, buscando minimizar nosso impacto ambiental e preservar os ecossistemas aquáticos.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex items-center justify-center p-2 bg-fishing-100 rounded-full">
                  <Users className="h-6 w-6 text-fishing-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comunidade</h3>
                <p className="text-gray-700">
                  Valorizamos nossa comunidade de pescadores e trabalhamos para criar conexões significativas através de eventos, torneios e compartilhamento de conhecimento.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nossa Equipe */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Conheça as pessoas apaixonadas por pesca que trabalham para oferecer a melhor experiência aos nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Carlos Silva",
                  position: "Fundador & CEO",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                },
                {
                  name: "Ana Ferreira",
                  position: "Gerente de Produtos",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
                },
                {
                  name: "Roberto Mendes",
                  position: "Especialista em Pesca",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                },
                {
                  name: "Júlia Santos",
                  position: "Coord. de Eventos",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-fishing-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contato */}
        <section className="py-16 bg-fishing-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-xl text-fishing-100 mb-8 max-w-2xl mx-auto">
              Tem alguma dúvida ou sugestão? Nossa equipe está pronta para ajudar.
            </p>
            <a 
              href="mailto:contato@hookandcatch.com.br" 
              className="inline-block bg-fishing-500 hover:bg-fishing-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Enviar Mensagem
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
