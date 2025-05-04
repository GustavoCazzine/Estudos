
import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHeader = () => {
  return (
    <section className="bg-primary-800 py-24 md:py-28 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 transition-transform duration-10000 transform scale-110 animate-pulse-soft"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1498125723885-933a0abbe39f?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary-500/20 rounded-full mb-8 animate-fade-in">
          <BookOpen className="h-7 w-7 text-primary-400" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
          Blog da Hook & Catch
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl animate-slide-up animate-delay-100">
          Dicas, tutoriais, histórias de pescadores e as últimas tendências no mundo da pesca.
        </p>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default BlogHeader;
