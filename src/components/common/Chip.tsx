import React from 'react';
import { motion } from 'framer-motion';

interface ChipProps {
  label: string;
  onClose?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export const Chip: React.FC<ChipProps> = ({
  label,
  onClose,
  variant = 'primary',
}) => {
  const variantStyles = {
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-surface-light text-text-secondary border-border',
    success: 'bg-success/20 text-success border-success/30',
    warning: 'bg-warning/20 text-warning border-warning/30',
    error: 'bg-error/20 text-error border-error/30',
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-full
        text-sm font-medium border ${variantStyles[variant]}
      `}
    >
      {label}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
      )}
    </motion.div>
  );
};
