import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Avatar } from './Avatar';
import { Heart, MessageCircle, Share2, Trash2 } from 'lucide-react';
import { formatRelativeTime } from '@/utils';

interface FeedItemProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
  likes: number;
  comments: number;
  liked: boolean;
  timestamp: string;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
  canDelete?: boolean;
}

export const FeedItem: React.FC<FeedItemProps> = ({
  author,
  content,
  media,
  likes,
  comments,
  liked,
  timestamp,
  onLike,
  onComment,
  onShare,
  onDelete,
  canDelete = false,
}) => {
  return (
    <Card className="mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar name={author.name} src={author.avatar} size="md" />
          <div>
            <h4 className="font-semibold text-text-primary">{author.name}</h4>
            <p className="text-xs text-text-muted">{formatRelativeTime(timestamp)}</p>
          </div>
        </div>
        {canDelete && onDelete && (
          <button
            onClick={onDelete}
            className="p-1 hover:bg-surface-light rounded-md transition-colors text-text-muted hover:text-error"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Content */}
      <p className="text-text-secondary mb-4">{content}</p>

      {/* Media */}
      {media && (
        <div className="mb-4 rounded-lg overflow-hidden">
          {media.type === 'image' && (
            <img src={media.url} alt="Post" className="w-full h-auto max-h-96 object-cover" />
          )}
          {media.type === 'video' && (
            <video src={media.url} controls className="w-full h-auto max-h-96" />
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-text-muted border-t border-border pt-3">
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-3 border-t border-border pt-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLike}
          className={`flex items-center gap-2 flex-1 py-2 rounded-md transition-colors ${
            liked 
              ? 'text-error bg-error/10' 
              : 'text-text-muted hover:text-error hover:bg-error/5'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          <span className="text-xs font-medium">Like</span>
        </motion.button>
        
        <button
          onClick={onComment}
          className="flex items-center gap-2 flex-1 py-2 rounded-md text-text-muted hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-medium">Comment</span>
        </button>
        
        <button
          onClick={onShare}
          className="flex items-center gap-2 flex-1 py-2 rounded-md text-text-muted hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-xs font-medium">Share</span>
        </button>
      </div>
    </Card>
  );
};
