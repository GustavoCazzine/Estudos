
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FishingMapView from '../components/map/FishingMapView';
import LocationDetails from '../components/map/LocationDetails';
import FishingSpotFilters from '../components/map/FishingSpotFilters';
import { useAuth } from '../hooks/useAuth';
import { useIsMobile } from '../hooks/use-mobile';

// Tipo para os locais de pesca
export type FishingSpot = {
  id: string;
  name: string;
  country: string;
  region: string;
  type: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount: number;
  fishTypes: string[];
  bestSeasons: string[];
  photos: string[];
  createdBy?: string;
};

const FishingMap = () => {
  const [selectedSpot, setSelectedSpot] = useState<FishingSpot | null>(null);
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [filterRegion, setFilterRegion] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = 'Mapa de Pesca | Hook & Catch';
  }, []);

  const handleSpotSelection = (spot: FishingSpot | null) => {
    setSelectedSpot(spot);
  };

  const handleCountryChange = (country: string) => {
    setFilterCountry(country);
    // Reset region when country changes
    setFilterRegion('all');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 max-w-7xl">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-fishing-800">Mapa de Locais de Pesca</h1>
                <p className="text-muted-foreground mt-1">
                  Explore os melhores locais de pesca ao redor do mundo, compartilhados pela nossa comunidade.
                </p>
              </div>
              
              {isAuthenticated && (
                <div className="flex-shrink-0">
                  <button className="bg-fishing-600 text-white px-4 py-2 rounded-md hover:bg-fishing-700 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                    Adicionar Local
                  </button>
                </div>
              )}
            </div>
            
            <div className="flex flex-col lg:flex-row gap-4">
              <div className={`${isMobile ? 'order-2' : 'lg:w-1/4'}`}>
                <FishingSpotFilters 
                  onCountryChange={handleCountryChange}
                  onRegionChange={setFilterRegion}
                  onTypeChange={setFilterType}
                  onSearchChange={setSearchTerm}
                  selectedCountry={filterCountry}
                  selectedType={filterType}
                />
              </div>
              
              <div className={`${isMobile ? 'order-1' : 'lg:w-3/4'} flex flex-col space-y-4`}>
                <div className="h-[450px] sm:h-[500px] lg:h-[600px] relative rounded-lg overflow-hidden border border-muted">
                  <FishingMapView 
                    selectedSpot={selectedSpot}
                    onSelectSpot={handleSpotSelection}
                    filterCountry={filterCountry}
                    filterRegion={filterRegion}
                    filterType={filterType}
                    searchTerm={searchTerm}
                  />
                </div>
                
                {selectedSpot && (
                  <LocationDetails 
                    spot={selectedSpot} 
                    onClose={() => setSelectedSpot(null)} 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FishingMap;
