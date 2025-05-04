
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Ana Silva",
    role: "Fundadora & Especialista em Visagismo",
    bio: "Com mais de 10 anos de experiência, Ana é especialista em design de sobrancelhas e harmonização facial. Formada pela Academia de Beleza Internacional, já atendeu mais de 5.000 clientes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Mariana Lopes",
    role: "Expert em Extensão de Cílios",
    bio: "Especializada em volume russo e técnicas híbridas, Mariana é certificada internacionalmente e atualiza suas técnicas anualmente. Reconhecida por suas extensões naturais e duradouras.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Beatriz Oliveira",
    role: "Especialista em Laminação",
    bio: "Profissional apaixonada por transformações. Beatriz é expert em laminação de cílios e sobrancelhas, trazendo as técnicas mais modernas para resultados impecáveis.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Carla Mendes",
    role: "Design de Sobrancelhas",
    bio: "Com um olhar apurado para harmonia facial, Carla se especializou em corrigir assimetrias e valorizar cada formato de rosto com técnicas exclusivas de design.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-salon-pink/10 py-16 md:py-24">
        <div className="container-salon">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
                Nossa História
              </span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Uma paixão por realçar a beleza natural
              </h1>
              <p className="text-lg text-salon-light-text mb-6">
                O Natural Beauty Space nasceu em 2015 da paixão de Ana Silva por 
                transformar olhares, respeitando e valorizando as características 
                naturais de cada pessoa.
              </p>
              <p className="text-lg text-salon-light-text mb-6">
                O que começou como um pequeno estúdio, hoje é referência em 
                design de sobrancelhas e extensão de cílios, mantendo sempre 
                nossa essência: atendimento personalizado com foco em resultados 
                naturais e duradouros.
              </p>
              <p className="text-lg text-salon-light-text">
                Nossa missão é ajudar cada pessoa a sentir-se mais confiante ao 
                valorizar sua beleza única, sem excessos ou artificialidade.
              </p>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-salon-pink rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-salon-gold rounded-full opacity-20"></div>
                
                <div className="rounded-2xl overflow-hidden shadow-salon relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=1000&auto=format&fit=crop" 
                    alt="Fundadora do Natural Beauty Space" 
                    className="w-full h-[450px] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nossos Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              O que nos orienta
            </h2>
            <div className="w-20 h-1 bg-salon-gold mx-auto mb-6"></div>
            <p className="text-lg text-salon-light-text">
              Nossos princípios e valores definem quem somos e como trabalhamos 
              para oferecer a melhor experiência às nossas clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="salon-card text-center">
              <div className="bg-salon-light-pink p-5 rounded-full inline-flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Excelência</h3>
              <p className="text-salon-light-text">
                Buscamos a perfeição em cada procedimento, com técnicas apuradas 
                e constante atualização profissional.
              </p>
            </div>
            
            <div className="salon-card text-center">
              <div className="bg-salon-light-pink p-5 rounded-full inline-flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Naturalmente Belo</h3>
              <p className="text-salon-light-text">
                Acreditamos em realçar a beleza natural, criando designs 
                harmônicos que valorizem suas características únicas.
              </p>
            </div>
            
            <div className="salon-card text-center">
              <div className="bg-salon-light-pink p-5 rounded-full inline-flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Atendimento Personalizado</h3>
              <p className="text-salon-light-text">
                Cada cliente é única e merece um tratamento exclusivo, com 
                cuidado e atenção aos detalhes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-salon-beige/30">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Profissionais que fazem a diferença
            </h2>
            <div className="w-20 h-1 bg-salon-gold mx-auto mb-6"></div>
            <p className="text-lg text-salon-light-text">
              Conheça as especialistas que transformam olhares com técnica, 
              dedicação e paixão pelo que fazem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="salon-card group">
                <div className="rounded-xl overflow-hidden mb-6 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
                <p className="text-salon-gold mb-3 text-sm">{member.role}</p>
                <p className="text-salon-light-text">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Environment */}
      <section className="py-16">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nosso Espaço
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Um ambiente acolhedor e exclusivo
            </h2>
            <div className="w-20 h-1 bg-salon-gold mx-auto mb-6"></div>
            <p className="text-lg text-salon-light-text">
              Projetamos cada detalhe para proporcionar momentos de relaxamento 
              e bem-estar em um espaço que é extensão da nossa filosofia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-salon aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1600&auto=format&fit=crop" 
                alt="Recepção do salão" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-salon aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1600&auto=format&fit=crop" 
                alt="Área de atendimento" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-salon aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1603587383765-bf973855448d?q=80&w=1600&auto=format&fit=crop" 
                alt="Sala de tratamentos" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-salon aspect-square lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop" 
                alt="Ambiente geral do salão" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-salon aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop" 
                alt="Produtos usados" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-salon-pink/10">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Venha conhecer nosso espaço
            </h2>
            <p className="text-lg text-salon-light-text mb-8">
              Agende uma visita ou marque seu horário para transformar seu olhar 
              com nossa equipe de especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary">
                Agendar Horário
              </Link>
              <Link to="/contact" className="btn-secondary">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
