# Colwell Law Office, LLC — Website

Built with [Astro](https://astro.build) — a fast, static-first framework well suited to a
marketing/brochure site like this one — and deployed on Cloudflare Pages. The contact form is
handled by a small Cloudflare Pages Function (see below), everything else is plain static
HTML/CSS.

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

## Setting up the contact form (required, one-time)

The form at `/contact/` posts to `/api/contact`, a Cloudflare Pages Function
(`functions/api/contact.js`) that emails the submission to you via
[Resend](https://resend.com) — a transactional email API with a generous free tier. Until this is
configured, submissions will show a friendly "not fully set up yet" message instead of failing
silently.

**One-time setup, in the Cloudflare dashboard:**

1. Create a free account at [resend.com](https://resend.com) and grab an API key.
2. (Recommended) In Resend, verify `colwelllawoffice.com` as a sending domain — this improves
   deliverability so your emails don't land in spam. Until then, it'll send from Resend's shared
   `onboarding@resend.dev` address, which still works.
3. In your Cloudflare Pages project → **Settings → Environment variables**, add:
   - `RESEND_API_KEY` — the API key from step 1 (mark it as a "secret")
   - `CONTACT_TO_EMAIL` — optional, defaults to `alex@colwelllawoffice.com`
   - `CONTACT_FROM_EMAIL` — optional, e.g. `"Colwell Law Office Website <contact@colwelllawoffice.com>"`
     once your domain is verified in step 2
4. Redeploy (or trigger a new deployment) so the Function picks up the new variables.

That's it — submissions will land in your inbox, with the visitor's email set as the reply-to
address so you can just hit "reply."

**Spam protection:** the form includes an invisible honeypot field — real visitors never see or
fill it, but simple bots that auto-fill every field will trip it, and their submission is silently
discarded. If spam becomes a problem despite that, adding
[Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) (Cloudflare's free CAPTCHA
alternative) to the form would be the next step.

**Testing locally:** `npm run dev` / `npm run preview` do *not* run Pages Functions. To test the
actual function locally: `npm run build && npx wrangler pages dev ./dist`, optionally with
`--binding RESEND_API_KEY=your_key_here` to test a real send.

## What still needs your input

1. **Blog post dates** — the migrated posts in `src/content/blog/` were given placeholder
   `pubDate` values (spaced out, all before today) since the original publish dates weren't
   provided. Let me know the real dates if you'd like them corrected.
2. **About page bio details** — `src/pages/about.astro` has a starting bio; send over any details
   you want added (law school, bar admissions, community involvement, etc.).

Everything else requested so far — the office address removed in favor of "serving Wisconsin
virtually," years of experience, real client testimonials, flat-fee pricing, and 5 migrated blog
posts — is already wired in.

The logo (`src/assets/logo.png`) and headshot (`src/assets/alexander-colwell-headshot.jpg`) are
processed through Astro's built-in image optimizer (`astro:assets`), which automatically generates
appropriately sized/compressed versions at build time. To swap either image later, just replace
the file at that path with the same filename.

## Project structure

```
src/
  components/         Header, Footer, CtaBanner, TrustBar, Testimonials, FaqAccordion
  data/site.ts         firm info, pricing, trust builders, testimonials, practice areas — single source of truth
  layouts/             shared page shell (fonts, meta tags, JSON-LD)
  pages/               one file per route (index, about, contact, practice-areas/, resources/, blog/, faq/)
  content/blog/        one markdown file per blog post
  content/faq/         one markdown file per FAQ entry
  assets/              logo.png, attorney headshot (optimized automatically by astro:assets)
  styles/global.css    color palette & typography (Tailwind v4)
functions/api/contact.js   Cloudflare Pages Function that emails contact form submissions
```

## Deploying

`npm run build` outputs a fully static site to `dist/`, deployed to Cloudflare Pages. Cloudflare
automatically picks up the `functions/` directory alongside the static build for the contact form
endpoint — no extra configuration needed beyond the environment variables above.
