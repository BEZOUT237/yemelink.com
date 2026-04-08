import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/constants';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-surface border-t border-border mt-20'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <h3 className='text-xl font-bold text-primary mb-3'>YEMELINK</h3>
            <p className='text-text-muted text-sm'>{BRAND.slogan}</p>
            <p className='text-text-muted text-xs mt-2'>Tech hub for entrepreneurs & innovators</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold text-text-primary mb-4'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/' className='text-text-muted hover:text-primary transition-colors'>Home</Link></li>
              <li><Link to='/services' className='text-text-muted hover:text-primary transition-colors'>Services</Link></li>
              <li><Link to='/portfolio' className='text-text-muted hover:text-primary transition-colors'>Portfolio</Link></li>
              <li><Link to='/community' className='text-text-muted hover:text-primary transition-colors'>Community</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='font-semibold text-text-primary mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/learn' className='text-text-muted hover:text-primary transition-colors'>Learn</Link></li>
              <li><Link to='/blog' className='text-text-muted hover:text-primary transition-colors'>Blog</Link></li>
              <li><Link to='/contact' className='text-text-muted hover:text-primary transition-colors'>Contact</Link></li>
              <li><a href='#' className='text-text-muted hover:text-primary transition-colors'>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className='font-semibold text-text-primary mb-4'>Connect</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href={BRAND.social.youtube} target='_blank' rel='noopener noreferrer' className='text-text-muted hover:text-primary transition-colors'>YouTube</a></li>
              <li><a href={BRAND.social.instagram} target='_blank' rel='noopener noreferrer' className='text-text-muted hover:text-primary transition-colors'>Instagram</a></li>
              <li><a href={BRAND.social.linkedin} target='_blank' rel='noopener noreferrer' className='text-text-muted hover:text-primary transition-colors'>LinkedIn</a></li>
              <li><a href={`https://wa.me/${BRAND.contact.whatsapp.replace('+', '')}`} target='_blank' rel='noopener noreferrer' className='text-text-muted hover:text-primary transition-colors'>WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-border my-8'></div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <p className='text-text-muted text-sm'>
            © {currentYear} YEMELINK. All rights reserved.
          </p>
          <div className='flex items-center gap-1 text-text-muted text-sm mt-4 md:mt-0'>
            Made with <Heart className='w-4 h-4 fill-error text-error' /> by YEMELINK Team
          </div>
        </div>
      </div>
    </footer>
  );
};
