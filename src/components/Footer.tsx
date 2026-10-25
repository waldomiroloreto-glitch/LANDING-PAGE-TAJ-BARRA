import React from 'react';
import { Dumbbell, Shield, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070809] text-neutral-400 text-xs border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0f5557]/40 border border-[#b38d4c]/40 flex items-center justify-center text-[#b38d4c]">
              <Dumbbell className="w-5 h-5 text-[#b38d4c]" />
            </div>
            <div>
              <span className="font-heading font-black text-xl tracking-wider text-white uppercase block leading-none">
                PROTOCOLO <span className="text-[#b38d4c]">TAJ</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                TAF BARRA FIXA · TREINAMENTO PELO APP
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a href="#trilhas" className="hover:text-white transition-colors">Trilhas</a>
            <a href="#app-preview" className="hover:text-white transition-colors">Aplicativo</a>
            <a href="#bonus" className="hover:text-white transition-colors">3 Bônus</a>
            <a href="#precos" className="hover:text-white transition-colors">Investimento</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="space-y-3 max-w-4xl text-neutral-500 leading-relaxed text-[11px]">
          <p>
            <strong>Aviso de Responsabilidade e Saúde:</strong> O Protocolo TAJ — TAF Barra Fixa é um programa educativo e de treinamento físico voltado à organização e progressão na barra fixa. O acompanhamento médico prévio é indispensável antes do início de qualquer rotina de condicionamento intenso. Os resultados variam individualmente conforme dedicação, nível inicial, regularidade e capacidade biológica de recuperação.
          </p>
          <p>
            <strong>Independência Institucional:</strong> Este produto não possui qualquer afiliação, representação ou vínculo oficial com bancas examinadoras (Cebraspe, FGV, Vunesp, IBFC, etc.) ou órgãos de segurança pública.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-900 text-[11px] text-neutral-600">
          <div>
            © {new Date().getFullYear()} Protocolo TAJ — TAF Barra Fixa. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade & Termos</span>
            <span>·</span>
            <span>Acesso Seguro</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
