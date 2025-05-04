
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
  price: string;
  image: string;
}

const servicesData: Service[] = [
  {
    id: "eyebrows",
    title: "Design de Sobrancelhas",
    description: "Moldagem profissional para valorizar o formato do seu rosto e expressão.",
    details: [
      "Avaliação personalizada para cada formato de rosto",
      "Técnica de fio a fio para resultado mais natural",
      "Opção com henna para maior definição",
      "Correção de falhas e assimetrias"
    ],
    duration: "45 minutos",
    price: "A partir de R$ 70,00",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "eyelashes",
    title: "Extensão de Cílios",
    description: "Volume e alongamento para um olhar mais marcante e expressivo, com efeito natural.",
    details: [
      "Técnica fio a fio para efeito natural",
      "Volume russo para maior dramaticidade",
      "Volume híbrido (mescla de técnicas)",
      "Materiais hipoalergênicos e leves"
    ],
    duration: "1h30 - 2h (dependendo da técnica)",
    price: "A partir de R$ 180,00",
    image: "https://images.unsplash.com/photo-1516914641057-3bca7c478c93?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lamination",
    title: "Laminação",
    description: "Realinhamento e nutrição para cílios e sobrancelhas mais preenchidos e disciplinados.",
    details: [
      "Alinha e disciplina os fios rebeldes",
      "Proporciona efeito de preenchimento",
      "Inclui nutrição com queratina e biotina",
      "Resultado de até 6 semanas"
    ],
    duration: "1 hora",
    price: "A partir de R$ 120,00",
    image: "https://images.unsplash.com/photo-1587023535591-cbe8139e08a9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "henna",
    title: "Design com Henna",
    description: "Coloração natural que intensifica o olhar com efeito preenchedor.",
    details: [
      "Pigmentação profunda que dura até 15 dias",
      "Efeito preenchedor natural",
      "Ideal para quem tem falhas ou fios claros",
      "Inclui design completo das sobrancelhas"
    ],
    duration: "1 hora",
    price: "A partir de R$ 90,00",
    image: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "maintenance",
    title: "Manutenção de Cílios",
    description: "Reposição de fios para manter o efeito perfeito das extensões.",
    details: [
      "Recomendada a cada 15-20 dias",
      "Remoção de fios soltos",
      "Reposição de novos fios",
      "Higienização completa"
    ],
    duration: "45 minutos - 1 hora",
    price: "A partir de R$ 120,00",
    image: "https://images.unsplash.com/photo-1601295452898-f88f2e6a853f?q=80&w=1000&auto=format&fit=crop"
  }
];

// FAQ Data
const faqData = [
  {
    question: "Quanto tempo dura a extensão de cílios?",
    answer: "As extensões de cílios duram em média de 3 a 4 semanas, dependendo do ciclo natural de crescimento dos seus cílios e dos cuidados tomados. Recomendamos manutenção a cada 2-3 semanas para manter o visual completo."
  },
  {
    question: "É seguro fazer extensão de cílios?",
    answer: "Sim, quando aplicado por profissionais certificados como nossa equipe, é um procedimento seguro. Utilizamos adesivos de qualidade, hipoalergênicos e técnicas adequadas para garantir a saúde dos seus cílios naturais."
  },
  {
    question: "Posso molhar as sobrancelhas depois de fazer henna?",
    answer: "Recomendamos evitar molhar as sobrancelhas nas primeiras 24 horas após a aplicação da henna para garantir uma pigmentação mais duradoura."
  },
  {
    question: "Com que frequência devo fazer o design de sobrancelhas?",
    answer: "Para manter a forma ideal, recomendamos redesenhar as sobrancelhas a cada 15-30 dias, dependendo da velocidade de crescimento dos seus pelos."
  },
  {
    question: "A laminação de sobrancelhas é permanente?",
    answer: "Não, a laminação de sobrancelhas dura aproximadamente de 4 a 6 semanas, dependendo do seu tipo de pelo e cuidados tomados."
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-salon-pink/10 py-16 md:py-24">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nossos Serviços
            </span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Serviços especializados para realçar sua beleza natural
            </h1>
            <p className="text-lg text-salon-light-text mb-8">
              Conheça os tratamentos exclusivos do Natural Beauty Space, 
              onde combinamos técnica e produtos premium para resultados impecáveis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#eyebrows" className="btn-secondary text-sm py-2 px-4">Design de Sobrancelhas</a>
              <a href="#eyelashes" className="btn-secondary text-sm py-2 px-4">Extensão de Cílios</a>
              <a href="#lamination" className="btn-secondary text-sm py-2 px-4">Laminação</a>
              <a href="#henna" className="btn-secondary text-sm py-2 px-4">Design com Henna</a>
              <a href="#maintenance" className="btn-secondary text-sm py-2 px-4">Manutenção</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-salon">
          <div className="space-y-16">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <div className={`md:order-${service.id === "eyelashes" || service.id === "maintenance" ? 2 : 1}`}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-salon-pink rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-salon-gold rounded-full opacity-20"></div>
                    <div className="rounded-2xl overflow-hidden shadow-salon relative z-10">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[350px] object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                
                <div className={`md:order-${service.id === "eyelashes" || service.id === "maintenance" ? 1 : 2}`}>
                  <h2 className="text-3xl font-playfair font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-salon-light-text mb-6">{service.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-salon-gold mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-salon-gold mr-2" />
                      <span className="text-salon-light-text">{service.duration}</span>
                    </div>
                    <div className="font-medium">{service.price}</div>
                  </div>
                  
                  <Link to="/booking" className="btn-primary inline-flex items-center">
                    Agendar Horário
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-salon-beige/30 py-12">
        <div className="container-salon">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mt-3">Ambiente Esterilizado</h3>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mt-3">Produtos Hipoalergênicos</h3>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mt-3">Atendimento Pontual</h3>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mt-3">Profissionais Certificadas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-salon">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Perguntas Frequentes</h2>
            <div className="w-20 h-1 bg-salon-gold mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-salon-pink/30">
              {faqData.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-xl font-playfair font-semibold mb-3">{faq.question}</h3>
                  <p className="text-salon-light-text">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-salon-pink/10 py-16">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-6">Pronta para marcar seu horário?</h2>
            <p className="text-salon-light-text mb-8">
              Escolha o serviço desejado e agende online de forma rápida e prática.
            </p>
            <Link to="/booking" className="btn-primary inline-flex items-center">
              Agendar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
