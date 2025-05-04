
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Perguntas Frequentes | Hook & Catch';
  }, []);

  const faqCategories = [
    {
      title: "Pedidos e Entregas",
      questions: [
        {
          question: "Qual o prazo de entrega dos produtos?",
          answer: "O prazo de entrega varia de acordo com a região, mas geralmente é de 3 a 7 dias úteis após a confirmação do pagamento. Nas grandes capitais, pode ser ainda mais rápido. Durante o processo de compra, você poderá verificar o prazo estimado para sua região."
        },
        {
          question: "Como faço para rastrear meu pedido?",
          answer: "Você receberá um e-mail com o código de rastreamento assim que seu pedido for despachado. Também é possível acompanhar o status do seu pedido na área 'Meus Pedidos' dentro do seu perfil no nosso site."
        },
        {
          question: "É possível alterar o endereço de entrega após a finalização do pedido?",
          answer: "Sim, desde que o pedido ainda não tenha sido despachado. Entre em contato com nosso atendimento ao cliente o mais rápido possível para solicitar a alteração."
        },
        {
          question: "Vocês entregam em todo o Brasil?",
          answer: "Sim, entregamos para todos os estados brasileiros. As taxas de frete e prazos variam conforme a região."
        }
      ]
    },
    {
      title: "Pagamentos",
      questions: [
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "Aceitamos cartões de crédito (Visa, Mastercard, American Express e Elo), boleto bancário, PIX e transferência bancária. Para pedidos acima de R$300, oferecemos parcelamento em até 10x sem juros no cartão de crédito."
        },
        {
          question: "O site é seguro para compras com cartão de crédito?",
          answer: "Sim, nosso site utiliza certificado SSL e todas as informações de pagamento são criptografadas. Trabalhamos com os mais seguros gateways de pagamento do mercado, garantindo a segurança dos seus dados."
        },
        {
          question: "Quanto tempo leva para o pagamento ser confirmado?",
          answer: "Pagamentos com cartão de crédito são confirmados imediatamente. Boletos bancários são compensados em até 3 dias úteis após o pagamento. Transferências PIX são processadas em minutos durante o horário bancário."
        },
        {
          question: "É possível alterar a forma de pagamento após a finalização do pedido?",
          answer: "Não é possível alterar a forma de pagamento após a finalização. Caso deseje utilizar outra forma de pagamento, será necessário cancelar o pedido atual e realizar uma nova compra."
        }
      ]
    },
    {
      title: "Produtos e Garantia",
      questions: [
        {
          question: "Qual a garantia dos produtos?",
          answer: "Todos os nossos produtos possuem garantia de 90 dias contra defeitos de fabricação, conforme o Código de Defesa do Consumidor. Alguns fabricantes oferecem garantia estendida, que será informada na descrição do produto."
        },
        {
          question: "Como solicitar a garantia de um produto?",
          answer: "Em caso de defeito, entre em contato com nosso atendimento através do e-mail suporte@hookandcatch.com ou pelo telefone (11) 91234-5678, informando o número do pedido e uma descrição detalhada do problema, preferencialmente com fotos ou vídeos."
        },
        {
          question: "É possível trocar ou devolver um produto?",
          answer: "Sim, você pode solicitar a troca ou devolução em até 7 dias após o recebimento do produto, conforme o Código de Defesa do Consumidor. O produto deve estar em sua embalagem original, sem sinais de uso, acompanhado da nota fiscal."
        },
        {
          question: "Os produtos são originais?",
          answer: "Sim, todos os produtos vendidos em nossa loja são originais, com nota fiscal e garantia. Trabalhamos apenas com fornecedores oficiais e marcas renomadas do mercado de pesca."
        }
      ]
    },
    {
      title: "Conta e Comunidade",
      questions: [
        {
          question: "Como faço para criar uma conta?",
          answer: "Clique no botão 'Entrar' no menu superior do site e selecione a opção 'Criar conta'. Preencha os dados solicitados e confirme seu e-mail através do link que enviaremos para você."
        },
        {
          question: "Como participar da comunidade de pescadores?",
          answer: "Após criar sua conta e fazer login, acesse a página 'Comunidade' para compartilhar suas capturas, histórias de pescador e interagir com outros membros. Você também pode participar dos eventos e competições organizados periodicamente."
        },
        {
          question: "É possível excluir minha conta?",
          answer: "Sim, você pode solicitar a exclusão da sua conta a qualquer momento através da página de perfil. Todos os seus dados pessoais serão removidos do nosso sistema, conforme nossa Política de Privacidade."
        },
        {
          question: "Como funciona o sistema de pontuação na comunidade?",
          answer: "Você acumula pontos ao compartilhar capturas, receber likes em suas publicações, participar de eventos e interagir com outros membros. Esses pontos determinam sua posição no ranking de pescadores e podem desbloquear benefícios exclusivos."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-fishing-800 mb-4">Perguntas Frequentes</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Encontre respostas para as dúvidas mais comuns sobre nossa loja, produtos e serviços.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">{category.title}</h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${index}-${idx}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
            
            <div className="max-w-2xl mx-auto mt-16 text-center p-8 bg-fishing-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Não encontrou o que procurava?</h2>
              <p className="text-muted-foreground mb-6">
                Entre em contato com nossa equipe de atendimento e teremos prazer em ajudá-lo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-fishing-600 text-white rounded-md hover:bg-fishing-700 transition-colors">
                  Fale Conosco
                </a>
                <a href="mailto:contato@hookandcatch.com" className="inline-flex justify-center items-center px-6 py-3 border border-fishing-600 text-fishing-600 rounded-md hover:bg-fishing-50 transition-colors">
                  contato@hookandcatch.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
