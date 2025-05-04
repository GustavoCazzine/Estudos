
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './useAuth';

interface FavoritesContextType {
  favorites: number[];
  items: number[]; // Alias for compatibility
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Carrega favoritos do localStorage na montagem do componente
  useEffect(() => {
    const loadFavorites = () => {
      const key = user ? `fishing_favorites_${user.id}` : 'fishing_favorites_guest';
      const savedFavorites = localStorage.getItem(key);
      
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites));
        } catch (e) {
          console.error('Falha ao carregar favoritos do localStorage', e);
          setFavorites([]);
        }
      }
      setInitialized(true);
    };
    
    loadFavorites();
  }, [user]);

  // Salva favoritos no localStorage sempre que mudam
  useEffect(() => {
    if (initialized) {
      const key = user ? `fishing_favorites_${user.id}` : 'fishing_favorites_guest';
      localStorage.setItem(key, JSON.stringify(favorites));
    }
  }, [favorites, initialized, user]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  const isFavorite = (productId: number) => {
    return favorites.includes(productId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      items: favorites, // Adding alias for compatibility
      toggleFavorite, 
      isFavorite, 
      clearFavorites 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
};
