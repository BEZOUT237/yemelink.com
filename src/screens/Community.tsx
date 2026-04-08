import React, { useEffect, useState } from 'react';
import { Layout, Card, Button, Input, FeedItem, PostComposer } from '@/components/common';
import { motion } from 'framer-motion';

export const Community: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: { name: 'João Silva', avatar: undefined },
      content: 'Just launched our new AI automation tool! Excited to share this with the community.',
      media: undefined,
      likes: 24,
      comments: 5,
      liked: false,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: '2',
      author: { name: 'Marie Dubois', avatar: undefined },
      content: 'Looking for collaborators on a web3 project. Who\'s interested?',
      media: undefined,
      likes: 12,
      comments: 3,
      liked: false,
      timestamp: new Date(Date.now() - 7200000).toISOString(),
    },
  ]);

  const handleCreatePost = (content: string, media: any) => {
    const newPost = {
      id: String(posts.length + 1),
      author: { name: 'You', avatar: undefined },
      content,
      media,
      likes: 0,
      comments: 0,
      liked: false,
      timestamp: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(p => 
      p.id === postId 
        ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
        : p
    ));
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-12'
      >
        <h1 className='text-5xl font-bold mb-4'>Community</h1>
        <p className='text-xl text-text-secondary'>
          Connect, share, and grow together with the YEMELINK community.
        </p>
      </motion.div>

      <div className='max-w-2xl mx-auto'>
        {/* Post Composer */}
        <PostComposer
          userName='You'
          onSubmit={handleCreatePost}
        />

        {/* Feed */}
        <div className='space-y-4'>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeedItem
                {...post}
                onLike={() => handleLike(post.id)}
                onComment={() => window.alert('Comment feature coming soon!')}
                onShare={() => window.alert('Share feature coming soon!')}
                onDelete={() => setPosts(posts.filter(p => p.id !== post.id))}
                canDelete={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
