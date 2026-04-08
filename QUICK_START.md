# YEMELINK - Quick Start (60 Seconds)

## Local Development

```bash
# 1. Install dependencies (15 sec)
yarn install

# 2. Start dev server (5 sec)
yarn dev

# 3. Open browser
# Visit: http://localhost:5173
```

## Deploy to Production (5 minutes)

```bash
# 1. Build for production
yarn build

# 2. Deploy to Vercel
vercel --prod

# Your live URL will be displayed
```

## Environment Variables

Before deploying, set these in Vercel:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-key-here
VITE_OPENAI_API_KEY=sk-...
VITE_STRIPE_PUBLIC_KEY=pk_live_...
```

## Available Scripts

```bash
yarn dev              # Start dev server
yarn build            # Build for production
yarn preview          # Preview production build
yarn lint             # Run ESLint
yarn format           # Format code with Prettier
yarn type-check       # Check TypeScript
yarn test             # Run tests
yarn test:ui          # Test UI
yarn test:coverage    # Coverage report
```

## File Structure

```
src/
├── screens/          # 8 production pages
├── components/       # 15+ reusable components
├── lib/              # API clients, Supabase, Stripe
├── store/            # Zustand state management
├── theme/            # Design tokens
├── i18n/             # Translations (EN/FR)
├── types/            # TypeScript interfaces
├── constants/        # App configuration
└── App.tsx           # Main router component
```

## Contact

- **Email**: yemelink@gmail.com
- **WhatsApp**: +905057404314
- **Founder**: Stéphane Yemeli
- **Status**: ✅ Production Ready

---

**Ready to go live? Run:** `yarn build && vercel --prod`
