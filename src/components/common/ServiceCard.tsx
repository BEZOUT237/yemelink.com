import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  pricing?: string;
  onAction?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features = [],
  pricing,
  onAction,
}) => {
  return (
    <Card hover glassmorphism>
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className="p-3 rounded-lg bg-primary/20 text-primary text-2xl">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          {pricing && (
            <p className="text-sm text-text-muted mt-1">{pricing}</p>
          )}
        </div>
      </div>
      
      <p className="text-text-secondary text-sm mb-4">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {onAction && (
        <Button 
          variant="primary" 
          size="sm" 
          fullWidth 
          onClick={onAction}
        >
          Learn More
        </Button>
      )}
    </Card>
  );
};
