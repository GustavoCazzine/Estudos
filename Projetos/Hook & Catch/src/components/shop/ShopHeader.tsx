
import React from 'react';
import { ShoppingBag, Shield, Truck, HeadphonesIcon } from 'lucide-react';

const ShopHeader = () => {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-b from-primary to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMDUiPjxwYXRoIGQ9Ik0xMiA2MzNhMTAgMTAgMCAwMC0xMCAxMHYxMTJhMTAgMTAgMCAwMDEwIDEwaDQxNmExMCAxMCAwIDAwMTAtMTBWNjQzYTEwIDEwIDAgMDAtMTAtMTBIMTJ6TTEyIDEyYTEwIDEwIDAgMDAtMTAgMTB2MTEyYTEwIDEwIDAgMDAxMCAxMGg0MTZhMTAgMTAgMCAwMDEwLTEwVjIyYTEwIDEwIDAgMDAtMTAtMTBIMTJ6TTEyIDMyMmExMCAxMCAwIDAwLTEwIDEwdjExMmExMCAxMCAwIDAwMTAgMTBoNDE2YTEwIDEwIDAgMDAxMC0xMFYzMzJhMTAgMTAgMCAwMC0xMC0xMEgxMnoiLz48cGF0aCBkPSJNNDM4IDYzM2ExMCAxMCAwIDAwLTEwIDEwdjExMmExMCAxMCAwIDAwMTAgMTBoNDE2YTEwIDEwIDAgMDAxMC0xMFY2NDNhMTAgMTAgMCAwMC0xMC0xMEg0Mzh6TTQzOCAxMmExMCAxMCAwIDAwLTEwIDEwdjExMmExMCAxMCAwIDAwMTAgMTBoNDE2YTEwIDEwIDAgMDAxMC0xMFYyMmExMCAxMCAwIDAwLTEwLTEwSDQzOHpNNDM4IDMyMmExMCAxMCAwIDAwLTEwIDEwdjExMmExMCAxMCAwIDAwMTAgMTBoNDE2YTEwIDEwIDAgMDAxMC0xMFYzMzJhMTAgMTAgMCAwMC0xMC0xMEg0Mzh6Ii8+PHBhdGggZD0iTTg2NCA2MzNhMTAgMTAgMCAwMC0xMCAxMHYxMTJhMTAgMTAgMCAwMDEwIDEwaDQxNmExMCAxMCAwIDAwMTAtMTBWNjQzYTEwIDEwIDAgMDAtMTAtMTBIODY0ek04NjQgMTJhMTAgMTAgMCAwMC0xMCAxMHYxMTJhMTAgMTAgMCAwMDEwIDEwaDQxNmExMCAxMCAwIDAwMTAtMTBWMjJhMTAgMTAgMCAwMC0xMC0xMEg4NjR6TTg2NCAzMjJhMTAgMTAgMCAwMC0xMCAxMHYxMTJhMTAgMTAgMCAwMDEwIDEwaDQxNmExMCAxMCAwIDAwMTAtMTBWMzMyYTEwIDEwIDAgMDAtMTAtMTBIODY0eiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Wave overlay - using a more prominent wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-slide-down">
            Equipamentos de Pesca Premium
          </h1>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto animate-slide-down animate-delay-100">
            Descubra nossa seleção exclusiva de varas, carretilhas, iscas e acessórios das melhores marcas do mundo. 
            Qualidade e tecnologia para sua melhor experiência.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 animate-slide-up animate-delay-200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Produtos Premium</h3>
              <p className="text-white/80">Equipamentos de alta qualidade das melhores marcas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 animate-slide-up animate-delay-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Truck className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Entrega Segura</h3>
              <p className="text-white/80">Envio rápido e seguro para todo o Brasil</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 animate-slide-up animate-delay-400">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Especialistas</h3>
              <p className="text-white/80">Equipe de pescadores experientes para ajudar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 animate-slide-up animate-delay-500">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Garantia</h3>
              <p className="text-white/80">Garantia e suporte pós-venda em todos os produtos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
