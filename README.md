# ekspo website

A minimal marketing site for ekspo, built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Editing

- **Copy:** every headline, feature, price and FAQ lives in `src/content/site.ts`. The current text is placeholder.
- **Colors:** tokens at the top of `src/app/globals.css` (light and dark).
- **Fonts:** Bricolage Grotesque (headings), Geist (body), Geist Mono, loaded in `src/app/layout.tsx`.
- **Sections:** one component each in `src/components/`, assembled in `src/app/page.tsx`.
