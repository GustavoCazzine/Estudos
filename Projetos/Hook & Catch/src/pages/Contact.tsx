
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Contato | Hook & Catch';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-fishing-800 mb-4">Entre em Contato</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estamos aqui para ajudar com todas as suas dúvidas. Você pode entrar em contato conosco através dos canais abaixo ou usar nosso formulário.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl font-semibold mb-6">Formulário de Contato</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                    <Input id="subject" placeholder="Assunto da mensagem" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                    <Textarea id="message" placeholder="Digite sua mensagem aqui..." className="h-40" />
                  </div>
                  
                  <div>
                    <Button type="submit" variant="ocean" className="w-full md:w-auto">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="lg:pl-10">
                <h2 className="text-xl font-semibold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-fishing-100 rounded-full">
                        <MapPin className="h-5 w-5 text-fishing-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Nosso Endereço</h3>
                      <p className="text-muted-foreground mt-1">
                        Av. dos Pescadores, 123, São Paulo - SP, 01234-567, Brasil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-fishing-100 rounded-full">
                        <Phone className="h-5 w-5 text-fishing-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-muted-foreground mt-1">
                        (11) 91234-5678
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-fishing-100 rounded-full">
                        <Mail className="h-5 w-5 text-fishing-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground mt-1">
                        contato@hookandcatch.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-fishing-100 rounded-full">
                        <Clock className="h-5 w-5 text-fishing-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground mt-1">
                        Segunda a Sexta: 9:00 - 18:00<br />
                        Sábado: 9:00 - 13:00<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium mb-4">Nossas Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-fishing-100 rounded-full hover:bg-fishing-200 transition-colors">
                      <svg className="w-5 h-5 text-fishing-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-fishing-100 rounded-full hover:bg-fishing-200 transition-colors">
                      <svg className="w-5 h-5 text-fishing-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-fishing-100 rounded-full hover:bg-fishing-200 transition-colors">
                      <svg className="w-5 h-5 text-fishing-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-fishing-100 rounded-full hover:bg-fishing-200 transition-colors">
                      <svg className="w-5 h-5 text-fishing-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-fishing-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Perguntas Frequentes</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Qual o prazo de entrega dos produtos?</h3>
                    <p className="text-muted-foreground">
                      O prazo de entrega varia de acordo com a região, mas geralmente é de 3 a 7 dias úteis após a confirmação do pagamento.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Como funciona a garantia dos produtos?</h3>
                    <p className="text-muted-foreground">
                      Todos os nossos produtos possuem garantia de 90 dias contra defeitos de fabricação.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">É possível trocar ou devolver um produto?</h3>
                    <p className="text-muted-foreground">
                      Sim, você pode solicitar a troca ou devolução em até 7 dias após o recebimento do produto.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Quais são as formas de pagamento aceitas?</h3>
                    <p className="text-muted-foreground">
                      Aceitamos cartões de crédito, boleto bancário, PIX e transferência bancária.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline" className="border-fishing-500 text-fishing-600 hover:bg-fishing-50">
                    Ver Todas as Perguntas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
