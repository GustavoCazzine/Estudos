
import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Clock, Calendar, CalendarClock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface QuizProps {
  onClose: () => void;
}

interface QuizQuestion {
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}

interface QuizResult {
  type: string;
  title: string;
  description: string;
  recommendedService: string;
  serviceLink: string;
  serviceId: string;
  imageSrc: string;
  features: string[];
  frequency: string;
  ideal: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Qual é o seu estilo de maquiagem para o dia a dia?",
    options: [
      { text: "Minimalista, quase sem maquiagem", value: "natural" },
      { text: "Básica, mas com um toque de cor", value: "classic" },
      { text: "Completa, gosto de olhos marcados", value: "dramatic" },
      { text: "Depende do dia, vario bastante", value: "versatile" }
    ]
  },
  {
    question: "Como é sua rotina diária?",
    options: [
      { text: "Muito corrida, preciso estar pronta rapidamente", value: "busy" },
      { text: "Equilibrada, tenho tempo para me cuidar", value: "balanced" },
      { text: "Tranquila, invisto tempo na minha beleza", value: "relaxed" },
      { text: "Imprevisível, varia muito", value: "variable" }
    ]
  },
  {
    question: "O que você mais valoriza em um tratamento estético?",
    options: [
      { text: "Praticidade e durabilidade", value: "practical" },
      { text: "Aparência natural", value: "natural" },
      { text: "Efeito dramático e marcante", value: "dramatic" },
      { text: "Versatilidade para diferentes ocasiões", value: "versatile" }
    ]
  },
  {
    question: "Com que frequência você gostaria de fazer manutenção?",
    options: [
      { text: "O mínimo possível, prefiro durabilidade", value: "minimal" },
      { text: "A cada 3-4 semanas está bom", value: "regular" },
      { text: "Não me importo em ir com frequência", value: "frequent" },
      { text: "Depende do resultado que quero manter", value: "variable" }
    ]
  },
  {
    question: "Você tem sensibilidade nos olhos ou alguma alergia?",
    options: [
      { text: "Sim, tenho olhos muito sensíveis", value: "sensitive" },
      { text: "Um pouco, mas nada grave", value: "mild" },
      { text: "Não, nunca tive problemas", value: "none" },
      { text: "Não sei, nunca testei", value: "unknown" }
    ]
  },
  {
    question: "Para quais ocasiões você geralmente se arruma mais?",
    options: [
      { text: "Trabalho formal/ambiente corporativo", value: "work" },
      { text: "Eventos sociais e celebrações", value: "events" },
      { text: "Dia a dia mesmo, gosto de estar sempre arrumada", value: "daily" },
      { text: "Ocasiões especiais e datas comemorativas", value: "special" }
    ]
  }
];

const quizResults: Record<string, QuizResult> = {
  natural: {
    type: "natural",
    title: "Cílios Naturais Realçados",
    description: "Seu perfil indica que você valoriza um visual que realce sua beleza natural, sem parecer artificial. Você prefere tratamentos que facilitem sua rotina, mas mantendo uma aparência autêntica.",
    recommendedService: "Extensão de Cílios Efeito Natural",
    serviceLink: "/services#eyelashes-natural",
    serviceId: "eyelashes-natural",
    imageSrc: "https://images.unsplash.com/photo-1516914641057-3bca7c478c93?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Fios mais leves e delicados",
      "Curvatura suave e natural",
      "Aspecto discreto e elegante",
      "Ideal para iniciantes em extensões"
    ],
    frequency: "Manutenção a cada 3-4 semanas",
    ideal: "Ideal para quem tem rotina corrida e busca praticidade"
  },
  classic: {
    type: "classic",
    title: "Cílios Clássicos Elegantes",
    description: "Seu estilo pede um visual elegante que funcione tanto para o dia a dia quanto para ocasiões especiais, com um toque de sofisticação sem exageros.",
    recommendedService: "Extensão Clássica Fio a Fio",
    serviceLink: "/services#eyelashes-classic",
    serviceId: "eyelashes",
    imageSrc: "https://images.unsplash.com/photo-1506755594592-349d12a7c52a?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Técnica fio a fio para resultado natural",
      "Volume moderado e elegante",
      "Flexibilidade para vários estilos",
      "Ótimo para ambientes de trabalho"
    ],
    frequency: "Manutenção a cada 3 semanas",
    ideal: "Perfeito para quem deseja equilíbrio entre naturalidade e definição"
  },
  dramatic: {
    type: "dramatic",
    title: "Cílios Volume Russo",
    description: "Você adora um visual mais dramático e marcante! Seu perfil combina com tratamentos que dão bastante volume e destaque para o olhar.",
    recommendedService: "Volume Russo Completo",
    serviceLink: "/services#eyelashes-russian",
    serviceId: "eyelashes",
    imageSrc: "https://images.unsplash.com/photo-1578535294919-2d98eb281803?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Efeito ultra volumoso e denso",
      "Cílios escuros e marcantes",
      "Curvatura acentuada para olhar aberto",
      "Técnica sofisticada para máximo volume"
    ],
    frequency: "Manutenção a cada 2-3 semanas",
    ideal: "Perfeito para eventos, fotos e quem gosta de olhar marcante"
  },
  versatile: {
    type: "versatile",
    title: "Cílios Híbridos Versáteis",
    description: "Seu perfil versátil pede um tratamento que pode ser adaptado para diferentes ocasiões, desde o dia a dia até eventos especiais.",
    recommendedService: "Extensão Híbrida Personalizada",
    serviceLink: "/services#eyelashes-hybrid",
    serviceId: "eyelashes",
    imageSrc: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Combinação de técnicas fio a fio e volume",
      "Adaptável para diferentes ocasiões",
      "Personalizado para seu formato de olho",
      "Equilíbrio perfeito entre natural e volumoso"
    ],
    frequency: "Manutenção a cada 3 semanas",
    ideal: "Ideal para quem gosta de variar entre looks naturais e mais elaborados"
  },
  sensitive: {
    type: "sensitive",
    title: "Cílios para Olhos Sensíveis",
    description: "Com olhos sensíveis, você precisa de um tratamento específico que não cause irritação, mas ainda proporcione beleza ao seu olhar.",
    recommendedService: "Extensão Hipoalergênica Especial",
    serviceLink: "/services#eyelashes-sensitive",
    serviceId: "eyelashes",
    imageSrc: "https://images.unsplash.com/photo-1549388604-817d15aa0110?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Adesivos e materiais hipoalergênicos",
      "Fios mais leves e suaves",
      "Aplicação cuidadosa distante da linha d'água",
      "Teste de sensibilidade incluído"
    ],
    frequency: "Manutenção a cada 3-4 semanas",
    ideal: "Especial para quem tem olhos sensíveis ou usa lentes de contato"
  },
  lamination: {
    type: "lamination",
    title: "Laminação de Cílios",
    description: "Para quem prefere valorizar os cílios naturais sem extensões, a laminação é a escolha perfeita, realçando o que você já tem.",
    recommendedService: "Laminação de Cílios com Nutrição",
    serviceLink: "/services#lamination",
    serviceId: "lamination",
    imageSrc: "https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Levanta e curva seus cílios naturais",
      "Inclui nutrição com queratina e vitaminas",
      "Efeito de alongamento sem extensões",
      "Zero manutenção diária"
    ],
    frequency: "Dura até 8 semanas",
    ideal: "Perfeito para minimalistas e quem pratica esportes aquáticos"
  }
};

const Quiz = ({ onClose }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [animationState, setAnimationState] = useState("quiz-fade-in");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Handle animation state on mount
  useEffect(() => {
    document.querySelector(".quiz-container")?.classList.add("quiz-fade-in");
  }, []);

  const handleAnswer = (answer: string) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setAnimationState("quiz-fade-out");
    
    // Short delay for animation
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate result
        calculateResult(newAnswers);
      }
      
      setAnimationState("quiz-fade-in");
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setAnimationState("quiz-fade-out");
      
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        // Remove the last answer
        setAnswers(answers.slice(0, -1));
        setAnimationState("quiz-fade-in");
        setIsTransitioning(false);
      }, 300);
    }
  };

  const calculateResult = (allAnswers: string[]) => {
    // Advanced algorithm to determine the best match
    const answerCount: Record<string, number> = {};
    
    // Count occurrences of each answer type
    allAnswers.forEach(answer => {
      answerCount[answer] = (answerCount[answer] || 0) + 1;
    });
    
    // Special case handling
    if (allAnswers.includes("sensitive") && allAnswers.includes("minimal")) {
      return setResult(quizResults["sensitive"]);
    }
    
    if (allAnswers.includes("natural") && allAnswers.includes("minimal") && 
        (allAnswers.includes("busy") || allAnswers.includes("none"))) {
      return setResult(quizResults["lamination"]);
    }
    
    // Determine most frequent answer type
    let maxCount = 0;
    let resultType = "natural"; // Default
    
    Object.entries(answerCount).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        resultType = type;
      }
    });
    
    // Weight certain answers more heavily
    if (answerCount["dramatic"] >= 2) resultType = "dramatic";
    if (answerCount["natural"] >= 3) resultType = "natural";
    if (answerCount["versatile"] >= 2) resultType = "versatile";
    
    // Map to closest result type if exact match not found
    const finalType = Object.keys(quizResults).includes(resultType)
      ? resultType 
      : "versatile"; // Default to versatile if no clear match
    
    setResult(quizResults[finalType]);
  };

  const resetQuiz = () => {
    setIsTransitioning(true);
    setAnimationState("quiz-fade-out");
    
    setTimeout(() => {
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
      setAnimationState("quiz-fade-in");
      setIsTransitioning(false);
    }, 300);
  };
  
  const handleBookService = (serviceId: string) => {
    navigate(`/booking?service=${serviceId}`);
    onClose();
  };

  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-salon p-6 md:p-8 relative quiz-container overflow-hidden border-2 border-salon-rosa-poeira/20">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-salon-light-text hover:text-salon-dark-text transition-colors z-50"
        aria-label="Fechar quiz"
      >
        <X className="h-6 w-6" />
      </button>
      
      {result ? (
        <div className={`${animationState}`}>
          <div className="w-16 h-16 bg-salon-rosa-poeira/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-once">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-2xl font-cormorant font-bold mb-3">{result.title}</h3>
          <p className="text-salon-light-text mb-6">{result.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative rounded-lg overflow-hidden shadow-sm h-52">
              <img 
                src={result.imageSrc} 
                alt={result.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <span className="text-white font-medium">{result.recommendedService}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-salon-dourado-claro mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">{result.frequency}</span>
              </div>
              <div className="flex items-start">
                <CalendarClock className="h-5 w-5 text-salon-dourado-claro mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">{result.ideal}</span>
              </div>
              <ul className="space-y-1 mt-2">
                {result.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="w-4 h-4 text-salon-dourado-claro mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleBookService(result.serviceId)}
              className="btn-primary group"
            >
              Agendar Este Serviço
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link to={result.serviceLink} className="btn-secondary" onClick={onClose}>
              Ver Detalhes do Serviço
            </Link>
            <button onClick={resetQuiz} className="text-salon-terracota hover:text-salon-terracota/80 transition-colors text-sm underline mt-2">
              Refazer Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className={animationState}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-cormorant font-bold">
                Pergunta {currentQuestion + 1} de {quizQuestions.length}
              </h3>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-salon-dourado-claro transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <h4 className="text-lg font-medium text-salon-dark-text mb-6 transition-opacity duration-300">
            {quizQuestions[currentQuestion].question}
          </h4>
          
          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 border border-salon-rosa-poeira/30 rounded-lg hover:border-salon-dourado-claro hover:bg-salon-dourado-claro/5 transition-all hover:shadow-salon hover:translate-y-[-2px] duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-salon-rosa-poeira/50 mr-3 flex-shrink-0 group-hover:border-salon-dourado-claro transition-colors"></div>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Previous/next navigation */}
          <div className="flex justify-between mt-6">
            {currentQuestion > 0 ? (
              <button 
                onClick={handlePrevQuestion}
                className="flex items-center text-salon-terracota hover:text-salon-terracota/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Anterior
              </button>
            ) : <div></div>}
            
            <div className="flex gap-1">
              {quizQuestions.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuestion ? 'w-4 bg-salon-dourado-claro' : 
                    index < currentQuestion ? 'bg-salon-rosa-poeira' : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
