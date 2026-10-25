import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, Search } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Section id="faq" variant="alt" maxWidth="4xl">
      {/* Section Header */}
      <SectionHeading
        kicker="RESPOSTAS DIRETAS"
        kickerSecondary="TIRA-DÚVIDAS"
        title="❓ PERGUNTAS FREQUENTES"
        subtitle="Confira as principais dúvidas sobre o aplicativo, metodologia de treinamento, requisitos físicos e garantia."
      >
        {/* Quick search */}
        <div className="pt-2 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar dúvida..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-[#121618] border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0f5557] transition-colors"
          />
        </div>
      </SectionHeading>

      {/* FAQ Accordion List */}
      <div className="mt-12 space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8 text-neutral-400 text-sm">
            Nenhuma pergunta encontrada com o termo pesquisado.
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#121618] border border-[#0f5557]/40 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#161c1e] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0f5557]/40 border border-[#0f5557] flex items-center justify-center shrink-0 text-[#b38d4c] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0f5557]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-[#0d1012]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </Section>
  );
};
