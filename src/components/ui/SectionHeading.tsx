import React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  kickerSecondary?: string;
  title: string;
  highlightWords?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  kickerSecondary,
  title,
  highlightWords,
  subtitle,
  align = 'center',
  className = '',
  children,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  // Highlight words in gold if specified
  const renderTitle = () => {
    if (!highlightWords) return title;
    const parts = title.split(highlightWords);
    if (parts.length === 1) return title;
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38d4c] via-[#e2be7a] to-[#b38d4c]">
          {highlightWords}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`max-w-3xl space-y-4 ${alignClass} ${className}`}>
      {/* Kicker */}
      {kicker && (
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b38d4c] font-semibold">
          <span>{kicker}</span>
          {kickerSecondary && (
            <>
              <span className="text-neutral-600">/</span>
              <span>{kickerSecondary}</span>
            </>
          )}
        </div>
      )}

      {/* Title */}
      <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f6f6f4] leading-[1.1] text-balance">
        {renderTitle()}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};
