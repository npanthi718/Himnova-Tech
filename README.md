# Himnova Technologies Website

Production-grade Next.js website for Himnova Technologies, built with App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Why this repo is production-ready

- Optimized image delivery using Next Image and modern formats (AVIF/WebP)
- Performance-focused font loading with next/font and swap strategy
- Security and cache headers configured in Next.js
- SEO metadata, robots.txt, and sitemap.xml included
- CI workflow for pull requests and pushes to main
- Typecheck + lint + build verification script

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS

## Quick start

### 1) Install dependencies

```bash
npm ci
```

### 2) Configure environment

Copy values from .env.example into a local env file:

```bash
cp .env.example .env.local
```

PowerShell alternative:

```powershell
Copy-Item .env.example .env.local
```

Set these keys in .env.local:

- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

### 3) Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Quality checks

Run everything required before pushing to GitHub:

```bash
npm run check
```

This runs:

- TypeScript typecheck
- ESLint
- Production build

## Build and run in production

```bash
npm run build
npm run start
```

## GitHub and CI

A CI pipeline is included at .github/workflows/ci.yml. It runs on push and pull_request:

- npm ci
- npm run typecheck
- npm run lint
- npm run build

## Deployment

### Vercel (recommended)

- Import this repository into Vercel
- Set the 3 EmailJS environment variables
- Deploy using default Next.js settings

### Any Node host

- Use Node.js 20.17+ (recommended and pinned in .nvmrc)
- Run npm ci && npm run build
- Start with npm run start

## Performance notes

- Keep all media in public/images and public/logos with descriptive versioned file names
- Prefer SVG/WebP where possible
- Avoid adding heavy client-side dependencies unless necessary
- Use dynamic import for non-critical interactive modules

## Project structure

```text
src/
  app/
  components/
  config/
  context/
  modules/
public/
  images/
  logos/
```

## Security checklist

- Do not commit .env files
- Rotate EmailJS keys periodically
- Review and tighten CORS/service configuration in EmailJS dashboard
- Keep dependencies updated monthly

## License

Private project for Himnova Technologies.
