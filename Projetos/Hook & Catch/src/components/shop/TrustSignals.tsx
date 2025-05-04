
import React from 'react';
import { Shield, RefreshCw, Award, Star, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustSignals = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-fishing-900/30 to-fishing-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Por que escolher a Hook & Catch?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compre com segurança e confiança os melhores equipamentos para pesca do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Política de Reembolso */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-fishing-100 rounded-full">
                <RefreshCw className="h-6 w-6 text-fishing-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Devolução Garantida</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              30 dias para troca ou devolução sem complicações. Sua satisfação é nossa prioridade.
            </p>
            <Link to="/refund-policy" className="text-fishing-600 text-sm font-medium flex justify-center hover:underline">
              Ver política completa
            </Link>
          </div>
          
          {/* Certificados de Segurança */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-fishing-100 rounded-full">
                <Shield className="h-6 w-6 text-fishing-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Site 100% Seguro</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Certificado SSL, proteção contra fraudes e pagamentos processados com criptografia.
            </p>
            <div className="flex justify-center space-x-2">
              <img src="https://placehold.co/40x40/png" alt="SSL Secured" className="h-10" />
              <img src="https://placehold.co/40x40/png" alt="Site Seguro" className="h-10" />
              <img src="https://placehold.co/40x40/png" alt="Ebit" className="h-10" />
            </div>
          </div>
          
          {/* Produtos Garantidos */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-fishing-100 rounded-full">
                <Award className="h-6 w-6 text-fishing-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Produtos Garantidos</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Todos os produtos são originais com garantia do fabricante e nossa garantia adicional.
            </p>
            <Link to="/warranty" className="text-fishing-600 text-sm font-medium flex justify-center hover:underline">
              Saiba mais sobre garantias
            </Link>
          </div>
          
          {/* Avaliações Verificadas */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-fishing-100 rounded-full">
                <Star className="h-6 w-6 text-fishing-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Avaliações Reais</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Mais de 10.000 clientes satisfeitos com avaliações 100% verificadas.
            </p>
            <div className="flex justify-center items-center">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-fishing-500 text-fishing-500" />
                ))}
              </div>
              <span className="text-sm font-medium ml-2">4.8/5</span>
              <span className="text-xs text-gray-500 ml-2">(10.384 avaliações)</span>
            </div>
          </div>
        </div>
        
        {/* Prova Social */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">Clientes Satisfeitos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-fishing-200 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-4 w-4 ${star <= testimonial.rating ? "fill-fishing-500 text-fishing-500" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Compra verificada</span>
                </div>
                <p className="text-gray-700 text-sm italic mb-3">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-gray-500 uppercase font-medium text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Dados de exemplo para depoimentos
const testimonials = [
  {
    name: "Carlos Silva",
    rating: 5,
    comment: "Excelente qualidade nas varas de pesca. Já é minha terceira compra na loja e sempre saio satisfeito.",
    date: "15/04/2023"
  },
  {
    name: "Mariana Costa",
    rating: 5,
    comment: "Entrega rápida e produto exatamente como descrito. A embalagem protegeu muito bem o carretel.",
    date: "22/05/2023"
  },
  {
    name: "Roberto Almeida",
    rating: 4,
    comment: "Muito bom o atendimento e a variedade de produtos. Só demorou um pouco mais do que esperava.",
    date: "10/06/2023"
  }
];

export default TrustSignals;
