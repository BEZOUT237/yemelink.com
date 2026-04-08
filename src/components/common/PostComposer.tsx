import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Avatar } from './Avatar';
import { ImagePlus, Video, Link } from 'lucide-react';

interface PostComposerProps {
  userAvatar?: string;
  userName?: string;
  onSubmit?: (content: string, media?: any) => void;
  isLoading?: boolean;
}

export const PostComposer: React.FC<PostComposerProps> = ({
  userAvatar,
  userName = 'You',
  onSubmit,
  isLoading = false,
}) => {
  const [content, setContent] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<File | null>(null);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit?.(content, selectedMedia);
      setContent('');
      setSelectedMedia(null);
    }
  };

  return (
    <Card glassmorphism className="mb-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar name={userName} src={userAvatar} size="md" />
        <div className="flex-1">
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={1000}
            className="
              w-full bg-surface rounded-lg px-4 py-3 text-text-primary
              placeholder-text-muted resize-none border border-border
              focus:outline-none focus:ring-2 focus:ring-primary
              transition-all duration-200
            "
            rows={4}
          />
        </div>
      </div>

      {/* Media Preview */}
      {selectedMedia && (
        <div className="mb-4 relative">
          <img 
            src={URL.createObjectURL(selectedMedia)} 
            alt="Preview"
            className="w-full h-40 object-cover rounded-lg"
          />
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-2 right-2 bg-surface rounded-full p-1 text-text-muted hover:text-text-primary"
          >
            ✕
          </button>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <label className="p-2 hover:bg-surface rounded-lg cursor-pointer transition-colors text-text-muted hover:text-primary">
            <ImagePlus className="w-5 h-5" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedMedia(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
          <button className="p-2 hover:bg-surface rounded-lg transition-colors text-text-muted hover:text-primary">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-surface rounded-lg transition-colors text-text-muted hover:text-primary">
            <Link className="w-5 h-5" />
          </button>
        </div>
        
        <Button 
          variant="primary" 
          size="sm"
          disabled={!content.trim() || isLoading}
          loading={isLoading}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </div>

      {/* Character count */}
      <p className="text-xs text-text-muted mt-2">{content.length}/1000</p>
    </Card>
  );
};
