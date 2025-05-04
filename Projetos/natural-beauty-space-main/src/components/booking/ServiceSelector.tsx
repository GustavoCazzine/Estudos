
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Check, Info, Search } from 'lucide-react';
import { useBookingStore } from '@/stores/bookingStore';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

interface ServiceSelectorProps {
  onServicesSelect: () => void;
}

const ServiceSelector = ({ onServicesSelect }: ServiceSelectorProps) => {
  const { toast } = useToast();
  const { 
    availableServices, 
    selectedServices, 
    addService, 
    removeService, 
    getTotalPrice, 
    getTotalDuration 
  } = useBookingStore();

  // Estado para filtro da categoria
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Obter todas as categorias únicas
  const categories = [...new Set(availableServices.map(service => service.category))];
  
  // Tradução das categorias
  const categoryTranslations: Record<string, string> = {
    'eyelashes': 'Cílios',
    'eyebrows': 'Sobrancelhas',
    'maintenance': 'Manutenção',
    'all': 'Todos os Serviços'
  };

  // Filtrar serviços por categoria e termo de busca
  const filteredServices = availableServices.filter(service => {
    const matchesCategory = selectedCategory ? service.category === selectedCategory : true;
    const matchesSearch = searchTerm.trim() === '' ? 
      true : 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Agrupar serviços por categoria após filtragem
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof availableServices>);

  // Verificar se serviço está selecionado
  const isServiceSelected = (serviceId: string) => {
    return selectedServices.some(service => service.id === serviceId);
  };

  // Adicionar ou remover serviço
  const toggleService = (service: typeof availableServices[0]) => {
    if (isServiceSelected(service.id)) {
      removeService(service.id);
    } else {
      // Verificar se já existe um serviço da mesma categoria
      const existingServiceInCategory = selectedServices.find(s => 
        s.category === service.category && s.id !== service.id
      );
      
      if (existingServiceInCategory) {
        toast({
          title: "Atenção",
          description: `Você já selecionou ${existingServiceInCategory.name}. Deseja substituir?`,
          variant: "default",
          action: (
            <div className="flex gap-2 mt-2">
              <button 
                onClick={() => {
                  removeService(existingServiceInCategory.id);
                  addService(service);
                }}
                className="px-3 py-1 bg-salon-terracota text-white rounded-md text-xs"
              >
                Substituir
              </button>
              <button 
                onClick={() => {
                  addService(service);
                }}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-xs"
              >
                Adicionar ambos
              </button>
            </div>
          ),
        });
      } else {
        addService(service);
      }
    }
  };

  // Simular carregamento
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // Efeito para chamar onServicesSelect quando serviços são selecionados
  useEffect(() => {
    if (selectedServices.length > 0) {
      onServicesSelect();
    }
  }, [selectedServices, onServicesSelect]);

  return (
    <div className="animate-fade-in">
      <div className="mb-6 space-y-4">
        {/* Barra de filtros */}
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between bg-salon-pink/5 p-3 rounded-lg border border-salon-pink/10">
          {/* Select para filtrar por categoria */}
          <div className="w-full md:w-auto">
            <Select 
              value={selectedCategory} 
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[180px] bg-white">
                <SelectValue placeholder="Todos os Serviços" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Serviços</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {categoryTranslations[category] || category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Campo de busca */}
          <div className="relative w-full md:w-auto flex-1 md:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-salon-light-text" />
            </div>
            <input
              type="text"
              placeholder="Buscar serviços..."
              className="pl-10 w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-salon-pink/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 mb-6">
        {isLoading ? (
          // Skeleton loader
          <>
            {[1, 2, 3].map((index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="h-6 w-32" />
                <div className="space-y-3">
                  {[1, 2].map((cardIndex) => (
                    <Skeleton key={cardIndex} className="h-[120px] w-full rounded-lg" />
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : Object.keys(servicesByCategory).length > 0 ? (
          // Serviços filtrados
          Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category} className="transition-all duration-300">
              <h3 className="font-medium text-lg mb-3 text-salon-terracota">
                {categoryTranslations[category] || category}
              </h3>
              <div className="grid gap-3">
                {services.map(service => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 border hover:shadow-md ${
                      isServiceSelected(service.id) 
                        ? 'border-salon-terracota bg-salon-terracota/5' 
                        : 'border-salon-rosa-poeira/20 hover:border-salon-terracota/50'
                    }`}
                    onClick={() => toggleService(service)}
                  >
                    <div className="p-4 flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium">{service.name}</h4>
                          {isServiceSelected(service.id) && (
                            <Check className="ml-2 h-4 w-4 text-salon-terracota" />
                          )}
                        </div>
                        <p className="text-sm text-salon-light-text mt-1">{service.description}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {service.duration} min
                          </Badge>
                        </div>
                      </div>
                      <div className="font-medium text-salon-terracota">
                        R$ {service.price}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Nenhum serviço encontrado
          <div className="text-center py-8">
            <p className="text-salon-light-text">Nenhum serviço encontrado com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setSelectedCategory('');
                setSearchTerm('');
              }}
              className="mt-3 text-salon-terracota hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {selectedServices.length > 0 && (
        <div className="flex justify-between items-center border-t border-salon-rosa-poeira/20 pt-4">
          <div>
            <div className="flex items-center text-sm font-medium">
              <Info className="h-4 w-4 mr-1 text-salon-dourado-claro" />
              <span>Serviços selecionados: {selectedServices.length}</span>
            </div>
            <div className="text-sm text-salon-light-text mt-1">
              Duração total: {getTotalDuration()} min
            </div>
          </div>
          <div className="font-medium">
            <span className="text-sm text-salon-light-text mr-2">Total:</span>
            <span className="text-lg text-salon-terracota">R$ {getTotalPrice()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
