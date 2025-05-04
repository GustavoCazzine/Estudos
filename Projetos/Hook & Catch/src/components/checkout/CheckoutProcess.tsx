
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Separator } from '../ui/separator';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { 
  CreditCard, 
  MapPin, 
  Truck, 
  Check, 
  Package, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingCart,
  AlertCircle,
  Info,
  Clock,
  Loader2,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { useNavigate } from 'react-router-dom';

interface CheckoutProcessProps {
  onClose: () => void;
}

const validateCPF = (cpf: string): boolean => {
  // Remove special characters
  cpf = cpf.replace(/[^\d]/g, '');

  // Check if length is 11
  if (cpf.length !== 11) return false;

  // Check if all digits are the same
  if (/^(\d)\1+$/.test(cpf)) return false;

  // Validate first check digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;

  // Validate second check digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return false;

  return true;
};

const validateCEP = (cep: string): boolean => {
  // Remove special characters
  cep = cep.replace(/[^\d]/g, '');
  return cep.length === 8;
};

const validateCardNumber = (cardNumber: string): boolean => {
  // Remove spaces and special characters
  cardNumber = cardNumber.replace(/[^\d]/g, '');
  return cardNumber.length >= 13 && cardNumber.length <= 19;
};

const validateCardExpiry = (expiry: string): boolean => {
  if (!expiry.includes('/')) return false;
  
  const [month, year] = expiry.split('/');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  
  const expiryMonth = parseInt(month);
  const expiryYear = parseInt(year);
  
  if (isNaN(expiryMonth) || isNaN(expiryYear)) return false;
  if (expiryMonth < 1 || expiryMonth > 12) return false;
  
  if (expiryYear < currentYear) return false;
  if (expiryYear === currentYear && expiryMonth < currentMonth) return false;
  
  return true;
};

const validateCardCVV = (cvv: string): boolean => {
  // Only allow digits
  cvv = cvv.replace(/[^\d]/g, '');
  return cvv.length >= 3 && cvv.length <= 4;
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  cep?: string;
  address?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

const CheckoutProcess: React.FC<CheckoutProcessProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { cartItems, subtotal, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [step, setStep] = useState(isAuthenticated ? 1 : 0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [paymentTimeout, setPaymentTimeout] = useState(false);
  const [remainingTime, setRemainingTime] = useState(600); // 10 minutes in seconds
  const [orderStatus, setOrderStatus] = useState('aguardando');
  
  // Informações do cliente
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  
  // Endereço
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  // Entrega
  const [shippingMethod, setShippingMethod] = useState('standard');
  
  // Pagamento
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [installments, setInstallments] = useState('1');
  
  // Pix
  const [pixQrCode, setPixQrCode] = useState('');
  
  useEffect(() => {
    // Reset errors when changing steps
    setErrors({});
  }, [step]);
  
  useEffect(() => {
    // Timer for payment expiration
    let interval: number | undefined;
    
    if (step === 4 && paymentMethod === 'pix' && !paymentVerified && !paymentTimeout) {
      interval = window.setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setPaymentTimeout(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [step, paymentMethod, paymentVerified, paymentTimeout]);
  
  // Effect to simulate periodic payment verification
  useEffect(() => {
    let checkInterval: number | undefined;
    
    if (step === 4 && paymentMethod === 'pix' && pixQrCode && !paymentVerified && !paymentTimeout) {
      // Check for payment every 10 seconds (simulated)
      checkInterval = window.setInterval(() => {
        // 20% chance of payment being received
        if (Math.random() < 0.2) {
          setPaymentVerified(true);
          setOrderStatus('confirmado');
          toast.success('Pagamento PIX recebido!');
        }
      }, 10000);
    }
    
    return () => {
      if (checkInterval) clearInterval(checkInterval);
    };
  }, [step, paymentMethod, pixQrCode, paymentVerified, paymentTimeout]);
  
  const formatRemainingTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };
  
  const getShippingFee = () => {
    switch (shippingMethod) {
      case 'express':
        return 49.90;
      case 'sameday':
        return 79.90;
      default:
        return subtotal > 499.90 ? 0 : 29.90;
    }
  };
  
  const getTotalWithShipping = () => {
    return subtotal + getShippingFee();
  };
  
  const getFinalPrice = () => {
    let total = getTotalWithShipping();
    
    // Apply 5% discount for PIX
    if (paymentMethod === 'pix') {
      total = total * 0.95;
    }
    
    return total;
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    switch (currentStep) {
      case 1: // Endereço
        if (!name.trim()) {
          newErrors.name = 'Nome é obrigatório';
          isValid = false;
        }
        
        if (!email.trim()) {
          newErrors.email = 'Email é obrigatório';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email inválido';
          isValid = false;
        }
        
        if (!phone.trim()) {
          newErrors.phone = 'Telefone é obrigatório';
          isValid = false;
        }
        
        if (!cpf.trim()) {
          newErrors.cpf = 'CPF é obrigatório';
          isValid = false;
        } else if (!validateCPF(cpf)) {
          newErrors.cpf = 'CPF inválido';
          isValid = false;
        }
        
        if (!cep.trim()) {
          newErrors.cep = 'CEP é obrigatório';
          isValid = false;
        } else if (!validateCEP(cep)) {
          newErrors.cep = 'CEP inválido';
          isValid = false;
        }
        
        if (!address.trim()) {
          newErrors.address = 'Endereço é obrigatório';
          isValid = false;
        }
        
        if (!number.trim()) {
          newErrors.number = 'Número é obrigatório';
          isValid = false;
        }
        
        if (!neighborhood.trim()) {
          newErrors.neighborhood = 'Bairro é obrigatório';
          isValid = false;
        }
        
        if (!city.trim()) {
          newErrors.city = 'Cidade é obrigatória';
          isValid = false;
        }
        
        if (!state.trim()) {
          newErrors.state = 'Estado é obrigatório';
          isValid = false;
        }
        
        break;
      
      case 3: // Pagamento
        if (paymentMethod === 'credit') {
          if (!cardNumber.trim()) {
            newErrors.cardNumber = 'Número do cartão é obrigatório';
            isValid = false;
          } else if (!validateCardNumber(cardNumber)) {
            newErrors.cardNumber = 'Número do cartão inválido';
            isValid = false;
          }
          
          if (!cardName.trim()) {
            newErrors.cardName = 'Nome no cartão é obrigatório';
            isValid = false;
          }
          
          if (!cardExpiry.trim()) {
            newErrors.cardExpiry = 'Data de expiração é obrigatória';
            isValid = false;
          } else if (!validateCardExpiry(cardExpiry)) {
            newErrors.cardExpiry = 'Data de expiração inválida';
            isValid = false;
          }
          
          if (!cardCvv.trim()) {
            newErrors.cardCvv = 'Código de segurança é obrigatório';
            isValid = false;
          } else if (!validateCardCVV(cardCvv)) {
            newErrors.cardCvv = 'Código de segurança inválido';
            isValid = false;
          }
        }
        
        break;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      
      // Scroll to top when changing steps
      window.scrollTo(0, 0);
      
      // When moving to confirmation step, generate order number and process payment
      if (step === 3) {
        processOrder();
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    
    // Scroll to top when changing steps
    window.scrollTo(0, 0);
  };
  
  const processOrder = () => {
    setIsLoading(true);
    
    // Simulate API call to process order
    setTimeout(() => {
      // Generate random order number
      const newOrderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(newOrderNumber);
      
      // Credit card payments are immediately confirmed
      if (paymentMethod === 'credit') {
        setPaymentVerified(true);
        setOrderStatus('confirmado');
      } else if (paymentMethod === 'boleto') {
        setOrderStatus('aguardando');
      }
      
      setIsLoading(false);
      
      // For PIX, generate QR code
      if (paymentMethod === 'pix') {
        generatePixQrCode();
      }
    }, 2000);
  };
  
  const simulateSearchCep = () => {
    if (!validateCEP(cep)) {
      toast.error('CEP inválido. Digite um CEP com 8 dígitos.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulação de busca de CEP
    setTimeout(() => {
      setAddress('Rua dos Pescadores');
      setNeighborhood('Beira Mar');
      setCity('Florianópolis');
      setState('SC');
      toast.success('CEP encontrado!');
      setIsLoading(false);
    }, 1000);
  };
  
  const handleFinishOrder = () => {
    clearCart();
    navigate('/profile?tab=pedidos');
    toast.success('Sua compra foi concluída com sucesso!');
  };
  
  const generatePixQrCode = () => {
    setIsLoading(true);
    
    // Simulação de geração de QR Code
    setTimeout(() => {
      setPixQrCode('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg');
      toast.success('QR Code PIX gerado com sucesso! Você tem 10 minutos para concluir o pagamento.');
      setIsLoading(false);
    }, 1500);
  };
  
  const formatPhone = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as (XX) XXXXX-XXXX
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };
  
  const formatCpf = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XXX.XXX.XXX-XX
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
  };
  
  const formatCep = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XXXXX-XXX
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`;
  };
  
  const formatCardNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format in groups of 4
    const parts = [];
    for (let i = 0; i < digits.length; i += 4) {
      parts.push(digits.slice(i, i + 4));
    }
    
    return parts.join(' ');
  };
  
  const formatCardExpiry = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as MM/YY
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
  };
  
  const renderOrderStatusAlert = () => {
    switch (orderStatus) {
      case 'confirmado':
        return (
          <Alert className="bg-green-50 border-green-200 mb-6">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-600">Pagamento Confirmado</AlertTitle>
            <AlertDescription className="text-green-700">
              Seu pagamento foi confirmado e seu pedido está sendo processado.
            </AlertDescription>
          </Alert>
        );
      case 'aguardando':
        return (
          <Alert className="bg-amber-50 border-amber-200 mb-6">
            <Clock className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-600">Aguardando Pagamento</AlertTitle>
            <AlertDescription className="text-amber-700">
              Estamos aguardando a confirmação do seu pagamento para processar seu pedido.
            </AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };
  
  const renderStepIndicator = () => {
    const steps = [
      { label: 'Login', icon: <ShoppingCart size={16} />, active: step >= 0 },
      { label: 'Endereço', icon: <MapPin size={16} />, active: step >= 1 },
      { label: 'Entrega', icon: <Truck size={16} />, active: step >= 2 },
      { label: 'Pagamento', icon: <CreditCard size={16} />, active: step >= 3 },
      { label: 'Conclusão', icon: <Check size={16} />, active: step >= 4 }
    ];
    
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between items-center">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div 
                  className={`flex-1 h-1 mx-2 ${
                    s.active ? 'bg-fishing-600' : 'bg-gray-200'
                  }`}
                ></div>
              )}
              <div className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    s.active 
                      ? 'bg-fishing-600 text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {s.icon}
                </div>
                <span 
                  className={`text-xs mt-1 ${
                    s.active ? 'text-fishing-600 font-medium' : 'text-gray-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  
  const renderLoginStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium">Faça login para continuar</h3>
        <p className="text-gray-500 text-sm mt-1">
          Para finalizar sua compra, é necessário estar logado.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={nextStep} 
          className="bg-fishing-600 hover:bg-fishing-700"
        >
          Continuar como {user?.name || 'Convidado'}
        </Button>
      </div>
    </div>
  );
  
  const renderAddressStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Informações Pessoais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Digite seu nome completo"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="seu@email.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(formatPhone(e.target.value))} 
              placeholder="(00) 00000-0000"
              maxLength={15}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input 
              id="cpf" 
              value={cpf} 
              onChange={(e) => setCpf(formatCpf(e.target.value))} 
              placeholder="000.000.000-00"
              maxLength={14}
              className={errors.cpf ? "border-red-500" : ""}
            />
            {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf}</p>}
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-medium mb-4">Endereço de Entrega</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="cep">CEP</Label>
            <div className="flex gap-2">
              <div className="flex-grow">
                <Input 
                  id="cep" 
                  value={cep} 
                  onChange={(e) => setCep(formatCep(e.target.value))} 
                  placeholder="00000-000"
                  maxLength={9}
                  className={errors.cep ? "border-red-500" : ""}
                />
                {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep}</p>}
              </div>
              <Button 
                onClick={simulateSearchCep} 
                variant="outline" 
                className="shrink-0"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Buscar"
                )}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Endereço</Label>
            <Input 
              id="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              placeholder="Rua, Avenida, etc."
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="number">Número</Label>
            <Input 
              id="number" 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              placeholder="Nº"
              className={errors.number ? "border-red-500" : ""}
            />
            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="complement">Complemento</Label>
            <Input 
              id="complement" 
              value={complement} 
              onChange={(e) => setComplement(e.target.value)} 
              placeholder="Apto, Bloco, etc. (opcional)"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input 
              id="neighborhood" 
              value={neighborhood} 
              onChange={(e) => setNeighborhood(e.target.value)} 
              placeholder="Seu bairro"
              className={errors.neighborhood ? "border-red-500" : ""}
            />
            {errors.neighborhood && <p className="text-red-500 text-xs mt-1">{errors.neighborhood}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">Cidade</Label>
            <Input 
              id="city" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              placeholder="Sua cidade"
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state">Estado</Label>
            <Input 
              id="state" 
              value={state} 
              onChange={(e) => setState(e.target.value)} 
              placeholder="UF"
              className={errors.state ? "border-red-500" : ""}
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          <ChevronLeft className="mr-1 h-4 w-4" />
          Voltar
        </Button>
        <Button onClick={nextStep} className="bg-fishing-600 hover:bg-fishing-700">
          Continuar
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
  
  const renderShippingStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Método de Entrega</h3>
        <RadioGroup 
          value={shippingMethod} 
          onValueChange={setShippingMethod}
          className="space-y-4"
        >
          <div className={`border rounded-lg p-4 ${shippingMethod === 'standard' ? 'border-fishing-600 bg-fishing-50' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <RadioGroupItem value="standard" id="standard" className="mt-1" />
              <div className="ml-3">
                <Label htmlFor="standard" className="font-medium text-base cursor-pointer">Entrega Padrão</Label>
                <p className="text-gray-500 text-sm mt-1">
                  Receba em até 10 dias úteis
                </p>
                <div className="text-sm mt-1">
                  {subtotal > 499.90 ? (
                    <span className="text-green-600 font-medium">Frete grátis</span>
                  ) : (
                    <span>R$ 29,90</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`border rounded-lg p-4 ${shippingMethod === 'express' ? 'border-fishing-600 bg-fishing-50' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <RadioGroupItem value="express" id="express" className="mt-1" />
              <div className="ml-3">
                <Label htmlFor="express" className="font-medium text-base cursor-pointer">Entrega Expressa</Label>
                <p className="text-gray-500 text-sm mt-1">
                  Receba em até 4 dias úteis
                </p>
                <div className="text-sm mt-1">
                  R$ 49,90
                </div>
              </div>
            </div>
          </div>
          
          <div className={`border rounded-lg p-4 ${shippingMethod === 'sameday' ? 'border-fishing-600 bg-fishing-50' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <RadioGroupItem value="sameday" id="sameday" className="mt-1" />
              <div className="ml-3">
                <Label htmlFor="sameday" className="font-medium text-base cursor-pointer">Entrega no Mesmo Dia</Label>
                <p className="text-gray-500 text-sm mt-1">
                  Apenas para algumas regiões (consulte disponibilidade)
                </p>
                <div className="text-sm mt-1">
                  R$ 79,90
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Frete:</span>
            <span className="font-medium">
              {getShippingFee() === 0 ? (
                <span className="text-green-600">Grátis</span>
              ) : (
                formatCurrency(getShippingFee())
              )}
            </span>
          </div>
          
          <div className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>Total:</span>
            <span>{formatCurrency(getTotalWithShipping())}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          <ChevronLeft className="mr-1 h-4 w-4" />
          Voltar
        </Button>
        <Button onClick={nextStep} className="bg-fishing-600 hover:bg-fishing-700">
          Continuar
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
  
  const renderPaymentStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Método de Pagamento</h3>
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={setPaymentMethod}
          className="space-y-4"
        >
          <div className={`border rounded-lg p-4 ${paymentMethod === 'credit' ? 'border-fishing-600 bg-fishing-50' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <RadioGroupItem value="credit" id="credit" className="mt-1" />
              <div className="ml-3 w-full">
                <Label htmlFor="credit" className="font-medium text-base cursor-pointer">Cartão de Crédito</Label>
                <p className="text-gray-500 text-sm mt-1 mb-4">
                  Pague em até 12x
                </p>
                
                {paymentMethod === 'credit' && (
                  <div className="space-y-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Número do Cartão</Label>
                      <Input 
                        id="card-number" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} 
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className={errors.cardNumber ? "border-red-500" : ""}
                      />
                      {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nome no Cartão</Label>
                      <Input 
                        id="card-name" 
                        value={cardName} 
                        onChange={(e) => setCardName(e.target.value.toUpperCase())} 
                        placeholder="Nome como está no cartão"
                        className={errors.cardName ? "border-red-500" : ""}
                      />
                      {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-expiry">Validade</Label>
                        <Input 
                          id="card-expiry" 
                          value={cardExpiry} 
                          onChange={(e) => setCardExpiry(formatCardExpiry(e.target.value))} 
                          placeholder="MM/AA"
                          maxLength={5}
                          className={errors.cardExpiry ? "border-red-500" : ""}
                        />
                        {errors.cardExpiry && <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="card-cvv">CVV</Label>
                        <Input 
                          id="card-cvv" 
                          value={cardCvv} 
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))} 
                          placeholder="123"
                          maxLength={4}
                          className={errors.cardCvv ? "border-red-500" : ""}
                        />
                        {errors.cardCvv && <p className="text-red-500 text-xs mt-1">{errors.cardCvv}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="installments">Parcelamento</Label>
                      <select
                        id="installments"
                        value={installments}
                        onChange={(e) => setInstallments(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="1">1x de {formatCurrency(getTotalWithShipping())}</option>
                        <option value="2">2x de {formatCurrency(getTotalWithShipping() / 2)}</option>
                        <option value="3">3x de {formatCurrency(getTotalWithShipping() / 3)}</option>
                        <option value="4">4x de {formatCurrency(getTotalWithShipping() / 4)}</option>
                        <option value="5">5x de {formatCurrency(getTotalWithShipping() / 5)}</option>
                        <option value="6">6x de {formatCurrency(getTotalWithShipping() / 6)}</option>
                        <option value="12">12x de {formatCurrency(getTotalWithShipping() / 12)}</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={`border rounded-lg p-4 ${paymentMethod === 'pix' ? 'border-fishing-600 bg-fishing-50' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <RadioGroupItem value="pix" id="pix" className="mt-1" />
              <div className="ml-3 w-full">
                <Label htmlFor="pix" className="font-medium text-base cursor-pointer">PIX</Label>
                <p className="text-gray-500 text-sm mt-1 mb-2">
                  Pagamento instantâneo com 5% de desconto
                </p>
                
                {paymentMethod === 'pix' && (
                  <div className="mt-4">
                    <Alert className="bg-blue-50 border-blue-200 mb-4">
                      <Info className="h-4 w-4 text-blue-600" />
                      <AlertTitle className="text-blue-600">Pagamento com PIX</AlertTitle>
                      <AlertDescription className="text-blue-700">
                        Na próxima etapa você receberá um QR Code para fazer o pagamento. O pedido só será confirmado após a confirmação do pagamento.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-sm font-medium">Valor com desconto PIX (5%)</p>
                      <p className="text-xl font-bold text-green-600">
                        {formatCurrency(getTotalWithShipping() * 0.95)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Economize {formatCurrency(getTotalWithShipping() * 0.05)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={`border rounded-lg p-4 ${paymentMethod === 'boleto' ? 'border-fishing-600 bg-fishing-50' : 'border-gray-200'}`}>
            <div className="flex items-start">
              <RadioGroupItem value="boleto" id="boleto" className="mt-1" />
              <div className="ml-3">
                <Label htmlFor="boleto" className="font-medium text-base cursor-pointer">Boleto Bancário</Label>
                <p className="text-gray-500 text-sm mt-1">
                  O pedido será processado após a confirmação do pagamento
                </p>
                <div className="text-sm mt-1">
                  Prazo de compensação: até 3 dias úteis
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Frete:</span>
            <span className="font-medium">
              {getShippingFee() === 0 ? (
                <span className="text-green-600">Grátis</span>
              ) : (
                formatCurrency(getShippingFee())
              )}
            </span>
          </div>
          
          {paymentMethod === 'pix' && (
            <div className="flex justify-between text-green-600">
              <span>Desconto PIX (5%):</span>
              <span className="font-medium">- {formatCurrency(getTotalWithShipping() * 0.05)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>Total:</span>
            <span>
              {formatCurrency(getFinalPrice())}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          <ChevronLeft className="mr-1 h-4 w-4" />
          Voltar
        </Button>
        <Button 
          onClick={nextStep} 
          className="bg-fishing-600 hover:bg-fishing-700"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            <>
              Finalizar Pedido
              <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
  
  const renderConfirmationStep = () => (
    <div className="space-y-6">
      {renderOrderStatusAlert()}
      
      <div className="py-6 text-center">
        <div className="mx-auto h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mt-6">Pedido Recebido!</h3>
        <p className="text-gray-600 mt-2">
          Seu pedido #{orderNumber} foi registrado com sucesso.
        </p>
      </div>
      
      {paymentMethod === 'pix' && !paymentVerified && !paymentTimeout && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wallet className="h-5 w-5 text-amber-600 mr-2" />
              <h4 className="font-medium text-amber-800">Aguardando pagamento PIX</h4>
            </div>
            <div className="bg-amber-100 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-amber-800">
                {formatRemainingTime()}
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-6 inline-block rounded-lg mb-3">
              <img src={pixQrCode} alt="QR Code PIX" className="h-48 w-48" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Escaneie o QR Code acima com o aplicativo do seu banco para pagar
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  toast.success('Chave PIX copiada para o clipboard');
                }}
                className="mb-3"
              >
                Copiar chave PIX
              </Button>
              
              <p className="text-sm text-amber-700 font-medium">
                Você tem {formatRemainingTime()} para realizar o pagamento
              </p>
            </div>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-sm text-gray-600 mb-4">
              Após o pagamento, você receberá um e-mail com a confirmação e detalhes do seu pedido.
            </p>
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-fishing-600" />
              <span className="text-sm">Aguardando confirmação de pagamento...</span>
            </div>
          </div>
        </div>
      )}
      
      {paymentMethod === 'pix' && paymentTimeout && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <h4 className="font-medium text-red-800">Tempo para pagamento expirado</h4>
          </div>
          
          <p className="text-gray-700">
            O tempo para realizar o pagamento via PIX expirou. Você pode tentar novamente ou escolher outro método de pagamento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              variant="outline" 
              onClick={() => {
                setPaymentTimeout(false);
                setRemainingTime(600);
                generatePixQrCode();
              }}
              className="flex-1"
            >
              Gerar novo QR Code
            </Button>
            <Button 
              onClick={() => setStep(3)} 
              className="bg-fishing-600 hover:bg-fishing-700 flex-1"
            >
              Escolher outro método
            </Button>
          </div>
        </div>
      )}
      
      {paymentMethod === 'boleto' && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
            <h4 className="font-medium text-amber-800">Boleto gerado</h4>
          </div>
          
          <p className="text-gray-700">
            Seu boleto foi gerado e enviado para seu e-mail. Você também pode acessá-lo pelo botão abaixo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              variant="outline" 
              onClick={() => {
                toast.success('Boleto aberto em uma nova guia');
              }}
              className="flex-1"
            >
              Visualizar Boleto
            </Button>
            <Button 
              onClick={() => {
                toast.success('Boleto enviado para seu e-mail');
              }} 
              className="bg-fishing-600 hover:bg-fishing-700 flex-1"
            >
              Enviar por E-mail
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 pt-2">
            O prazo para pagamento do boleto é de 3 dias úteis. Após o pagamento, a compensação pode levar até 3 dias úteis.
          </p>
        </div>
      )}
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="text-left mb-4">
          <h4 className="text-lg font-medium">Detalhes do Pedido</h4>
          <p className="text-sm text-gray-500">Pedido #{orderNumber}</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Método de pagamento:</span>
              <span className="font-medium">
                {paymentMethod === 'credit' && 'Cartão de Crédito'}
                {paymentMethod === 'pix' && 'PIX'}
                {paymentMethod === 'boleto' && 'Boleto Bancário'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Status do pagamento:</span>
              <span className={`font-medium ${paymentVerified ? 'text-green-600' : 'text-amber-600'}`}>
                {paymentVerified ? 'Confirmado' : 'Aguardando confirmação'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Método de entrega:</span>
              <span className="font-medium">
                {shippingMethod === 'standard' && 'Entrega Padrão'}
                {shippingMethod === 'express' && 'Entrega Expressa'}
                {shippingMethod === 'sameday' && 'Entrega no Mesmo Dia'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Endereço de entrega:</span>
              <span className="font-medium text-right">
                {address}, {number}{complement ? `, ${complement}` : ''}<br />
                {neighborhood}, {city}/{state}<br />
                CEP: {cep}
              </span>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Frete:</span>
              <span className="font-medium">
                {getShippingFee() === 0 ? 'Grátis' : formatCurrency(getShippingFee())}
              </span>
            </div>
            
            {paymentMethod === 'pix' && (
              <div className="flex justify-between text-green-600">
                <span>Desconto PIX (5%):</span>
                <span className="font-medium">- {formatCurrency(getTotalWithShipping() * 0.05)}</span>
              </div>
            )}
            
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total:</span>
              <span>
                {formatCurrency(getFinalPrice())}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-4 text-center">
        <p className="text-gray-600 mb-4">
          Enviamos um e-mail para {email} com todos os detalhes do seu pedido.
        </p>
        <Button 
          onClick={handleFinishOrder} 
          className="bg-fishing-600 hover:bg-fishing-700"
        >
          Concluir
        </Button>
      </div>
    </div>
  );
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {renderStepIndicator()}
      
      {step === 0 && renderLoginStep()}
      {step === 1 && renderAddressStep()}
      {step === 2 && renderShippingStep()}
      {step === 3 && renderPaymentStep()}
      {step === 4 && renderConfirmationStep()}
    </div>
  );
};

export default CheckoutProcess;
