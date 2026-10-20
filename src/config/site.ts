/**
 * Central business configuration. Update URLs and contact details here;
 * every section reads from this file.
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
  name: "Forge Partners",
  title: "Forge Partners · Refer a commercial real estate deal",
  description:
    "Forge Capital Advisory places commercial real estate deals through direct lender relationships. Refer a client, screen the deal in Forge IQ, and send them the application.",
  company: "Forge Capital Advisory",
  parentCompany: "Big Think Capital",
  tagline: "A Big Think Capital Company",

  /** Shared real estate application link. It does not identify the referring partner. */
  applicationUrl: "https://application.bigthinkcapital.com/real-estate",

  website: {
    label: "forgecapitaladvisory.com",
    href: "https://forgecapitaladvisory.com",
  },

  /**
   * Partner contact email. Leave as null until a confirmed address is supplied;
   * the footer omits the email link while this is null.
   */
  contactEmail: null as string | null,
} as const;

export const navLinks = [
  { href: "#place", label: "What We Place" },
  { href: "#how", label: "How It Works" },
  { href: "#iq", label: "Forge IQ" },
] as const;

export const referCta = { href: "#refer", label: "Refer a Deal" } as const;
