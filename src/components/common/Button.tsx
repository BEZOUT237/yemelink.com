import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  className = '',
  disabled,
  children,
  ...props
}, ref) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark disabled:opacity-50 focus:ring-primary',
    secondary: 'bg-surface text-text-primary hover:bg-surface-light disabled:opacity-50 focus:ring-surface-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 focus:ring-primary',
    ghost: 'text-primary hover:bg-surface disabled:opacity-50 focus:ring-primary',
    danger: 'bg-error text-white hover:bg-red-600 disabled:opacity-50 focus:ring-error',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm h-9',
    md: 'px-4 py-2 text-base h-11',
    lg: 'px-6 py-3 text-lg h-12',
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
