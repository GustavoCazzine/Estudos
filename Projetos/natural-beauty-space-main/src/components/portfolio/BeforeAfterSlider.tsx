
import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !sliderRef.current || !e.touches[0]) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const position = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  // Add pulsing animation to indicate slider can be moved
  useEffect(() => {
    const pulseAnimation = setTimeout(() => {
      if (sliderRef.current) {
        const handle = sliderRef.current.querySelector('.slider-handle');
        if (handle) {
          handle.classList.add('pulse-animation');
          
          setTimeout(() => {
            handle.classList.remove('pulse-animation');
          }, 2000);
        }
      }
    }, 1000);
    
    return () => clearTimeout(pulseAnimation);
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div 
      ref={sliderRef} 
      className={`before-after-slider relative aspect-[4/5] overflow-hidden rounded-lg ${className} fade-in scale-in cursor-ew-resize`}
      style={{ touchAction: 'none' }}
    >
      <div 
        className="slider-instruction absolute top-2 left-0 right-0 text-center text-white bg-black/50 py-1 px-2 text-sm rounded-full mx-auto w-max z-20"
      >
        Deslize para comparar
      </div>
      <div 
        className="slider-before absolute inset-0 bg-cover bg-center overflow-hidden" 
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          width: `${sliderPosition}%`,
          zIndex: 10
        }}
      >
        <span className="label-before absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
          {beforeLabel}
        </span>
      </div>
      <div 
        className="slider-after absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      >
        <span className="label-after absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
          {afterLabel}
        </span>
      </div>
      <div 
        className="slider-handle absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-lg flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, marginLeft: '-1px' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="slider-handle-icon w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg className="w-4 h-4 text-salon-terracota" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5L5 8M5 8L8 11M5 8H13M16 13L13 16M13 16L16 19M13 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
