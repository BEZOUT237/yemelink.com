import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from '@/components/common';
import {
  Home,
  Services,
  Portfolio,
  Community,
  Chat,
  Learn,
  Contact,
  Login,
  Signup,
} from '@/screens';
import i18n from '@/i18n';

import '@/App.css';

export function App() {
  // const [toasts, setToasts] = useState<any[]>([]);

  useEffect(() => {
    // Initialize i18n
    i18n.changeLanguage('en');
  }, []);

  // Toast notification functions available for future use
  // const addToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
  //   const id = Math.random().toString(36).substr(2, 9);
  //   const toast = { id, message, type, duration: 4000 };
  //   setToasts(prev => [...prev, toast]);
  // };

  // const removeToast = (id: string) => {
  //   setToasts(prev => prev.filter(t => t.id !== id));
  // };

  return (
    <Router>
      <div className='min-h-screen bg-background text-text-primary font-sans'>
        <Routes>
          {/* Main Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/community' element={<Community />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/contact' element={<Contact />} />
          
          {/* Auth Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          
          {/* Catch-all */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        
        <ToastContainer toasts={toasts} onClose={removeToast} />
      </div>
    </Router>
  );
}

export default App;
