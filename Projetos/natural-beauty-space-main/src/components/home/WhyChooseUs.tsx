
import { useEffect, useRef } from 'react';
import { Separator } from "@/components/ui/separator";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-10 h-10 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: "Profissionais Certificadas",
    description: "Nossa equipe é composta por profissionais certificadas e em constante atualização com as mais novas técnicas."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
    title: "Higiene e Segurança",
    description: "Utilizamos materiais descartáveis e esterilizados, priorizando sua saúde e segurança em cada procedimento."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
    ),
    title: "Produtos Premium",
    description: "Trabalhamos apenas com produtos de alta qualidade, importados e hipoalergênicos para resultados superiores."
  }
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="text-center salon-card animate-on-scroll transform transition-all duration-300 hover:scale-105 hover:shadow-salon-hover bg-white rounded-xl p-8 shadow-salon">
      <div className="bg-salon-light-pink p-5 rounded-full inline-flex items-center justify-center mb-6 mx-auto">
        {feature.icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-3">{feature.title}</h3>
      <p className="text-salon-light-text">{feature.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-salon-pink/10 mt-12" ref={sectionRef}>
      <div className="container-salon">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Por que escolher nosso espaço?
          </h2>
          <div className="w-20 h-1 bg-salon-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <Separator className="my-16 bg-salon-gold/20" />

        <div className="mt-8 text-center animate-on-scroll">
          <div className="inline-block bg-white px-10 py-8 rounded-xl shadow-salon">
            <h3 className="text-2xl font-playfair font-semibold mb-4">Ambiente Exclusivo</h3>
            <p className="text-salon-light-text mb-6">
              Nosso espaço foi cuidadosamente projetado para proporcionar uma experiência relaxante e acolhedora, 
              onde você pode se desconectar da rotina e cuidar de si mesma.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1600&auto=format&fit=crop" 
              alt="Interior do salão" 
              className="w-full h-64 object-cover object-center rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
