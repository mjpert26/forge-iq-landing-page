# Forge Capital Advisory website

Marketing website for **Forge Capital Advisory**, the commercial real estate division of Big Think Capital. It has a multi-page company site and a standalone referral landing page:

| Route          | Page                                                                                   |
| -------------- | -------------------------------------------------------------------------------------- |
| `/`            | Home: hero, previews of each area with links, partner and contact call-outs            |
| `/about`       | Who we are, the name, the problem, built to grow                                       |
| `/what-we-do`  | Find / Structure / Place / Close, transaction types, deal process, who we work with    |
| `/forge-iq`    | Forge IQ: example screen, Green / Yellow / Red, features                               |
| `/team`        | Team                                                                                   |
| `/partners`    | Partner program: steps, referral link, assurances                                      |
| `/contact`     | Contact email card                                                                     |
| `/refer`       | Standalone referral landing page for partners. It deliberately links nowhere else on the site: no site navigation, the logo is not a link, and the only outbound links are the application and the contact email. Share this URL with referral partners. |

Built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is fully static: sections are server components, and only small client components ship JavaScript (mobile menu, copy-link and copy-email controls, scroll reveal).

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

| What                                                        | File                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| Application URL, website link, contact email, navigation, header CTAs, page titles and descriptions | `src/config/site.ts` |
| Company site copy (all site pages)                          | `src/content/home.ts`                                        |
| Referral landing page copy (`/refer`)                       | `src/content/landing.ts`                                     |
| Lender-eligibility disclaimer and copyright line            | `src/content/legal.ts`                                       |
| Forge IQ sample deal and Green/Yellow/Red meanings          | `src/content/forge-iq.ts`                                    |
| Brand colours, fonts, buttons, headline styles, motion      | `src/app/globals.css` (`@theme` tokens and component classes) |
| Fonts (Barlow Condensed, Montserrat, Source Sans 3, self-hosted by `next/font`) | `src/app/layout.tsx`                      |
| Site pages and shared layout                                | `src/app/(site)/*` (each folder is a page; `layout.tsx` adds header and footer) |
| Site sections                                               | `src/components/home/*`                                      |
| Landing page and its header/footer                          | `src/app/(landing)/refer/page.tsx`, `src/components/landing/*` |
| Shared header, footer, mobile menu, copy controls, Forge IQ preview | `src/components/site/*`                              |
| Logos (gradient Forge symbol)                               | `public/brand/` and `src/components/ui/ForgeSymbol.tsx`      |
| Favicon, Apple icon, social images                          | `src/app/icon.svg`, `favicon.ico`, `apple-icon.png`, `opengraph-image.png`; landing page image in `src/app/(landing)/refer/` |

Notes:

- **Contact email.** The contact card and footer use `contactEmail` from `src/config/site.ts` (currently `hello@forgecapitaladvisory.com`). The supplied design showed `hello@forge.com`; it was replaced with the confirmed address. Set it to `null` to hide email links.
- **Team.** Names and roles on the home page are supplied copy in `src/content/home.ts`.
- **Disclaimer.** The lender-eligibility disclaimer in `src/content/legal.ts` is supplied copy; keep it verbatim unless Compliance approves a change.
- **Forge IQ panel.** The panel is an illustrative, display-only example. It is not a screening tool and has no scoring logic. `ForgeIqPreview` renders any `ScreenResult`, so a future integration can pass in real results.
- **Referral link.** The application link is shared by all partners. It does not identify the referring partner; partners are told to enter their name in the application's referral-source field.
- **Theme.** The page uses a fixed light colour scheme with navy brand sections. It does not switch with the operating system's dark mode, so brand colours and contrast stay as designed.

## Environment configuration

| Variable               | Required | Description                                                                                                  |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical origin, for example `https://www.forgecapitaladvisory.com` (no trailing slash; use the domain Vercel marks as primary). Used for canonical, Open Graph, `robots.txt` and `sitemap.xml` URLs. |

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
references/               HTML prototypes (design reference only; not served).
                          "Forge Capital Advisory site.html" is the current home page design;
                          "Forge Partners (updated).html" is the current partner page design.
public/brand/             Optimised SVG logo assets
src/app/                  Layout, page, metadata routes, icons, social image, global styles
src/app/(site)/           Company site pages (shared header/footer in layout.tsx)
src/app/(landing)/refer/  Standalone referral landing page
src/components/home/      Company site sections
src/components/landing/   Landing page sections, header and footer
src/components/site/      Shared header, footer and client islands
src/components/ui/        Shared primitives (logo symbol, section heading, reveal)
src/config/site.ts        Business URLs, navigation and contact configuration
src/content/              Page copy, legal text and Forge IQ sample data
src/lib/                  Clipboard and metadata helpers
```
