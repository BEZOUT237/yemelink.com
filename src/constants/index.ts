// Application constants and configuration

export const BRAND = {
  name: 'YEMELINK',
  slogan: 'Online Products and Services',
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'yemelink@gmail.com',
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '+905057404314',
  },
  social: {
    youtube: 'https://www.youtube.com/@YEMELINK2000',
    instagram: 'https://www.instagram.com/yemelink2000',
    tiktok: 'https://www.tiktok.com/@yemelink',
    blog: 'https://yemelink.blogspot.com',
    linkedin: 'https://www.linkedin.com/company/105687625/admin/dashboard',
  },
  portfolio: {
    websites: [
      'arkigai-group.com',
      'https://linktr.ee/YEMELINK',
    ],
    projects: [
      {
        name: 'yemelink Ai Automation Agency (YEMELINK.AAA)',
        url: 'https://symphonious-pony-88095a.netlify.app',
      },
      {
        name: 'networker',
        url: 'https://preview--networker.lovable.app/',
      },
      {
        name: 'networker',
        url: 'https://networker.softr.app/',
      },
    ],
  },
  founder: {
    name: 'Stéphane Yemeli',
    title: 'Founder & CEO',
    image: '/src/assets/images/stephane-yemeli.png',
  },
  stats: {
    yearsExperience: '2+',
    projects: 16,
    happyClients: 16,
  },
};

export const SERVICES = [
  {
    id: 'web-development',
    name: 'Web Full Stack Development',
    description: 'Modern, scalable web applications built with latest technologies',
    icon: 'Code',
    pricing: 'Custom',
    features: [
      'React / Vue.js / Next.js',
      'Node.js / Python backend',
      'Database design & optimization',
      'API development',
      'Performance optimization',
    ],
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    description: 'Native & cross-platform mobile applications',
    icon: 'Smartphone',
    pricing: 'Custom',
    features: [
      'iOS & Android development',
      'React Native / Flutter',
      'App Store optimization',
      'Push notifications',
      'Analytics integration',
    ],
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'Professional logos, UI/UX, and visual identity',
    icon: 'Palette',
    pricing: 'Starting from $500',
    features: [
      'Logo design',
      'UI/UX design',
      'Brand identity',
      'Marketing materials',
      'Web design mockups',
    ],
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    description: 'Engaging videos, images, and written content',
    icon: 'Video',
    pricing: 'Custom',
    features: [
      'Video production',
      'Photography',
      'Blog writing',
      'Social media content',
      'Script writing',
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing & Social Media',
    description: 'Comprehensive digital marketing strategies',
    icon: 'TrendingUp',
    pricing: 'Starting from $300/month',
    features: [
      'Social media management',
      'SEO optimization',
      'Paid advertising',
      'Email marketing',
      'Analytics & reporting',
    ],
  },
  {
    id: 'copywriting',
    name: 'Persuasive Copywriting',
    description: 'Compelling copy that converts',
    icon: 'PenTool',
    pricing: 'Starting from $100/article',
    features: [
      'Website copy',
      'Product descriptions',
      'Email campaigns',
      'Ad copy',
      'Landing pages',
    ],
  },
];

export const DEMO_USER_ADMIN = {
  email: 'admin@yemelink.test',
  password: 'Yemelink123!',
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

export const IMAGE_CONSTRAINTS = {
  MAX_SIZE_MB: 10,
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
};

export const VIDEO_CONSTRAINTS = {
  MAX_SIZE_MB: 100,
  ALLOWED_TYPES: ['video/mp4', 'video/webm', 'video/quicktime'],
};

export const RATE_LIMITS = {
  POSTS_PER_HOUR: 20,
  COMMENTS_PER_HOUR: 100,
  CHAT_MESSAGES_PER_HOUR: 200,
};

export const ANIMATION_DURATIONS = {
  SPLASH: 0.8,
  PAGE_TRANSITION: 0.36,
  BUTTON_PRESS: 0.1,
  CARD_HOVER: 0.2,
  FEED_LOAD: 0.2,
} as const;
