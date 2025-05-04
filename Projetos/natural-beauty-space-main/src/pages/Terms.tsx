
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Terms = () => {
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
        
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-salon-light-text mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <p>
            Bem-vindo ao Natural Beauty Space. Ao acessar ou usar nosso site e serviços, você concorda com estes Termos de Uso. 
            Por favor, leia-os cuidadosamente.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">1. Aceitação dos Termos</h2>
          
          <p>
            Ao acessar ou usar o site e os serviços da Natural Beauty Space, você confirma que leu, entendeu e concorda em cumprir 
            estes Termos de Uso, nossa Política de Privacidade e quaisquer diretrizes adicionais aplicáveis.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">2. Uso do Site</h2>
          
          <p>Você concorda em:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Usar o site apenas para fins legais e de acordo com estes Termos</li>
            <li>Não violar quaisquer leis aplicáveis ou regulamentos</li>
            <li>Não interferir na segurança ou funcionalidade do site</li>
            <li>Não tentar acessar áreas restritas do site</li>
            <li>Fornecer informações precisas e completas ao agendar serviços ou criar uma conta</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">3. Contas de Usuário</h2>
          
          <p>
            Quando você cria uma conta em nosso site, você é responsável por manter a confidencialidade de suas credenciais 
            de login e por todas as atividades que ocorrem sob sua conta. Você concorda em nos notificar imediatamente sobre 
            qualquer uso não autorizado de sua conta.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">4. Agendamentos e Cancelamentos</h2>
          
          <p>
            Nosso sistema de agendamento online permite que você reserve serviços sujeitos à disponibilidade. 
            Ao fazer um agendamento, você concorda com nossa política de cancelamento (disponível separadamente).
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">5. Propriedade Intelectual</h2>
          
          <p>
            Todo o conteúdo apresentado em nosso site, incluindo texto, gráficos, logotipos, imagens e software, 
            é propriedade da Natural Beauty Space ou de nossos licenciadores e é protegido por leis de direitos autorais. 
            Você não pode reproduzir, distribuir, modificar ou criar trabalhos derivados deste conteúdo sem nossa 
            permissão expressa por escrito.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">6. Limitação de Responsabilidade</h2>
          
          <p>
            Na extensão máxima permitida por lei, a Natural Beauty Space não será responsável por quaisquer danos diretos, 
            indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar nosso site ou serviços.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">7. Alterações nos Termos</h2>
          
          <p>
            Podemos modificar estes Termos de Uso a qualquer momento a nosso critério. Alterações entrarão em vigor 
            imediatamente após a publicação dos termos atualizados. Seu uso continuado do site após tais alterações 
            constitui sua aceitação dos novos termos.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">8. Lei Aplicável</h2>
          
          <p>
            Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil, sem considerar 
            seus princípios de conflito de leis.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">9. Contato</h2>
          
          <p>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: 
            <a href="mailto:contato@naturalbeauty.com" className="text-salon-terracota hover:underline ml-1">contato@naturalbeauty.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
