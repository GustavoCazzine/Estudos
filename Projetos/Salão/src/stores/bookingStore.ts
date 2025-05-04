
import { create } from 'zustand';

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: string;
};

type BookingStore = {
  selectedTime: string | null;
  selectedServices: Service[];
  isSubmitting: boolean;
  selectTime: (time: string) => void;
  addService: (service: Service) => void;
  removeService: (serviceId: string) => void;
  clearSelection: () => void;
  submitBooking: (date: Date) => Promise<void>;
  preSelectService: (serviceId: string) => void;
};

// Lista de serviços disponíveis
export const availableServices: Service[] = [
  {
    id: 'eyelashes-natural',
    name: 'Extensão de Cílios Efeito Natural',
    description: 'Alongamento de cílios com efeito natural e discreto',
    price: 180,
    duration: 90,
    category: 'eyelashes'
  },
  {
    id: 'eyelashes-classic',
    name: 'Extensão Clássica Fio a Fio',
    description: 'Técnica tradicional para um olhar mais definido',
    price: 190,
    duration: 90,
    category: 'eyelashes'
  },
  {
    id: 'eyelashes-russian',
    name: 'Volume Russo',
    description: 'Técnica que proporciona volume intenso aos cílios',
    price: 250,
    duration: 120,
    category: 'eyelashes'
  },
  {
    id: 'eyelashes-hybrid',
    name: 'Volume Híbrido',
    description: 'Combinação de técnicas para um efeito personalizado',
    price: 220,
    duration: 100,
    category: 'eyelashes'
  },
  {
    id: 'eyelashes-sensitive',
    name: 'Extensão Hipoalergênica para Olhos Sensíveis',
    description: 'Tratamento especial para olhos sensíveis com materiais hipoalergênicos',
    price: 210,
    duration: 90,
    category: 'eyelashes'
  },
  {
    id: 'eyebrows-design',
    name: 'Design de Sobrancelhas',
    description: 'Modelagem para valorizar o formato do seu rosto',
    price: 70,
    duration: 45,
    category: 'eyebrows'
  },
  {
    id: 'eyebrows-henna',
    name: 'Design com Henna',
    description: 'Coloração natural com efeito preenchedor',
    price: 90,
    duration: 60,
    category: 'eyebrows'
  },
  {
    id: 'lamination',
    name: 'Laminação de Cílios',
    description: 'Tratamento que alinha e realça seus cílios naturais',
    price: 120,
    duration: 60,
    category: 'eyelashes'
  },
  {
    id: 'eyebrows-lamination',
    name: 'Laminação de Sobrancelhas',
    description: 'Alinhamento e nutrição para sobrancelhas mais definidas',
    price: 130,
    duration: 60,
    category: 'eyebrows'
  },
  {
    id: 'maintenance-s',
    name: 'Manutenção Simples',
    description: 'Reposição de fios para manter o efeito das extensões',
    price: 120,
    duration: 60,
    category: 'maintenance'
  },
  {
    id: 'maintenance-c',
    name: 'Manutenção Completa',
    description: 'Remoção e reaplicação de cílios para resultado renovado',
    price: 150,
    duration: 75,
    category: 'maintenance'
  }
];

export const useBookingStore = create<BookingStore>((set, get) => ({
  selectedTime: null,
  selectedServices: [],
  isSubmitting: false,
  
  selectTime: (time) => set({ selectedTime: time }),
  
  addService: (service) => set((state) => ({
    selectedServices: [...state.selectedServices, service]
  })),
  
  removeService: (serviceId) => set((state) => ({
    selectedServices: state.selectedServices.filter(service => service.id !== serviceId)
  })),
  
  clearSelection: () => set({
    selectedTime: null,
    selectedServices: [],
    isSubmitting: false
  }),
  
  submitBooking: async (date) => {
    const { selectedTime, selectedServices } = get();
    
    if (!selectedTime || selectedServices.length === 0) {
      throw new Error("Informações incompletas para agendamento");
    }
    
    set({ isSubmitting: true });
    
    // Simulando um request para API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Success simulation - 90% success rate
        if (Math.random() > 0.1) {
          set({ isSubmitting: false });
          resolve();
        } else {
          set({ isSubmitting: false });
          reject(new Error("Erro ao processar o agendamento. Por favor, tente novamente."));
        }
      }, 1500);
    });
  },
  
  preSelectService: (serviceId) => {
    const service = availableServices.find(s => s.id === serviceId || s.category === serviceId);
    if (service && !get().selectedServices.some(s => s.id === service.id)) {
      set((state) => ({
        selectedServices: [...state.selectedServices, service]
      }));
    }
  }
}));
