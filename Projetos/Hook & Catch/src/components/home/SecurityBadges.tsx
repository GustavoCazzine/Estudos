
import React from 'react';
import { Shield, CreditCard, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SecurityBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-fishing-400/30 transition-all transform hover:-translate-y-1 hover:shadow-lg">
      <div className="p-3 rounded-full bg-fishing-500/10 text-fishing-400 mb-4">
        {icon}
      </div>
      <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      {link && linkText && (
        <Link to={link} className="text-fishing-600 text-sm font-medium hover:underline mt-auto">
          {linkText}
        </Link>
      )}
    </div>
  );
};

const SecurityBadges = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-fishing-600 font-medium">Por que escolher a Hook & Catch?</span>
          <h2 className="text-3xl font-bold mt-3 mb-6">Confiança e Segurança</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos a melhor experiência para nossos clientes, com segurança e confiabilidade em todas as etapas
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SecurityBadge 
            icon={<Shield className="h-6 w-6" />}
            title="Compra Garantida"
            description="30 dias para troca ou devolução sem complicações. Sua satisfação é nossa prioridade."
            link="/refund-policy"
            linkText="Ver política completa"
          />
          <SecurityBadge 
            icon={<Award className="h-6 w-6" />}
            title="Produtos Garantidos"
            description="Todos os produtos são originais com garantia do fabricante e nossa garantia adicional."
            link="/warranty"
            linkText="Saiba mais"
          />
          <SecurityBadge 
            icon={<CreditCard className="h-6 w-6" />}
            title="Pagamento Seguro"
            description="Múltiplas opções de pagamento com processamento seguro e proteção contra fraudes."
            link="/payment-options"
            linkText="Ver opções"
          />
          <SecurityBadge 
            icon={<Truck className="h-6 w-6" />}
            title="Entrega Confiável"
            description="Envio rápido para todo o Brasil, com embalagem reforçada e rastreamento em tempo real."
            link="/shipping"
            linkText="Calcular frete"
          />
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;
