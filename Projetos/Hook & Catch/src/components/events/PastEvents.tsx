
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const pastEvents = [
  {
    id: 1,
    title: 'Campeonato Regional de Pesca - Rio Grande do Sul',
    date: '10-12 Março, 2024',
    location: 'Lagoa dos Patos, RS',
    image: 'https://images.unsplash.com/photo-1628288793106-3380eacfedd4?q=80&w=2070&auto=format&fit=crop',
    winner: 'Carlos Silva - Exemplar de 9,8kg',
    gallery: [
      'https://images.unsplash.com/photo-1510354966904-d919cc253087?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631705152502-25db7ac3cdf7?q=80&w=2069&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Torneio de Pesca Esportiva - Amazonas',
    date: '5-7 Fevereiro, 2024',
    location: 'Rio Negro, AM',
    image: 'https://images.unsplash.com/photo-1542729779-08cafcc51cac?q=80&w=2070&auto=format&fit=crop',
    winner: 'Ana Paula Mendes - Tucunaré de 12,2kg',
    gallery: [
      'https://images.unsplash.com/photo-1512236077338-8c47b08e35f5?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543007412-b2a09a25bec2?q=80&w=2071&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Copa Sul de Pesca em Alto Mar',
    date: '15-18 Janeiro, 2024',
    location: 'Litoral de Santa Catarina',
    image: 'https://images.unsplash.com/photo-1692031217549-ca82a5747f26?q=80&w=2070&auto=format&fit=crop',
    winner: 'Equipe Marlim Azul - 15 capturas',
    gallery: [
      'https://images.unsplash.com/photo-1529390505535-b42a232331c6?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517765371796-5b13188f4622?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];

const PastEvents = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-fishing-800">Eventos Realizados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira os destaques e vencedores dos nossos eventos anteriores. Participe do próximo e faça parte desta comunidade!
          </p>
          <div className="flex items-center justify-center mt-4 text-fishing-600">
            <ChevronLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Deslize para ver mais eventos</span>
            <ChevronRight className="h-5 w-5 ml-2" />
          </div>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {pastEvents.map((event) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden h-full bg-white border-0 shadow-md">
                  <div className="h-56 overflow-hidden relative group">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <span className="text-white text-sm font-medium">Clique para detalhes</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-fishing-800">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-fishing-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-fishing-600">
                        <Trophy className="h-4 w-4 mr-2" />
                        <span>{event.winner}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {event.gallery.map((img, idx) => (
                        <div key={idx} className="h-20 overflow-hidden rounded relative group">
                          <img 
                            src={img} 
                            alt={`Galeria ${event.title} ${idx + 1}`} 
                            className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs">Ampliar</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center items-center gap-4 md:hidden">
            <span className="text-xs text-gray-500">Deslize para navegar</span>
          </div>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-y-1/2 bg-white/80 hover:bg-white border-fishing-200" />
            <CarouselNext className="right-0 -translate-y-1/2 bg-white/80 hover:bg-white border-fishing-200" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PastEvents;
