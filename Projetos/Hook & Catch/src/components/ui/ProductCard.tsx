
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';
import { toast } from 'sonner';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  slug: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  discount,
  rating,
  reviewCount,
  image,
  category,
  slug,
  isNew,
  isBestseller
}) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Buscar o produto completo do data/products.ts (simplificado para este exemplo)
    import('../../data/products').then(({ products }) => {
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart(product);
        toast.success(`${name} adicionado ao carrinho`);
      }
    });
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toggleFavorite(id);
    const message = isFavorite(id) 
      ? `${name} removido dos favoritos`
      : `${name} adicionado aos favoritos`;
    toast.success(message);
  };

  return (
    <div className="group relative card-hover bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      {(isNew || isBestseller || discount) && (
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="bg-fishing-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Novo
            </span>
          )}
          {isBestseller && (
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Mais vendido
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
      )}
      
      <div className="relative overflow-hidden aspect-square">
        <Link to={`/product/${slug}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <button 
          aria-label="Adicionar aos favoritos" 
          onClick={handleToggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors ${
            isFavorite(id) ? 'text-red-500' : 'text-gray-700 hover:text-fishing-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite(id) ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="w-full bg-fishing-600 hover:bg-fishing-700 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 text-sm transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${slug}`} className="block">
          <h3 className="font-medium text-gray-900 hover:text-fishing-600 transition-colors line-clamp-2 min-h-[2.5rem]">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mt-2 mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(rating) 
                    ? 'text-amber-400 fill-amber-400' 
                    : i < rating 
                    ? 'text-amber-400 fill-amber-400' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {discount ? (
              <>
                <span className="font-bold text-gray-900">R$ {discountedPrice.toFixed(2).replace('.', ',')}</span>
                <span className="text-sm text-gray-500 line-through">R$ {price.toFixed(2).replace('.', ',')}</span>
              </>
            ) : (
              <span className="font-bold text-gray-900">R$ {price.toFixed(2).replace('.', ',')}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
