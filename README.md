# Colwell Law Office, LLC — Website

Rebuilt with [Astro](https://astro.build) — a fast, static-first framework well suited to a
marketing/brochure site like this one. No database, no server to maintain: `npm run build`
produces plain HTML/CSS you can host almost anywhere.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

```bash
npm run build    # outputs the finished site to dist/
npm run preview  # serve the built dist/ folder locally to double check it
```

## What still needs your input

1. **Office address** — update `address` in `src/data/site.ts` (currently a placeholder).
2. **Blog posts** — add each real post as a new markdown file in `src/content/blog/`, following
   the frontmatter format in `placeholder-welcome-post.md`, then delete that placeholder file.
3. **FAQ** — add each real question as a new markdown file in `src/content/faq/`, following the
   frontmatter format in the existing two placeholder files, then delete or replace them.
4. **Contact form** — `src/pages/contact.astro` has a styled form, but it isn't wired to actually
   send anything yet (this is a static site, so it needs a form backend). Easiest options:
   [Formspree](https://formspree.io) or, if you host on Netlify, built-in Netlify Forms. There's a
   comment at the bottom of that file with the exact change needed either way.
5. **About page bio details** — `src/pages/about.astro` has a starting bio; send over any details
   you want added (school, admissions, bar memberships, prior experience).

The logo (`src/assets/logo.png`) and headshot (`src/assets/alexander-colwell-headshot.jpg`) are
already wired in — they're processed through Astro's built-in image optimizer (`astro:assets`),
which automatically generates appropriately sized/compressed versions at build time. To swap
either image later, just replace the file at that path with the same filename.

## Project structure

```
src/
  components/       Header, Footer
  data/site.ts       firm name, contact info, practice area copy — single source of truth
  layouts/           shared page shell (fonts, meta tags)
  pages/             one file per route (index, about, contact, practice-areas/, blog/, faq/)
  content/blog/      one markdown file per blog post
  content/faq/       one markdown file per FAQ entry
  assets/            logo.png, attorney headshot (optimized automatically by astro:assets)
  styles/global.css  color palette & typography (Tailwind v4)
```

## Deploying

The `npm run build` command outputs a fully static site to `dist/`. That folder can be hosted on
any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or traditional web hosting via
FTP/cPanel. Let me know which host you'd like to use and I can wire up the specific deploy config.
