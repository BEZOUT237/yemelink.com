/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

interface ImportMeta {
  readonly env: {
    VITE_SUPABASE_URL: string;
    VITE_SUPABASE_ANON_KEY: string;
    VITE_OPENAI_API_KEY?: string;
    VITE_STRIPE_PUBLIC_KEY?: string;
  };
}
