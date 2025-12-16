# Fit-Check Widget Marketing Landing Page

A high-converting marketing landing page for "Fit-Check Widget (Embed) for SMB Retailers", built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Overview

This is a comprehensive marketing site featuring:
- 16 content sections covering all aspects of the product
- Interactive demo with modal flow simulation
- Full responsive design for mobile, tablet, and desktop
- SEO-optimized with proper meta tags and Open Graph support
- Analytics event tracking with UTM preservation
- Accessibility-focused (WCAG AA compliant)
- Performance-optimized with <120ms widget load simulation

## Project Structure

```
site/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/
│   ├── sections/          # Page sections
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── InteractiveDemoSection.tsx
│   │   ├── WidgetTourSection.tsx
│   │   ├── FitPassSection.tsx
│   │   ├── DashboardSection.tsx
│   │   ├── PerformanceSection.tsx
│   │   ├── KioskSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── DevelopersSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Chip.tsx
│       ├── Accordion.tsx
│       └── Modal.tsx
├── config/
│   └── site.ts            # Site configuration and pricing
├── lib/
│   └── analytics.ts       # Analytics utilities
└── public/
    └── assets/            # Static assets

```

## Design System

### Colors
- **Navy** (#0F1B2D) - Headings
- **Accent** (#1FD28E) - Primary CTA, Pass chip
- **Orange** (#FF9F43) - Warn chip
- **Red** (#F05252) - Fail chip
- **Slate** (#6B7A90) - Body text
- **Gray-50** (#F4F6FA) - Section backgrounds
- **White** (#FFFFFF) - Panels

### Typography
- **Font Family**: Inter (system fonts fallback)
- **H1**: 56px desktop / 40px mobile
- **H2**: 36px desktop / 28px mobile
- **H3**: 28px desktop / 22px mobile
- **Body**: 18px, 160% line-height
- **Buttons**: 16px, semi-bold

### Components
- **Buttons**: Primary (accent green), Secondary (outlined), Tertiary (text)
- **Chips**: PASS (green), WARN (orange), FAIL (red)
- **Modals**: Focus trap, ESC/overlay close, body scroll lock

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
cd site
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Environment Variables

Create a `.env.local` file in the `/site` directory (copy from `.env.example`):

```bash
# Shopify App Installation URL
NEXT_PUBLIC_SHOPIFY_APP_URL=https://apps.shopify.com/fit-check-widget

# Demo Booking URL (e.g., Calendly)
NEXT_PUBLIC_DEMO_BOOK_URL=https://calendly.com/fit-check/demo

# Documentation URLs
NEXT_PUBLIC_DOCS_URL=https://docs.fit-check.com
NEXT_PUBLIC_CASE_STUDIES_URL=https://fit-check.com/case-studies
NEXT_PUBLIC_PARTNERS_URL=https://fit-check.com/partners
NEXT_PUBLIC_CONTACT_URL=https://fit-check.com/contact
NEXT_PUBLIC_STATUS_URL=https://status.fit-check.com

# Sign In URL
NEXT_PUBLIC_SIGN_IN_URL=https://app.fit-check.com/sign-in
```

## Features

### Sections (in order)
1. **Header** - Sticky navigation with announcement bar
2. **Hero** - Main value proposition with visual mockups
3. **Social Proof** - Customer testimonials and logos
4. **Benefits** - Six key value propositions
5. **How It Works** - 4-step implementation flow
6. **Interactive Demo** - Clickable demo simulation
7. **Widget UX Tour** - Annotated UI walkthrough
8. **Fit Pass** - Branded certificate features
9. **Dashboard** - Analytics and reporting
10. **Performance** - Speed, privacy, reliability
11. **Kiosk Mode** - In-store use case
12. **Pricing** - 3-tier plans with annual toggle
13. **Developers** - Integration guides
14. **Results** - Expected outcomes
15. **FAQ** - 12 common questions
16. **Final CTA** - Conversion-focused call-to-action
17. **Footer** - Site-wide navigation and links

### Analytics Events Tracked
- Header and hero CTA clicks
- Demo interactions (open, close, view fit pass)
- Pricing toggle and plan selections
- FAQ opens
- Resource link clicks
- UTM parameter preservation

### Accessibility Features
- WCAG AA contrast ratios
- Keyboard navigation support
- Focus visible styles (2px accent outline)
- ARIA labels and roles
- 44px minimum touch targets
- Screen reader friendly

### Performance
- Async component loading
- Optimized images and assets
- CSS modules for scoped styling
- Minimal JavaScript bundle

## Responsive Breakpoints
- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Customization

### Pricing
Edit `/config/site.ts` to update pricing tiers, features, and monthly rates.

### Copy
Most copy is embedded in section components. Update the TSX files in `/components/sections/`.

### Colors
Modify CSS variables in `/app/globals.css`:
```css
:root {
  --color-navy: #0F1B2D;
  --color-accent: #1FD28E;
  /* ... */
}
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Proprietary - All rights reserved

## Support

For issues or questions, contact the development team.
