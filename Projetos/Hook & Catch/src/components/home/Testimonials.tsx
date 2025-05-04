
import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard, { TestimonialProps } from '../ui/TestimonialCard';

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: 'Michael Johnson',
    location: 'Florida, USA',
    rating: 5,
    text: "The Pro Carbon Fishing Rod exceeded all my expectations. It's lightweight, responsive, and has incredible sensitivity. I've landed several trophy bass with this rod, and it performed flawlessly every time.",
    date: 'June 15, 2023',
    productName: 'Pro Carbon Fishing Rod'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    location: 'Michigan, USA',
    rating: 5,
    text: "I've been fishing for over 20 years, and this Ultra-Light Spinning Reel is by far the smoothest I've ever used. The drag system is incredibly precise, and it's held up perfectly after a full season of use.",
    date: 'August 3, 2023',
    productName: 'Ultra-Light Spinning Reel'
  },
  {
    id: 3,
    name: 'David Thompson',
    location: 'California, USA',
    rating: 4,
    text: "The premium lure set has been a game-changer for my lake fishing. I've caught more fish in the last month than I did all of last year. Great variety and quality for the price.",
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop',
    date: 'July 22, 2023',
    productName: 'Premium Lure Set'
  },
  {
    id: 4,
    name: 'Jennifer Lopez',
    location: 'Texas, USA',
    rating: 5,
    text: "The Hook & Catch team went above and beyond with their customer service. When my order arrived with a damaged item, they immediately sent a replacement and followed up to ensure I was satisfied. Will definitely be ordering again!",
    date: 'September 12, 2023'
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="py-24 relative overflow-hidden bg-fishing-800"
      ref={sectionRef}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1496100704956-587ea90883dc?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-fishing-300 font-medium">Trusted By Anglers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-white">What Our Customers Say</h2>
          <p className="text-fishing-100">
            Don't just take our word for it. Here's what fishing enthusiasts have to say about their experience with our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
