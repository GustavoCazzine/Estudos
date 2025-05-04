import { useEffect, useState, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock, Clock, ArrowDown } from "lucide-react";
import BookingTimeSelector from "@/components/booking/BookingTimeSelector";
import ServiceSelector from "@/components/booking/ServiceSelector";
import BookingSummary from "@/components/booking/BookingSummary";
import { useBookingStore } from "@/stores/bookingStore";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { selectedServices, selectedTime, clearSelection, isSubmitting, submitBooking, preSelectService } = useBookingStore();
  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();
  
  // Refs para os elementos que vamos scrollar
  const timeSelectionRef = useRef<HTMLDivElement>(null);
  const serviceSelectionRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a service in the URL query param
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      // Pre-select the service in the booking store
      preSelectService(serviceFromUrl);
    }
  }, [searchParams, preSelectService]);

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      setStep(2);
      // Scroll para a seleção de horário com um pequeno delay para garantir que os elementos estejam renderizados
      setTimeout(() => {
        timeSelectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  // Handler para quando um horário é selecionado
  const handleTimeSelect = () => {
    setStep(3);
    setTimeout(() => {
      serviceSelectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  // Handler para quando os serviços são selecionados
  const handleServicesSelect = () => {
    setStep(4);
    setTimeout(() => {
      summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleSubmit = async () => {
    if (!date || !selectedTime || selectedServices.length === 0) {
      toast({
        title: "Informações incompletas",
        description: "Por favor, selecione data, horário e serviços.",
        variant: "destructive",
      });
      return;
    }

    try {
      await submitBooking(date);
      toast({
        title: "Agendamento confirmado!",
        description: "Em breve você receberá um email de confirmação.",
      });
      clearSelection();
      setDate(undefined);
      setStep(1);
    } catch (error) {
      toast({
        title: "Erro ao agendar",
        description: error instanceof Error ? error.message : "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-salon-pink/10 py-16 md:py-24">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
              Agendamento
            </span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Agende seu horário
            </h1>
            <p className="text-lg text-salon-light-text mb-8">
              Escolha o serviço desejado e marque seu horário de forma rápida e prática.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center md:space-x-4 text-sm text-salon-light-text">
              <div className="flex items-center mb-2 md:mb-0">
                <div className="w-6 h-6 rounded-full bg-salon-terracota text-white flex items-center justify-center mr-2">1</div>
                <span>Escolha a data</span>
              </div>
              <ArrowDown className="w-4 h-4 hidden md:block mt-1 transform rotate-[-90deg]" />
              <div className="flex items-center mb-2 md:mb-0">
                <div className="w-6 h-6 rounded-full bg-salon-terracota text-white flex items-center justify-center mr-2">2</div>
                <span>Selecione o horário</span>
              </div>
              <ArrowDown className="w-4 h-4 hidden md:block mt-1 transform rotate-[-90deg]" />
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-salon-terracota text-white flex items-center justify-center mr-2">3</div>
                <span>Escolha os serviços</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-salon">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step 1: Calendar */}
            <Card className={`transition-all duration-300 ${step === 1 ? 'lg:col-span-2 shadow-lg' : 'shadow'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-playfair">
                  <CalendarClock className="h-5 w-5" />
                  Escolha uma data
                </CardTitle>
                <CardDescription>
                  Selecione o dia para seu agendamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  className="rounded-md border pointer-events-auto"
                  locale={ptBR}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return (
                      date < today ||
                      date.getDay() === 0 // Sunday
                    );
                  }}
                />
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                {date ? (
                  <Badge variant="outline" className="font-normal">
                    Data selecionada: {format(date, "d 'de' MMMM", { locale: ptBR })}
                  </Badge>
                ) : (
                  "Os horários disponíveis serão mostrados após selecionar uma data."
                )}
              </CardFooter>
            </Card>

            {/* Step 2: Time Selection */}
            <Card ref={timeSelectionRef} className={`transition-all duration-300 ${step === 2 ? 'lg:col-span-1 shadow-lg animate-pulse-once' : 'shadow opacity-70'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-playfair">
                  <Clock className="h-5 w-5" />
                  Horário
                </CardTitle>
                <CardDescription>
                  Escolha o horário disponível
                </CardDescription>
              </CardHeader>
              <CardContent>
                {date ? (
                  <BookingTimeSelector selectedDate={date} onTimeSelect={handleTimeSelect} />
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Selecione uma data primeiro.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Step 3: Service Selection */}
            <Card ref={serviceSelectionRef} className={`transition-all duration-300 ${step >= 3 ? 'lg:col-span-2 shadow-lg animate-pulse-once' : 'shadow opacity-70'}`}>
              <CardHeader>
                <CardTitle className="font-playfair">Serviços</CardTitle>
                <CardDescription>
                  Escolha os serviços desejados
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedTime ? (
                  <ServiceSelector onServicesSelect={handleServicesSelect} />
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Selecione data e horário primeiro.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Step 4: Summary and Confirmation */}
            <Card ref={summaryRef} className={`transition-all duration-300 ${step >= 4 ? 'lg:col-span-1 shadow-lg animate-pulse-once' : 'shadow opacity-70'}`}>
              <CardHeader>
                <CardTitle className="font-playfair">Resumo</CardTitle>
                <CardDescription>
                  Confira seu agendamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedServices.length > 0 ? (
                  <BookingSummary selectedDate={date} />
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Selecione seus serviços primeiro.
                  </p>
                )}
              </CardContent>
              <CardFooter>
                {selectedServices.length > 0 && (
                  <Button 
                    onClick={handleSubmit} 
                    className="w-full mt-4 bg-salon-terracota hover:bg-salon-terracota/80"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Confirmar Agendamento"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
