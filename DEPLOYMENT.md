# YEMELINK Deployment Checklist

## Pre-Deployment Checklist

### 1. Code Quality
- [ ] Run `yarn lint` - all issues fixed
- [ ] Run `yarn type-check` - no type errors
- [ ] Run `yarn test` - all tests passing
- [ ] Code review completed

### 2. Environment Variables
- [ ] `VITE_SUPABASE_URL` configured
- [ ] `VITE_SUPABASE_ANON_KEY` configured
- [ ] `VITE_OPENAI_API_KEY` configured (for AI features)
- [ ] `VITE_STRIPE_PUBLIC_KEY` configured (for payments)
- [ ] All sensitive keys in .env.local, NOT in repo

### 3. Build & Testing
- [ ] Run `yarn build` successfully
- [ ] Run `yarn preview` to test built version
- [ ] Test on mobile device/responsive
- [ ] Check console for errors
- [ ] Test all major user flows:
  - [ ] Home page loads
  - [ ] Services page navigable
  - [ ] Portfolio page works
  - [ ] Community feed posts
  - [ ] Contact form submits
  - [ ] Navigation responsive

### 4. Content & Branding
- [ ] Brand colors correct (#00bcd4 cyan)
- [ ] Logo displayed properly
- [ ] Social links functional
- [ ] Contact information correct
- [ ] Language toggle works (EN/FR)

### 5. SEO & Analytics
- [ ] Meta tags configured
- [ ] Favicon set
- [ ] robots.txt configured
- [ ] Analytics tracking ID configured (optional)
- [ ] Sitemap generated

### 6. Security
- [ ] No sensitive data in code
- [ ] .env.local in .gitignore
- [ ] HTTPS enabled on deployment
- [ ] CORS configured properly
- [ ] Rate limiting configured

### 7. Performance
- [ ] Bundle size < 500KB
- [ ] Lighthouse score > 80
- [ ] Images optimized
- [ ] Code splitting working
- [ ] Caching headers set

### 8. Deployment Service Setup

#### For Vercel
- [ ] Create account at vercel.com
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Set build command: `yarn build`
- [ ] Set output directory: `dist`

#### For Netlify
- [ ] Create account at netlify.com
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Set build command: `yarn build`
- [ ] Set publish directory: `dist`

### 9. Deploy
- [ ] Run deployment command
- [ ] Verify deployment successful
- [ ] Test live URL
- [ ] Check all pages load
- [ ] Test forms submit correctly

### 10. Post-Deployment
- [ ] Verify OAuth redirects work (if configured)
- [ ] Test payment flow (if configured)
- [ ] Check monitoring/error tracking
- [ ] Set up SSL certificate (if needed)
- [ ] configure CDN (optional)
- [ ] Update DNS records (if custom domain)

## Emergency Rollback

If deployment fails:

```bash
# Via Vercel
vercel rollback

# Via Netlify  
netlify deploy --prod --dir=dist
```

## Quick Deployment Commands

### Development
```bash
yarn dev              # Start dev server
yarn dev:inspect      # Debug mode
```

### Production
```bash
yarn build            # Build for production
yarn preview          # Preview build locally
vercel --prod         # Deploy to Vercel
netlify deploy --prod # Deploy to Netlify
```

### Monitoring
```bash
yarn lint             # Check code quality
yarn type-check       # Check types
yarn test             # Run tests
yarn test:coverage    # Coverage report
```

## Vercel Deployment

1. Push to `main` branch
2. Vercel automatically deploys
3. Check deployment status at vercel.com/dashboard

## Netlify Deployment

1. Build locally: `yarn build`
2. Deploy dist folder to Netlify
3. Or connect GitHub for auto-deploy

## Support

- Email: yemelink@gmail.com
- WhatsApp: +905057404314
- GitHub Issues: Create issue in repository

---

**Last Updated**: 2024
**Status**: Ready for Production ✅
