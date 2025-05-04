
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface ImageMap {
  [key: string]: string;
}

interface ImageContextType {
  images: ImageMap;
  getImageUrl: (imageKey: string) => string;
  setImageUrl: (imageKey: string, url: string) => void;
}

// Valores padrão para o contexto
const ImageContext = createContext<ImageContextType>({
  images: {},
  getImageUrl: () => '',
  setImageUrl: () => {},
});

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  // Estado que armazena todas as URLs de imagens
  const [images, setImages] = useState<ImageMap>({});

  // Na inicialização, carregamos imagens mockadas ou de localStorage
  useEffect(() => {
    // Tentar carregar imagens do localStorage se disponível
    const savedImages = localStorage.getItem('salon_images');
    if (savedImages) {
      try {
        const parsedImages = JSON.parse(savedImages);
        setImages(parsedImages);
      } catch (e) {
        console.error('Erro ao carregar imagens do localStorage:', e);
      }
    }

    // Se não houver imagens salvas, inicializamos com algumas imagens padrão
    if (!savedImages) {
      const defaultImages: ImageMap = {
        // Imagens de serviços
        'service-eyelashes': 'https://images.unsplash.com/photo-1516914641057-3bca7c478c93?q=80&w=1000&auto=format&fit=crop',
        'service-eyebrows': 'https://images.unsplash.com/photo-1578535294919-2d98eb281803?q=80&w=1000&auto=format&fit=crop',
        'service-lamination': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
        
        // Imagens da equipe
        'team-1': 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1000&auto=format&fit=crop',
        'team-2': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
        'team-3': 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1000&auto=format&fit=crop',
        
        // Imagens de portfolio
        'portfolio-1': 'https://images.unsplash.com/photo-1506755594592-349d12a7c52a?q=80&w=1000&auto=format&fit=crop',
        'portfolio-2': 'https://images.unsplash.com/photo-1549388604-817d15aa0110?q=80&w=1000&auto=format&fit=crop',
        'portfolio-3': 'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=1000&auto=format&fit=crop',
        
        // Logo e elementos de UI
        'logo': 'https://placehold.co/200x80/fff5f5/c9796b?text=Natural+Beauty',
        'banner': 'https://images.unsplash.com/photo-1603226521984-179f645185dc?q=80&w=1000&auto=format&fit=crop',
      };
      
      setImages(defaultImages);
      // Salvar no localStorage para uso futuro
      localStorage.setItem('salon_images', JSON.stringify(defaultImages));
    }
  }, []);

  // Função para obter URL de uma imagem
  const getImageUrl = (imageKey: string): string => {
    return images[imageKey] || 'https://placehold.co/600x400/f5f5f5/cccccc?text=Imagem+não+encontrada';
  };

  // Função para definir URL de uma imagem
  const setImageUrl = (imageKey: string, url: string): void => {
    const updatedImages = {...images, [imageKey]: url};
    setImages(updatedImages);
    localStorage.setItem('salon_images', JSON.stringify(updatedImages));
  };

  return (
    <ImageContext.Provider value={{ images, getImageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useImages = () => useContext(ImageContext);
