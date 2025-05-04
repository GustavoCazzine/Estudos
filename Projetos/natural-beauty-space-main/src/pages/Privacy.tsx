
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Privacy = () => {
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
        
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-salon-light-text mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <p>
            A Natural Beauty Space ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. 
            Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
            quando você utiliza nosso site e serviços.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">1. Informações que Coletamos</h2>
          
          <p><strong>Informações pessoais:</strong> Podemos coletar informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail, número de telefone, e outras informações quando você:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cria uma conta</li>
            <li>Agenda um serviço</li>
            <li>Inscreve-se em nossa newsletter</li>
            <li>Entra em contato conosco</li>
            <li>Participa de pesquisas ou promoções</li>
          </ul>
          
          <p><strong>Informações de uso:</strong> Coletamos informações sobre como você acessa e usa nosso site, incluindo:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Endereço IP</li>
            <li>Tipo de dispositivo e navegador</li>
            <li>Páginas visitadas</li>
            <li>Tempo gasto no site</li>
            <li>Links clicados</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">2. Como Usamos suas Informações</h2>
          
          <p>Utilizamos suas informações para:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fornecer, manter e melhorar nossos serviços</li>
            <li>Processar e gerenciar seus agendamentos</li>
            <li>Enviar confirmações, lembretes e comunicações relacionadas ao serviço</li>
            <li>Enviar informações promocionais e newsletters (com seu consentimento)</li>
            <li>Responder às suas perguntas e solicitações</li>
            <li>Personalizar sua experiência</li>
            <li>Analisar tendências de uso e melhorar nosso site</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">3. Compartilhamento de Informações</h2>
          
          <p>Podemos compartilhar suas informações com:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Prestadores de serviços que nos auxiliam na operação do site e serviços</li>
            <li>Parceiros comerciais com seu consentimento explícito</li>
            <li>Autoridades legais quando obrigados por lei</li>
          </ul>
          
          <p>Não vendemos suas informações pessoais a terceiros.</p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">4. Segurança</h2>
          
          <p>
            Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, 
            alteração, divulgação ou destruição. No entanto, nenhum sistema é completamente seguro, e não podemos 
            garantir a segurança absoluta de suas informações.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">5. Seus Direitos</h2>
          
          <p>Você tem o direito de:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Acessar as informações pessoais que mantemos sobre você</li>
            <li>Corrigir informações imprecisas</li>
            <li>Excluir suas informações (sujeito a certas exceções)</li>
            <li>Optar por não receber comunicações de marketing</li>
            <li>Retirar seu consentimento a qualquer momento</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">6. Alterações nesta Política</h2>
          
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre 
            disponível em nosso site com a data da última atualização. Recomendamos que você revise esta política 
            regularmente.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">7. Contato</h2>
          
          <p>
            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas práticas de 
            privacidade, entre em contato conosco pelo e-mail: <a href="mailto:privacidade@naturalbeauty.com" className="text-salon-terracota hover:underline">privacidade@naturalbeauty.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
