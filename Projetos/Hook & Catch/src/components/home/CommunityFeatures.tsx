
import React, { useState, useRef, useEffect } from 'react';
import { Users, Map, Calendar, Camera, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "../ui/card";

const CommunityFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-fishing-400" />,
      title: "Eventos Exclusivos",
      description: "Participe de torneios, workshops e encontros com pescadores profissionais.",
      link: "/events",
      image: "https://images.unsplash.com/photo-1516555287675-b27436455775?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Map className="h-6 w-6 text-fishing-400" />,
      title: "Guia de Locais",
      description: "Descubra os melhores pontos de pesca no Brasil, com dicas de especialistas.",
      link: "/fishing-map",
      image: "https://images.unsplash.com/photo-1536402940326-9a646db6fb6a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Users className="h-6 w-6 text-fishing-400" />,
      title: "Comunidade",
      description: "Conecte-se com outros entusiastas de pesca para compartilhar experiências.",
      link: "/community",
      image: "https://images.unsplash.com/photo-1517364386728-ac0431350aaa?q=80&w=2071&auto=format&fit=crop"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-fishing-400" />,
      title: "Histórias de Pescador",
      description: "Compartilhe e leia as melhores histórias de pescaria da nossa comunidade.",
      link: "/community?tab=stories",
      image: "https://images.unsplash.com/photo-1595506131906-b3d89af6fc8c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-fishing-600 font-medium">Mais Que Uma Loja</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Nossa Comunidade de Pescadores</h2>
          <p className="text-gray-600">
            Faça parte da nossa comunidade e desfrute de benefícios exclusivos para aprimorar sua experiência de pesca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-full bg-fishing-100">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-fishing-600 font-medium text-sm hover:text-fishing-700 group"
                >
                  Saiba mais
                  <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;
