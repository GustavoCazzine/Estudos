
import React from 'react';
import { Shield, PackageCheck } from 'lucide-react';

interface SecurityNotificationProps {
  showExtended?: boolean;
}

const SecurityNotification: React.FC<SecurityNotificationProps> = ({ showExtended = false }) => {
  return (
    <div className="w-full bg-gradient-to-r from-fishing-50 via-fishing-50/80 to-fishing-50 border-y border-fishing-100 py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <PackageCheck className="h-4 w-4 text-fishing-700 mr-1.5" />
          <span className="text-xs md:text-sm text-fishing-800">
            <span className="font-medium">Qualidade Garantida:</span> Produtos selecionados pelos melhores pescadores
          </span>
          
          {showExtended && (
            <>
              <span className="mx-3 text-fishing-300 hidden md:inline">|</span>
              <Shield className="h-4 w-4 text-fishing-700 mr-1.5 hidden md:inline" />
              <span className="text-xs md:text-sm text-fishing-800 hidden md:inline">
                <span className="font-medium">Compra Garantida:</span> Satisfação ou reembolso em até 30 dias
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityNotification;
