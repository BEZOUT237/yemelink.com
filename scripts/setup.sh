#!/bin/bash

# YEMELINK Setup Script
# Initializes the development environment

set -e

echo "🎯 YEMELINK Development Setup"
echo "============================="
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed"
  echo "Please install Node.js 18+ from https://nodejs.org"
  exit 1
fi

echo "✓ Node.js is installed: $(node -v)"

# Check if Yarn is installed
if ! command -v yarn &> /dev/null; then
  echo "❌ Yarn is not installed"
  echo "Install with: npm install -g yarn"
  exit 1
fi

echo "✓ Yarn is installed: $(yarn -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
  echo ""
  echo "📝 Creating .env.local from .env.example..."
  cp .env.example .env.local
  echo "⚠️  Please edit .env.local with your credentials:"
  echo "   - VITE_SUPABASE_URL"
  echo "   - VITE_SUPABASE_ANON_KEY"
  echo "   - VITE_OPENAI_API_KEY"
  echo "   - VITE_STRIPE_PUBLIC_KEY"
fi

# Setup pre-commit hooks
echo ""
echo "🪝 Setting up Git hooks..."
yarn prepare || true

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start developing:"
echo "  yarn dev"
echo ""
echo "Other commands:"
echo "  yarn build    - Build for production"
echo "  yarn preview  - Preview production build"
echo "  yarn lint     - Run linter"
echo "  yarn test     - Run tests"
