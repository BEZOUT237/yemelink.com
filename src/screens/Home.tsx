import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, Button, Card, ServiceCard, ProjectCard, FeedItem } from '@/components/common';
import { BRAND, SERVICES } from '@/constants';
import { ArrowRight, Code, Smartphone, Palette, Video, TrendingUp, PenTool } from 'lucide-react';

export const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconMap = {
    'web-development': <Code className='w-8 h-8' />,
    'mobile-development': <Smartphone className='w-8 h-8' />,
    'graphic-design': <Palette className='w-8 h-8' />,
    'content-creation': <Video className='w-8 h-8' />,
    'digital-marketing': <TrendingUp className='w-8 h-8' />,
    'copywriting': <PenTool className='w-8 h-8' />,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        className='mb-20'
      >
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={mounted ? 'visible' : 'hidden'}
          >
            <motion.h1
              variants={itemVariants}
              className='text-5xl md:text-6xl font-bold mb-6 leading-tight'
            >
              YEMELINK — <span className='text-primary'>Online Products and Services</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-xl text-text-secondary mb-8'
            >
              Your tech hub for digital transformation, innovative solutions, and entrepreneurial success.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4 mb-8'
            >
              <Link to='/services' className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2'>
                Browse Services <ArrowRight className='w-5 h-5' />
              </Link>
              <Link to='/contact' className='px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2'>
                Request a Quote
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='flex items-center gap-8'
            >
              <div>
                <div className='text-3xl font-bold text-primary'>{BRAND.stats.yearsExperience}</div>
                <p className='text-text-muted text-sm'>Years Experience</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary'>{BRAND.stats.projects}</div>
                <p className='text-text-muted text-sm'>Projects Done</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary'>{BRAND.stats.happyClients}</div>
                <p className='text-text-muted text-sm'>Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className='hidden md:flex items-center justify-center'
          >
            <div className='w-full h-96 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center'>
              <div className='text-center'>
                <div className='text-6xl font-bold text-primary/30'>YL</div>
                <p className='text-text-muted mt-4'>Digital Innovation Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='mb-20'
      >
        <h2 className='text-4xl font-bold mb-12 text-center'>Our Services</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {SERVICES.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.name}
                description={service.description}
                icon={iconMap[service.id as keyof typeof iconMap]}
                pricing={service.pricing}
                features={service.features}
                onAction={() => window.location.href = `/services/${service.id}`}
              />
            </motion.div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link to='/services' className='px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2'>
            View All Services <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </motion.section>

      {/* Connect With Us */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='mb-20'
      >
        <div className='bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-12 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Connect With Us</h2>
          <p className='text-text-secondary mb-8 max-w-2xl mx-auto'>
            Follow our social channels for tips, insights, and updates. Reach out via WhatsApp or email for direct communication.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href={BRAND.social.youtube} target='_blank' rel='noopener noreferrer' className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors'>
              YouTube
            </a>
            <a href={BRAND.social.instagram} target='_blank' rel='noopener noreferrer' className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors'>
              Instagram
            </a>
            <a href={`https://wa.me/${BRAND.contact.whatsapp.replace('+', '')}`} target='_blank' rel='noopener noreferrer' className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors'>
              WhatsApp
            </a>
            <a href={`mailto:${BRAND.contact.email}`} className='px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors'>
              Email Us
            </a>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h2 className='text-4xl font-bold mb-6'>Ready to Elevate Your Business?</h2>
        <p className='text-xl text-text-secondary mb-8 max-w-2xl mx-auto'>
          Join entrepreneurs and startups who trust YEMELINK for digital transformation.
        </p>
        <Link to='/contact' className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2'>
          Request a Quote Today <ArrowRight className='w-5 h-5' />
        </Link>
      </motion.section>
    </Layout>
  );
};
