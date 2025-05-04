
import React, { useEffect, useRef, useState } from 'react';
import { Globe, MapPin, Droplet, Fish, Map, Ship, Navigation, Waves, Mountain, Anchor, Maximize, Minimize } from 'lucide-react';
import type { FishingSpot } from '../../pages/FishingMap';
import { mockFishingSpots, spotTypes } from './mockData';
import { Button } from '../ui/button';
import { useIsMobile } from '../../hooks/use-mobile';
import { Badge } from '../ui/badge';

interface FishingMapViewProps {
  selectedSpot: FishingSpot | null;
  onSelectSpot: (spot: FishingSpot | null) => void;
  filterCountry: string;
  filterRegion: string;
  filterType: string;
  searchTerm: string;
}

const FishingMapView: React.FC<FishingMapViewProps> = ({ 
  selectedSpot, 
  onSelectSpot,
  filterCountry,
  filterRegion,
  filterType,
  searchTerm
}) => {
  const [mapApiKey, setMapApiKey] = useState<string>('');
  const [spots, setSpots] = useState<FishingSpot[]>(mockFishingSpots);
  const [filteredSpots, setFilteredSpots] = useState<FishingSpot[]>(mockFishingSpots);
  const [showMapKeyInput, setShowMapKeyInput] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMapConfigToolbar, setShowMapConfigToolbar] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  // Função para obter o ícone baseado no tipo de local
  const getSpotIcon = (type: string) => {
    switch (type) {
      case 'river':
        return <Waves className="w-5 h-5 text-blue-500" />;
      case 'lake':
        return <Droplet className="w-5 h-5 text-cyan-500" />; // Changed from Water to Droplet
      case 'sea':
        return <Ship className="w-5 h-5 text-ocean-500" />;
      case 'reservoir':
        return <Droplet className="w-5 h-5 text-blue-400" />;
      case 'estuary':
        return <Navigation className="w-5 h-5 text-trust-500" />;
      case 'pier':
        return <Anchor className="w-5 h-5 text-ocean-700" />;
      case 'dam':
        return <Mountain className="w-5 h-5 text-gray-600" />;
      case 'waterfall':
        return <Droplet className="w-5 h-5 text-blue-300" />;
      default:
        return <Fish className="w-5 h-5 text-ocean-500" />;
    }
  };
  
  // Filtro de spots baseado nos critérios de país, região e tipo
  useEffect(() => {
    let filtered = [...spots];
    
    // Filtro por termo de busca
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(spot => 
        spot.name.toLowerCase().includes(searchLower) || 
        spot.country.toLowerCase().includes(searchLower) ||
        spot.region.toLowerCase().includes(searchLower) ||
        spot.description.toLowerCase().includes(searchLower) ||
        spot.fishTypes.some(fish => fish.toLowerCase().includes(searchLower))
      );
    }
    
    // Filtro por país
    if (filterCountry && filterCountry !== 'all') {
      filtered = filtered.filter(spot => spot.country === filterCountry);
      
      // Filtro por região
      if (filterRegion && filterRegion !== 'all') {
        filtered = filtered.filter(spot => spot.region === filterRegion);
      }
    }
    
    // Filtro por tipo de local
    if (filterType && filterType !== 'all') {
      filtered = filtered.filter(spot => spot.type === filterType);
    }
    
    setFilteredSpots(filtered);
  }, [spots, filterCountry, filterRegion, filterType, searchTerm]);

  // Implementação temporária até integrar com Mapbox
  const handleMapClick = (spot: FishingSpot) => {
    onSelectSpot(spot);
  };

  const handleSaveApiKey = () => {
    localStorage.setItem('mapbox_token', mapApiKey);
    setShowMapKeyInput(false);
    // Aqui recarregaríamos o mapa se estivéssemos usando Mapbox
  };

  const getTypeLabel = (typeValue: string) => {
    const type = spotTypes.find(t => t.value === typeValue);
    return type ? type.label : typeValue;
  };

  return (
    <>
      {!showMapKeyInput ? (
        <div className="w-full h-full bg-ocean-50 flex flex-col items-center justify-center overflow-hidden">
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-full h-full overflow-auto">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 pb-2 border-b">
              <h3 className="text-lg font-semibold text-ocean-800 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-ocean-600" />
                Locais de Pesca ({filteredSpots.length})
              </h3>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="text-xs p-1 h-8 w-8"
                  title={viewMode === 'grid' ? 'Visualização em lista' : 'Visualização em grade'}
                >
                  {viewMode === 'grid' ? (
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex space-x-0.5">
                        <div className="w-1.5 h-1.5 bg-ocean-400 rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-ocean-400 rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-ocean-400 rounded-sm"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-0.5">
                      <div className="w-4 h-1 bg-ocean-400 rounded-sm"></div>
                      <div className="w-4 h-1 bg-ocean-400 rounded-sm"></div>
                      <div className="w-4 h-1 bg-ocean-400 rounded-sm"></div>
                    </div>
                  )}
                </Button>
                
                <Button 
                  variant={showMapConfigToolbar ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setShowMapConfigToolbar(!showMapConfigToolbar)}
                  className="text-xs"
                >
                  <Map className="w-4 h-4 mr-1" />
                  Mapa
                </Button>
                
                {showMapConfigToolbar && (
                  <Button 
                    variant="ocean" 
                    size="sm"
                    onClick={() => setShowMapKeyInput(true)}
                    className="text-xs"
                  >
                    <Maximize className="w-4 h-4 mr-1" />
                    Configurar API
                  </Button>
                )}
              </div>
            </div>
            
            {filteredSpots.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-4 pb-4">
                  {filteredSpots.map(spot => (
                    <div 
                      key={spot.id}
                      className={`
                        p-3 rounded-lg cursor-pointer transition-all duration-200 h-full flex flex-col
                        ${selectedSpot?.id === spot.id 
                          ? 'bg-ocean-100 border-2 border-ocean-400' 
                          : 'bg-gray-50 border border-gray-200 hover:bg-ocean-50'}
                      `}
                      onClick={() => handleMapClick(spot)}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="mt-1 flex-shrink-0">
                          {getSpotIcon(spot.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-ocean-800 truncate">{spot.name}</h4>
                          <p className="text-xs text-gray-600 truncate">{spot.region}, {spot.country}</p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`w-3 h-3 ${i < Math.round(spot.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">
                              ({spot.reviewCount})
                            </span>
                          </div>
                          <Badge variant="outline" className="mt-2 text-xs bg-ocean-50 px-1.5 py-0">
                            {getTypeLabel(spot.type)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 mt-4 pb-4">
                  {filteredSpots.map(spot => (
                    <div 
                      key={spot.id}
                      className={`
                        p-3 rounded-lg cursor-pointer transition-all duration-200
                        ${selectedSpot?.id === spot.id 
                          ? 'bg-ocean-100 border-2 border-ocean-400' 
                          : 'bg-gray-50 border border-gray-200 hover:bg-ocean-50'}
                      `}
                      onClick={() => handleMapClick(spot)}
                    >
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0">
                          {getSpotIcon(spot.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-ocean-800">{spot.name}</h4>
                              <p className="text-sm text-gray-600">{spot.region}, {spot.country}</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.round(spot.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-1">
                                ({spot.reviewCount})
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mt-1 line-clamp-2">{spot.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            <Badge variant="outline" className="text-xs bg-ocean-50 px-1.5 py-0">
                              {getTypeLabel(spot.type)}
                            </Badge>
                            {spot.fishTypes.slice(0, 3).map((fish, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-gray-50 px-1.5 py-0">
                                {fish}
                              </Badge>
                            ))}
                            {spot.fishTypes.length > 3 && (
                              <Badge variant="outline" className="text-xs bg-gray-50 px-1.5 py-0">
                                +{spot.fishTypes.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <Fish className="w-12 h-12 text-gray-300 mb-4" />
                <p className="text-gray-500 text-center">Nenhum local encontrado com os filtros selecionados.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => {
                    // Este botão seria usado para limpar os filtros
                    onSelectSpot(null);
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}

            <div className="text-center mt-6 text-sm text-gray-500">
              <p>Este é um protótipo de visualização. Integração completa com Mapbox será implementada em breve.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full bg-ocean-50 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-ocean-800">Configurar API do Mapa</h3>
            <p className="text-sm text-gray-600 mb-4">
              Para visualizar o mapa interativo, insira sua chave de API do Mapbox. 
              Você pode obter uma chave gratuita em <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:underline">mapbox.com</a>
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="mapbox-key" className="text-sm font-medium text-gray-700 block mb-1">
                  Chave de API do Mapbox
                </label>
                <input
                  type="text"
                  id="mapbox-key"
                  placeholder="pk.eyJ1Ijoi..."
                  value={mapApiKey}
                  onChange={(e) => setMapApiKey(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowMapKeyInput(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  variant="ocean"
                  className="w-full"
                  onClick={handleSaveApiKey}
                  disabled={!mapApiKey}
                >
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FishingMapView;
