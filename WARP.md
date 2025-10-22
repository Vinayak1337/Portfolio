# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website with TypeScript, featuring 3D elements with Three.js, animations with Framer Motion, and styled with TailwindCSS. The site is deployed on Vercel with analytics integration.

## Key Technologies

- **Framework**: Next.js 14.1.0 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom theme colors and animations
- **3D Graphics**: Three.js with React Three Fiber
- **Animation**: Framer Motion
- **Analytics**: Vercel Analytics, Speed Insights, and Mixpanel
- **Email**: EmailJS for contact form

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm run start

# Run ESLint
npm run lint

# Build with bundle analysis
ANALYZE=true npm run build
```

## Project Architecture

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main homepage with all sections
  - `layout.tsx` - Root layout with metadata and analytics
  - `/api/` - API routes for screenshot generation
- `/src/components/` - React components
  - Main sections: Hero, About, Experience, Works, Contact
  - `/canvas/` - Three.js 3D components
  - `/hoc/` - Higher-order components for section wrapping
  - `/Navbar/` - Navigation components
- `/src/constants/` - Data constants for projects, experience, and tech stack
- `/src/utils/` - Utility functions for motion variants and helpers
- `/src/hooks/` - Custom React hooks for analytics

### Key Architectural Patterns

1. **Section Wrapper HOC**: All major sections use `SectionWrapper` HOC for consistent styling and animations
2. **Motion Variants**: Centralized animation configurations in `/src/utils/motion.ts`
3. **3D Components**: Separate canvas components for performance optimization
4. **Analytics Integration**: Custom hooks wrap Mixpanel tracking throughout the app

### Environment Variables
Required environment variables (set in `.env`):
- `NEXT_PUBLIC_MIXPANEL_TOKEN` - For analytics tracking
- `NEXT_PUBLIC_API_FLASH` - For project screenshot generation
- `NEXT_PUBLIC_EMAILJS_*` - EmailJS configuration for contact form

### Build Configuration

- **Bundle Analyzer**: Enabled via `@next/bundle-analyzer` when `ANALYZE=true`
- **Image Optimization**: Remote patterns configured for `api.apiflash.com`
- **SWC Minification**: Enabled for faster builds
- **TypeScript**: Strict mode enabled with path alias `@/*` → `./src/*`

### Styling System

- Custom TailwindCSS theme with portfolio-specific colors:
  - `primary`: #050816
  - `secondary`: #aaa6c3
  - `tertiary`: #151030
  - `quaternary`: #915EFF
- Custom animations: `bg-slide`, `accordion-down/up`
- Extended breakpoint: `xs: 450px`

### Performance Considerations

- Three.js components are lazy-loaded
- Images use Next.js Image component with optimization
- Production builds include Vercel Analytics and Speed Insights
- Sharp package recommended for image optimization in production

## Development Workflow

1. The main page (`src/app/page.tsx`) renders all portfolio sections
2. Each section is a separate component with its own motion animations
3. Project data is stored in `/src/constants/projects.ts` with tech tags
4. Contact form uses EmailJS for serverless email sending
5. 3D elements render conditionally based on device capabilities

## Deployment

The site is configured for Vercel deployment with:
- Automatic builds on push to master
- Environment variables configured in Vercel dashboard
- Analytics and Speed Insights enabled automatically