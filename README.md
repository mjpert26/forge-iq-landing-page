# Forge Partners landing page

Marketing landing page for **Forge Partners**, the commercial real estate referral program of Forge Capital Advisory, a Big Think Capital company. It explains which deals Forge places, how a referral works, what Forge IQ does, and gives partners the shared application link to send to clients.

Built with Next.js (App Router), TypeScript and Tailwind CSS. The page is fully static: sections are server components, and only three small client components ship JavaScript (mobile menu, copy-link control, scroll reveal).

## Requirements

- Node.js 20.9 or later (Node 22 LTS recommended)
- npm (the committed `package-lock.json` is the source of truth)

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Validation and production build

| Command             | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript)   |
| `npm run typecheck` | Generates route types, then runs `tsc --noEmit` |
| `npm run build`     | Production build (static prerender)             |
| `npm run start`     | Serves the production build locally             |
| `npm run check`     | Runs lint, typecheck and build in sequence      |

## Where to edit things

| What                                                                                    | File                                                                                |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Application URL, website link, contact email, site name, page title and description, navigation labels | `src/config/site.ts`                                       |
| Section copy (hero, What We Place, How It Works, Forge IQ intro, referral, disclaimer)   | `src/content/page.ts`                                                               |
| Forge IQ sample deal and Green/Yellow/Red meanings                                       | `src/content/forge-iq.ts`                                                           |
| Brand colours, fonts, buttons, accent stripe, motion                                     | `src/app/globals.css` (`@theme` tokens and component classes)                       |
| Fonts (Anton, Archivo, Barlow Condensed, self-hosted at build time by `next/font`)       | `src/app/layout.tsx`                                                                |
| Section layout                                                                           | `src/components/sections/*`                                                         |
| Logos                                                                                    | `public/brand/` (lockups for dark and light grounds, symbol) and `src/components/ui/ForgeSymbol.tsx` |
| Favicon, Apple touch icon, social sharing image                                          | `src/app/icon.svg`, `src/app/favicon.ico`, `src/app/apple-icon.png`, `src/app/opengraph-image.png` (+ `.alt.txt`) |

Notes:

- **Contact email.** The footer shows `contactEmail` from `src/config/site.ts` (currently `hello@forgecapitaladvisory.com`). Set it to `null` to hide the email link.
- **Disclaimer.** The lender-eligibility disclaimer in `src/content/page.ts` is supplied copy; keep it verbatim unless Compliance approves a change.
- **Forge IQ panel.** The panel is an illustrative, display-only example. It is not a screening tool and has no scoring logic. `ForgeIqPreview` renders any `ScreenResult`, so a future integration can pass in real results.
- **Referral link.** The application link is shared by all partners. It does not identify the referring partner; partners are told to enter their name in the application's referral-source field.
- **Theme.** The page uses a fixed light colour scheme with navy brand sections. It does not switch with the operating system's dark mode, so brand colours and contrast stay as designed.

## Environment configuration

| Variable               | Required | Description                                                                                                  |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical origin, for example `https://partners.example.com` (no trailing slash). Used for canonical, Open Graph, `robots.txt` and `sitemap.xml` URLs. |

If `NEXT_PUBLIC_SITE_URL` is not set, the build falls back to Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, then to `http://localhost:3000`. Copy `.env.example` to `.env.local` for local overrides. `.env*` files are ignored by Git (except `.env.example`). No secrets are required.

## Deploying on Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Vercel detects Next.js automatically. Keep the default build settings (install `npm install`, build `npm run build`, output managed by Next.js). No `vercel.json` is needed.
4. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` for the Production environment once the domain is final.
5. Under **Settings → Git**, confirm the **Production Branch** (normally `main`). Pushes to that branch deploy to production.
6. Every other branch and every pull request gets its own **Preview Deployment** URL, posted on the pull request. Vercel marks preview deployments as `noindex`.
7. Add the custom domain under **Settings → Domains**, then redeploy so canonical URLs use it.

## Project layout

```
references/               Original HTML prototypes (design reference only; not served)
public/brand/             Optimised SVG logo assets
src/app/                  Layout, page, metadata routes, icons, social image, global styles
src/components/sections/  One component per page section (+ client islands)
src/components/ui/        Shared primitives (logo symbol, section heading, reveal)
src/config/site.ts        Business URLs and contact configuration
src/content/              Page copy and Forge IQ sample data
```
