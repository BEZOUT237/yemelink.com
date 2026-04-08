import React from 'react';
import { initials } from '@/utils';

interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  online?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  online = false,
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const initText = name ? initials(name) : '?';

  return (
    <div className="relative inline-block">
      <div className={`
        ${sizeStyles[size]} rounded-full bg-gradient-to-br from-primary to-accent
        flex items-center justify-center font-bold text-white overflow-hidden
        border-2 border-surface
      `}>
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          initText
        )}
      </div>
      {online && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-surface" />
      )}
    </div>
  );
};
