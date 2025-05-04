
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ShopHeader from '../components/shop/ShopHeader';
import ProductFilters from '../components/shop/ProductFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ProductSort from '../components/shop/ProductSort';
import { useCart } from '../hooks/useCart';
import { toast } from 'sonner';
import ShoppingCartDrawer from '../components/shop/ShoppingCartDrawer';
import { Button } from '../components/ui/button';
import { FilterX, ShoppingCart } from 'lucide-react';
import TrustSignals from '../components/shop/TrustSignals';
import PaymentOptions from '../components/shop/PaymentOptions';

const sortOptions = [
  { value: 'popularity', label: 'Mais Populares' },
  { value: 'price-low', label: 'Menor Preço' },
  { value: 'price-high', label: 'Maior Preço' },
  { value: 'newest', label: 'Lançamentos' },
];

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const initialCategory = queryParams.get('category');
  const initialSearch = queryParams.get('search');
  
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearch || '');
  const { items: cartItems, totalItems } = useCart();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Loja | Hook & Catch';
    document.body.classList.add('page-transition-in');
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => {
      document.body.classList.remove('page-transition-in');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const category = queryParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
    
    const search = queryParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [location.search, queryParams]);

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    updateUrlParams('category', category);
  };

  const handleBrandChange = (brand: string | null) => {
    setActiveBrand(brand);
    updateUrlParams('brand', brand);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    updateUrlParams('minPrice', range[0].toString());
    updateUrlParams('maxPrice', range[1].toString());
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateUrlParams('sort', value);
  };
  
  const handleSearchChange = (search: string) => {
    setSearchQuery(search);
    updateUrlParams('search', search);
  };
  
  const updateUrlParams = (param: string, value: string | null) => {
    const params = new URLSearchParams(location.search);
    
    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }
    
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const clearFilters = () => {
    setActiveCategory(null);
    setActiveBrand(null);
    setPriceRange([0, 1000]);
    setSearchQuery('');
    navigate('/shop');
    toast.success('Filtros limpos com sucesso!');
  };

  const hasActiveFilters = activeCategory || activeBrand || searchQuery || priceRange[0] > 0 || priceRange[1] < 1000;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ShopHeader />
        
        <div className="container mx-auto px-4 py-8">
          <div 
            className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 transition-all duration-500 ${
              isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h1 className="text-2xl font-bold text-fishing-800">Nossos Produtos</h1>
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center mt-2 gap-2">
                  <span className="text-sm text-gray-500">Filtrando por:</span>
                  {activeCategory && (
                    <span className="text-sm bg-fishing-100 text-fishing-700 px-3 py-1 rounded-full flex items-center">
                      Categoria: {activeCategory.replace(/-/g, ' ')}
                    </span>
                  )}
                  {activeBrand && (
                    <span className="text-sm bg-fishing-100 text-fishing-700 px-3 py-1 rounded-full flex items-center">
                      Marca: {activeBrand}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="text-sm bg-fishing-100 text-fishing-700 px-3 py-1 rounded-full flex items-center">
                      Busca: {searchQuery}
                    </span>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 1000) && (
                    <span className="text-sm bg-fishing-100 text-fishing-700 px-3 py-1 rounded-full flex items-center">
                      Preço: R${priceRange[0]} - R${priceRange[1]}
                    </span>
                  )}
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-fishing-600 hover:text-fishing-800 flex items-center gap-1 underline hover:no-underline transition-colors"
                  >
                    <FilterX className="h-3 w-3" />
                    Limpar filtros
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <ProductSort options={sortOptions} value={sortBy} onChange={handleSortChange} />
              <Button 
                onClick={toggleCart} 
                variant="outline" 
                className="flex items-center gap-2 relative hover:bg-fishing-50 hover:text-fishing-700 hover:border-fishing-200 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Carrinho</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-fishing-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div 
              className={`lg:w-1/4 transition-all duration-500 delay-100 ${
                isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <ProductFilters 
                activeCategory={activeCategory}
                activeBrand={activeBrand}
                priceRange={priceRange}
                searchQuery={searchQuery}
                onCategoryChange={handleCategoryChange}
                onBrandChange={handleBrandChange}
                onPriceChange={handlePriceChange}
                onSearchChange={handleSearchChange}
              />
            </div>
            <div 
              className={`lg:w-3/4 transition-all duration-500 delay-200 ${
                isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <ProductGrid 
                activeCategory={activeCategory} 
                activeBrand={activeBrand}
                priceRange={priceRange}
                searchQuery={searchQuery}
                sortBy={sortBy}
              />
            </div>
          </div>
        </div>
        
        <TrustSignals />
        <PaymentOptions />
        
        <ShoppingCartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
