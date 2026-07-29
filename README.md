# QP Quintet — Marketing Site

The public marketing site for QP Quintet Ventures Canada Inc., a Canada–India trade and investment company. Built with Next.js App Router, covering the homepage, an about page with real team bios, and a working Resend-backed contact form.

## Tech Stack

- **Next.js (App Router)** — framework and routing
- **TypeScript** — strict mode
- **Tailwind CSS v4** — styling
- **GSAP** — animation library (installed as a dependency; not currently wired into any component)
- **Lenis** — smooth scrolling, mounted via `components/SmoothScroll.tsx`
- **Resend** — transactional email for the contact form

## Getting Started

### Prerequisites

- Node.js 20.9+ (required by Next.js 16)
- pnpm

### Setup

```bash
git clone <repo-url>
cd qpquintet-web
pnpm install
```

### Environment variables

Copy the example file and fill in the values (see [Environment Variables](#environment-variables) below):

```bash
cp .env.local.example .env.local
```

Without `RESEND_API_KEY` set, the app still runs, but the contact form (`/contact`) will fail every submission with a clear "Email sending is not configured" error rather than silently doing nothing.

### Run the dev server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Lint and build

```bash
pnpm lint
pnpm build
```

Both must pass with zero errors before opening a PR.

## Project Structure

- **`app/`** — routes (Next.js App Router). Each folder is a route; `page.tsx` is the route's content, `layout.tsx` is the shared root layout (fonts, header, footer).
  - `/` (`app/page.tsx`) — homepage: hero with the animated Canada ⇆ India trade-route globe, a positioning statement, focus areas, and a contact teaser.
  - `/about` (`app/about/page.tsx` + `AboutTeams.tsx`) — real founder and team bios, split into an India Wing and a Canada Wing.
  - `/contact` (`app/contact/page.tsx` + `ContactForm.tsx`) — the working contact form, plus a direct email fallback.
  - `/bulk-order` (`app/bulk-order/page.tsx`) — a "coming soon" placeholder; not linked from the main nav.
  - `app/api/contact/route.ts` — the POST route handler the contact form submits to. Validates the payload server-side and sends a notification email via Resend.
- **`components/`** — shared UI used across routes: site header/footer, section headings, the trade-route globe illustration, contact-form building blocks, coming-soon page/notice, and the person-avatar initials component used on `/about`.
- **`lib/`** — shared, non-UI code:
  - `site-config.ts` — the single source of truth for the company name, tagline, description, contact email, head office location, canonical routes, and nav links. Also documents a standing content rule (see [Content Guardrails](#content-guardrails)).
  - `validation.ts` — the email regex and validation-message strings shared by both the client form and the server route, so the two can't drift apart.
  - `reduced-motion.ts` — the shared `prefers-reduced-motion` media query string used by any component that needs to check it in JS.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes, for the contact form to send email | Resend API key used by `app/api/contact/route.ts`. Get one at [resend.com/api-keys](https://resend.com/api-keys). |

The contact form currently sends from Resend's default sending domain (`onboarding@resend.dev`), since `qpquintet.ca` is not yet verified as a sending domain in Resend. See the `TODO` comment in `app/api/contact/route.ts` — update the `from` address there once the domain is verified.

## Deployment

This site is deployed via **Vercel**. For the contact form to work in production, `RESEND_API_KEY` must be set in the Vercel project's Environment Variables (Project Settings → Environment Variables) — it is never read from a committed file.

## Feature Status

**Live:**
- Homepage
- About page with real team bios (India Wing, Canada Wing)
- Working contact form, backed by Resend

**Intentionally "coming soon":**
- `/bulk-order` — placeholder page; not in the main nav, referenced only via a small footer mention

**Removed:**
- A `/retailers` route existed earlier in this project's history and was removed entirely — there are no retailer partnerships to list yet, and no retailer-finder anywhere on the site currently.

## Content Guardrails

`lib/site-config.ts` carries a standing content rule as a comment directly above the `siteConfig` export:

> Do not name "spices and masalas" (or any other specific commodity) as the company's current focus, primary activity, or defining category anywhere on the site outside of the Focus Areas section's explicit "starting point, not our identity" framing. The company's positioning is deliberately category-agnostic.

This isn't enforced by the compiler — it exists because that exact phrasing was independently reintroduced into multiple sections of the site across earlier revisions, traced back to `siteConfig.description` being the one field new copy kept echoing. If you're writing new copy anywhere on the site, read that comment first.

## Contributing

Changes are made on the `core-implementation` branch and go to `main` via pull request, reviewed by Sarshad.
