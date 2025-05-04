
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    text: "Minha experiência no salão foi incrível! O tratamento capilar transformou meus cabelos, que estavam danificados e sem vida. A equipe é muito atenciosa e os produtos utilizados são todos naturais. Recomendo demais!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Juliana Mendes",
    text: "Adorei o resultado da minha maquiagem para o casamento! Natural e elegante, exatamente como eu queria. A profissional entendeu perfeitamente o que eu buscava e o resultado durou a festa inteira.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Fernanda Costa",
    text: "O tratamento facial foi revitalizante! Minha pele ficou muito mais luminosa e hidratada. A massagem foi relaxante e os produtos têm um aroma delicioso. Já marquei meu retorno para o próximo mês!",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1170&auto=format&fit=crop"
  }
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-salon-cream">
      <div className="container-salon">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 fade-in-up">
            O que nossas clientes dizem
          </h2>
          <p className="text-salon-light-text max-w-2xl mx-auto fade-in-up delay-100">
            Experiências reais de clientes que confiaram em nossos serviços e compartilharam seus resultados.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 relative">
                      <Quote className="absolute -top-2 -left-2 w-10 h-10 text-salon-pink opacity-30" />
                      
                      <p className="text-salon-light-text mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <p className="font-medium text-salon-dark-text">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-salon-pink/10 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 text-salon-terracota" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-salon-pink/10 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 text-salon-terracota" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === currentIndex ? 'bg-salon-terracota' : 'bg-salon-pink/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
