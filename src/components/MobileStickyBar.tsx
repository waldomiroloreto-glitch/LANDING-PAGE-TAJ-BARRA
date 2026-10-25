import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TOKENS } from '../theme/tokens';
import { Button } from './ui/Button';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0e1214]/95 backdrop-blur-md border-t border-[#0f5557]/60 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-mono uppercase text-[#b38d4c] font-bold">
          {TOKENS.brand.name} NO APP
        </span>
        <span className="text-xs font-bold text-white">
          {TOKENS.pricing.installments} <span className="text-neutral-400 font-normal">ou {TOKENS.pricing.cashPrice}</span>
        </span>
      </div>

      <Button
        variant="gold"
        size="sm"
        icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
        onClick={onOpenCheckout}
      >
        {TOKENS.cta.stickyMobile}
      </Button>
    </div>
  );
};
