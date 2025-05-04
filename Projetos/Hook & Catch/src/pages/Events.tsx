
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventsHero from '../components/events/EventsHero';
import UpcomingEvents from '../components/events/UpcomingEvents';
import PastEvents from '../components/events/PastEvents';
import EventsGallery from '../components/events/EventsGallery';
import EventsNewsletter from '../components/events/EventsNewsletter';

const Events = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Eventos de Pesca | Hook & Catch';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <EventsHero />
        <div className="bg-fishing-50 py-6 px-4 text-center">
          <p className="text-fishing-700 flex items-center justify-center">
            <span className="inline-block animate-pulse-soft bg-fishing-100 text-fishing-700 rounded-full p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </span>
            Deslize para navegar pelos eventos ou use as setas para ver mais opções
          </p>
        </div>
        <UpcomingEvents />
        <PastEvents />
        <EventsGallery />
        <EventsNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
