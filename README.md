# 🌐 YEMELINK Tech Hub

YEMELINK is a high-performance digital solutions hub and community platform. It combines a professional portfolio, a service marketplace, and an AI-powered social ecosystem for tech pioneers.

# ✨ Key Features

## 🚀 Digital Showcase

Dynamic Portfolio: Interactive project gallery with real-time management via the Admin Dashboard.

Service Catalog: Clean, grid-based layout detailing Web Dev, Mobile Apps, and Brand Strategy solutions.

##🤖 AI-Powered Connectivity

Smart Content Enhancer: Integrated Gemini 2.5 Flash API to help users polish community posts.

Admin Brainstormer: AI-driven project ideation tool for generating technical specs and marketing copy.

## 🛡️ Infrastructure Control

Dual-Auth System: Distinct entry points for Community Members and the Super Admin.

Command Center: A restricted dashboard for real-time project deployment and content moderation.

Glassmorphism UI: Built with React and Tailwind CSS for a premium, futuristic aesthetic.

# 🛠️ Tech Stack

Frontend: React.js + Vite

Styling: Tailwind CSS

Icons: Lucide React

AI Engine: Google Gemini API

Deployment: Netlify / Vercel

##🚦 Getting Started

Prerequisites

Node.js (v18+)

NPM or Yarn

A Gemini API Key (get one at Google AI Studio)

Installation

Clone the repository

git clone [https://github.com/BEZOUT237/yemelink.com.git](https://github.com/BEZOUT237/yemelink.com.git)
cd yemelink-hub


Install dependencies

npm install


Environment Setup
Create a .env file in the root directory and add your API key:

VITE_GEMINI_API_KEY=your_api_key_here


Run Development Server

npm run dev


# 📂 Project Structure(maybe altered during upload)

yemelink-hub/
├── public/              # Static assets (Logos, Profile Pics)
├── src/
│   ├── App.jsx          # Main Logic & Routing
│   ├── index.css        # Tailwind Global Styles
│   └── main.jsx         # React Entry Point
├── tailwind.config.js   # Custom Theme Design
└── package.json         # Dependencies & Scripts


🔐 Admin Access

To access the Command Center:

Go to the Join Hub / Login page.

Toggle the switch to Admin.

Use your root credentials (configured in App.jsx).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.

Founder: Stephane YEMELI

Website: YEMELINK




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
