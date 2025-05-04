
import React, { useState, useRef, useEffect } from 'react';
import ProductCard, { ProductProps } from '../ui/ProductCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/use-mobile';

const products: ProductProps[] = [
  {
    id: 1,
    name: 'Vara de Pesca Pro Carbon',
    price: 129.99,
    rating: 4.8,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1603204356582-c38cae42c577?q=80&w=1974&auto=format&fit=crop',
    category: 'Varas de Pesca',
    slug: 'vara-pesca-pro-carbon',
    isBestseller: true
  },
  {
    id: 2,
    name: 'Molinete Ultra-Leve',
    price: 89.99,
    discount: 15,
    rating: 4.6,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1611701330327-0f7ae4de2162?q=80&w=1974&auto=format&fit=crop',
    category: 'Molinetes',
    slug: 'molinete-ultra-leve',
    isBestseller: true
  },
  {
    id: 3,
    name: 'Kit Premium de Iscas (24 peças)',
    price: 59.99,
    rating: 4.7,
    reviewCount: 212,
    image: 'https://images.unsplash.com/photo-1514908162050-ece4fa070ba5?q=80&w=2070&auto=format&fit=crop',
    category: 'Iscas & Lures',
    slug: 'kit-premium-iscas',
    isNew: true
  },
  {
    id: 4,
    name: 'Caixa de Pesca à Prova d\'água',
    price: 49.99,
    rating: 4.5,
    reviewCount: 87,
    image: 'https://images.unsplash.com/photo-1599828734341-c3ed4e9b4d5b?q=80&w=2070&auto=format&fit=crop',
    category: 'Acessórios',
    slug: 'caixa-pesca-prova-dagua'
  }
];

const BestSellers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
    <section className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div 
            className={`max-w-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-fishing-600 font-medium">Seleção Especial</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-gray-900">Produtos Mais Vendidos</h2>
            <p className="text-gray-600">
              Nossos produtos mais populares baseados em vendas. Atualizado diariamente para ajudar você a encontrar o equipamento perfeito.
            </p>
          </div>
          <Link 
            to="/shop" 
            className={`mt-6 md:mt-0 inline-flex items-center text-fishing-600 hover:text-fishing-700 font-medium group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            Ver Todos os Produtos
            <ChevronRight className="ml-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {isMobile && (
          <div className="mt-8 text-center">
            <Link 
              to="/shop" 
              className="inline-flex items-center text-fishing-600 hover:text-fishing-700 font-medium"
            >
              Ver mais produtos
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;
