
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cancellation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="container-salon max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-salon-terracota hover:text-salon-terracota/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para a página inicial</span>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Política de Cancelamento</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-salon-light-text mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <p>
            Para garantir a disponibilidade de horários para todos os nossos clientes e manter a qualidade dos nossos serviços,
            estabelecemos a seguinte política de cancelamento e reagendamento.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">1. Cancelamentos</h2>
          
          <p>
            Solicitamos que todos os cancelamentos sejam feitos com pelo menos 24 horas de antecedência do seu horário agendado.
            Isso nos permite oferecer o horário para outros clientes e ajustar nossa programação adequadamente.
          </p>
          
          <p>
            <strong>Cancelamentos com mais de 24 horas de antecedência:</strong> Não haverá cobrança de taxa e você poderá reagendar seu serviço para outra data disponível.
          </p>
          
          <p>
            <strong>Cancelamentos com menos de 24 horas de antecedência:</strong> Poderá ser aplicada uma taxa de cancelamento de 30% do valor do serviço agendado. Esta taxa será cobrada na sua próxima visita ou debitada do valor de qualquer depósito realizado.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">2. Não Comparecimento (No-Show)</h2>
          
          <p>
            Um não comparecimento é definido como a ausência em um compromisso agendado sem aviso prévio. Em caso de não comparecimento:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>Será cobrada uma taxa de 50% do valor do serviço agendado</li>
            <li>Agendamentos futuros podem exigir um depósito não reembolsável</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">3. Atrasos</h2>
          
          <p>
            Pedimos que você chegue 5-10 minutos antes do seu horário agendado. Se você estiver atrasado:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>Faremos o possível para acomodar seu serviço completo, mas isso dependerá da disponibilidade e do tempo restante</li>
            <li>Se não for possível realizar o serviço completo, podemos precisar reduzir o escopo do serviço ou reagendá-lo</li>
            <li>A cobrança será pelo serviço originalmente agendado, independentemente de reduções devido ao atraso</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">4. Reagendamentos</h2>
          
          <p>
            Reagendamentos com mais de 24 horas de antecedência não incorrerão em taxas adicionais. Reagendamentos frequentes 
            (mais de dois em um período de 30 dias) podem estar sujeitos a uma taxa de reagendamento de 15%.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">5. Exceções</h2>
          
          <p>
            Entendemos que emergências e circunstâncias imprevistas podem ocorrer. Exceções a esta política serão consideradas caso a caso. 
            Em caso de doença, emergência médica ou outras situações excepcionais, entre em contato conosco o quanto antes.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">6. Depósitos</h2>
          
          <p>
            Para serviços de longa duração (acima de 90 minutos) ou para novos clientes em horários de pico, 
            podemos solicitar um depósito para confirmar seu agendamento. Este depósito será aplicado ao seu 
            serviço e está sujeito à política de cancelamento acima.
          </p>
          
          <p className="mt-8">
            Agradecemos sua compreensão e cooperação com nossa política de cancelamento, que nos permite continuar 
            oferecendo serviços de alta qualidade para todos os nossos clientes.
          </p>
          
          <p className="mt-4">
            Se você tiver dúvidas sobre nossa política de cancelamento, entre em contato com nossa equipe pelo 
            telefone (11) 9876-5432 ou pelo e-mail 
            <a href="mailto:agendamento@naturalbeauty.com" className="text-salon-terracota hover:underline ml-1">agendamento@naturalbeauty.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
