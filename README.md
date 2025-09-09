# PermitAI Landing Page

A modern, responsive landing page for PermitAI - an AI-powered building permit platform that accelerates permit approvals in British Columbia.

## 🚀 Features

- **Modern Design**: Inspired by Scale.com with dark theme and green accents
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Form Handling**: Demo request form with validation
- **3D Elements**: Placeholder for future 3D visualizations
- **Performance**: Built with Next.js 15 and Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Custom SVG icons
- **Development**: Turbopack for fast development

## 🎨 Design

The landing page includes the following sections:

1. **Navigation** - Sticky header with mobile hamburger menu
2. **Hero** - Bold headline with 3D background effects
3. **Problem Statement** - Highlights current permit challenges
4. **How It Works** - 3-step process visualization
5. **Features** - Grid layout showcasing key benefits
6. **Trust** - Testimonials and credibility builders
7. **Contact** - Demo request form with validation
8. **Footer** - Company info and links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The landing page is fully responsive and tested on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (375px - 768px)

## 🎯 Target Audience

- Real estate developers in British Columbia
- Construction companies
- Builders applying for permits
- Municipal building officials

## ✨ Key Messaging

- **Speed**: 90% faster permit approvals
- **Compliance**: BC Building Code validation
- **Ease**: Simple drag-and-drop file uploads
- **Transparency**: Clear, actionable reports
- **Expertise**: Built by BC code experts

## 🔧 Customization

### Colors
Primary colors are defined in `globals.css`:
- Background: `#000000` (black)
- Accent: `#10B981` (green-500)
- Text: `#FFFFFF` (white)

### Form Integration
The contact form currently shows an alert on submission. To integrate with a backend:

1. Replace the `setTimeout` in `Contact.tsx` with actual form submission
2. Consider using Formspree, Netlify Forms, or a custom API endpoint

### 3D Elements
The hero section includes a placeholder for 3D animations. Integration points:
- `#hero-3d-placeholder` div in `Hero.tsx`
- Ready for Three.js, React Three Fiber, or similar libraries

## 📄 License

This project is proprietary and confidential.
