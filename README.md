# Kunal Singh — Portfolio

Personal portfolio of Kunal Singh — UX designer and project manager with 2.5+ years and 80+ shipped projects. Built as a React SPA with dark, panel-based layouts, real project case studies, testimonials, and a downloadable resume.

## Stack

- **React 19 + Vite** — SPA with `react-router-dom` (`/`, `/projects`, `/projects/:slug`, `/contact`)
- **Vanilla CSS** — design tokens, card sheen gradients, marquee keyframes, reveal-on-scroll system
- Fonts: Satoshi (display), Inter (body), Plus Jakarta Sans (UI)

## Pages

- **Home** — video hero with floating testimonial cards, about, process, services, recent work, "Why me" comparisons, brand/client list, FAQ, CTA
- **Projects** — full project grid with Load More
- **Project detail** — data-driven case-study pages with live/Behance links
- **Contact** — stats, testimonial, WhatsApp CTA, and a working form

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Configured for Vercel (`vercel.json` SPA rewrite) — `npm run build` outputs to `dist/`.
