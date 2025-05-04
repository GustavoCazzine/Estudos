
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Carolina",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop",
    text: "Finalmente encontrei quem entende de sobrancelhas! O design respeitou minhas características naturais e valorizou meu olhar.",
    service: "Design de Sobrancelhas"
  },
  {
    id: 2,
    name: "Mariana Silva",
    image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=150&auto=format&fit=crop",
    text: "As extensões de cílios ficaram perfeitas! Naturais, confortáveis e duradouras. Economizo tempo na maquiagem todos os dias.",
    service: "Extensão de Cílios"
  },
  {
    id: 3,
    name: "Beatriz Oliveira",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    text: "A laminação transformou minhas sobrancelhas rebeldes! Agora estão alinhadas e com volume perfeito.",
    service: "Laminação de Sobrancelhas"
  },
  {
    id: 4,
    name: "Fernanda Costa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    text: "Atendimento incrível, ambiente acolhedor e resultado impecável! Minhas sobrancelhas nunca ficaram tão bonitas.",
    service: "Design com Henna"
  },
  {
    id: 5,
    name: "Camila Mendes",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&auto=format&fit=crop",
    text: "A extensão volume russo é um sonho! Saio de casa sem maquiagem e me sinto linda. Vale cada centavo!",
    service: "Extensão Volume Russo"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeState, setFadeState] = useState("fade-in");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setFadeState("fade-out");
    
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setFadeState("fade-in");
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }, 300);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setFadeState("fade-out");
    
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFadeState("fade-in");
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }, 300);
  };
  
  const jumpToTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    
    setIsAnimating(true);
    setFadeState("fade-out");
    
    setTimeout(() => {
      setCurrentTestimonial(index);
      setFadeState("fade-in");
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-12 md:py-16 bg-white w-full" ref={sectionRef}>
      <div className="container-salon">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll">
          <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
            O que nossas clientes dizem
          </h2>
          <div className="w-20 h-1 bg-salon-gold mx-auto"></div>
        </div>

        <div className="relative max-w-3xl mx-auto animate-on-scroll">
          <div className="testimonial-carousel relative bg-salon-light-pink/30 rounded-2xl p-6 md:p-12">
            {/* Decoration elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-salon-pink rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-salon-gold rounded-full opacity-20"></div>
            
            <div className="relative min-h-[200px]">
              <Quote className="w-10 h-10 md:w-16 md:h-16 text-salon-pink/40 absolute -top-2 -left-2" />

              <div className={`transition-all duration-300 ${fadeState}`}>
                <div className="mb-6 flex flex-col md:flex-row items-center md:items-start">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-playfair font-semibold">{testimonials[currentTestimonial].name}</h3>
                    <span className="text-sm text-salon-light-text">{testimonials[currentTestimonial].service}</span>
                  </div>
                </div>
                
                <p className="text-lg italic text-salon-dark-text">"{testimonials[currentTestimonial].text}"</p>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-salon flex items-center justify-center transition-all hover:shadow-salon-hover disabled:opacity-50"
                aria-label="Depoimento anterior"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-5 h-5 text-salon-dark-text" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-salon flex items-center justify-center transition-all hover:shadow-salon-hover disabled:opacity-50"
                aria-label="Próximo depoimento"
                disabled={isAnimating}
              >
                <ChevronRight className="w-5 h-5 text-salon-dark-text" />
              </button>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => jumpToTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'w-8 bg-salon-gold' : 'w-2 bg-salon-pink/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
