// Theme tokens and design system constants
export const colors = {
  // Primary
  primary: '#00bcd4',
  primaryDark: '#009cad',
  primaryLight: '#26c8d8',

  // Accent
  accent: '#0089ff',
  accentDark: '#0066cc',

  // Background
  background: '#0a0f1a',
  surface: '#111827',
  surfaceLight: '#1f2937',
  surfaceAlt: '#374151',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#d1d5db',
  textMuted: '#9ca3af',
  textTertiary: '#6b7280',

  // Semantic
  success: '#10b981',
  successLight: '#d1fae5',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  error: '#ef4444',
  errorLight: '#fee2e2',
  info: '#3b82f6',
  infoLight: '#dbeafe',

  // Borders & Dividers
  border: '#374151',
  borderLight: '#4b5563',
  divider: '#1f2937',

  // Overlays
  overlay: 'rgba(10, 15, 26, 0.7)',
  overlayLight: 'rgba(10, 15, 26, 0.5)',
};

export const typography = {
  fontFamily: {
    primary: 'Inter, Poppins, system-ui, -apple-system, sans-serif',
    display: 'Inter, Poppins, system-ui, -apple-system, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },
  sizes: {
    h1: { size: '48px', weight: 700, lineHeight: 1.2 },
    h2: { size: '36px', weight: 700, lineHeight: 1.2 },
    h3: { size: '28px', weight: 600, lineHeight: 1.3 },
    h4: { size: '24px', weight: 600, lineHeight: 1.3 },
    bodyLarge: { size: '18px', weight: 400, lineHeight: 1.5 },
    body: { size: '16px', weight: 400, lineHeight: 1.6 },
    bodySmall: { size: '14px', weight: 400, lineHeight: 1.5 },
    label: { size: '12px', weight: 500, lineHeight: 1.4 },
    caption: { size: '12px', weight: 400, lineHeight: 1.4 },
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
  '3xl': '48px',
} as const;

export const borderRadius = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  full: '9999px',
} as const;

export const shadows = {
  xs: '0 2px 8px rgba(10, 15, 26, 0.1)',
  sm: '0 4px 12px rgba(10, 15, 26, 0.15)',
  md: '0 8px 24px rgba(10, 15, 26, 0.2)',
  lg: '0 12px 30px rgba(10, 15, 26, 0.3)',
  xl: '0 20px 50px rgba(10, 15, 26, 0.4)',
  glass: '0 8px 32px rgba(31, 38, 135, 0.37)',
};

export const transitions = {
  fast: '150ms',
  base: '300ms',
  slow: '500ms',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
};

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  notification: 800,
};
