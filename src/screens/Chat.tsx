import React, { useState } from 'react';
import { Layout, Card, Button, Input } from '@/components/common';
import { motion } from 'framer-motion';
import { Send, Copy, Loader } from 'lucide-react';

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([
    { role: 'assistant', content: 'Hi! I\'m the YEMELINK AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestedPrompts = [
    'What services do you offer?',
    'How can I request a quote?',
    'Tell me about your portfolio',
    'What\'s your pricing?',
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const assistantMessage = {
      role: 'assistant',
      content: 'Thanks for your message! This is a demo response. In production, this would be powered by OpenAI.',
    };
    setMessages(prev => [...prev, assistantMessage]);
    setLoading(false);
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-8'
      >
        <h1 className='text-5xl font-bold mb-4'>AI Assistant</h1>
        <p className='text-xl text-text-secondary'>
          Ask me anything about YEMELINK and our services.
        </p>
      </motion.div>

      <div className='max-w-2xl mx-auto h-[600px] flex flex-col'>
        {/* Chat Messages */}
        <Card className='flex-1 overflow-y-auto mb-4 p-6'>
          <div className='space-y-4'>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-surface-light text-text-secondary'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {loading && (
              <div className='flex justify-start'>
                <div className='bg-surface-light text-text-secondary px-4 py-2 rounded-lg flex items-center gap-2'>
                  <Loader className='w-4 h-4 animate-spin' />
                  Thinking...
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <div className='mb-4'>
            <p className='text-sm text-text-muted mb-3'>Suggested prompts:</p>
            <div className='grid grid-cols-2 gap-2'>
              {suggestedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant='outline'
                  size='sm'
                  onClick={() => handleSuggestedPrompt(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <Card className='p-4'>
          <div className='flex gap-3'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder='Ask me something...'
              className='flex-1 bg-background border border-border rounded-lg px-3 py-2 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary'
            />
            <Button
              variant='primary'
              size='sm'
              onClick={handleSendMessage}
              disabled={loading || !input.trim()}
            >
              <Send className='w-4 h-4' />
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};
