import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'subtle';
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const bgStyles = {
    default: 'bg-[#121618] border border-[#0f5557]/50',
    elevated: 'bg-[#161c1e] border border-[#0f5557]/60 shadow-2xl',
    subtle: 'bg-[#0b0d0e] border border-neutral-800/80',
  };

  const hoverStyle = hoverEffect
    ? 'hover:border-[#b38d4c]/70 transition-all duration-200'
    : '';

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={`rounded-2xl shadow-xl ${bgStyles[variant]} ${hoverStyle} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
