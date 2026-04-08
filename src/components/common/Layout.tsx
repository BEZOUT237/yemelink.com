import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showNavigation = true,
  showFooter = true,
}) => {
  return (
    <div className='min-h-screen bg-background text-text-primary flex flex-col'>
      {showNavigation && <Navigation />}
      
      <main className='flex-1 w-full'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          {children}
        </div>
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};
