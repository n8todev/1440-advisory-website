# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm start        # Run production server
```

## Tech Stack

- **Next.js 16** with App Router (not Pages Router)
- **React 19**
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax (no `tailwind.config.js`)
- **JavaScript** (no TypeScript) — path alias `@/*` → `./src/*` via jsconfig.json

## Architecture

Single-page marketing site for 1440 Advisory. All content lives in `src/app/page.js` — no components directory exists yet.

**Routing:** `src/app/layout.js` (root shell, metadata, fonts) → `src/app/page.js` (entire landing page)

**Styling:** Tailwind inline classes throughout. Two alternating section backgrounds: dark `#0d0d0d` and light `#f5f4f0`. CSS variables defined in `src/app/globals.css`.

**Fonts:** Geist Sans + Geist Mono loaded via `next/font/google`, injected as CSS variables on `<body>`.

**Content pattern:** Repeating content (system pillars, process steps) is mapped over inline arrays in `page.js` rather than extracted to data files or components.

**Deployment:** Vercel (`.vercel/` present in repo root).
