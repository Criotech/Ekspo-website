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

## Downloads

The download section links to the installers attached to the GitHub release at `https://github.com/Criotech/ekspo-releases/releases/download/v<version>/` (the default `downloadBaseUrl` in `src/content/site.ts`). They're 110–140 MB each, too big for git, so they're not in this repo. To serve them from somewhere else, set `NEXT_PUBLIC_DOWNLOAD_BASE_URL` to that folder's URL at build time (e.g. `/downloads` for files copied into the git-ignored `public/downloads/`).

On a new release, update the release tag in `downloadBaseUrl`, plus `download.version`, the file names and sizes in `src/content/site.ts`.
