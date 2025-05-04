
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { products } from '../data/products';
import { Heart, ShoppingCart, ChevronRight, Share2, Star, Truck, Shield, Package, Gift, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ui/ProductCard';
import ReviewStars from '../components/shop/ReviewStars';
import { useToast } from '../hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState(products.find(p => p.slug === slug));
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image || '');
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const foundProduct = products.find(p => p.slug === slug);
    setProduct(foundProduct);
    
    if (foundProduct) {
      setActiveImage(foundProduct.image);
      // Update page title
      document.title = `${foundProduct.name} | Hook & Catch`;
    } else {
      // Navigate to shop if product not found
      navigate('/shop');
      toast({
        title: "Produto não encontrado",
        description: "Este produto não existe ou foi removido da loja.",
        variant: "destructive"
      });
    }
  }, [slug, navigate, toast]);

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const calculatePrice = () => {
    if (!product) return 0;
    return product.discount 
      ? product.price - (product.price * product.discount / 100) 
      : product.price;
  };

  const relatedProducts = product?.relatedProducts
    ? products.filter(p => product.relatedProducts?.includes(p.id)).slice(0, 4)
    : [];

  if (!product) {
    return null; // Will be redirected by the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-fishing-600">Início</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link to="/shop" className="hover:text-fishing-600">Loja</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>{product.name}</span>
            </div>
            
            <Link 
              to="/shop" 
              className="inline-flex items-center text-fishing-600 hover:text-fishing-800 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar para a loja
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 aspect-square overflow-hidden rounded-xl border border-gray-200">
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                <button 
                  className={`aspect-square overflow-hidden rounded-md border ${activeImage === product.image ? 'border-fishing-500' : 'border-gray-200'}`}
                  onClick={() => setActiveImage(product.image)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </button>
                {/* Placeholder for additional product images */}
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-gray-100 rounded-md flex items-center justify-center"
                  >
                    <Package className="h-6 w-6 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {product.isNew && (
                  <span className="bg-fishing-500 text-white text-xs px-2 py-1 rounded-full">
                    Novo
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                    Mais Vendido
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <ReviewStars rating={product.rating} />
                <span className="ml-2 text-sm text-gray-500">
                  {product.rating.toFixed(1)} ({product.reviewCount} avaliações)
                </span>
              </div>
              
              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 mr-2">
                      R$ {calculatePrice().toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                )}
                
                {product.stock > 0 ? (
                  <div className="text-sm mt-1">
                    {product.stock <= 5 ? (
                      <span className="text-amber-600">Apenas {product.stock} em estoque</span>
                    ) : (
                      <span className="text-green-600">Em estoque</span>
                    )}
                  </div>
                ) : (
                  <div className="text-sm text-red-500 mt-1">Fora de estoque</div>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <ul className="space-y-1">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-fishing-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="border border-gray-300 rounded-md flex">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="ml-4 text-sm text-gray-500">
                    {product.stock > 0 ? (
                      <>Disponível: <span className="font-medium">{product.stock}</span></>
                    ) : (
                      'Fora de estoque'
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button 
                    className="bg-fishing-600 hover:bg-fishing-700 flex-1"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar ao Carrinho
                  </Button>
                  
                  <Button variant="outline" className="px-3">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </Button>
                  
                  <Button variant="outline" className="px-3">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Truck className="h-5 w-5 mr-3 text-fishing-600" />
                  <div>
                    <p className="font-medium">Entrega para todo Brasil</p>
                    <p className="text-sm">Frete grátis para compras acima de R$ 499,90</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Shield className="h-5 w-5 mr-3 text-fishing-600" />
                  <div>
                    <p className="font-medium">Garantia de satisfação</p>
                    <p className="text-sm">30 dias para devolução</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="details" className="mb-12">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Detalhes do Produto</TabsTrigger>
              <TabsTrigger value="specs">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações ({product.reviewCount})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="px-1">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Descrição</h3>
                <p className="mb-4">{product.description}</p>
                
                <h4 className="text-lg font-semibold mb-2">Características</h4>
                <ul className="list-disc pl-5 mb-4">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
                
                <p className="mb-4">
                  Este produto é ideal para pescadores que buscam qualidade e durabilidade. 
                  Fabricado com materiais de primeira linha, o {product.name} oferece excelente 
                  desempenho nas mais diversas condições de pesca.
                </p>
                
                <p>
                  Você pode combinar este produto com outros acessórios disponíveis em nossa loja 
                  para maximizar sua experiência de pesca.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="specs">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Especificações Técnicas</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications && Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{key}: </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Avaliações dos Clientes</h3>
                  <Button className="bg-fishing-600 hover:bg-fishing-700">Avaliar Produto</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold mr-4">{product.rating.toFixed(1)}</span>
                      <div>
                        <ReviewStars rating={product.rating} size={5} />
                        <p className="text-sm text-gray-500 mt-1">{product.reviewCount} avaliações</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => {
                        // Generate fake distribution percentages
                        const percentage = star === 5 ? 65 : 
                                          star === 4 ? 25 : 
                                          star === 3 ? 7 : 
                                          star === 2 ? 2 : 1;
                        
                        return (
                          <div key={star} className="flex items-center">
                            <span className="text-sm min-w-[30px]">{star}</span>
                            <Star className="h-4 w-4 text-amber-400 mr-2" />
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-amber-400 h-2 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">O que os clientes estão dizendo</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• "Excelente qualidade, superou minhas expectativas"</li>
                      <li>• "Ótimo custo-benefício, recomendo"</li>
                      <li>• "Entrega rápida e produto conforme descrição"</li>
                      <li>• "Muito resistente, ideal para pescarias pesadas"</li>
                    </ul>
                  </div>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Roberto Silva",
                      date: "15/03/2023",
                      rating: 5,
                      title: "Excelente produto!",
                      text: "Comprei essa vara há um mês e já testei em diversas situações. Muito resistente e sensível ao mesmo tempo. Recomendo fortemente para quem busca qualidade."
                    },
                    {
                      name: "Carlos Pereira",
                      date: "22/02/2023",
                      rating: 4,
                      title: "Ótimo custo-benefício",
                      text: "Produto de boa qualidade, cumpre o que promete. A entrega foi rápida e o atendimento ao cliente excelente. Só não dou 5 estrelas porque a embalagem poderia ser melhor."
                    },
                    {
                      name: "Ana Beatriz",
                      date: "05/01/2023",
                      rating: 5,
                      title: "Muito satisfeita com a compra",
                      text: "Presenteei meu marido e ele adorou! A qualidade é excelente e o acabamento impecável. Com certeza voltarei a comprar nesta loja."
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex items-center mt-1">
                            <ReviewStars rating={review.rating} size={4} />
                            <span className="text-xs text-gray-500 ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-medium my-2">{review.title}</h5>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline">Ver Mais Avaliações</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
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
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
