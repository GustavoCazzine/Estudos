
import { CalendarClock, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useBookingStore } from "@/stores/bookingStore";
import { format, addMinutes } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingSummaryProps {
  selectedDate?: Date;
}

const BookingSummary = ({ selectedDate }: BookingSummaryProps) => {
  const { 
    selectedServices, 
    selectedTime, 
    getTotalPrice,
    getTotalDuration
  } = useBookingStore();
  
  if (!selectedDate || !selectedTime || selectedServices.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Selecione data, horário e serviços para ver o resumo.
      </p>
    );
  }

  const totalPrice = getTotalPrice();
  const totalDuration = getTotalDuration();
  
  // Calculate end time
  const [hours, minutes] = selectedTime.split(':').map(Number);
  const startTime = new Date(selectedDate);
  startTime.setHours(hours, minutes, 0, 0);
  
  const endTime = addMinutes(startTime, totalDuration);
  
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
          <CalendarClock className="h-4 w-4" /> 
          Data e Horário
        </h4>
        <div className="text-sm bg-muted/50 p-2 rounded-md">
          <p>{format(selectedDate, "EEEE, d 'de' MMMM", { locale: ptBR })}</p>
          <p>
            {selectedTime} - {format(endTime, "HH:mm")}
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2">Serviços Selecionados</h4>
        <ul className="space-y-2">
          {selectedServices.map(service => (
            <li key={service.id} className="text-sm">
              <div className="flex justify-between">
                <span>{service.name}</span>
                <span>R$ {service.price.toFixed(2)}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Duração: {service.duration} minutos
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <Separator />
      
      <div className="space-y-1">
        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 
            Tempo Total
          </span>
          <span>{totalDuration} minutos</span>
        </div>
        
        <div className="flex justify-between items-center font-medium">
          <span className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" /> 
            Valor Total
          </span>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground mt-4">
        Ao confirmar o agendamento, você receberá um email com os detalhes e o evento será adicionado ao seu Google Calendar.
      </div>
    </div>
  );
};

export default BookingSummary;
