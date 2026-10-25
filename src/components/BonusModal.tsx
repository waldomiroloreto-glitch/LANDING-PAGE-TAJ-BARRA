import React, { useState } from 'react';
import { X, Check, Gift, FileText, ArrowRight } from 'lucide-react';
import { BonusItem } from '../types';

interface BonusModalProps {
  bonus: BonusItem | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const BonusModal: React.FC<BonusModalProps> = ({ bonus, onClose, onOpenCheckout }) => {
  if (!bonus) return null;

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#121618] border border-[#0f5557] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Fechar prévia do bônus"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#b38d4c] font-bold uppercase tracking-wider">
              {bonus.number}
            </span>
            <span className="text-neutral-600">/</span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase">
              {bonus.tag}
            </span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            {bonus.title}
          </h3>

          <p className="text-sm text-[#b38d4c] italic font-medium">
            "{bonus.subtitle}"
          </p>
        </div>

        {/* Description */}
        <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {bonus.description}
        </div>

        {bonus.id === 'bonus-core' && (
          <div className="p-3.5 rounded-xl bg-[#0f5557]/30 border border-[#b38d4c]/60 text-xs text-neutral-200 flex items-start gap-3">
            <span className="text-[#b38d4c] font-bold font-mono shrink-0 uppercase tracking-wider text-[11px] mt-0.5">
              NOTA TÉCNICA:
            </span>
            <p className="leading-relaxed text-neutral-300">
              Módulo Bônus Estratégico liberado <strong className="text-white">sem custo a mais</strong> no aplicativo. Desenvolvido devido à <strong className="text-[#b38d4c]">atividade sinergista da musculatura corporal</strong> (abdômen, oblíquos e core profundo) para travar o corpo em bloco, anular o balanço das pernas e aumentar a eficácia do treinamento e sua aprovação no TAF.
            </p>
          </div>
        )}

        {/* Interactive Feature Checklist */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase text-neutral-400 font-bold">
            Itens de Verificação Incluídos no Material:
          </div>

          <div className="space-y-2">
            {bonus.features.map((item, idx) => {
              const isChecked = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-[#0f5557]/20 border-[#0f5557] text-white'
                      : 'bg-[#14191c] border-neutral-800 text-neutral-400'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                      isChecked
                        ? 'bg-[#0f5557] border-[#b38d4c] text-[#b38d4c]'
                        : 'border-neutral-700 bg-neutral-900'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-xs sm:text-sm leading-snug">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-transparent border border-neutral-800 cursor-pointer"
          >
            Voltar à Página
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-[#b38d4c] hover:bg-[#c99f58] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md glow-gold"
          >
            <span>Quero este bônus com o Protocolo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
