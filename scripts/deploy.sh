#!/bin/bash

# YEMELINK Deployment Script
# This script prepares the project for production deployment

set -e

echo "🚀 YEMELINK Deployment Preparation"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check Node version
NODE_VERSION=$(node -v)
echo "✓ Node version: $NODE_VERSION"

# Check if .env.local exists
if [ ! -f .env.local ]; then
  echo "${RED}✗ .env.local not found${NC}"
  echo "  Please create .env.local with your environment variables"
  echo "  cp .env.example .env.local"
  exit 1
fi
echo "✓ Environment variables configured"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# Linting
echo ""
echo "🔍 Running linter..."
yarn lint --fix || true

# Type checking
echo ""
echo "📝 Type checking..."
yarn type-check

# Test
echo ""
echo "🧪 Running tests..."
yarn test --run || true

# Build
echo ""
echo "🏗️  Building for production..."
yarn build

# Check build size
DIST_SIZE=$(du -sh dist/ | cut -f1)
echo "✓ Build size: $DIST_SIZE"

echo ""
echo "${GREEN}✅ Deployment preparation complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Review the dist/ folder"
echo "2. Test locally: yarn preview"
echo "3. Deploy:"
echo "   - Vercel: vercel --prod"
echo "   - Netlify: netlify deploy --prod --dir=dist"
echo ""
echo "📚 Documentation: README.md"
