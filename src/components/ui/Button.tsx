import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'teal' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    gold: 'bg-[#b38d4c] hover:bg-[#c99f58] text-black font-heading font-black uppercase tracking-wider shadow-lg glow-gold active:scale-[0.98]',
    teal: 'bg-[#0f5557] hover:bg-[#167073] text-white font-heading font-bold uppercase tracking-wider shadow-md active:scale-[0.98]',
    outline: 'bg-[#14181a] hover:bg-[#1a2024] text-[#f6f6f4] hover:text-white border border-[#0f5557] hover:border-[#b38d4c]/60 font-semibold',
    ghost: 'bg-transparent hover:bg-neutral-800/60 text-neutral-400 hover:text-white border border-neutral-800 font-medium',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm rounded-xl gap-2',
    lg: 'px-7 py-4 text-sm sm:text-base rounded-xl gap-2.5',
    xl: 'px-9 py-5 text-base sm:text-lg rounded-2xl gap-3',
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      className={`inline-flex items-center justify-center transition-all cursor-pointer whitespace-nowrap shrink-0 ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
