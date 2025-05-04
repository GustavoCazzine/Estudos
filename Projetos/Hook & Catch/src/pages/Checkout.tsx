
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import CheckoutProcess from '../components/checkout/CheckoutProcess';
import {
  Loader2,
  ShoppingCart,
  AlertCircle,
  Shield,
  Lock,
  CreditCard
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import SecurityNotification from '../components/shop/SecurityNotification';

const Checkout = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { cartItems, totalItems } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Finalizar Compra | Hook & Catch';
    
    // Simulação de carregamento
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(loadingTimeout);
  }, []);

  // Redirecionar se o carrinho estiver vazio
  useEffect(() => {
    if (!isLoading && !authLoading && cartItems.length === 0) {
      toast.error('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
      navigate('/shop');
    }
  }, [cartItems, isLoading, authLoading, navigate]);

  // Redirecionar se não estiver logado
  useEffect(() => {
    if (!isLoading && !authLoading && !isAuthenticated) {
      toast.error('Você precisa estar logado para finalizar a compra.');
      navigate('/');
    }
  }, [isAuthenticated, isLoading, authLoading, navigate]);

  if (isLoading || authLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-fishing-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Carregando checkout...</h2>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 flex items-center justify-center">
          <div className="text-center max-w-md p-6">
            <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">
              Adicione alguns produtos ao seu carrinho antes de finalizar a compra.
            </p>
            <Button
              onClick={() => navigate('/shop')}
              className="bg-fishing-600 hover:bg-fishing-700"
            >
              Continuar Comprando
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 flex items-center justify-center">
          <div className="text-center max-w-md p-6">
            <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Acesso necessário</h2>
            <p className="text-gray-600 mb-6">
              Você precisa estar logado para finalizar a compra.
            </p>
            <Button
              onClick={() => navigate('/')}
              className="bg-fishing-600 hover:bg-fishing-700"
            >
              Fazer Login
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SecurityNotification showExtended={true} />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Finalizar Compra</h1>
            <p className="text-gray-600">
              Complete as etapas abaixo para finalizar sua compra
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <CheckoutProcess onClose={() => navigate('/shop')} />
            </div>
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm sticky top-24">
                <div className="flex items-center mb-4">
                  <Shield className="h-5 w-5 text-fishing-600 mr-2" />
                  <h3 className="font-medium">Compra Segura e Protegida</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-2">
                    <Lock className="h-4 w-4 text-fishing-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Todas as informações são criptografadas com SSL de 256 bits</p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <CreditCard className="h-4 w-4 text-fishing-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Pagamentos processados por gateways certificados PCI DSS</p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-fishing-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Proteção contra fraudes e monitoramento em tempo real</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 my-4 pt-4">
                  <div className="flex justify-center space-x-3 mb-2">
                    <img src="https://placehold.co/30x20/png" alt="Visa" className="h-6" />
                    <img src="https://placehold.co/30x20/png" alt="Mastercard" className="h-6" />
                    <img src="https://placehold.co/30x20/png" alt="American Express" className="h-6" />
                    <img src="https://placehold.co/30x20/png" alt="Elo" className="h-6" />
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Aceitamos as principais bandeiras de cartões, Pix e boleto
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
