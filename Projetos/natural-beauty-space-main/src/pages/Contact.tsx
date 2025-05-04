
import { useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GoogleMapComponent from "@/components/map/GoogleMap";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <section className="bg-salon-pink/10 py-16 md:py-24">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-salon-light-text">
              Estamos prontas para atender você e responder a qualquer dúvida sobre nossos serviços.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-salon">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6 mb-10">
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Nosso Endereço</h3>
                      <p className="text-salon-light-text">Rua dos Cílios, 123, Centro</p>
                      <p className="text-salon-light-text">Piracicaba - SP, 13400-000</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Telefone</h3>
                      <p className="text-salon-light-text">
                        <a href="tel:+551198765432" className="hover:text-salon-terracota transition-colors">
                          (11) 9876-5432
                        </a>
                      </p>
                      <p className="text-salon-light-text">
                        <a href="https://wa.me/5511998765432" className="hover:text-salon-terracota transition-colors">
                          WhatsApp: (11) 9876-5432
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <p className="text-salon-light-text">
                        <a href="mailto:contato@naturalbeauty.com" className="hover:text-salon-terracota transition-colors">
                          contato@naturalbeauty.com
                        </a>
                      </p>
                      <p className="text-salon-light-text">
                        <a href="mailto:agendamento@naturalbeauty.com" className="hover:text-salon-terracota transition-colors">
                          agendamento@naturalbeauty.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Horário de Funcionamento</h3>
                      <p className="text-salon-light-text">Terça - Sexta: 9h às 19h</p>
                      <p className="text-salon-light-text">Sábado: 9h às 18h</p>
                      <p className="text-salon-light-text">Domingo - Segunda: Fechado</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Button asChild className="bg-salon-terracota hover:bg-salon-terracota/90 gap-2 w-full sm:w-auto">
                <a href="/booking">
                  <span>Agendar um Horário</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-playfair font-bold mb-6">Envie uma Mensagem</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-salon-rosa-poeira/30 rounded-lg focus:outline-none focus:border-salon-terracota"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-salon-rosa-poeira/30 rounded-lg focus:outline-none focus:border-salon-terracota"
                      placeholder="Seu email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-salon-rosa-poeira/30 rounded-lg focus:outline-none focus:border-salon-terracota"
                    placeholder="Motivo do contato"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-salon-rosa-poeira/30 rounded-lg focus:outline-none focus:border-salon-terracota"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="mt-2 bg-salon-terracota hover:bg-salon-terracota/90">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-playfair font-bold mb-6">Onde nos Encontrar</h2>
            <div className="h-[450px] w-full">
              <GoogleMapComponent height="450px" withLocationDetails={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
