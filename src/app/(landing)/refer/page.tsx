import { pageMeta } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { SkipLink } from "@/components/site/SkipLink";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { Hero } from "@/components/landing/Hero";
import { WhatWePlace } from "@/components/landing/WhatWePlace";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForgeIq } from "@/components/landing/ForgeIq";
import { ReferDeal } from "@/components/landing/ReferDeal";

export const metadata = pageMetadata(pageMeta.refer);

/**
 * Standalone referral landing page. Deliberately has no links to other site
 * pages: only in-page anchors, the external application link and the email.
 */
export default function ReferPage() {
  return (
    <>
      <SkipLink />
      <LandingHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <WhatWePlace />
        <HowItWorks />
        <ForgeIq />
        <ReferDeal />
      </main>
      <LandingFooter />
    </>
  );
}
