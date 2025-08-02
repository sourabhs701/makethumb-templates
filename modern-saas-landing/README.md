# Modern SaaS Landing Page Template

A beautiful, modern landing page template built with React, TypeScript, and Tailwind CSS. Perfect for SaaS products, startups, and tech companies.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 📱 **Fully Responsive** - Looks great on all devices
- 🎭 **Magic UI Components** - Beautiful blur fade animations and effects
- 🎯 **Conversion Focused** - Optimized for lead generation and conversions
- 🌙 **Dark Mode** - Built-in theme switching
- ⚡ **Performance** - Fast loading with modern React and Vite
- 🔧 **Customizable** - Easy to modify and adapt to your brand

## 🚀 Sections Included

- **Hero Section** - Compelling headline with call-to-action buttons
- **Stats Section** - Social proof with key metrics
- **Features Section** - Highlight your product's key features
- **Testimonials** - Customer reviews and social proof
- **Pricing** - Clear pricing plans with feature comparison
- **CTA Section** - Final conversion opportunity

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible UI components
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   ├── magicui/        # Animated components
│   ├── feature-card.tsx
│   ├── pricing-card.tsx
│   ├── testimonial-card.tsx
│   └── stat-card.tsx
├── data/
│   └── saas.tsx        # Site content and configuration
├── Pages/
│   ├── Layout.tsx      # App layout wrapper
│   └── SaasLanding.tsx # Main landing page
└── lib/
    └── utils.ts        # Utility functions
```

## 🎯 Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Customize your content**

   - Edit `src/data/saas.tsx` to update your company info, features, pricing, etc.
   - Replace images in the `public/` folder
   - Customize colors in your Tailwind config

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Update Company Information

Edit `src/data/saas.tsx` to customize:

- Company name and tagline
- Hero section content
- Features and benefits
- Pricing plans
- Testimonials
- Contact information

### Change Colors

Modify the Tailwind CSS variables in your configuration to match your brand colors.

### Add New Sections

Create new components in the `components/` folder and add them to `SaasLanding.tsx`.

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
