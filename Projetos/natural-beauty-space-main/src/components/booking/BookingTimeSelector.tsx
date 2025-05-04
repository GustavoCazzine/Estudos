
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBookingStore, TimeSlot } from "@/stores/bookingStore";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingTimeSelectorProps {
  selectedDate: Date;
  onTimeSelect: () => void;
}

const BookingTimeSelector = ({ selectedDate, onTimeSelect }: BookingTimeSelectorProps) => {
  const { 
    fetchAvailableTimeSlots, 
    availableTimeSlots, 
    setSelectedTime, 
    selectedTime,
    isLoading,
    error 
  } = useBookingStore();
  
  useEffect(() => {
    fetchAvailableTimeSlots(selectedDate);
  }, [selectedDate, fetchAvailableTimeSlots]);

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    onTimeSelect();
  };

  if (isLoading) {
    return (
      <div className="space-y-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-destructive/50 rounded-md bg-destructive/10 text-destructive">
        {error}
        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full"
          onClick={() => fetchAvailableTimeSlots(selectedDate)}
        >
          Tentar novamente
        </Button>
      </div>
    );
  }

  // Group time slots by hour for better presentation
  const groupedTimeSlots: Record<string, TimeSlot[]> = {};
  availableTimeSlots.forEach(slot => {
    const hour = slot.time.split(':')[0];
    if (!groupedTimeSlots[hour]) {
      groupedTimeSlots[hour] = [];
    }
    groupedTimeSlots[hour].push(slot);
  });

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium mb-2">
        {format(selectedDate, "EEEE, d 'de' MMMM", { locale: ptBR })}
      </p>
      
      {Object.entries(groupedTimeSlots).map(([hour, slots]) => (
        <div key={hour} className="mb-2">
          <p className="text-xs text-muted-foreground mb-1">{hour}:00</p>
          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => (
              <Button
                key={slot.time}
                variant={selectedTime === slot.time ? "default" : "outline"}
                size="sm"
                disabled={!slot.available}
                onClick={() => handleTimeSelection(slot.time)}
                className={`
                  ${selectedTime === slot.time ? 'bg-salon-terracota hover:bg-salon-terracota/80' : ''}
                  ${!slot.available ? 'line-through text-muted-foreground' : ''}
                `}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      ))}
      
      {availableTimeSlots.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Nenhum horário disponível nesta data.
        </p>
      )}
    </div>
  );
};

export default BookingTimeSelector;
