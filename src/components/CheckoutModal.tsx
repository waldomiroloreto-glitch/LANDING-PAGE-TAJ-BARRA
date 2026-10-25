import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, Smartphone, CreditCard, QrCode, ArrowRight } from 'lucide-react';
import { TrackType } from '../types';
import { TOKENS } from '../theme/tokens';
import { Button } from './ui/Button';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack?: TrackType;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedTrack = 'masculina',
}) => {
  const [track, setTrack] = useState<TrackType>(selectedTrack);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [concurso, setConcurso] = useState('Polícia Federal');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#121618] border border-[#0f5557] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#b38d4c] font-bold uppercase tracking-wider">
                ACESSO AO APP · LIBERAÇÃO IMEDIATA
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {TOKENS.brand.name} — {TOKENS.brand.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Preencha seus dados para receber o link de acesso ao aplicativo e sua trilha de treino.
              </p>
            </div>

            {/* Track Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-300 font-semibold block">
                Escolha a sua Trilha no APP:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTrack('masculina')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    track === 'masculina'
                      ? 'bg-[#0f5557] border-[#b38d4c] text-white shadow'
                      : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-bold uppercase">Trilha Masculina</div>
                  <div className="text-[11px] opacity-80">Repetições & Força</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTrack('feminina')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    track === 'feminina'
                      ? 'bg-[#0f5557] border-[#b38d4c] text-white shadow'
                      : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-bold uppercase">Trilha Feminina</div>
                  <div className="text-[11px] opacity-80">Sustentação Isométrica</div>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">Seu Nome Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  className="w-full px-4 py-2.5 text-sm bg-[#0b0d0e] border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0f5557]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">Seu Melhor E-mail (para login no APP)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@exemplo.com"
                  className="w-full px-4 py-2.5 text-sm bg-[#0b0d0e] border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0f5557]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">Concurso / Órgão Alvo</label>
                <select
                  value={concurso}
                  onChange={(e) => setConcurso(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#0b0d0e] border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-[#0f5557]"
                >
                  <option value="Polícia Federal (PF)">Polícia Federal (PF)</option>
                  <option value="Polícia Rodoviária Federal (PRF)">Polícia Rodoviária Federal (PRF)</option>
                  <option value="Polícia Militar (PM)">Polícia Militar (PM)</option>
                  <option value="Polícia Civil (PC)">Polícia Civil (PC)</option>
                  <option value="Corpo de Bombeiros Militar (CBM)">Corpo de Bombeiros Militar (CBM)</option>
                  <option value="Guarda Municipal (GCM)">Guarda Civil Municipal (GCM)</option>
                  <option value="Outro Concurso / TAF">Outro Concurso com TAF Barra</option>
                </select>
              </div>

              {/* Payment selector */}
              <div>
                <label className="text-xs font-mono uppercase text-neutral-300 font-semibold block mb-2">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-[#0f5557]/40 border-[#b38d4c] text-white'
                        : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#b38d4c]" />
                    <span className="text-xs font-bold">PIX (Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'cartao'
                        ? 'bg-[#0f5557]/40 border-[#b38d4c] text-white'
                        : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#b38d4c]" />
                    <span className="text-xs font-bold">Cartão (até 12x)</span>
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="p-3.5 rounded-xl bg-[#0b0d0e] border border-neutral-800 text-xs space-y-1.5">
                <div className="flex justify-between text-neutral-300">
                  <span>{TOKENS.brand.name} ({TOKENS.brand.durationDays} Dias) + APP:</span>
                  <span className="font-mono text-white">{TOKENS.pricing.cashPrice}</span>
                </div>
                <div className="flex justify-between text-[#b38d4c]">
                  <span>4 Bônus Estratégicos (incluindo Abdominal & Core):</span>
                  <span className="font-mono uppercase font-bold">Inclusos (R$ 0)</span>
                </div>
                <div className="flex justify-between text-white font-bold pt-1 border-t border-neutral-800">
                  <span>Total:</span>
                  <span className="font-mono text-sm text-[#b38d4c]">{TOKENS.pricing.installments} ou {TOKENS.pricing.cashPrice}</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                variant="gold"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                type="submit"
                icon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
              >
                {isSubmitting ? 'PROCESSANDO ACESSO...' : 'CONFIRMAR E LIBERAR ACESSO AO APP'}
              </Button>
            </form>

            <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#0f5557]" />
              <span>Garantia de {TOKENS.pricing.guaranteeDays} Dias · Dados Protegidos</span>
            </div>

          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#0f5557]/40 border-2 border-[#b38d4c] flex items-center justify-center mx-auto text-[#b38d4c]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-[#b38d4c] uppercase font-bold">
                ACESSO RESERVADO COM SUCESSO!
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
                BEM-VINDO AO PROTOCOLO TAJ
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
                Parabéns, <strong>{name}</strong>! As orientações de download do aplicativo e sua senha temporária foram enviadas para <strong>{email}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="text-neutral-400 uppercase font-mono text-[10px]">Configuração do Aluno:</div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Trilha Selecionada:</span>
                <span className="text-white font-bold uppercase">
                  {track === 'masculina' ? 'Trilha 1 — TAF Barra Fixa Masculina' : 'Trilha 2 — Barra Feminina para TAF'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Meta / Concurso:</span>
                <span className="text-white font-bold">{concurso}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Bônus Desbloqueados:</span>
                <span className="text-[#b38d4c] font-bold">3 Checklists & Diário</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#b38d4c] hover:bg-[#c99f58] transition-colors cursor-pointer"
            >
              FECHAR E ACESSAR APLICATIVO
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
