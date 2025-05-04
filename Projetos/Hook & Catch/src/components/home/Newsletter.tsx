
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would normally send the email to your API
      console.log('Submitting email:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section 
      className="py-24 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-4xl mx-auto relative overflow-hidden rounded-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1567025660396-8161296967bf?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fishing-800 to-fishing-600/90"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Exclusive Fishing Tips & Offers</h2>
            <p className="text-fishing-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and be the first to know about new products, special offers, and expert fishing tips.
            </p>
            
            <form 
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-fishing-300"
                required
              />
              <button
                type="submit"
                className="bg-fishing-500 hover:bg-fishing-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Subscribe <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 text-fishing-300 animate-fade-in">
                Thank you for subscribing! We've sent a confirmation email to your inbox.
              </div>
            )}
            
            <p className="text-fishing-200 text-sm mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
