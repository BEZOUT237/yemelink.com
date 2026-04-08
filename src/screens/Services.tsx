import React from 'react';
import { Layout, Button, Card } from '@/components/common';
import { SERVICES } from '@/constants';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const services = SERVICES;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-12'
      >
        <h1 className='text-5xl font-bold mb-4'>Our Services</h1>
        <p className='text-xl text-text-secondary max-w-2xl'>
          Comprehensive digital solutions tailored for entrepreneurs, startups, and growing businesses.
        </p>
      </motion.div>

      <div className='space-y-8'>
        {services.map((service: typeof SERVICES[0], index: number) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className='hover' hover>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2'>
                  <h2 className='text-2xl font-bold text-text-primary mb-3'>
                    {service.name}
                  </h2>
                  <p className='text-text-secondary mb-6'>
                    {service.description}
                  </p>

                  <div className='space-y-3 mb-6'>
                    <h4 className='font-semibold text-text-primary'>Key Features:</h4>
                    {service.features && service.features.map((feature: string, i: number) => (
                      <div key={i} className='flex items-start gap-3'>
                        <Check className='w-5 h-5 text-success flex-shrink-0 mt-0.5' />
                        <span className='text-text-secondary'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col justify-between'>
                  {service.pricing && (
                    <div className='mb-6'>
                      <p className='text-sm text-text-muted mb-2'>Starting Price</p>
                      <p className='text-2xl font-bold text-primary'>{service.pricing}</p>
                    </div>
                  )}
                  <Button
                    variant='primary'
                    fullWidth
                  >
                    Request Quote
                    <ArrowRight className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};
