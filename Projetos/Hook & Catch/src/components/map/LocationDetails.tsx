
import React, { useState, useEffect } from 'react';
import { Star, Navigation, ThumbsUp, ThumbsDown, Share2, X, Fish, MapPin } from 'lucide-react';
import type { FishingSpot } from '../../pages/FishingMap';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { useAuth } from '../../hooks/useAuth';
import { spotTypes } from './mockData';
import { toast } from 'sonner';

interface LocationDetailsProps {
  spot: FishingSpot;
  onClose: () => void;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({ spot, onClose }) => {
  const [activeTab, setActiveTab] = useState('info');
  const { isAuthenticated } = useAuth();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  
  // Scroll to this component when mounted
  useEffect(() => {
    const element = document.getElementById('location-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    // Inicializa contador de likes com um valor aleatório para simulação
    setLikeCount(Math.floor(Math.random() * 50) + 10);
  }, []);
  
  const handleNavigate = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${spot.coordinates.lat},${spot.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleLike = () => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para curtir este local");
      return;
    }
    
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
      toast.info("Você removeu sua curtida deste local");
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
      toast.success("Você curtiu este local de pesca!");
    }
  };

  const handleShare = () => {
    // Verifica se a API Web Share está disponível
    if (navigator.share) {
      navigator.share({
        title: `Local de Pesca: ${spot.name}`,
        text: `Confira este ótimo lugar para pescar: ${spot.name} em ${spot.region}`,
        url: window.location.href,
      })
        .then(() => toast.success("Compartilhado com sucesso!"))
        .catch((error) => toast.error("Erro ao compartilhar"));
    } else {
      // Fallback para navegadores que não suportam a API Web Share
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Link copiado para a área de transferência!"))
        .catch(() => toast.error("Não foi possível copiar o link"));
    }
  };

  const getTypeLabel = (typeValue: string) => {
    const type = spotTypes.find(t => t.value === typeValue);
    return type ? type.label : typeValue;
  };
  
  return (
    <Card className="shadow-md" id="location-details">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <div className="flex items-center">
            <CardTitle className="text-xl font-bold text-ocean-800">{spot.name}</CardTitle>
            <Badge variant="outline" className="ml-2 text-xs bg-ocean-50 px-1.5 py-0.5">
              {getTypeLabel(spot.type)}
            </Badge>
          </div>
          <CardDescription className="text-sm text-muted-foreground">{spot.region}, {spot.country}</CardDescription>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            <TabsTrigger value="photos">Fotos</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="info" className="p-6 pt-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-1">Descrição</h4>
              <p className="text-sm text-gray-600">{spot.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Tipos de Peixe</h4>
                <div className="flex flex-wrap gap-1">
                  {spot.fishTypes.map((fish, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-ocean-50">
                      {fish}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Melhores Temporadas</h4>
                <div className="flex flex-wrap gap-1">
                  {spot.bestSeasons.map((season, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-ocean-50">
                      {season}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-1">Localização</h4>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-ocean-500 mr-1" />
                <span className="text-sm text-gray-600">
                  {spot.coordinates.lat.toFixed(4)}, {spot.coordinates.lng.toFixed(4)}
                </span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="p-6 pt-4">
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.round(spot.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{spot.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 ml-1">
                ({spot.reviewCount} avaliações)
              </span>
            </div>
            
            <div className="space-y-3">
              {/* Mockup de avaliações */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-ocean-200 flex items-center justify-center text-ocean-800 font-semibold">
                      J
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">João Silva</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2 dias atrás</span>
                </div>
                <p className="text-sm mt-2">Excelente local para pesca de tucunaré! Água limpa e muitos peixes.</p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-trust-200 flex items-center justify-center text-trust-800 font-semibold">
                      M
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">Maria Souza</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">1 semana atrás</span>
                </div>
                <p className="text-sm mt-2">Lugar bonito, mas algumas áreas são difíceis de acessar. Os pôr-do-sol são incríveis!</p>
              </div>
              
              {isAuthenticated ? (
                <Button variant="outline" className="w-full text-sm mt-2">
                  Adicionar sua avaliação
                </Button>
              ) : (
                <p className="text-center text-sm text-gray-500 mt-2">
                  Faça login para adicionar sua avaliação
                </p>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="photos" className="p-6 pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {spot.photos.length > 0 ? (
              spot.photos.map((photo, index) => (
                <div key={index} className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src={photo} 
                    alt={`${spot.name} - Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-4">
                Nenhuma foto disponível para este local.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
      
      <CardFooter className="flex justify-between p-6 pt-4">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-sm flex items-center gap-1 ${liked ? 'bg-fishing-50 text-fishing-600' : ''}`}
            onClick={handleLike}
          >
            <ThumbsUp className="h-4 w-4" />
            <span className="hidden sm:inline">{liked ? 'Curtido' : 'Curtir'}</span>
            <span>{likeCount}</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-sm flex items-center gap-1"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
        </div>
        <Button 
          onClick={handleNavigate}
          variant="trust"
          size="sm"
          className="text-sm flex items-center gap-1"
        >
          <Navigation className="h-4 w-4" />
          <span>Como Chegar</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LocationDetails;
