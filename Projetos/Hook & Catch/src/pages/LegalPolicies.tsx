
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from '../components/ui/separator';
import { Shield, FileText, Lock, Eye, Cookie } from 'lucide-react';

const LegalPolicies = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Políticas Legais | Hook & Catch';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-fishing-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Políticas e Termos Legais
              </h1>
              <p className="text-lg text-white/80">
                A transparência e o respeito às leis são valores fundamentais da Hook & Catch.
                Conheça todos os nossos termos e políticas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-fishing-50 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-fishing-600 mr-2" />
                  <h2 className="text-2xl font-bold">Políticas Legais</h2>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
              <div className="mb-6">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
                  <TabsTrigger value="privacy" className="flex items-center justify-center gap-2 py-3">
                    <Lock className="h-4 w-4" />
                    <span>Privacidade</span>
                  </TabsTrigger>
                  <TabsTrigger value="terms" className="flex items-center justify-center gap-2 py-3">
                    <FileText className="h-4 w-4" />
                    <span>Termos de Uso</span>
                  </TabsTrigger>
                  <TabsTrigger value="refunds" className="flex items-center justify-center gap-2 py-3">
                    <Eye className="h-4 w-4" />
                    <span>Devoluções</span>
                  </TabsTrigger>
                  <TabsTrigger value="cookies" className="flex items-center justify-center gap-2 py-3">
                    <Cookie className="h-4 w-4" />
                    <span>Cookies</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="privacy" className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Política de Privacidade (LGPD/GDPR)</h3>
                  <Separator className="my-4" />
                  <p className="text-gray-700 mb-4">
                    A Hook & Catch está comprometida em proteger sua privacidade e seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD) e o Regulamento Geral de Proteção de Dados (GDPR).
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">1. Dados que coletamos</h4>
                  <p className="text-gray-700 mb-4">
                    Coletamos apenas os dados necessários para processar suas compras, melhorar sua experiência de navegação e cumprir obrigações legais:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Dados de identificação: nome, e-mail, telefone, CPF</li>
                    <li>Dados de endereço para entrega</li>
                    <li>Histórico de compras e preferências</li>
                    <li>Dados de navegação e cookies essenciais</li>
                  </ul>
                  
                  <h4 className="font-medium text-lg mb-2">2. Como usamos seus dados</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Processar suas compras e entregas</li>
                    <li>Fornecer suporte ao cliente</li>
                    <li>Enviar comunicações sobre seus pedidos</li>
                    <li>Melhorar nossos produtos e serviços</li>
                    <li>Personalizar sua experiência (com seu consentimento)</li>
                    <li>Cumprir obrigações legais e fiscais</li>
                  </ul>
                  
                  <h4 className="font-medium text-lg mb-2">3. Seus direitos</h4>
                  <p className="text-gray-700 mb-4">
                    De acordo com a LGPD/GDPR, você tem direito a:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir dados incompletos ou incorretos</li>
                    <li>Solicitar a exclusão de seus dados</li>
                    <li>Portabilidade dos dados</li>
                    <li>Revogar consentimento a qualquer momento</li>
                    <li>Apresentar reclamação à autoridade de proteção de dados</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: privacidade@hookandcatch.com
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="terms" className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Termos de Uso</h3>
                  <Separator className="my-4" />
                  <p className="text-gray-700 mb-4">
                    Ao utilizar nosso site, você concorda com estes termos de uso. Por favor, leia-os com atenção.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">1. Uso do Site</h4>
                  <p className="text-gray-700 mb-4">
                    Você concorda em usar este site apenas para fins legais e de acordo com estes termos. Você concorda em não usar este site:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>De maneira fraudulenta ou com propósito ilícito</li>
                    <li>Para enviar ou transmitir vírus ou material prejudicial</li>
                    <li>Para interferir na segurança ou funcionalidade do site</li>
                    <li>Para violar direitos de propriedade intelectual</li>
                  </ul>
                  
                  <h4 className="font-medium text-lg mb-2">2. Contas de usuário</h4>
                  <p className="text-gray-700 mb-4">
                    Ao criar uma conta em nosso site, você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas sob sua conta.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">3. Propriedade intelectual</h4>
                  <p className="text-gray-700 mb-4">
                    Todos os conteúdos do site, incluindo textos, gráficos, logos, imagens e software são propriedade da Hook & Catch e estão protegidos por leis de direitos autorais.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">4. Limitação de responsabilidade</h4>
                  <p className="text-gray-700 mb-4">
                    A Hook & Catch não será responsável por danos indiretos, acidentais ou consequentes decorrentes ou relacionados ao uso ou incapacidade de uso do site ou serviços.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">5. Alterações nos termos</h4>
                  <p className="text-gray-700">
                    Podemos atualizar estes termos periodicamente. Recomendamos verificar regularmente para estar ciente de quaisquer alterações.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="refunds" className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Política de Trocas e Devoluções</h3>
                  <Separator className="my-4" />
                  <p className="text-gray-700 mb-4">
                    Nossa política de trocas e devoluções foi criada para garantir sua satisfação com nossas produtos.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">1. Direito de arrependimento</h4>
                  <p className="text-gray-700 mb-4">
                    De acordo com o Código de Defesa do Consumidor, você tem até 7 dias após o recebimento do produto para exercer seu direito de arrependimento e solicitar a devolução.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">2. Garantia de qualidade</h4>
                  <p className="text-gray-700 mb-4">
                    Todos os nossos produtos têm garantia de 30 dias contra defeitos de fabricação, além da garantia oferecida pelo fabricante.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">3. Como solicitar uma troca ou devolução</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Acesse sua conta e vá para "Meus Pedidos"</li>
                    <li>Selecione o pedido e o produto que deseja trocar ou devolver</li>
                    <li>Selecione o motivo da devolução</li>
                    <li>Siga as instruções para envio do produto</li>
                  </ol>
                  
                  <h4 className="font-medium text-lg mb-2">4. Reembolso</h4>
                  <p className="text-gray-700 mb-4">
                    O reembolso será processado em até 7 dias úteis após recebermos e inspecionarmos o produto devolvido. O valor será creditado na mesma forma de pagamento utilizada na compra.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">5. Produtos não elegíveis para devolução</h4>
                  <p className="text-gray-700 mb-4">
                    Alguns produtos não são elegíveis para devolução por motivos de higiene ou quando personalizados. Estes casos são claramente indicados na descrição do produto.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="cookies" className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Política de Cookies</h3>
                  <Separator className="my-4" />
                  <p className="text-gray-700 mb-4">
                    Utilizamos cookies para melhorar sua experiência em nosso site.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">1. O que são cookies?</h4>
                  <p className="text-gray-700 mb-4">
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos permitem reconhecê-lo e lembrar suas preferências.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">2. Tipos de cookies que utilizamos</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li><span className="font-medium">Cookies essenciais:</span> necessários para o funcionamento básico do site</li>
                    <li><span className="font-medium">Cookies de desempenho:</span> coletam informações anônimas sobre como você usa nosso site</li>
                    <li><span className="font-medium">Cookies de funcionalidade:</span> permitem que o site lembre de suas preferências</li>
                    <li><span className="font-medium">Cookies de publicidade:</span> usados para mostrar anúncios relevantes (com seu consentimento)</li>
                  </ul>
                  
                  <h4 className="font-medium text-lg mb-2">3. Como gerenciar cookies</h4>
                  <p className="text-gray-700 mb-4">
                    Você pode gerenciar ou excluir cookies através das configurações do seu navegador. No entanto, isso pode afetar a funcionalidade do site.
                  </p>
                  
                  <h4 className="font-medium text-lg mb-2">4. Alterações na política de cookies</h4>
                  <p className="text-gray-700">
                    Podemos atualizar nossa política de cookies periodicamente. Recomendamos verificar regularmente para estar ciente de quaisquer alterações.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPolicies;
