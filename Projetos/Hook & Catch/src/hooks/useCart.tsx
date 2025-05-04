
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { toast } from 'sonner';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  items: CartItem[]; // Alias for compatibility
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('fishingCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
    setInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('fishingCart', JSON.stringify(cartItems));
    }
  }, [cartItems, initialized]);

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        
        if (newQuantity > product.stock) {
          toast.warning(`Apenas ${product.stock} unidades disponíveis`);
          return prevItems.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: product.stock } 
              : item
          );
        }
        
        toast.success(`${product.name} atualizado no carrinho`);
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: newQuantity } 
            : item
        );
      } else {
        toast.success(`${product.name} adicionado ao carrinho`);
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.product.id === productId);
      if (item) {
        toast.info(`${item.product.name} removido do carrinho`);
      }
      return prevItems.filter(item => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.product.id === productId);
      
      if (!item) return prevItems;
      
      if (quantity > item.product.stock) {
        toast.warning(`Apenas ${item.product.stock} unidades disponíveis`);
        quantity = item.product.stock;
      }
      
      if (quantity <= 0) {
        toast.info(`${item.product.name} removido do carrinho`);
        return prevItems.filter(item => item.product.id !== productId);
      }
      
      return prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Carrinho esvaziado');
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cartItems.reduce((total, item) => {
    const price = item.product.discount 
      ? item.product.price - (item.product.price * item.product.discount / 100) 
      : item.product.price;
    return total + (price * item.quantity);
  }, 0);

  // Assuming a fixed shipping fee for now
  const shippingFee = subtotal > 0 ? (subtotal > 499.90 ? 0 : 29.90) : 0;
  const totalPrice = subtotal + shippingFee;

  const value: CartContextType = {
    cartItems,
    items: cartItems, // Adding alias for compatibility
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
