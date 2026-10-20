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

  /** Contact email used in the contact card and footer. Set to null to hide email links. */
  contactEmail: "hello@forgecapitaladvisory.com" as string | null,
} as const;

/** Per-page titles and descriptions. */
export const pageMeta = {
  home: {
    title: "Forge Capital Advisory · Commercial real estate capital",
    description:
      "Forge Capital Advisory is Big Think Capital’s commercial real estate division. We structure each deal and use Forge IQ to place it with the right lender.",
  },
  partners: {
    title: "Forge Partners · Refer a commercial real estate deal",
    description:
      "Forge Capital Advisory places commercial real estate deals through direct lender relationships. Refer a client, screen the deal in Forge IQ, and send them the application.",
  },
} as const;

export type NavLink = { href: string; label: string };

/** Main site navigation (header, mobile menu and footer). */
export const siteNav: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#what", label: "What we do" },
  { href: "/#iq", label: "Forge IQ" },
  { href: "/#team", label: "Team" },
  { href: "/partners", label: "Partners" },
];

export const contactLink: NavLink = { href: "/#contact", label: "Contact" };

/** Header call to action per page. */
export const headerCta = {
  home: { href: "#contact", label: "Start a deal" },
  partners: { href: "#refer", label: "Refer a deal" },
} as const;

/** In-page links shown on the partner page below the hero. */
export const partnerSectionNav: NavLink[] = [
  { href: "#place", label: "What we place" },
  { href: "#how", label: "How it works" },
  { href: "#iq", label: "Forge IQ" },
  { href: "#refer", label: "Refer a deal" },
];
