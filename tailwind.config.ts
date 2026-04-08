/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00bcd4',
        'primary-dark': '#009cad',
        'accent': '#0089ff',
        'background': '#0a0f1a',
        'surface': '#111827',
        'surface-light': '#1f2937',
        'text-primary': '#ffffff',
        'text-secondary': '#d1d5db',
        'text-muted': '#9ca3af',
        'border': '#374151',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        'h1': '48px',
        'h2': '36px',
        'h3': '28px',
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
      },
      borderRadius: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '20px',
        'xl': '24px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(10, 15, 26, 0.1)',
        'md': '0 6px 16px rgba(10, 15, 26, 0.15)',
        'lg': '0 12px 30px rgba(10, 15, 26, 0.3)',
        'xl': '0 20px 50px rgba(10, 15, 26, 0.4)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
      backdropFilter: {
        'glass': 'blur(10px) brightness(110%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|text|border)-(primary|accent|success|warning|error|surface|background)/,
    },
  ],
});
