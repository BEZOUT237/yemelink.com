import React, { useState } from 'react';
import { Layout, Button, Card, ProjectCard } from '@/components/common';
import { BRAND } from '@/constants';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  // Demo projects
  const projects = [
    {
      id: '1',
      title: 'yemelink Ai Automation Agency',
      description: 'AI-powered automation platform for enterprise solutions',
      client: 'YEMELINK AAA',
      tags: ['AI', 'Automation', 'Web'],
      url: BRAND.portfolio.projects[0].url,
    },
    {
      id: '2',
      title: 'Networker Platform',
      description: 'Professional networking and collaboration tool',
      client: 'Networker',
      tags: ['Social', 'Web', 'Community'],
      url: BRAND.portfolio.projects[1].url,
    },
    {
      id: '3',
      title: 'Networker Mobile App',
      description: 'Cross-platform networking application',
      client: 'Networker',
      tags: ['Mobile', 'React Native', 'iOS/Android'],
      url: BRAND.portfolio.projects[2].url,
    },
  ];

  const filteredProjects = filter
    ? projects.filter(p => p.tags.includes(filter!))
    : projects;

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-12'
      >
        <h1 className='text-5xl font-bold mb-4'>Our Work</h1>
        <p className='text-xl text-text-secondary max-w-2xl'>
          Showcase of projects we've successfully delivered for our clients.
        </p>
      </motion.div>

      {/* Filters */}
      <div className='flex flex-wrap gap-3 mb-12'>
        <Button
          variant={filter === null ? 'primary' : 'outline'}
          size='sm'
          onClick={() => setFilter(null)}
        >
          All Projects
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={filter === tag ? 'primary' : 'outline'}
            size='sm'
            onClick={() => setFilter(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-3 gap-6 mb-12'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              client={project.client}
              tags={project.tags}
              onClick={() => window.open(project.url, '_blank')}
            />
          </motion.div>
        ))}
      </div>

      {/* Portfolio Links */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='mb-12'
      >
        <h2 className='text-3xl font-bold mb-8'>Additional Resources</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {BRAND.portfolio.websites.map((website, index) => (
            <Card key={index} hover>
              <h3 className='text-xl font-semibold text-text-primary mb-3'>
                {website.includes('arkigai') ? 'Arkigai Group' : 'YEMELINK Links'}
              </h3>
              <p className='text-text-secondary mb-4 text-sm'>
                {website.includes('arkigai') 
                  ? 'Explore our design and branding portfolio'
                  : 'Connect with us across multiple platforms'}
              </p>
              <Button
                variant='primary'
                size='sm'
                onClick={() => window.open(`https://${website}`, '_blank')}
              >
                Visit <ExternalLink className='w-4 h-4' />
              </Button>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/30'
      >
        <h2 className='text-3xl font-bold mb-4'>Interested in Working Together?</h2>
        <p className='text-text-secondary mb-8 max-w-2xl mx-auto'>
          Let's discuss how we can help bring your vision to life.
        </p>
        <Button variant='primary' size='lg' onClick={() => window.open(BRAND.social.linkedin, '_blank')}>
          Connect With Us
        </Button>
      </motion.section>
    </Layout>
  );
};
