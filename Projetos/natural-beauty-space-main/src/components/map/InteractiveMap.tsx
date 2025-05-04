
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

// Configurações do local do salão
const SALON_LOCATION = {
  lng: -47.6508, // Coordenadas de Piracicaba - Bairro Centro
  lat: -22.7349,
  zoom: 14,
  address: "Rua dos Cílios, 123, Centro, Piracicaba - SP",
  name: "Natural Beauty Space"
};

interface InteractiveMapProps {
  height?: string;
  withLocationDetails?: boolean;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  height = "450px",
  withLocationDetails = false
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para inicializar o mapa quando o token estiver disponível
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [SALON_LOCATION.lng, SALON_LOCATION.lat],
        zoom: SALON_LOCATION.zoom,
        attributionControl: false
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        setMapLoaded(true);
        
        // Adicionar marcador personalizado
        if (map.current) {
          const marker = new mapboxgl.Marker({
            color: "#c9796b", // cor salon-terracota
            draggable: false
          })
            .setLngLat([SALON_LOCATION.lng, SALON_LOCATION.lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`
                  <div style="padding: 8px; max-width: 240px;">
                    <h3 style="font-weight: bold; margin-bottom: 4px; color: #c9796b;">${SALON_LOCATION.name}</h3>
                    <p style="font-size: 14px; color: #555;">${SALON_LOCATION.address}</p>
                    <p style="font-size: 12px; margin-top: 6px;">
                      <a href="https://www.google.com/maps/dir/?api=1&destination=${SALON_LOCATION.lat},${SALON_LOCATION.lng}" 
                        target="_blank" 
                        style="color: #c9796b; text-decoration: none;">
                        Como chegar
                      </a>
                    </p>
                  </div>
                `)
            )
            .addTo(map.current);
            
          // Abrir popup automaticamente
          marker.togglePopup();
        }
      });
    } catch (err) {
      console.error("Erro ao inicializar o mapa:", err);
      setError("Não foi possível carregar o mapa. Por favor, verifique sua conexão.");
    }
  };

  useEffect(() => {
    // Limpeza ao desmontar o componente
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      {!mapboxToken ? (
        <div className="bg-white rounded-xl shadow-salon p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-salon-terracota h-5 w-5" />
            <h3 className="font-cormorant font-bold text-xl">Configure o Mapa</h3>
          </div>
          <p className="text-salon-light-text text-sm mb-4">
            Para ativar o mapa interativo, insira seu token público do Mapbox:
          </p>
          <input
            type="text"
            className="w-full px-4 py-2 border border-salon-rosa-poeira/30 rounded-lg focus:outline-none focus:border-salon-terracota"
            placeholder="pk.eyJ1Ijoi..."
            onChange={(e) => setMapboxToken(e.target.value)}
            value={mapboxToken}
          />
          <div className="flex justify-between items-center">
            <a 
              href="https://account.mapbox.com/access-tokens/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-salon-terracota hover:underline"
            >
              Obter token no Mapbox
            </a>
            <button
              onClick={initializeMap}
              disabled={!mapboxToken}
              className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-all ${
                mapboxToken ? "bg-salon-terracota hover:bg-salon-terracota/90" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Ativar Mapa
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10 rounded-xl">
              <div className="text-center p-6">
                <p className="text-red-500 mb-2">{error}</p>
                <button
                  onClick={() => {
                    setError(null);
                    initializeMap();
                  }}
                  className="px-4 py-2 bg-salon-terracota text-white rounded-full text-sm"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          )}
          
          <div 
            ref={mapContainer} 
            style={{ height }}
            className="rounded-xl shadow-salon border border-salon-rosa-poeira/20 bg-white flex items-center justify-center"
          >
            {!mapLoaded && !error && (
              <div className="text-salon-light-text">Carregando mapa...</div>
            )}
          </div>
          
          {withLocationDetails && mapLoaded && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-salon-rosa-poeira/20">
              <div className="flex items-start gap-3">
                <MapPin className="text-salon-terracota h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-cormorant font-bold text-lg">{SALON_LOCATION.name}</h3>
                  <p className="text-salon-light-text text-sm">{SALON_LOCATION.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${SALON_LOCATION.lat},${SALON_LOCATION.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-salon-terracota hover:underline text-sm"
                  >
                    <span>Como chegar</span>
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
