import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glassmorphism = false,
  onClick,
}) => {
  const baseStyles = 'rounded-xl p-6 border border-border transition-all duration-300';
  const glassStyles = glassmorphism 
    ? 'bg-surface/50 backdrop-blur-xl border-border/50' 
    : 'bg-surface border-border';
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 cursor-pointer' : '';

  return (
    <motion.div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      whileHover={hover ? { translateY: -6 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
