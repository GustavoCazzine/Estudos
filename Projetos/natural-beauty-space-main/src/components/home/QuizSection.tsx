
import { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Quiz from './Quiz';

const QuizSection = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);
  
  const handleStartQuiz = () => {
    setShowQuiz(true);
    
    // Use setTimeout to ensure the DOM has updated before scrolling
    setTimeout(() => {
      if (quizRef.current) {
        quizRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
  
  return (
    <section className="py-16 bg-salon-branco-creme">
      <div className="container-salon">
        <div className="text-center mb-12">
          <span className="inline-block bg-salon-rosa-poeira/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Descubra Seu Estilo
          </span>
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Qual é o seu estilo de cílios ideal?
          </h2>
          <div className="w-24 h-1 bg-salon-dourado-claro mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-salon-light-text max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Responda nosso quiz e descubra qual extensão combina mais com seu estilo de vida e personalidade.
          </p>
        </div>
        
        {showQuiz ? (
          <div ref={quizRef}>
            <Quiz />
          </div>
        ) : (
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={handleStartQuiz}
              className="btn-primary inline-flex items-center transform hover:scale-105 transition-all duration-300"
            >
              Começar Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
