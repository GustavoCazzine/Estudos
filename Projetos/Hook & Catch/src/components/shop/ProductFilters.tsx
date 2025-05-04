
import React from 'react';
import { Slider } from '../ui/slider';
import { Separator } from '../ui/separator';
import CheckboxWithText from './CheckboxWithText';
import { Badge } from '../ui/badge';
import { Search, Filter, X, TagIcon } from 'lucide-react';

interface ProductFiltersProps {
  activeCategory: string | null;
  activeBrand: string | null;
  priceRange: [number, number];
  searchQuery: string;
  onCategoryChange: (category: string | null) => void;
  onBrandChange: (brand: string | null) => void;
  onPriceChange: (range: [number, number]) => void;
  onSearchChange: (search: string) => void;
}

const categories = [
  { id: 'varas', name: 'Varas de Pesca' },
  { id: 'carretilhas', name: 'Carretilhas e Molinetes' },
  { id: 'linhas', name: 'Linhas' },
  { id: 'iscas', name: 'Iscas Artificiais' },
  { id: 'anzois', name: 'Anzóis' },
  { id: 'acessorios', name: 'Acessórios' },
  { id: 'roupas', name: 'Roupas e Calçados' },
  { id: 'eletronica', name: 'Eletrônicos' },
];

const brands = [
  { id: 'shimano', name: 'Shimano' },
  { id: 'marine', name: 'Marine Sports' },
  { id: 'albatroz', name: 'Albatroz' },
  { id: 'daiwa', name: 'Daiwa' },
  { id: 'rapala', name: 'Rapala' },
  { id: 'monster3x', name: 'Monster 3X' },
  { id: 'maruri', name: 'Maruri' },
  { id: 'okuma', name: 'Okuma' },
];

const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeCategory,
  activeBrand,
  priceRange,
  searchQuery,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
  onSearchChange,
}) => {
  const handlePriceChange = (values: number[]) => {
    onPriceChange([values[0], values[1]]);
  };

  const handleResetFilters = () => {
    onCategoryChange(null);
    onBrandChange(null);
    onPriceChange([0, 1000]);
    onSearchChange('');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sticky top-24 transition-all hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Filter className="h-5 w-5 mr-2 text-fishing-500" />
          Filtros
        </h2>
        
        <button 
          className="text-sm text-fishing-600 hover:text-fishing-800 flex items-center gap-1 transition-colors"
          onClick={handleResetFilters}
        >
          <X className="h-4 w-4" />
          Limpar
        </button>
      </div>
      
      {(activeCategory || activeBrand || priceRange[0] > 0 || priceRange[1] < 1000 || searchQuery) && (
        <div className="mb-4 flex flex-wrap gap-2">
          {activeCategory && (
            <Badge 
              variant="outline" 
              className="flex items-center gap-1 px-3 py-1 bg-fishing-50 text-fishing-700 border-fishing-200 hover:bg-fishing-100 transition-colors"
              onClick={() => onCategoryChange(null)}
            >
              {categories.find(c => c.id === activeCategory)?.name}
              <X className="ml-1 h-3 w-3 cursor-pointer" />
            </Badge>
          )}
          
          {activeBrand && (
            <Badge 
              variant="outline" 
              className="flex items-center gap-1 px-3 py-1 bg-fishing-50 text-fishing-700 border-fishing-200 hover:bg-fishing-100 transition-colors"
              onClick={() => onBrandChange(null)}
            >
              {brands.find(b => b.id === activeBrand)?.name}
              <X className="ml-1 h-3 w-3 cursor-pointer" />
            </Badge>
          )}
          
          {(priceRange[0] > 0 || priceRange[1] < 1000) && (
            <Badge 
              variant="outline" 
              className="flex items-center gap-1 px-3 py-1 bg-fishing-50 text-fishing-700 border-fishing-200 hover:bg-fishing-100 transition-colors"
              onClick={() => onPriceChange([0, 1000])}
            >
              R${priceRange[0]} - R${priceRange[1]}
              <X className="ml-1 h-3 w-3 cursor-pointer" />
            </Badge>
          )}

          {searchQuery && (
            <Badge 
              variant="outline" 
              className="flex items-center gap-1 px-3 py-1 bg-fishing-50 text-fishing-700 border-fishing-200 hover:bg-fishing-100 transition-colors"
              onClick={() => onSearchChange('')}
            >
              Busca: {searchQuery}
              <X className="ml-1 h-3 w-3 cursor-pointer" />
            </Badge>
          )}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="font-medium mb-3 flex items-center">
          <Search className="h-4 w-4 mr-2 text-gray-500" />
          Buscar
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fishing-500 focus:border-fishing-300 transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          {searchQuery && (
            <button 
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-6">
        <h3 className="font-medium mb-3 flex items-center">
          <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
          Categorias
        </h3>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
          {categories.map((category) => (
            <CheckboxWithText
              key={category.id}
              id={`category-${category.id}`}
              checked={activeCategory === category.id}
              onChange={() => onCategoryChange(activeCategory === category.id ? null : category.id)}
              label={category.name}
              className={activeCategory === category.id ? "bg-fishing-50 rounded-md" : ""}
            />
          ))}
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-6">
        <h3 className="font-medium mb-3 flex items-center">
          <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
          Marcas
        </h3>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
          {brands.map((brand) => (
            <CheckboxWithText
              key={brand.id}
              id={`brand-${brand.id}`}
              checked={activeBrand === brand.id}
              onChange={() => onBrandChange(activeBrand === brand.id ? null : brand.id)}
              label={brand.name}
              className={activeBrand === brand.id ? "bg-fishing-50 rounded-md" : ""}
            />
          ))}
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div>
        <h3 className="font-medium mb-3 flex items-center">
          <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
          Faixa de Preço
        </h3>
        <Slider
          defaultValue={[priceRange[0], priceRange[1]]}
          value={[priceRange[0], priceRange[1]]}
          max={1000}
          step={10}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <div className="px-3 py-1 bg-fishing-50 text-fishing-700 rounded-md">
            R${priceRange[0]}
          </div>
          <div className="px-3 py-1 bg-fishing-50 text-fishing-700 rounded-md">
            R${priceRange[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
