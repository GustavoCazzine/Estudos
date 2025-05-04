
import React from 'react';
import { Shield, Lock, CreditCard, Truck, BadgeCheck, Award } from 'lucide-react';

interface SecurityBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-5 bg-white/8 backdrop-blur-md rounded-xl border border-white/10 hover:border-fishing-400/30 transition-all transform hover:-translate-y-1 duration-300">
      <div className="p-3 rounded-full bg-fishing-500/15 text-fishing-400">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-white text-lg mb-1">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

const SecurityBadges = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SecurityBadge 
            icon={<Lock className="h-5 w-5" />}
            title="Pagamento Seguro"
            description="Transações protegidas com os mais altos padrões de segurança"
          />
          <SecurityBadge 
            icon={<Shield className="h-5 w-5" />}
            title="Proteção Garantida"
            description="Monitoramento 24h contra fraudes"
          />
          <SecurityBadge 
            icon={<CreditCard className="h-5 w-5" />}
            title="Múltiplos Pagamentos"
            description="Cartões, Pix, Boleto e parcelamento"
          />
          <SecurityBadge 
            icon={<Truck className="h-5 w-5" />}
            title="Frete Transparente"
            description="Cálculo em tempo real e rastreamento"
          />
          <SecurityBadge 
            icon={<BadgeCheck className="h-5 w-5" />}
            title="Garantia de Qualidade"
            description="30 dias de garantia em todos produtos"
          />
          <SecurityBadge 
            icon={<Award className="h-5 w-5" />}
            title="Produtos Premium"
            description="Equipamentos de pesca de alta qualidade"
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;
