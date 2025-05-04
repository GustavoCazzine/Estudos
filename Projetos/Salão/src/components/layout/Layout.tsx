
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("page-transition-enter");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("page-transition-exit");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    // Smooth scroll to top on route change with delay to allow for transition
    if (transitionStage === "page-transition-exit") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 200); // Delay scrolling to coincide with the animation
    }
  }, [transitionStage]);

  const handleAnimationEnd = () => {
    if (transitionStage === "page-transition-exit") {
      setTransitionStage("page-transition-enter");
      setDisplayLocation(location);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main 
        className={`flex-grow ${transitionStage} w-full overflow-x-hidden`}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </main>
      <Footer />
      
      {/* Add global styles for page transitions */}
      <style>{`
        .page-transition-enter {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 400ms ease, transform 400ms ease;
        }
        
        .page-transition-exit {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 400ms ease, transform 400ms ease;
        }
        
        .animate-pulse-once {
          animation: pulse 2s ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(235, 87, 87, 0);
          }
          50% {
            box-shadow: 0 0 20px rgba(235, 87, 87, 0.3);
          }
        }
        
        /* Estilos para o slider de antes e depois */
        .before-after-slider {
          border: 1px solid #f3f3f3;
          max-width: 100%;
        }
        
        .slider-handle {
          transition: transform 0.3s ease;
        }
        
        .slider-handle:hover {
          transform: scale(1.1);
        }
        
        .pulse-animation {
          animation: handle-pulse 2s ease-in-out;
        }
        
        @keyframes handle-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
          }
        }

        /* Responsive fixes */
        @media (max-width: 640px) {
          .container-salon {
            padding-left: 1rem;
            padding-right: 1rem;
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
          }
          
          body, html {
            overflow-x: hidden;
            width: 100%;
            position: relative;
          }
          
          .testimonial-carousel {
            padding: 1.5rem;
          }
        }
        
        /* Ensure all sections are visible */
        section {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        /* Quiz animation improvements */
        .quiz-fade-in {
          animation: quizFadeIn 0.5s ease forwards;
        }
        
        .quiz-fade-out {
          animation: quizFadeOut 0.5s ease forwards;
        }
        
        @keyframes quizFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes quizFadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
