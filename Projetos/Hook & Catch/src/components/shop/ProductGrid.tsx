
import React, { useMemo } from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

interface ProductGridProps {
  activeCategory: string | null;
  activeBrand: string | null;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  activeCategory,
  activeBrand,
  priceRange,
  searchQuery,
  sortBy
}) => {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filter by category
      if (activeCategory && product.category !== activeCategory) {
        return false;
      }
      
      // Filter by brand
      if (activeBrand && product.brand !== activeBrand) {
        return false;
      }
      
      // Filter by price range
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
  }, [activeCategory, activeBrand, priceRange, searchQuery]);
  
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'price-low') {
        const aPrice = a.discount ? a.price - (a.price * a.discount / 100) : a.price;
        const bPrice = b.discount ? b.price - (b.price * b.discount / 100) : b.price;
        return aPrice - bPrice;
      }
      if (sortBy === 'price-high') {
        const aPrice = a.discount ? a.price - (a.price * a.discount / 100) : a.price;
        const bPrice = b.discount ? b.price - (b.price * b.discount / 100) : b.price;
        return bPrice - aPrice;
      }
      if (sortBy === 'newest') {
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      }
      if (sortBy === 'popularity') {
        return b.reviewCount - a.reviewCount;
      }
      return 0;
    });
  }, [filteredProducts, sortBy]);

  if (sortedProducts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-500 mb-4">Nenhum produto encontrado com os filtros selecionados.</p>
        <p className="text-gray-400">Tente mudar os filtros para ver mais produtos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
          rating={product.rating}
          reviewCount={product.reviewCount}
          image={product.image}
          category={product.category}
          slug={product.slug}
          isNew={product.isNew}
          isBestseller={product.isBestseller}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
