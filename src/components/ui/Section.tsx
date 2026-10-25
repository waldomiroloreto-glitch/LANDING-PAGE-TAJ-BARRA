import React from 'react';
import { TOKENS } from '../../theme/tokens';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'default' | 'alt';
  glow?: 'none' | 'teal' | 'gold' | 'both';
  borderBottom?: boolean;
  maxWidth?: '7xl' | '5xl' | '4xl' | 'full';
  compact?: boolean;
  animateOnScroll?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'default',
  glow = 'none',
  borderBottom = true,
  maxWidth = '7xl',
  compact = false,
  animateOnScroll = true,
  className = '',
  children,
  ...props
}) => {
  const bgClass = variant === 'alt' ? 'bg-[#0e1214]' : 'bg-[#0b0d0e]';
  const borderClass = borderBottom ? 'border-b border-[#0f5557]/30' : '';
  const paddingClass = compact ? TOKENS.layout.compactPadding : TOKENS.layout.sectionPadding;
  const revealClass = animateOnScroll ? 'reveal-on-scroll' : '';

  const maxWidthClass =
    maxWidth === '7xl'
      ? 'max-w-7xl'
      : maxWidth === '5xl'
      ? 'max-w-5xl'
      : maxWidth === '4xl'
      ? 'max-w-4xl'
      : 'w-full';

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bgClass} ${borderClass} ${paddingClass} ${revealClass} ${className}`}
      {...props}
    >
      {/* Glow effects */}
      {(glow === 'teal' || glow === 'both') && (
        <div
          className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#0f5557]/15 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />
      )}
      {(glow === 'gold' || glow === 'both') && (
        <div
          className="absolute bottom-0 right-10 w-80 h-80 bg-[#b38d4c]/10 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className={`relative mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass}`}>
        {children}
      </div>
    </section>
  );
};
