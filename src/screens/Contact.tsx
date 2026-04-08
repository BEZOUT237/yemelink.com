import React, { useState } from 'react';
import { Layout, Button, Card, Input, Modal } from '@/components/common';
import { BRAND } from '@/constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-12'
      >
        <h1 className='text-5xl font-bold mb-4'>Contact Us</h1>
        <p className='text-xl text-text-secondary'>
          Get in touch with our team. We're here to help!
        </p>
      </motion.div>

      <div className='grid md:grid-cols-3 gap-8 mb-12'>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className='h-full'>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <Mail className='w-6 h-6 text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-text-primary mb-1'>Email</h3>
                  <a href={`mailto:${BRAND.contact.email}`} className='text-text-secondary hover:text-primary transition-colors'>
                    {BRAND.contact.email}
                  </a>
                </div>
              </div>

              <div className='flex gap-4'>
                <Phone className='w-6 h-6 text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-text-primary mb-1'>WhatsApp</h3>
                  <a href={`https://wa.me/${BRAND.contact.whatsapp.replace('+', '')}`} target='_blank' rel='noopener noreferrer' className='text-text-secondary hover:text-primary transition-colors'>
                    {BRAND.contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className='flex gap-4'>
                <MapPin className='w-6 h-6 text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-text-primary mb-1'>Connect</h3>
                  <a href={BRAND.social.linkedin} target='_blank' rel='noopener noreferrer' className='text-text-secondary hover:text-primary transition-colors text-sm'>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='md:col-span-2'
        >
          <Card>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <Input
                label='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                required
                fullWidth
              />

              <Input
                label='Email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='your@email.com'
                required
                fullWidth
              />

              <Input
                label='Subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='What is this about?'
                required
                fullWidth
              />

              <div>
                <label className='block text-sm font-medium text-text-secondary mb-2'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell us more...'
                  rows={6}
                  required
                  className='w-full px-4 py-3 rounded-md border border-border bg-background text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200'
                />
              </div>

              <Button
                variant='primary'
                size='lg'
                fullWidth
                type='submit'
                loading={isSubmitting}
              >
                <Send className='w-5 h-5' />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title='Message Sent!'
      >
        <div className='text-center py-6'>
          <p className='text-text-secondary mb-4'>
            Thank you for reaching out! We'll get back to you soon.
          </p>
          <Button
            variant='primary'
            onClick={() => setShowSuccess(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </Layout>
  );
};
