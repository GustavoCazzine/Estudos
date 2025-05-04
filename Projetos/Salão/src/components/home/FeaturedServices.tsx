
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  url: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Design de Sobrancelhas",
    description: "Moldagem profissional para valorizar o formato do seu rosto e expressão.",
    icon: "✏️",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop",
    url: "/services#eyebrows"
  },
  {
    id: 2,
    title: "Extensão de Cílios",
    description: "Volume e alongamento para um olhar mais marcante e expressivo, com efeito natural.",
    icon: "👁️",
    image: "https://images.unsplash.com/photo-1516914641057-3bca7c478c93?q=80&w=1000&auto=format&fit=crop",
    url: "/services#eyelashes"
  },
  {
    id: 3,
    title: "Laminação",
    description: "Realinhamento e nutrição para cílios e sobrancelhas mais preenchidos e disciplinados.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1587023535591-cbe8139e08a9?q=80&w=1000&auto=format&fit=crop",
    url: "/services#lamination"
  }
];

const FeaturedServices = () => {
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    // Add a slight delay for the animation to start
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-salon">
        <div className="text-center mb-16">
          <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Serviços em Destaque
          </h2>
          <div className="w-20 h-1 bg-salon-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`salon-card group ${animateItems ? 'animate-zoom-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200 + 200}ms` }}
            >
              <div className="mb-6 rounded-xl overflow-hidden h-48 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
              <p className="text-salon-light-text mb-4">{service.description}</p>
              <Link 
                to={service.url} 
                className="inline-flex items-center text-salon-gold hover:text-salon-terracotta transition-colors font-medium"
              >
                Saiba mais
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary inline-flex items-center">
            Ver Todos os Serviços
            <svg 
              className="w-4 h-4 ml-1" 
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
    </section>
  );
};

export default FeaturedServices;
