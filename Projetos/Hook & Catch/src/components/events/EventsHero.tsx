
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';

const EventsHero = () => {
  return (
    <section className="relative bg-fishing-800 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-110 animate-pulse-soft"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1532195795807-33478e0d2549?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      
      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600 text-white text-sm font-medium mb-6 animate-fade-in">
            Comunidade de Pescadores
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white animate-slide-up">
            Eventos e Torneios de Pesca
          </h1>
          <p className="text-xl text-white/90 mb-10 animate-slide-up animate-delay-100">
            Participe dos melhores eventos, torneios e campeonatos de pesca do país. 
            Conecte-se com outros pescadores e desfrute da emoção da competição.
          </p>
          <div className="flex flex-wrap gap-5 justify-center animate-slide-up animate-delay-200">
            <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-6 h-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Próximos Eventos
            </Button>
            <Button variant="outline" size="lg" className="border-primary-500 text-white hover:bg-primary-600 px-8 py-6 h-auto">
              <Users className="mr-2 h-5 w-5" />
              Inscrever-se
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-fishing-900 to-transparent"></div>
    </section>
  );
};

export default EventsHero;
