
// This is a mock service that simulates Google Calendar integration
// In a real application, you would use the Google Calendar API

export interface CalendarEvent {
  summary: string;
  description: string;
  start: Date;
  end: Date;
}

export class GoogleCalendarService {
  // Simulate existing bookings
  private bookedSlots: Record<string, string[]> = {
    // Format: "YYYY-MM-DD": ["10:00", "14:30"]
    "2024-09-01": ["10:00", "14:30", "16:00"],
    "2024-09-02": ["11:00", "13:30"],
    "2024-09-03": ["09:00", "15:30"],
  };

  // Get booked time slots for a specific date
  async getBookedTimeSlots(date: Date): Promise<string[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const dateKey = this.formatDateKey(date);
    return this.bookedSlots[dateKey] || [];
  }

  // Create a new event in Google Calendar
  async createEvent(event: CalendarEvent): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Creating calendar event:', event);
    
    // Check for conflicts
    const dateKey = this.formatDateKey(event.start);
    const timeSlot = this.formatTimeSlot(event.start);
    
    if (this.bookedSlots[dateKey]?.includes(timeSlot)) {
      throw new Error("Este horário não está mais disponível. Por favor, escolha outro horário.");
    }
    
    // In a real app, this would make an API call to Google Calendar
    // For simulation, we'll just add it to our local bookedSlots
    if (!this.bookedSlots[dateKey]) {
      this.bookedSlots[dateKey] = [];
    }
    
    this.bookedSlots[dateKey].push(timeSlot);
    
    // Randomly simulate an error (10% chance)
    if (Math.random() < 0.1) {
      throw new Error("Erro ao conectar com o Google Calendar. Tente novamente.");
    }
    
    return;
  }

  // Format date to YYYY-MM-DD for use as key
  private formatDateKey(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  // Format time to HH:MM
  private formatTimeSlot(date: Date): string {
    return `${date.getHours()}:${date.getMinutes() === 0 ? '00' : date.getMinutes()}`;
  }
}
