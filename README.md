# PolyHACK 2026 — Static React Site (Netlify-ready)

Multi-page React site (Vite + React Router + Tailwind).

## Pages
- `/` Home — full-screen, non-scroll background (from `public/banner.png`)
- `/about`
- `/schedule`
- `/sponsors` — Platinum (3), Gold (5), Silver (8) grey placeholder squares

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Netlify
- `_redirects` is included in `public/` so deep links work.
- Set build command: `npm run build`, publish directory: `dist`
