
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Clock1 } from "lucide-react";
import { useBookingStore, Service } from "@/stores/bookingStore";

interface ServiceSelectorProps {
  onServicesSelect: () => void;
}

const ServiceSelector = ({ onServicesSelect }: ServiceSelectorProps) => {
  const { 
    availableServices, 
    selectedServices, 
    addService, 
    removeService,
    getTotalDuration
  } = useBookingStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("Cílios");
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  // Business day maximum time (in minutes)
  const MAX_BOOKING_TIME = 240; // 4 hours

  useEffect(() => {
    if (selectedServices.length > 0) {
      onServicesSelect();
    }
    
    // Calculate remaining time
    const totalDuration = getTotalDuration();
    setRemainingTime(MAX_BOOKING_TIME - totalDuration);
  }, [selectedServices, getTotalDuration, onServicesSelect]);

  const handleServiceToggle = (checked: boolean, service: Service) => {
    if (checked) {
      // Check if adding this service would exceed the max booking time
      const newTotalDuration = getTotalDuration() + service.duration;
      if (newTotalDuration > MAX_BOOKING_TIME) {
        alert(`Este serviço não pode ser adicionado. O tempo máximo de agendamento é de ${MAX_BOOKING_TIME / 60} horas.`);
        return;
      }
      addService(service);
    } else {
      removeService(service.id);
    }
  };

  const isServiceSelected = (serviceId: string) => {
    return selectedServices.some(service => service.id === serviceId);
  };

  const getServicesByCategory = (category: string) => {
    return availableServices.filter(service => service.category === category);
  };

  return (
    <div className="space-y-6">
      {remainingTime !== null && remainingTime < 60 && (
        <div className={`p-2 text-sm rounded-md ${remainingTime <= 0 ? 'bg-destructive/10 text-destructive' : 'bg-amber-100 text-amber-800'}`}>
          {remainingTime <= 0 
            ? "Tempo máximo de agendamento atingido. Remova algum serviço para adicionar outros."
            : `Apenas ${remainingTime} minutos restantes do tempo máximo de agendamento.`}
        </div>
      )}

      <Tabs defaultValue="Cílios" value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="Cílios">Cílios</TabsTrigger>
          <TabsTrigger value="Sobrancelhas">Sobrancelhas</TabsTrigger>
          <TabsTrigger value="Combos">Combos</TabsTrigger>
        </TabsList>
        
        {["Cílios", "Sobrancelhas", "Combos"].map(category => (
          <TabsContent key={category} value={category} className="space-y-4">
            {getServicesByCategory(category).map(service => (
              <Card key={service.id} className="overflow-hidden">
                <div className="flex items-start p-4">
                  <Checkbox
                    id={`service-${service.id}`}
                    checked={isServiceSelected(service.id)}
                    onCheckedChange={(checked) => 
                      handleServiceToggle(checked as boolean, service)
                    }
                    className="mt-1 h-5 w-5"
                  />
                  <div className="ml-3 flex-1">
                    <label
                      htmlFor={`service-${service.id}`}
                      className="text-base font-medium cursor-pointer"
                    >
                      {service.name}
                    </label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock1 className="h-3 w-3" />
                        {service.duration} min
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        R$ {service.price.toFixed(2)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
      
      {selectedServices.length > 0 && (
        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">Serviços Selecionados:</h4>
          <ul className="space-y-1">
            {selectedServices.map(service => (
              <li key={service.id} className="flex justify-between text-sm">
                <span>{service.name}</span>
                <span className="text-muted-foreground">
                  {service.duration} min - R$ {service.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
