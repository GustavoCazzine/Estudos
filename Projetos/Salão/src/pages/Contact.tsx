
import { useEffect, useState } from 'react';
import { MessageSquare, MapPin, Phone, Mail, Clock, Users, Award, Share2, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [referralData, setReferralData] = useState({
    friendName: '',
    friendEmail: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [referralSubmitted, setReferralSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReferralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReferralData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here would go the actual form submission logic
    setFormSubmitted(true);
    toast({
      title: "Mensagem enviada!",
      description: "Retornaremos em breve.",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset form submitted state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Referral submitted:', referralData);
    // Here would go the actual referral submission logic
    setReferralSubmitted(true);
    toast({
      title: "Indicação enviada!",
      description: "Você e sua amiga receberão 15% de desconto no próximo agendamento.",
      duration: 5000,
    });
    setReferralData({
      friendName: '',
      friendEmail: '',
      message: ''
    });

    // Reset referral submitted state after 5 seconds
    setTimeout(() => {
      setReferralSubmitted(false);
    }, 5000);
  };

  return (
    <div className="pt-24 pb-16 bg-salon-branco-creme">
      <section className="bg-gradient-light py-16 md:py-24">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-salon-rosa-poeira text-salon-terracota px-4 py-1 rounded-full text-sm font-medium mb-4">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-6">
              Entre em contato
            </h1>
            <p className="text-lg text-salon-light-text mb-8 font-nunito">
              Estamos à disposição para tirar suas dúvidas, receber sugestões ou agendar seu horário.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="container-salon">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'contact' 
                ? 'bg-salon-terracota text-white' 
                : 'bg-white text-salon-dark-text hover:bg-salon-rosa-poeira/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Formulário de Contato</span>
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('referral')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'referral' 
                ? 'bg-salon-terracota text-white' 
                : 'bg-white text-salon-dark-text hover:bg-salon-rosa-poeira/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span>Programa de Indicação</span>
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'community' 
                ? 'bg-salon-terracota text-white' 
                : 'bg-white text-salon-dark-text hover:bg-salon-rosa-poeira/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Nossa Comunidade</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Tab Content */}
      {activeTab === 'contact' && (
        <section className="py-8">
          <div className="container-salon">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-3xl font-cormorant font-bold mb-6">Informações de Contato</h2>
                
                <div className="salon-card hover:border-l-4 hover:border-l-salon-rosa-poeira transition-all">
                  <div className="flex space-x-4">
                    <div className="bg-salon-rosa-poeira/20 p-3 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold mb-1">Endereço</h3>
                      <p className="text-salon-light-text">
                        Rua dos Cílios, 123<br />
                        Bairro Sobrancelha Perfeita<br />
                        São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="salon-card hover:border-l-4 hover:border-l-salon-rosa-poeira transition-all">
                  <div className="flex space-x-4">
                    <div className="bg-salon-rosa-poeira/20 p-3 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold mb-1">Telefone</h3>
                      <p className="text-salon-light-text">
                        (11) 9876-5432<br />
                        (11) 1234-5678
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="salon-card hover:border-l-4 hover:border-l-salon-rosa-poeira transition-all">
                  <div className="flex space-x-4">
                    <div className="bg-salon-rosa-poeira/20 p-3 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold mb-1">E-mail</h3>
                      <p className="text-salon-light-text">
                        contato@naturalbeauty.com<br />
                        agendamento@naturalbeauty.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="salon-card hover:border-l-4 hover:border-l-salon-rosa-poeira transition-all">
                  <div className="flex space-x-4">
                    <div className="bg-salon-rosa-poeira/20 p-3 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold mb-1">Horário de Funcionamento</h3>
                      <p className="text-salon-light-text">
                        Terça - Sexta: 9h às 19h<br />
                        Sábado: 9h às 18h<br />
                        Domingo e Segunda: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="salon-card hover:border-l-4 hover:border-l-salon-dourado-claro transition-all">
                  <div className="flex space-x-4">
                    <div className="bg-salon-dourado-claro/20 p-3 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-salon-terracota" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold mb-1">WhatsApp</h3>
                      <p className="text-salon-light-text mb-4">
                        Atendimento rápido via mensagem:
                      </p>
                      <a 
                        href="https://wa.me/551198765432" 
                        className="hover-shine bg-salon-terracota text-white px-6 py-2 rounded-full text-sm inline-flex items-center transition-all duration-300 hover:shadow-md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Iniciar Conversa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-cormorant font-bold mb-6">Envie uma Mensagem</h2>
                
                <div className="salon-card">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                        <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p className="font-medium">Mensagem enviada com sucesso!</p>
                        <p className="text-sm mt-1">Retornaremos em breve.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-salon-dark-text mb-1">
                            Nome Completo *
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-salon"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-salon-dark-text mb-1">
                            Email *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-salon"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-salon-dark-text mb-1">
                            Telefone
                          </label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-salon"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-salon-dark-text mb-1">
                            Assunto *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="input-salon"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="Agendamento">Agendamento</option>
                            <option value="Dúvidas">Dúvidas</option>
                            <option value="Informações">Informações</option>
                            <option value="Sugestões">Sugestões</option>
                            <option value="Comunidade">Comunidade</option>
                            <option value="Outro">Outro</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-salon-dark-text mb-1">
                          Mensagem *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="input-salon resize-none"
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit" className="hover-shine bg-salon-terracota text-white px-8 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md">
                          Enviar Mensagem
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Referral Program Tab Content */}
      {activeTab === 'referral' && (
        <section className="py-8">
          <div className="container-salon">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Referral Program Info */}
              <div className="space-y-8">
                <h2 className="text-3xl font-cormorant font-bold mb-6">Programa de Indicação Premiada</h2>
                
                <div className="salon-card bg-gradient-to-br from-salon-rosa-poeira/40 to-white">
                  <div className="flex flex-col space-y-4">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="bg-salon-terracota p-3 rounded-full flex items-center justify-center mr-4">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-cormorant font-semibold">Como Funciona</h3>
                      </div>
                      <p className="text-salon-dark-text mb-4">
                        Nosso programa de indicação é simples: indique amigas e ambas ganham 15% de desconto no próximo procedimento!
                      </p>
                      <ul className="space-y-3 list-disc list-inside text-salon-light-text">
                        <li>Preencha o formulário com os dados da sua amiga</li>
                        <li>Sua amiga receberá um email com seu cupom de desconto</li>
                        <li>Você recebe um cupom exclusivo após a primeira visita dela</li>
                        <li>Não há limite de indicações!</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="bg-salon-dourado-claro p-3 rounded-full flex items-center justify-center mr-4">
                          <Heart className="h-6 w-6 text-salon-terracota" />
                        </div>
                        <h3 className="text-2xl font-cormorant font-semibold">Prêmios Exclusivos</h3>
                      </div>
                      <p className="text-salon-dark-text mb-4">
                        Além dos descontos, acumule pontos e torne-se uma cliente VIP:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-salon-rosa-poeira/20 p-4 rounded-lg text-center">
                          <p className="font-cormorant text-xl font-bold mb-1">Nível Iniciante</p>
                          <p className="text-sm">3 indicações</p>
                          <p className="text-salon-terracota font-medium mt-2">Kit básico de cuidados</p>
                        </div>
                        <div className="bg-salon-dourado-claro/30 p-4 rounded-lg text-center">
                          <p className="font-cormorant text-xl font-bold mb-1">Nível Expert</p>
                          <p className="text-sm">5 indicações</p>
                          <p className="text-salon-terracota font-medium mt-2">Procedimento gratuito</p>
                        </div>
                        <div className="bg-salon-verde-salvia/30 p-4 rounded-lg text-center">
                          <p className="font-cormorant text-xl font-bold mb-1">Nível VIP</p>
                          <p className="text-sm">10 indicações</p>
                          <p className="text-salon-terracota font-medium mt-2">Dia de spa completo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Referral Form */}
              <div>
                <h2 className="text-3xl font-cormorant font-bold mb-6">Indique uma Amiga</h2>
                
                <div className="salon-card">
                  {referralSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-salon-dourado-claro/30 text-salon-terracota p-4 rounded-lg mb-6">
                        <Award className="w-6 h-6 mx-auto mb-2" />
                        <p className="font-medium">Indicação enviada com sucesso!</p>
                        <p className="text-sm mt-1">Você e sua amiga receberão 15% de desconto no próximo agendamento.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleReferralSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="friendName" className="block text-sm font-medium text-salon-dark-text mb-1">
                          Nome da amiga *
                        </label>
                        <Input
                          type="text"
                          id="friendName"
                          name="friendName"
                          value={referralData.friendName}
                          onChange={handleReferralChange}
                          required
                          className="input-salon"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="friendEmail" className="block text-sm font-medium text-salon-dark-text mb-1">
                          Email da amiga *
                        </label>
                        <Input
                          type="email"
                          id="friendEmail"
                          name="friendEmail"
                          value={referralData.friendEmail}
                          onChange={handleReferralChange}
                          required
                          className="input-salon"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="referralMessage" className="block text-sm font-medium text-salon-dark-text mb-1">
                          Mensagem pessoal (opcional)
                        </label>
                        <Textarea
                          id="referralMessage"
                          name="message"
                          value={referralData.message}
                          onChange={handleReferralChange}
                          rows={3}
                          placeholder="Adicione uma mensagem pessoal para sua amiga..."
                          className="input-salon resize-none"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button type="submit" className="hover-shine w-full bg-salon-terracota text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-md">
                          <Share2 className="mr-2 h-5 w-5" />
                          Enviar Indicação e Ganhar 15% OFF
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Community Tab Content */}
      {activeTab === 'community' && (
        <section className="py-8">
          <div className="container-salon">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-cormorant font-bold mb-6 text-center">Comunidade Beleza em Rede</h2>
              
              <div className="bg-white rounded-xl shadow-salon p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden bg-salon-rosa-poeira/20 flex items-center justify-center">
                    <Users className="w-24 h-24 text-salon-terracota/50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cormorant font-bold mb-4">Faça parte da nossa comunidade</h3>
                    <p className="text-salon-light-text mb-4">
                      A Beleza em Rede é um espaço exclusivo para nossas clientes trocarem experiências, compartilharem resultados e aprenderem juntas sobre beleza e autocuidado.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="bg-salon-rosa-poeira/20 p-1 rounded-full flex-shrink-0 mt-1">
                          <Award className="h-4 w-4 text-salon-terracota" />
                        </span>
                        <span>Perfil personalizado com histórico de procedimentos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-salon-rosa-poeira/20 p-1 rounded-full flex-shrink-0 mt-1">
                          <MessageSquare className="h-4 w-4 text-salon-terracota" />
                        </span>
                        <span>Fórum exclusivo moderado pelas nossas profissionais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-salon-rosa-poeira/20 p-1 rounded-full flex-shrink-0 mt-1">
                          <Heart className="h-4 w-4 text-salon-terracota" />
                        </span>
                        <span>Desafios mensais com prêmios exclusivos</span>
                      </li>
                    </ul>
                    <Button className="hover-shine bg-salon-terracota text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-md">
                      <Users className="mr-2 h-5 w-5" />
                      Solicitar Acesso à Comunidade
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden hover:shadow-salon-hover transition-all duration-300">
                    <div className="h-40 bg-salon-rosa-poeira/20 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-salon-rosa-poeira" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-cormorant font-bold text-xl mb-2">Desafio do Mês</h4>
                      <p className="text-sm text-salon-light-text mb-3">
                        Poste uma foto do seu olhar #NoFiltro e concorra a um hidratante de cílios.
                      </p>
                      <p className="text-xs text-salon-terracota">Termina em: 7 dias</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden hover:shadow-salon-hover transition-all duration-300">
                    <div className="h-40 bg-salon-dourado-claro/20 flex items-center justify-center">
                      <MessageSquare className="h-16 w-16 text-salon-dourado-claro" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-cormorant font-bold text-xl mb-2">Live da Semana</h4>
                      <p className="text-sm text-salon-light-text mb-3">
                        "Cuidados essenciais após laminação" com nossa especialista Ana.
                      </p>
                      <p className="text-xs text-salon-terracota">Quinta-feira, 19h no Instagram</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden hover:shadow-salon-hover transition-all duration-300">
                    <div className="h-40 bg-salon-verde-salvia/20 flex items-center justify-center">
                      <Award className="h-16 w-16 text-salon-verde-salvia" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-cormorant font-bold text-xl mb-2">Cliente Destaque</h4>
                      <p className="text-sm text-salon-light-text mb-3">
                        Parabéns Maria S. por completar 10 indicações e atingir o nível VIP!
                      </p>
                      <p className="text-xs text-salon-terracota">Prêmio: Day Spa Completo</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section className="py-16 bg-salon-branco-creme">
        <div className="container-salon">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cormorant font-bold mb-4">Como Chegar</h2>
            <div className="w-20 h-1 bg-salon-dourado-claro mx-auto"></div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-salon h-[450px] bg-white flex items-center justify-center border border-salon-rosa-poeira/20">
            <p className="text-salon-light-text">Mapa será carregado em breve</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
