
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cookies = () => {
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
        
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Política de Cookies</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-salon-light-text mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <p>
            Esta Política de Cookies explica como a Natural Beauty Space usa cookies e tecnologias similares 
            para reconhecê-lo quando você visita nosso site. Ela explica o que são essas tecnologias e por que 
            as usamos, bem como seus direitos de controlar nosso uso delas.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">1. O que são Cookies?</h2>
          
          <p>
            Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo móvel quando 
            você visita um site. Os cookies são amplamente utilizados por proprietários de sites para fazer seus 
            sites funcionarem, ou funcionarem de maneira mais eficiente, bem como para fornecer informações de relatórios.
          </p>
          
          <p>
            Cookies definidos pelo proprietário do site (neste caso, Natural Beauty Space) são chamados de "cookies primários". 
            Cookies definidos por partes que não o proprietário do site são chamados de "cookies de terceiros". Cookies de 
            terceiros permitem que recursos ou funcionalidades de terceiros sejam fornecidos no ou através do site 
            (como publicidade, conteúdo interativo e análise).
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">2. Tipos de Cookies que Usamos</h2>
          
          <p>Nosso site utiliza os seguintes tipos de cookies:</p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Cookies Essenciais:</strong> Estes cookies são necessários para o funcionamento básico do site e 
              não podem ser desligados em nossos sistemas. Geralmente são configurados apenas em resposta a ações 
              feitas por você, como definir suas preferências de privacidade, fazer login ou preencher formulários.
            </li>
            <li>
              <strong>Cookies de Preferências:</strong> Estes cookies permitem que o site lembre escolhas que você 
              faz (como seu nome de usuário, idioma ou região) e forneça funcionalidades aprimoradas e mais pessoais.
            </li>
            <li>
              <strong>Cookies Estatísticos:</strong> Estes cookies nos ajudam a entender como os visitantes interagem 
              com nosso site, coletando e relatando informações anonimamente. Eles nos ajudam a melhorar nosso site.
            </li>
            <li>
              <strong>Cookies de Marketing:</strong> Estes cookies são usados para rastrear visitantes em sites. 
              A intenção é exibir anúncios que sejam relevantes e envolventes para o usuário individual.
            </li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">3. Como Gerenciar Cookies</h2>
          
          <p>
            Você pode configurar seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo 
            quando sites definem ou acessam cookies. Se você desabilitar ou recusar cookies, observe que algumas 
            partes do site podem se tornar inacessíveis ou não funcionar adequadamente.
          </p>
          
          <p>
            Você pode saber mais sobre como gerenciar cookies em seu navegador nos seguintes links:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-salon-terracota hover:underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-salon-terracota hover:underline">Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-salon-terracota hover:underline">Internet Explorer</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-salon-terracota hover:underline">Safari</a></li>
          </ul>
          
          <h2 className="text-xl font-medium mt-8 mb-4">4. Cookies de Terceiros</h2>
          
          <p>
            Além de nossos próprios cookies, podemos também usar vários cookies de terceiros para relatar estatísticas 
            de uso do site, fornecer publicidade em nosso site, e assim por diante.
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">5. Mais Informações</h2>
          
          <p>
            Se você tiver alguma dúvida sobre nosso uso de cookies ou outras tecnologias, por favor nos envie um 
            e-mail para <a href="mailto:privacidade@naturalbeauty.com" className="text-salon-terracota hover:underline">privacidade@naturalbeauty.com</a>
          </p>
          
          <h2 className="text-xl font-medium mt-8 mb-4">6. Atualizações para esta Política</h2>
          
          <p>
            Podemos atualizar esta Política de Cookies de tempos em tempos para refletir, por exemplo, mudanças nas 
            tecnologias de cookies que utilizamos ou por outros motivos operacionais, legais ou regulatórios. 
            Por favor, visite regularmente esta Política de Cookies para se manter informado sobre nosso uso de cookies 
            e tecnologias relacionadas.
          </p>
          
          <p>
            A data no topo desta Política de Cookies indica quando ela foi atualizada pela última vez.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
