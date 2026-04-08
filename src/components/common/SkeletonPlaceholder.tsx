import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonPlaceholderProps {
  type?: 'card' | 'post' | 'comment' | 'article' | 'avatar';
  count?: number;
}

const SkeletonCard = () => (
  <div className="rounded-lg bg-surface p-4 mb-4">
    <div className="h-4 bg-surface-light rounded w-3/4 mb-4 animate-pulse" />
    <div className="space-y-3">
      <div className="h-3 bg-surface-light rounded w-full animate-pulse" />
      <div className="h-3 bg-surface-light rounded w-5/6 animate-pulse" />
    </div>
  </div>
);

const SkeletonPost = () => (
  <div className="rounded-lg bg-surface p-4 mb-4">
    <div className="flex gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-surface-light animate-pulse" />
      <div className="flex-1">
        <div className="h-4 bg-surface-light rounded w-1/3 mb-2 animate-pulse" />
        <div className="h-3 bg-surface-light rounded w-1/4 animate-pulse" />
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-3 bg-surface-light rounded w-full animate-pulse" />
      <div className="h-3 bg-surface-light rounded w-5/6 animate-pulse" />
    </div>
    <div className="w-full h-40 bg-surface-light rounded mt-4 animate-pulse" />
  </div>
);

export const SkeletonPlaceholder: React.FC<SkeletonPlaceholderProps> = ({
  type = 'card',
  count = 1,
}) => {
  const variants = {
    card: SkeletonCard,
    post: SkeletonPost,
    comment: SkeletonCard,
    article: SkeletonCard,
    avatar: () => <div className="w-10 h-10 rounded-full bg-surface-light animate-pulse" />,
  };

  const Component = variants[type] || SkeletonCard;

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
};
