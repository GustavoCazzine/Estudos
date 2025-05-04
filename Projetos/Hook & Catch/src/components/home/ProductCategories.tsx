
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const categories = [
  {
    id: 1,
    name: 'Varas de Pesca',
    image: 'https://images.unsplash.com/photo-1603204356582-c38cae42c577?q=80&w=2070&auto=format&fit=crop',
    count: 42,
    slug: 'fishing-rods'
  },
  {
    id: 2,
    name: 'Molinetes',
    image: 'https://images.unsplash.com/photo-1611701330327-0f7ae4de2162?q=80&w=1974&auto=format&fit=crop',
    count: 38,
    slug: 'fishing-reels'
  },
  {
    id: 3,
    name: 'Iscas e Linhas',
    image: 'https://images.unsplash.com/photo-1514908162050-ece4fa070ba5?q=80&w=2070&auto=format&fit=crop',
    count: 65,
    slug: 'lures-baits'
  },
  {
    id: 4,
    name: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1599828734341-c3ed4e9b4d5b?q=80&w=2070&auto=format&fit=crop',
    count: 94,
    slug: 'fishing-accessories'
  }
];

const ProductCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // For mobile, we'll show only 2 categories initially
  const [visibleCategories, setVisibleCategories] = useState(
    isMobile ? categories.slice(0, 2) : categories
  );
  const [showAll, setShowAll] = useState(!isMobile);

  useEffect(() => {
    // Update visible categories when mobile state changes
    setVisibleCategories(isMobile && !showAll ? categories.slice(0, 2) : categories);
  }, [isMobile, showAll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fishing-600 font-medium">Explore Nossa Coleção</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Categorias Populares</h2>
          <p className="text-gray-600">
            Navegue por nossas categorias de pesca mais populares e encontre o equipamento perfeito para sua próxima aventura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCategories.map((category, index) => (
            <Link 
              to={`/shop?category=${category.slug}`} 
              key={category.id}
              className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fishing-900 via-transparent to-transparent z-10"></div>
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-fishing-100">{category.count} Produtos</span>
                  <span className="bg-white/20 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {isMobile && !showAll && (
          <div className="mt-8 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center text-fishing-600 hover:text-fishing-700 font-medium px-6 py-2 border border-fishing-600 rounded-md transition-colors hover:bg-fishing-50"
            >
              Ver todas as categorias
              <ChevronRight className="ml-1 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategories;
