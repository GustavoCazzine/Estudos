
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarDays, Mail, Bell, ChevronRight, MapPin, Users } from 'lucide-react';

const EventsNewsletter = () => {
  return (
    <section className="py-24 bg-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary-700/80 backdrop-blur-md rounded-2xl p-10 md:p-12 relative overflow-hidden border border-primary-600/30">
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none">
              <path d="M15 17h5l-1.5-1.5M15 17v-3M8.929 14.582l-3.43 3.43M12 12a4 4 0 100-8 4 4 0 000 8zm0 0v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 relative z-10">
              <div className="flex items-center mb-5">
                <Bell className="h-6 w-6 mr-2 text-primary-300" />
                <h3 className="text-xl font-bold text-white">Fique por dentro!</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">Receba Notificações de Novos Eventos</h2>
              <p className="text-white/80 text-lg mb-8">
                Inscreva-se para receber alertas sobre novos torneios, dicas exclusivas de pesca e 
                ofertas especiais para participantes de eventos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-lg text-gray-800 outline-none focus:ring-2 focus:ring-primary-400 bg-white/90"
                  />
                </div>
                <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6 h-auto py-3.5 rounded-lg">
                  <span>Inscrever-se</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-sm text-white/70 mt-4">
                Você pode cancelar sua inscrição a qualquer momento. Respeitamos sua privacidade.
              </p>
            </div>
            
            <div className="md:col-span-2 bg-primary-600/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-500/30 transform transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-6 w-6 mr-2 text-primary-300" />
                <h3 className="text-xl font-bold text-white">Próximo Evento</h3>
              </div>
              
              <div className="bg-primary-700/50 rounded-lg p-5 mb-5 border border-primary-600/20">
                <h4 className="font-bold text-lg mb-3 text-white">Campeonato Nacional de Pesca Esportiva</h4>
                <div className="space-y-2 text-white/90">
                  <p className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary-300" />
                    <span>15-17 Julho, 2024</span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary-300" />
                    <span>Lago das Brisas, São Paulo</span>
                  </p>
                  <p className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary-300" />
                    <span>Inscrições até: 30 de Junho</span>
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-primary-300 text-white hover:bg-primary-500 rounded-lg h-auto py-3">
                Ver Detalhes
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsNewsletter;
