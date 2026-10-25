import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    'PREPARAÇÃO MASCULINA & FEMININA',
    'SEM IMPROVISO NA BARRA',
    'DO ZERO À META DO EDITAL',
    'ACOMPANHAMENTO PELO APLICATIVO',
    'PROGRESSÃO PARA INICIANTES',
    'PADRÃO OFICIAL DE BANCA',
    '30 DIAS DE PROTOCOLO ESTRUTURADO',
  ];

  return (
    <div className="w-full bg-[#0f5557] py-3.5 overflow-hidden border-y border-[#b38d4c]/30 select-none shadow-md">
      <div className="flex w-max animate-marquee space-x-8 text-xs sm:text-sm font-heading font-black tracking-widest text-[#f6f6f4] uppercase">
        {/* Repeating twice for smooth endless feel */}
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-3 shrink-0">
            <span className="text-[#f6f6f4]">{text}</span>
            <ArrowUpRight className="w-4 h-4 text-[#b38d4c] stroke-[2.5]" />
          </div>
        ))}
      </div>
    </div>
  );
};
