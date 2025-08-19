# MedFors - Healthcare Staffing Platform

A modern, responsive healthcare staffing website built with Next.js 14, TypeScript, and Tailwind CSS. This platform connects healthcare institutions with qualified professionals across India.

## 🚀 Features

- **Dual Audience Focus**: Serves both healthcare institutions (employers) and healthcare professionals (candidates)
- **Modern UI/UX**: Clean, fast, and accessible design with AA contrast compliance
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Performance Optimized**: Built for 60-90 Lighthouse scores with CLS under 0.1
- **Form Validation**: Comprehensive form handling with Zod validation
- **Animation**: Smooth animations using Framer Motion
- **Theme Support**: Dark/light mode with system preference detection

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (body) and Manrope (headings)
- **Theme**: next-themes

## 🎨 Design System

### Colors
- **Primary**: #0E6FFF (Blue)
- **Ink**: #0A2A4A (Dark Blue)
- **Accent**: #0BB17F (Green)
- **Neutrals**: Tailwind slate palette

### Typography
- **Headings**: Manrope (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📁 Project Structure

```
healthcare-staffing/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # Lead form API endpoint
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout with fonts and metadata
│   └── page.tsx                  # Main landing page
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── Header.tsx                # Navigation header
│   ├── Hero.tsx                  # Hero section
│   ├── TrustBar.tsx              # Trust indicators
│   ├── Services.tsx              # Services showcase
│   ├── HowItWorks.tsx            # Process explanation
│   ├── Audiences.tsx             # Target audiences
│   ├── UniversityPartnership.tsx # Educational partnerships
│   ├── Board.tsx                 # Leadership team
│   ├── Regions.tsx               # Geographical coverage
│   ├── Testimonials.tsx          # Client testimonials
│   ├── FAQ.tsx                   # Frequently asked questions
│   ├── CTASection.tsx            # Call-to-action sections
│   ├── LeadForm.tsx              # Contact/lead form
│   ├── Footer.tsx                # Site footer
│   └── StickyMobileActions.tsx   # Mobile sticky actions
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── validations.ts            # Zod validation schemas
└── public/                       # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-staffing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🎯 Key Components

### Dual CTAs
The platform features two primary call-to-action buttons throughout:
- **"Request Staff"** - For healthcare institutions
- **"Submit Resume"** - For healthcare professionals

### Form Handling
- **Lead Form**: Dual-purpose form for both employers and candidates
- **Validation**: Zod schemas for form validation
- **API Integration**: RESTful API endpoint for form submissions

### Responsive Design
- Mobile-first approach
- Sticky mobile actions for better UX
- Optimized for all screen sizes

## 🎨 Customization

### Branding
Replace `MedFors` with your brand name throughout the components:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Testimonials.tsx`
- `app/layout.tsx` (metadata)

### Colors
Update the color scheme in `app/globals.css`:
```css
--brand-primary: oklch(0.5 0.25 250); /* #0E6FFF */
--brand-ink: oklch(0.2 0.05 250); /* #0A2A4A */
--brand-accent: oklch(0.6 0.2 160); /* #0BB17F */
```

### Content
Update the content in each component to match your specific:
- Services offered
- Target regions
- Partner institutions
- Team members
- Testimonials

## 📱 Mobile Optimization

- Sticky mobile actions bar
- Responsive navigation with sheet component
- Optimized touch targets
- Fast loading times

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks (if configured)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Score**: Target 90+ across all metrics
- **Core Web Vitals**: Optimized for CLS, LCP, and FID
- **Image Optimization**: Using Next.js Image component
- **Font Loading**: Optimized with `display: swap`

## 🔒 Security

- Form validation on both client and server
- API rate limiting (implement as needed)
- Secure headers (configure in next.config.js)
- Environment variable protection

## 📈 Analytics & SEO

- Meta tags for social sharing
- Structured data for search engines
- Open Graph tags
- Twitter Card support
- Sitemap generation (add as needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: hello@medfors.com
- Phone: +91 98765 43210

## 🎯 Roadmap

- [ ] Add authentication system
- [ ] Implement job board functionality
- [ ] Add real-time chat support
- [ ] Integrate payment processing
- [ ] Add analytics dashboard
- [ ] Implement multi-language support
- [ ] Add mobile app

---

Built with ❤️ for the healthcare community
