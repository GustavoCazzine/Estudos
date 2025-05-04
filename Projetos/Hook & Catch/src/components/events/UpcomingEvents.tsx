
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Dados de exemplo para os próximos eventos
const upcomingEvents = [
  {
    id: 1,
    title: 'Campeonato Nacional de Pesca Esportiva',
    date: '15-17 Julho, 2024',
    location: 'Lago das Brisas, São Paulo',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop',
    category: 'Campeonato',
    participants: 120,
    prizes: 'R$ 50.000 em prêmios',
    registrationOpen: true,
    startTime: '07:00',
  },
  {
    id: 2,
    title: 'Torneio de Pesca em Alto Mar',
    date: '5-6 Agosto, 2024',
    location: 'Costa de Florianópolis, SC',
    image: 'https://images.unsplash.com/photo-1545508744-885e2d0c33d9?q=80&w=2071&auto=format&fit=crop',
    category: 'Torneio',
    participants: 50,
    prizes: 'Troféus e equipamentos',
    registrationOpen: true,
    startTime: '06:30',
  },
  {
    id: 3,
    title: 'Encontro de Pescadores - Técnicas de Fly Fishing',
    date: '22 Agosto, 2024',
    location: 'Rio Paraná, MS',
    image: 'https://images.unsplash.com/photo-1512222061777-526e0d5a16e8?q=80&w=2067&auto=format&fit=crop',
    category: 'Workshop',
    participants: 35,
    prizes: 'Certificados e sorteio de equipamentos',
    registrationOpen: true,
    startTime: '08:00',
  },
  {
    id: 4,
    title: 'Copa de Pesca em Água Doce',
    date: '10-12 Setembro, 2024',
    location: 'Represa de Furnas, MG',
    image: 'https://images.unsplash.com/photo-1541941520317-cc3e81d03b01?q=80&w=2071&auto=format&fit=crop',
    category: 'Copa',
    participants: 80,
    prizes: 'R$ 30.000 em prêmios',
    registrationOpen: false,
    startTime: '07:30',
  }
];

const UpcomingEvents = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // Categorias disponíveis (extraídas dos eventos)
  const categories = ['Todos', ...new Set(upcomingEvents.map(event => event.category))];
  
  // Filtragem de eventos por categoria
  const filteredEvents = activeCategory === 'Todos' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-fishing-800">Próximos Eventos</h2>
            <p className="text-fishing-600">Confira os próximos eventos e inscreva-se antes que as vagas acabem.</p>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0 flex-wrap justify-center">
            {categories.map(category => (
              <Badge 
                key={category}
                className={`cursor-pointer px-4 py-2 ${
                  activeCategory === category 
                    ? 'bg-fishing-600 hover:bg-fishing-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mb-6 text-fishing-600">
          <ChevronLeft className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Deslize para ver mais eventos</span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {filteredEvents.map(event => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full flex flex-col overflow-hidden card-hover border-2 border-gray-100">
                  <div className="relative h-48 overflow-hidden group">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-fishing-600">
                      {event.category}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <span className="text-white text-sm font-medium">Ver detalhes</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>Início: {event.startTime}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>{event.participants} participantes</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>{event.prizes}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full"
                      disabled={!event.registrationOpen}
                    >
                      {event.registrationOpen ? 'Inscrever-se' : 'Inscrições em breve'}
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-center items-center gap-2 md:hidden">
            <div className="w-2 h-2 rounded-full bg-fishing-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-y-1/2 bg-white hover:bg-fishing-50 border-fishing-200" />
            <CarouselNext className="right-0 -translate-y-1/2 bg-white hover:bg-fishing-50 border-fishing-200" />
          </div>
        </Carousel>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-fishing-600 text-fishing-600 hover:bg-fishing-50">
            Ver Todos os Eventos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
