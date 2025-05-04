
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BeforeAfterSlider from './BeforeAfterSlider';
import { Eye, Clock, Sparkles } from 'lucide-react';

// Placeholder data - in a real app, this would come from an API or CMS
const portfolioItems = [
  {
    id: 1,
    name: "Alice",
    service: "Tratamento Capilar",
    description: "Recuperação de pontas duplas e hidratação profunda.",
    beforeImage: "https://images.unsplash.com/photo-1580618864647-c15762a69da0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    thumbnailImage: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "2 horas",
    technique: "Hidratação intensiva com óleos naturais e tratamento térmico de recuperação.",
    products: ["Óleo de argan", "Máscara de queratina", "Protetor térmico natural"]
  },
  {
    id: 2,
    name: "Beatriz",
    service: "Coloração",
    description: "Mudança de cor com técnica que preserva a saúde dos fios.",
    beforeImage: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    thumbnailImage: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "3 horas",
    technique: "Coloração orgânica com pigmentos vegetais e baixa concentração de amônia.",
    products: ["Coloração vegetal", "Tratamento pós-coloração", "Fixador natural"]
  },
  {
    id: 3,
    name: "Carolina",
    service: "Corte e Styling",
    description: "Novo corte e modelagem com produtos naturais.",
    beforeImage: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1595178458735-42c31cf8cb6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    thumbnailImage: "https://images.unsplash.com/photo-1595178458735-42c31cf8cb6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "1 hora",
    technique: "Corte em camadas com técnica de texturização japonesa.",
    products: ["Sérum finalizador", "Spray de volume", "Protetor térmico"]
  },
  {
    id: 4,
    name: "Daniela",
    service: "Tratamento Facial",
    description: "Limpeza de pele e tratamento com produtos naturais.",
    beforeImage: "https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    thumbnailImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "1.5 horas",
    technique: "Limpeza profunda com vapor de ervas, extração e máscara de argila.",
    products: ["Esfoliante natural", "Argila verde", "Sérum hidratante"]
  },
  {
    id: 5,
    name: "Elena",
    service: "Manicure",
    description: "Tratamento completo para unhas com produtos veganos.",
    beforeImage: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1610225473188-2e3aedb3a2b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    thumbnailImage: "https://images.unsplash.com/photo-1610225473188-2e3aedb3a2b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "1 hora",
    technique: "Cutilagem a seco com hidratação intensiva e esmaltação em camadas.",
    products: ["Esmalte vegano", "Óleo de coco para cutículas", "Base fortalecedora"]
  },
  {
    id: 6,
    name: "Flávia",
    service: "Maquiagem",
    description: "Maquiagem com produtos hipoalergênicos e naturais.",
    beforeImage: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    afterImage: "https://images.unsplash.com/photo-1624959302499-bb77f7204c77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    thumbnailImage: "https://images.unsplash.com/photo-1624959302499-bb77f7204c77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "1 hora",
    technique: "Maquiagem natural com produtos minerais e técnica de iluminação facial.",
    products: ["Base mineral", "Iluminador natural", "Batom vegano"]
  }
];

interface FilterOptions {
  service: string | null;
}

const PortfolioGrid = () => {
  const [filter, setFilter] = useState<FilterOptions>({ service: null });
  
  const services = Array.from(new Set(portfolioItems.map(item => item.service)));
  
  const filteredItems = filter.service 
    ? portfolioItems.filter(item => item.service === filter.service)
    : portfolioItems;

  return (
    <div className="space-y-8 py-8">
      {/* Filter controls */}
      <div className="flex flex-wrap gap-3 justify-center pb-6">
        <button 
          onClick={() => setFilter({ service: null })}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            filter.service === null 
              ? 'bg-salon-terracota text-white' 
              : 'bg-salon-cream text-salon-dark-text hover:bg-salon-pink/30'
          }`}
        >
          Todos
        </button>
        
        {services.map(service => (
          <button 
            key={service}
            onClick={() => setFilter({ service })}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter.service === service 
                ? 'bg-salon-terracota text-white' 
                : 'bg-salon-cream text-salon-dark-text hover:bg-salon-pink/30'
            }`}
          >
            {service}
          </button>
        ))}
      </div>
      
      {/* Portfolio grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <div 
                className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.thumbnailImage} 
                    alt={`${item.name} - ${item.service}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end group-hover:opacity-100 transition-opacity">
                    <div className="p-4 text-white w-full">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm opacity-90">{item.service}</p>
                      <div className="mt-2 flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-salon-cream" />
                        <span className="text-xs">Ver transformação</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge to indicate clickable item */}
                  <div className="absolute top-3 right-3 bg-salon-terracota text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Antes/Depois</span>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-3xl overflow-y-auto max-h-[90vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <BeforeAfterSlider 
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-playfair font-bold">{item.name}</h3>
                  <div className="inline-block bg-salon-pink/50 text-salon-dark-text px-3 py-1 rounded-full text-sm font-medium">
                    {item.service}
                  </div>
                  
                  <div className="flex items-center gap-2 text-salon-light-text">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                  
                  <p className="text-salon-light-text">{item.description}</p>
                  
                  <div className="pt-4 space-y-3">
                    <h4 className="text-lg font-medium">Técnica utilizada:</h4>
                    <p className="text-salon-light-text">
                      {item.technique}
                    </p>
                    
                    <h4 className="text-lg font-medium">Produtos:</h4>
                    <ul className="list-disc pl-5 text-salon-light-text">
                      {item.products.map((product, idx) => (
                        <li key={idx}>{product}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-medium mt-4">Sobre o tratamento:</h4>
                    <p className="text-salon-light-text">
                      Nossos tratamentos são personalizados para cada cliente, levando em consideração 
                      suas características e necessidades específicas. Utilizamos produtos naturais e 
                      técnicas modernas para garantir os melhores resultados.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
