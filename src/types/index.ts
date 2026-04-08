// Types for the entire application

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  bio?: string;
  role: 'user' | 'admin' | 'moderator';
  isPremium: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  url?: string;
  client_name: string;
  tech_stack: string[];
  testimonial?: string;
  created_at: string;
  featured: boolean;
}

export interface Post {
  id: string;
  author_id: string;
  author?: User;
  type: 'text' | 'image' | 'video' | 'link';
  content: string;
  media_url?: string;
  media_type?: string;
  link_url?: string;
  likes: number;
  comments_count: number;
  liked_by_user: boolean;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  post_id: string;
  author_id: string;
  author?: User;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  body: string;
  author_id: string;
  author?: User;
  tags: string[];
  featured_image?: string;
  published_at: string;
  updated_at: string;
  read_time: number;
}

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface ChatSession {
  id: string;
  user_id: string;
  messages: ChatMessage[];
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  stripe_session_id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed';
  subscription_type?: 'monthly' | 'yearly';
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  pricing?: string;
  features: string[];
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service_type: string;
  message: string;
  attachments?: string[];
  status: 'pending' | 'reviewed' | 'replied';
  created_at: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}
