
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '../ui/sheet';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/button';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import CheckoutProcess from '../checkout/CheckoutProcess';

interface ShoppingCartDrawerProps {
  open: boolean;
  onClose: () => void;
}

// Define the CartItem interface here since it's needed for the component
interface CartItem {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    discount?: number;
    image: string;
    stock: number;
  };
  quantity: number;
}

const ShoppingCartDrawer: React.FC<ShoppingCartDrawerProps> = ({ open, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal, totalPrice } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2)}`.replace('.', ',');
  };
  
  const handleStartCheckout = () => {
    setCheckoutOpen(true);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Seu Carrinho
            </SheetTitle>
            <SheetDescription>
              {cartItems.length > 0 
                ? `Você tem ${cartItems.length} ${cartItems.length === 1 ? 'item' : 'itens'} no carrinho`
                : 'Seu carrinho está vazio'}
            </SheetDescription>
          </SheetHeader>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-96">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-6">Seu carrinho está vazio</p>
              <Button onClick={onClose} className="bg-fishing-600 hover:bg-fishing-700">
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <CartItemCard 
                    key={item.product.id} 
                    item={item} 
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Frete</span>
                  <span className="font-medium">
                    {subtotal > 499.90 
                      ? "Grátis" 
                      : (subtotal > 0 ? formatPrice(29.90) : "R$ 0,00")}
                  </span>
                </div>
                
                {subtotal > 0 && subtotal < 499.90 && (
                  <div className="px-4 py-2 bg-green-50 border border-green-100 rounded-md text-sm text-green-700">
                    Adicione mais {formatPrice(499.90 - subtotal)} para ganhar frete grátis!
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-fishing-600 hover:bg-fishing-700 gap-2">
                        Finalizar Compra
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0">
                      <div className="p-6">
                        <CheckoutProcess onClose={() => setCheckoutOpen(false)} />
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" onClick={onClose}>
                    Continuar Comprando
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 text-sm hover:text-red-500 justify-start p-0 h-auto"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Limpar carrinho
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;
  
  const price = product.discount 
    ? product.price - (product.price * product.discount / 100) 
    : product.price;
  
  const formattedPrice = `R$ ${price.toFixed(2)}`.replace('.', ',');
  const total = (price * quantity).toFixed(2).replace('.', ',');

  return (
    <div className="flex gap-4 border border-gray-100 rounded-md p-3">
      <Link to={`/product/${product.slug}`} className="shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-20 h-20 object-cover rounded-md"
        />
      </Link>
      
      <div className="flex-1 min-w-0">
        <Link to={`/product/${product.slug}`} className="font-medium text-gray-900 hover:text-fishing-600 line-clamp-2">
          {product.name}
        </Link>
        
        <div className="text-sm text-gray-500 mt-1">
          {formattedPrice}
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center border rounded-md">
            <button 
              onClick={() => onUpdateQuantity(product.id, quantity - 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
              aria-label="Diminuir quantidade"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-3 py-1 text-sm">{quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
              aria-label="Aumentar quantidade"
              disabled={quantity >= product.stock}
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          
          <button 
            onClick={() => onRemove(product.id)}
            className="text-gray-400 hover:text-red-500"
            aria-label="Remover item"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDrawer;
