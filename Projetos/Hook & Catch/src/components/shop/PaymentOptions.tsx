
import React from 'react';
import { CreditCard, Banknote, Truck, Globe, Clock } from 'lucide-react';

const PaymentOptions = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pagamento & Entrega</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos diversas opções de pagamento e entrega para melhor atender às suas necessidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opções de Pagamento */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-fishing-600 mr-2" />
              <h3 className="text-xl font-semibold">Formas de Pagamento</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-5 w-5 text-fishing-600 mr-2" />
                  <h4 className="font-medium">Cartão de Crédito</h4>
                </div>
                <div className="ml-7">
                  <p className="text-sm text-gray-600 mb-2">Parcele em até 12x sem juros (compras acima de R$299)</p>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://placehold.co/40x30/png" alt="Visa" className="h-6" />
                    <img src="https://placehold.co/40x30/png" alt="Mastercard" className="h-6" />
                    <img src="https://placehold.co/40x30/png" alt="Amex" className="h-6" />
                    <img src="https://placehold.co/40x30/png" alt="Elo" className="h-6" />
                    <img src="https://placehold.co/40x30/png" alt="Hipercard" className="h-6" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Banknote className="h-5 w-5 text-fishing-600 mr-2" />
                  <h4 className="font-medium">Pagamentos Instantâneos</h4>
                </div>
                <div className="ml-7">
                  <p className="text-sm text-gray-600 mb-2">5% de desconto à vista nas seguintes formas:</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <img src="https://placehold.co/30x30/png" alt="Pix" className="h-6 mr-1" />
                      <span className="text-sm">Pix</span>
                    </div>
                    <div className="flex items-center">
                      <img src="https://placehold.co/30x30/png" alt="Boleto" className="h-6 mr-1" />
                      <span className="text-sm">Boleto</span>
                    </div>
                    <div className="flex items-center">
                      <img src="https://placehold.co/30x30/png" alt="Transferência" className="h-6 mr-1" />
                      <span className="text-sm">Transferência</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mt-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Processamento seguro e aprovação instantânea</span>
              </div>
            </div>
          </div>
          
          {/* Opções de Entrega */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-fishing-600 mr-2" />
              <h3 className="text-xl font-semibold">Opções de Entrega</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Truck className="h-5 w-5 text-fishing-600 mr-2" />
                  <h4 className="font-medium">Entrega Nacional</h4>
                </div>
                <div className="ml-7">
                  <p className="text-sm text-gray-600 mb-2">Frete grátis para compras acima de R$499</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Expresso</span>
                      <span className="text-xs text-gray-500">2-3 dias úteis</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Econômico</span>
                      <span className="text-xs text-gray-500">4-7 dias úteis</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Retirada na loja</span>
                      <span className="text-xs text-gray-500">Sem custo adicional</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Sedex</span>
                      <span className="text-xs text-gray-500">1-2 dias úteis</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-fishing-600 mr-2" />
                  <h4 className="font-medium">Envio Internacional</h4>
                </div>
                <div className="ml-7">
                  <p className="text-sm text-gray-600 mb-2">Entregamos para diversos países:</p>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://placehold.co/30x20/png" alt="Brasil" className="h-5" />
                    <img src="https://placehold.co/30x20/png" alt="Argentina" className="h-5" />
                    <img src="https://placehold.co/30x20/png" alt="Chile" className="h-5" />
                    <img src="https://placehold.co/30x20/png" alt="Uruguai" className="h-5" />
                    <img src="https://placehold.co/30x20/png" alt="Paraguai" className="h-5" />
                    <img src="https://placehold.co/30x20/png" alt="EUA" className="h-5" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mt-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Cálculo de frete em tempo real no checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
