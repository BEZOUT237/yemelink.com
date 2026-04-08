import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  client?: string;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags = [],
  client,
  onClick,
}) => {
  return (
    <Card hover onClick={onClick}>
      {image && (
        <div className="w-full h-40 bg-surface-light rounded-lg overflow-hidden mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      
      {client && (
        <p className="text-sm text-text-muted mb-2">Client: {client}</p>
      )}
      
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} size="sm" variant="info">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
};
