import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useUIStore, useAuthStore } from '@/store';
import { Button } from './Button';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const { isAuthenticated } = useAuthStore();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Community', href: '/community' },
    { label: 'Learn', href: '/learn' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className='sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='text-2xl font-bold text-primary hover:text-primary-dark transition-colors'>
          YEMELINK
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href) 
                  ? 'text-primary' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className='hidden md:flex items-center gap-3'>
          {!isAuthenticated && (
            <>
              <Link to='/login' className='px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors'>
                Login
              </Link>
              <Link to='/signup' className='px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors'>
                Sign Up
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <Link to='/chat' className='px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors'>
                Chat
              </Link>
              <Link to='/profile' className='px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors'>
                Profile
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden p-2 hover:bg-surface rounded-lg transition-colors'
        >
          {isMobileMenuOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='md:hidden bg-surface border-t border-border'
        >
          <div className='px-4 py-4 space-y-3'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className='pt-4 space-y-2 border-t border-border'>
              {!isAuthenticated && (
                <>
                  <Link to='/login' className='block px-4 py-2 text-sm font-medium text-center text-text-secondary hover:text-text-primary transition-colors rounded-lg'>
                    Login
                  </Link>
                  <Link to='/signup' className='block px-4 py-2 text-sm font-medium text-center bg-primary text-white transition-colors rounded-lg hover:bg-primary-dark'>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Override Button to support asChild prop
declare module './Button' {
  interface ButtonProps {
    asChild?: boolean;
  }
}
