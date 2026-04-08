import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Eye, EyeOff } from 'lucide-react';
import { Layout, Button, Input, Card } from '@/components/common';

export const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true);
    // Simulate signup
    await new Promise(resolve => setTimeout(resolve, 1500));
    window.location.href = '/';
  };

  return (
    <Layout showFooter={false}>
      <div className='min-h-screen flex items-center justify-center px-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className='w-full max-w-md'
        >
          <Card className='p-8'>
            <div className='mb-8 text-center'>
              <h1 className='text-3xl font-bold mb-2'>Create Account</h1>
              <p className='text-text-muted'>Join the YEMELINK community</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <Input
                label='Full Name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                required
                fullWidth
                rightIcon={<User className='w-4 h-4' />}
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
                rightIcon={<Mail className='w-4 h-4' />}
              />

              <div>
                <label className='block text-sm font-medium text-text-secondary mb-2'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='••••••••'
                    required
                    className='w-full px-4 py-2 rounded-md border border-border bg-background text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary'
                  >
                    {showPassword ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
                  </button>
                </div>
              </div>

              <Input
                label='Confirm Password'
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='••••••••'
                required
                fullWidth
              />

              <div className='flex items-start gap-3 py-2'>
                <input
                  id='terms'
                  type='checkbox'
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className='mt-1 w-4 h-4 rounded border-border'
                />
                <label htmlFor='terms' className='text-sm text-text-muted'>
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <Button
                type='submit'
                variant='primary'
                size='lg'
                fullWidth
                loading={loading}
                disabled={!agreedToTerms}
              >
                Create Account
              </Button>
            </form>

            <div className='mt-6 text-center'>
              <p className='text-text-muted text-sm'>
                Already have an account?{' '}
                <a href='/login' className='text-primary hover:text-primary-dark transition-colors font-medium'>
                  Sign in
                </a>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};
