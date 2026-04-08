import React from 'react';
import { Layout, Card } from '@/components/common';
import { motion } from 'framer-motion';

export const Learn: React.FC = () => {
  const articles = [
    {
      id: '1',
      title: 'Getting Started with Web Development in 2024',
      author: 'YEMELINK Team',
      date: '2024-01-15',
      category: 'Development',
      readTime: 8,
      excerpt: 'Learn the fundamentals of modern web development and build your first application.',
    },
    {
      id: '2',
      title: 'AI Tools Every Entrepreneur Should Know',
      author: 'Tech Expert',
      date: '2024-01-10',
      category: 'AI & Automation',
      readTime: 12,
      excerpt: 'Explore the latest AI tools that can automate your business processes and boost productivity.',
    },
    {
      id: '3',
      title: 'Social Media Marketing Strategy for Startups',
      author: 'Marketing Lead',
      date: '2024-01-05',
      category: 'Marketing',
      readTime: 10,
      excerpt: 'Build an effective social media presence and grow your audience organically.',
    },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-12'
      >
        <h1 className='text-5xl font-bold mb-4'>Learn & Grow</h1>
        <p className='text-xl text-text-secondary'>
          Expand your skills with our collection of articles, tutorials, and resources.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-2 gap-6'>
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover>
              <div className='mb-4'>
                <span className='inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium'>
                  {article.category}
                </span>
              </div>
              <h3 className='text-xl font-bold text-text-primary mb-3'>
                {article.title}
              </h3>
              <p className='text-text-secondary mb-4 text-sm line-clamp-2'>
                {article.excerpt}
              </p>
              <div className='flex items-center justify-between text-xs text-text-muted'>
                <span>{article.author}</span>
                <span>{article.readTime} min read</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};
