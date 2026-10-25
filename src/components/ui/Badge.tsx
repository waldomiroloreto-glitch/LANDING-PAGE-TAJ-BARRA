import React from 'react';

export interface BadgeProps {
  variant?: 'gold' | 'teal' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  children,
  className = '',
}) => {
  const styles = {
    gold: 'bg-[#b38d4c]/10 text-[#b38d4c] border border-[#b38d4c]/30',
    teal: 'bg-[#0f5557]/40 text-neutral-300 border border-[#0f5557]',
    neutral: 'bg-[#0b0d0e] text-neutral-400 border border-neutral-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
