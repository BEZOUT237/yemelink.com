// API utility functions and HTTP client

import axios, { AxiosInstance, AxiosError } from 'axios';
import { supabase } from './supabaseClient';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add auth token
api.interceptors.request.use(async (config) => {
  const { data } = await supabase.auth.getSession();
  if (data?.session?.access_token) {
    config.headers.Authorization = `Bearer ${data.session.access_token}`;
  }
  return config;
});

// Interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;

// Quote request API
export async function submitQuoteRequest(data: {
  name: string;
  email: string;
  service_type: string;
  message: string;
  phone?: string;
}) {
  return api.post('/quote', data);
}

// Contact form API
export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return api.post('/contact', data);
}

// Chat API with OpenAI
export async function sendChatMessage(message: string) {
  return api.post('/chat', { message });
}

// Portfolio API
export async function getProjects() {
  return api.get('/projects');
}

export async function getProject(id: string) {
  return api.get(`/projects/${id}`);
}

// Community feed API
export async function getFeed(page: number = 1) {
  return api.get(`/feed?page=${page}`);
}

export async function createPost(data: any) {
  return api.post('/posts', data);
}

export async function likePost(postId: string) {
  return api.post(`/posts/${postId}/like`);
}

export async function unlikePost(postId: string) {
  return api.post(`/posts/${postId}/unlike`);
}

export async function commentOnPost(postId: string, content: string) {
  return api.post(`/posts/${postId}/comments`, { content });
}

// Articles API
export async function getArticles() {
  return api.get('/articles');
}

export async function getArticle(slug: string) {
  return api.get(`/articles/${slug}`);
}

// Payment API
export async function createCheckoutSession(data: any) {
  return api.post('/stripe/session', data);
}

export async function getPaymentStatus(sessionId: string) {
  return api.get(`/payments/${sessionId}`);
}
