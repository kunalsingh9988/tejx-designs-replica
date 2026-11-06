# TEJX DESIGNS — React Replica

A complete React re-implementation of [tejxdesigns.com](https://tejxdesigns.com) — the dark, Framer-built portfolio of UI/UX & Graphic Designer Mani Teja Pithani. Recreated page-for-page: home, projects, and contact, including layout, typography, imagery, motion, and interactions.

## Stack

- **React 19 + Vite** — SPA with `react-router-dom` (`/`, `/projects`, `/contact`)
- **Motion** — scroll-driven effects (the sticky "Why me" pair swap)
- **Vanilla CSS** — design tokens, card sheen gradients, marquee keyframes, reveal system
- Fonts: Satoshi (display), Inter (body), Plus Jakarta Sans (UI)

## Faithful details

- Floating blurred nav pill, pill badges, and the 121° card sheen used across the site
- Video-backed hero with floating rotated testimonial cards and cursor glyphs
- Horizontally scrolling process cards, tag + image marquees, auto-scrolling brand column
- Sticky scroll-driven "Why me as Design Partner" comparison pairs
- FAQ accordion, contact form, and the "Let's Grow Together" CTA + footer

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Configured for Vercel (`vercel.json` SPA rewrite) — `npm run build` outputs to `dist/`.

> All copy and imagery are replicated from the original site for study purposes.
