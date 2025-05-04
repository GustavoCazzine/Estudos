import { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CommunityPreview from '../components/home/CommunityPreview';
import Quiz from '../components/home/Quiz';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users } from 'lucide-react';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      
      {/* Quiz interativo */}
      <section className="py-16 bg-salon-branco-creme">
        <div className="container-salon">
          <div className="text-center mb-10">
            <span className="inline-block bg-salon-rosa-poeira/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Descubra Seu Estilo
            </span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Qual é o seu estilo de cílios ideal?
            </h2>
            <div className="w-20 h-1 bg-salon-dourado-claro mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
            <p className="text-salon-light-text max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Responda nosso quiz e descubra qual extensão combina mais com seu estilo de vida e personalidade.
            </p>
          </div>
          
          {showQuiz ? (
            <Quiz onClose={() => setShowQuiz(false)} />
          ) : (
            <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button 
                onClick={() => setShowQuiz(true)}
                className="btn-primary inline-flex items-center transform hover:scale-105 transition-all duration-300"
              >
                Começar Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Community Preview Section */}
      <CommunityPreview />
      
      {/* Promotion Banner */}
      <section className="py-12 bg-salon-gold/10">
        <div className="container-salon">
          <div className="bg-gradient-to-r from-salon-dourado-claro/90 to-salon-terracota/90 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden hover-shine">
            {/* Decorative elements */}
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
      
      <Testimonials />
      
      {/* Referral Program */}
      <section className="section-padding bg-salon-rosa-poeira/10">
        <div className="container-salon">
          <div className="text-center mb-12">
            <span className="inline-block bg-salon-rosa-poeira/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Programa de Indicação
            </span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Indique Amigas e Ganhe Descontos
            </h2>
            <div className="w-20 h-1 bg-salon-dourado-claro mx-auto mb-6"></div>
            <p className="text-salon-light-text max-w-2xl mx-auto">
              Indique uma amiga e ambas ganham 15% de desconto no próximo agendamento.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-salon">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-cormorant font-bold mb-4">Como funciona:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-salon-dourado-claro rounded-full flex items-center justify-center text-white font-medium mr-3">1</span>
                    <span>Envie o link convite para sua amiga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-salon-dourado-claro rounded-full flex items-center justify-center text-white font-medium mr-3">2</span>
                    <span>Ela faz o primeiro agendamento através do seu link</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-salon-dourado-claro rounded-full flex items-center justify-center text-white font-medium mr-3">3</span>
                    <span>Vocês duas recebem automaticamente 15% de desconto</span>
                  </li>
                </ul>
                <div className="mt-6">
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
      
      {/* Instagram Feed Preview */}
      <section className="section-padding bg-salon-beige/50">
        <div className="container-salon">
          <div className="text-center mb-16">
            <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Instagram
            </span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
              Siga-nos no Instagram
            </h2>
            <div className="w-20 h-1 bg-salon-dourado-claro mx-auto mb-6"></div>
            <p className="text-salon-light-text max-w-2xl mx-auto">
              Acompanhe nosso trabalho, veja transformações reais e fique por dentro das novidades e promoções.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                key={item}
                className="group relative overflow-hidden rounded-lg aspect-square hover-shine"
              >
                <img 
                  src={`https://source.unsplash.com/random/600x600?eyelashes,eyebrows&sig=${item}`} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-salon-dourado-claro/0 flex items-center justify-center transition-all duration-300 group-hover:bg-salon-dourado-claro/70">
                  <div className="opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-salon-dourado-claro hover:text-salon-terracota transition-colors font-medium"
            >
              <span className="mr-2">@naturalbeautyspace</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-salon">
          <div className="bg-salon-rosa-poeira/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden hover-shine">
            {/* Decorative elements */}
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
      
      {/* WhatsApp Floating Button - Fixed positioning */}
      <a
        href="https://wa.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110 animate-pulse-once"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
