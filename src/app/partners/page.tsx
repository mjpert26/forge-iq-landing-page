import { headerCta, pageMeta, partnerSectionNav } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SkipLink } from "@/components/site/SkipLink";
import { Hero } from "@/components/partners/Hero";
import { WhatWePlace } from "@/components/partners/WhatWePlace";
import { HowItWorks } from "@/components/partners/HowItWorks";
import { ForgeIq } from "@/components/partners/ForgeIq";
import { ReferDeal } from "@/components/partners/ReferDeal";

export const metadata = pageMetadata({ ...pageMeta.partners, path: "/partners" });

export default function PartnersPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader cta={headerCta.partners} current="/partners" />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <nav aria-label="On this page" className="border-b border-line bg-paper">
          <div className="container-page flex gap-x-6 overflow-x-auto">
            {partnerSectionNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-12 shrink-0 items-center font-display text-xs font-bold tracking-[0.08em] text-muted uppercase no-underline hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <WhatWePlace />
        <HowItWorks />
        <ForgeIq />
        <ReferDeal />
      </main>
      <SiteFooter />
    </>
  );
}
