/**
 * Central business configuration. Update URLs, navigation and contact details
 * here; every page and section reads from this file.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  /** Canonical origin. Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is final. */
  url: resolveSiteUrl(),
  name: "Forge Capital Advisory",
  company: "Forge Capital Advisory",
  parentCompany: "Big Think Capital",
  tagline: "A Big Think Capital Company",

  /** Shared real estate application link. It does not identify the referring partner. */
  applicationUrl: "https://application.bigthinkcapital.com/real-estate",

  website: {
    label: "forgecapitaladvisory.com",
    href: "https://forgecapitaladvisory.com",
  },

  /** Contact email used on the contact page, footers and the referral landing page. */
  contactEmail: "hello@forgecapitaladvisory.com" as string | null,
} as const;

export type NavLink = { href: string; label: string };

/** Main site navigation (header, mobile menu and footer). */
export const siteNav: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/forge-iq", label: "Forge IQ" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
];

export const contactLink: NavLink = { href: "/contact", label: "Contact" };

/** Header call to action on every site page. */
export const siteCta: NavLink = { href: "/contact", label: "Start a deal" };

/**
 * Standalone referral landing page. It has no links to other site pages:
 * only in-page anchors and the external application link.
 */
export const landingPath = "/refer";
export const landingNav: NavLink[] = [
  { href: "#place", label: "What We Place" },
  { href: "#how", label: "How It Works" },
  { href: "#iq", label: "Forge IQ" },
];
export const landingCta: NavLink = { href: "#refer", label: "Refer a Deal" };

/** Per-page titles and descriptions. */
export const pageMeta = {
  home: {
    path: "/",
    title: "Forge Capital Advisory · Commercial real estate capital",
    description:
      "Forge Capital Advisory is Big Think Capital’s commercial real estate division. We structure each deal and use Forge IQ to place it with the right lender.",
  },
  about: {
    path: "/about",
    title: "About · Forge Capital Advisory",
    description:
      "Forge is Big Think Capital’s commercial real estate division: dedicated specialists, the backing of Big Think Capital, and direct lender relationships.",
  },
  whatWeDo: {
    path: "/what-we-do",
    title: "What we do · Forge Capital Advisory",
    description:
      "Find, structure, place and close. Acquisition, refinance, cash-out and bridge capital for investment and owner-occupied commercial property.",
  },
  forgeIq: {
    path: "/forge-iq",
    title: "Forge IQ · Forge Capital Advisory",
    description:
      "Forge IQ, our deal-placement engine, scores a deal against the lender programs we place with and returns green, yellow or red.",
  },
  team: {
    path: "/team",
    title: "Team · Forge Capital Advisory",
    description: "The Forge Capital Advisory team: commercial real estate, operations and processing.",
  },
  partners: {
    path: "/partners",
    title: "Partner program · Forge Capital Advisory",
    description:
      "ISOs, brokers, agents, CPAs, attorneys and loan officers: refer commercial real estate deals to Forge and get updates until they fund.",
  },
  contact: {
    path: "/contact",
    title: "Contact · Forge Capital Advisory",
    description: "Tell us about the property and the ask. You’ll hear back from a person, not a portal.",
  },
  refer: {
    path: landingPath,
    title: "Forge Partners · Refer a commercial real estate deal",
    description:
      "Forge Capital Advisory places commercial real estate deals through direct lender relationships. Refer a client, screen the deal in Forge IQ, and send them the application.",
  },
} as const;
