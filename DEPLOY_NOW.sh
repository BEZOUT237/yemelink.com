#!/usr/bin/bash
# YEMELINK - DEPLOY TODAY (5 MINUTE GUIDE)

echo "🚀 YEMELINK - Deploy in 5 Minutes"
echo "=================================="
echo ""

# Step 1: Install
echo "📦 Step 1: Installing dependencies..."
yarn install
sleep 2

# Step 2: Build
echo ""
echo "🏗️  Step 2: Building for production..."
yarn build
DIST_SIZE=$(du -sh dist/ | cut -f1)
echo "✓ Build created: $DIST_SIZE"
sleep 2

# Step 3: Deploy to Vercel
echo ""
echo "🌐 Step 3: Deploying to Vercel..."
echo ""
echo "Option A - Automatic (Recommended):"
echo "1. Go to https://vercel.com/new"
echo "2. Connect your GitHub repository"
echo "3. Configure environment variables in settings"
echo "4. Click Deploy"
echo ""
echo "Option B - Command Line:"
echo "1. yarn global add vercel"
echo "2. vercel link (first time only)"
echo "3. vercel --prod"
echo ""
echo "=================================="
echo ""
echo "✅ Your app will be live at: vercel.app"
echo ""
echo "📝 Don't forget to set environment variables:"
echo "   - VITE_SUPABASE_URL"
echo "   - VITE_SUPABASE_ANON_KEY"
echo "   - VITE_OPENAI_API_KEY"
echo "   - VITE_STRIPE_PUBLIC_KEY"
echo ""
echo "🔗 Vercel Dashboard: https://vercel.com/dashboard"
echo "📞 Support: yemelink@gmail.com"
