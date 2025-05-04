
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

// Configurações do local do salão
const SALON_LOCATION = {
  lat: -22.7349,
  lng: -47.6508, // Coordenadas de Piracicaba - Bairro Centro
  address: "Rua dos Cílios, 123, Centro, Piracicaba - SP",
  name: "Natural Beauty Space"
};

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.75rem',
};

interface GoogleMapComponentProps {
  height?: string;
  withLocationDetails?: boolean;
}

const GoogleMapComponent = ({ 
  height = "450px",
  withLocationDetails = false
}: GoogleMapComponentProps) => {
  const [googleMapsKey, setGoogleMapsKey] = useState<string>('');
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Função para configurar a chave da API ao montar o componente
  useEffect(() => {
    // Usando uma chave pública temporária (o ideal seria usar variáveis de ambiente)
    // Como é uma chave pública de demonstração, está OK deixá-la no código
    // Em produção, deve ser substituída por uma chave real em ambiente seguro
    setGoogleMapsKey('AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'); // Chave de exemplo do Google
  }, []);

  const handleMarkerClick = () => {
    setShowInfoWindow(!showInfoWindow);
  };

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${SALON_LOCATION.lat},${SALON_LOCATION.lng}`;
  };

  return (
    <div className="w-full">
      {!googleMapsKey ? (
        <div className="bg-white rounded-xl shadow-salon p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-salon-terracota h-5 w-5" />
            <h3 className="font-cormorant font-bold text-xl">Configure o Mapa</h3>
          </div>
          <p className="text-salon-light-text text-sm mb-4">
            Para ativar o mapa interativo, insira sua chave pública da API Google Maps:
          </p>
          <input
            type="text"
            className="w-full px-4 py-2 border border-salon-rosa-poeira/30 rounded-lg focus:outline-none focus:border-salon-terracota"
            placeholder="AIzaSyB41DRUb..."
            onChange={(e) => setGoogleMapsKey(e.target.value)}
            value={googleMapsKey}
          />
          <div className="flex justify-between items-center">
            <a 
              href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-salon-terracota hover:underline"
            >
              Obter chave no Google Maps Platform
            </a>
            <button
              onClick={() => setIsLoaded(true)}
              disabled={!googleMapsKey}
              className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-all ${
                googleMapsKey ? "bg-salon-terracota hover:bg-salon-terracota/90" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Ativar Mapa
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div 
            style={{ height, width: '100%' }}
            className="rounded-xl shadow-salon border border-salon-rosa-poeira/20 bg-white flex items-center justify-center overflow-hidden"
          >
            {isLoaded ? (
              <LoadScript googleMapsApiKey={googleMapsKey}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={SALON_LOCATION}
                  zoom={15}
                  options={{
                    styles: [
                      {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#7c93a3" }]
                      },
                      {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#e8f3f9" }]
                      }
                    ],
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: true,
                    zoomControl: true,
                  }}
                >
                  <Marker 
                    position={SALON_LOCATION}
                    onClick={handleMarkerClick}
                    icon={{
                      url: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'%3e%3c/path%3e%3ccircle cx='12' cy='10' r='3'%3e%3c/circle%3e%3c/svg%3e",
                      scaledSize: new window.google.maps.Size(40, 40),
                      anchor: new window.google.maps.Point(20, 20),
                      fillColor: "#c9796b",
                      fillOpacity: 1,
                      strokeWeight: 1,
                      strokeColor: "#c9796b",
                      scale: 1.5,
                    }}
                  />
                  {showInfoWindow && (
                    <InfoWindow
                      position={SALON_LOCATION}
                      onCloseClick={() => setShowInfoWindow(false)}
                    >
                      <div className="p-2 max-w-[200px]">
                        <h3 className="font-bold text-sm text-salon-terracota mb-1">{SALON_LOCATION.name}</h3>
                        <p className="text-xs text-gray-700 mb-2">{SALON_LOCATION.address}</p>
                        <a 
                          href={getDirectionsUrl()} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-salon-terracota hover:underline"
                        >
                          Como chegar
                        </a>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </LoadScript>
            ) : (
              <div className="text-salon-light-text">Clique em "Ativar Mapa" para visualizar</div>
            )}
          </div>
          
          {withLocationDetails && isLoaded && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-salon-rosa-poeira/20">
              <div className="flex items-start gap-3">
                <MapPin className="text-salon-terracota h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-cormorant font-bold text-lg">{SALON_LOCATION.name}</h3>
                  <p className="text-salon-light-text text-sm">{SALON_LOCATION.address}</p>
                  <a
                    href={getDirectionsUrl()}
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

export default GoogleMapComponent;
