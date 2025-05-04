
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CalendarCheck, CornerDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type QuizOption = {
  id: string;
  text: string;
};

type QuizQuestion = {
  id: string;
  text: string;
  options: QuizOption[];
};

type QuizResult = {
  id: string;
  title: string;
  description: string;
  serviceId: string;
  serviceName: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'O que você busca para os seus cílios?',
    options: [
      { id: 'q1_a', text: 'Volume e alongamento' },
      { id: 'q1_b', text: 'Curvatura e definição' },
      { id: 'q1_c', text: 'Naturalidade e leveza' },
      { id: 'q1_d', text: 'Não tenho interesse em serviços para cílios' }
    ]
  },
  {
    id: 'q2',
    text: 'O que você procura para suas sobrancelhas?',
    options: [
      { id: 'q2_a', text: 'Definição e preenchimento' },
      { id: 'q2_b', text: 'Correção de falhas' },
      { id: 'q2_c', text: 'Design completo e estruturado' },
      { id: 'q2_d', text: 'Não tenho interesse em serviços para sobrancelhas' }
    ]
  },
  {
    id: 'q3',
    text: 'Com que frequência você realiza procedimentos estéticos?',
    options: [
      { id: 'q3_a', text: 'Semanalmente' },
      { id: 'q3_b', text: 'Mensalmente' },
      { id: 'q3_c', text: 'A cada 2-3 meses' },
      { id: 'q3_d', text: 'Raramente ou nunca fiz' }
    ]
  }
];

const quizResults: QuizResult[] = [
  {
    id: 'result1',
    title: 'Extensão de Cílios Efeito Natural',
    description: 'Baseado nas suas respostas, recomendamos nossa extensão de cílios com efeito natural, que proporciona alongamento mantendo a leveza.',
    serviceId: 'eyelashes-natural',
    serviceName: 'Extensão de Cílios Efeito Natural'
  },
  {
    id: 'result2',
    title: 'Volume Russo',
    description: 'Suas respostas indicam que você buscaria mais volume e dramaticidade. Nossa técnica de Volume Russo oferece exatamente isso!',
    serviceId: 'eyelashes-russian',
    serviceName: 'Volume Russo'
  },
  {
    id: 'result3',
    title: 'Design de Sobrancelhas com Henna',
    description: 'Para você, o ideal é o nosso Design com Henna, que proporciona definição e preenchimento duradouro.',
    serviceId: 'eyebrows-henna',
    serviceName: 'Design com Henna'
  },
  {
    id: 'result4',
    title: 'Laminação de Sobrancelhas',
    description: 'A Laminação de Sobrancelhas é perfeita para você! Alinha os fios, preenche falhas e proporciona um visual estruturado e natural.',
    serviceId: 'eyebrows-lamination',
    serviceName: 'Laminação de Sobrancelhas'
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (questionId: string, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId });
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      determineResult();
      setQuizCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
    setQuizCompleted(false);
  };

  const determineResult = () => {
    const cilioBuscado = answers.q1;
    const sobrancelhaDesejada = answers.q2;
    
    if (cilioBuscado === 'q1_a' || cilioBuscado === 'q1_b') {
      setResult(quizResults[1]); // Volume Russo
    } else if (cilioBuscado === 'q1_c') {
      setResult(quizResults[0]); // Extensão Natural
    } else if (sobrancelhaDesejada === 'q2_a' || sobrancelhaDesejada === 'q2_b') {
      setResult(quizResults[2]); // Design com Henna
    } else {
      setResult(quizResults[3]); // Laminação
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-md border border-salon-rosa-poeira/30 overflow-hidden">
      {!quizCompleted ? (
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold">Descubra o Serviço Ideal</h3>
              <span className="text-sm text-salon-light-text">
                {currentQuestionIndex + 1} de {quizQuestions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-salon-terracota h-full rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-4">{currentQuestion.text}</h4>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  className="w-full text-left p-4 rounded-lg border border-salon-rosa-poeira/30 hover:border-salon-terracota/50 hover:bg-salon-rosa-poeira/10 transition-all duration-200"
                  onClick={() => handleOptionClick(currentQuestion.id, option.id)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            {currentQuestionIndex > 0 ? (
              <Button 
                variant="outline" 
                onClick={handlePrevQuestion}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>
            ) : (
              <div></div> // Espaço vazio para manter o layout consistente
            )}
            
            <Button 
              variant="outline"
              onClick={resetQuiz}
            >
              Reiniciar
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-6 md:p-8 animate-fade-in">
          <div className="text-center mb-6">
            <span className="inline-block bg-salon-pink/20 text-salon-terracota px-3 py-1 rounded-full text-sm font-medium mb-3">
              Resultado
            </span>
            <h3 className="text-2xl font-playfair font-bold mb-2">{result?.title}</h3>
            <p className="text-salon-light-text">{result?.description}</p>
          </div>
          
          <div className="border-t border-salon-rosa-poeira/30 pt-6 mt-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <Link 
                to={`/booking?service=${result?.serviceId}`}
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-salon-terracota hover:bg-salon-terracota/90 text-white flex items-center justify-center gap-2">
                  <CalendarCheck className="h-4 w-4" />
                  <span>Agendar {result?.serviceName}</span>
                </Button>
              </Link>
              
              <Link 
                to="/services" 
                className="flex items-center text-salon-terracota hover:text-salon-terracota/80 font-medium"
              >
                <CornerDownRight className="h-4 w-4 mr-1" />
                <span>Ver todos os serviços</span>
              </Link>
              
              <button
                onClick={resetQuiz}
                className="text-sm text-salon-light-text hover:text-salon-dark-text underline mt-2"
              >
                Responder novamente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
