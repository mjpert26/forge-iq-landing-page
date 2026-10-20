import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { WhatWePlace } from "@/components/sections/WhatWePlace";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForgeIq } from "@/components/sections/ForgeIq";
import { ReferDeal } from "@/components/sections/ReferDeal";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-orange px-4 py-3 font-bold text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <div id="top" />
        <Hero />
        <WhatWePlace />
        <HowItWorks />
        <ForgeIq />
        <ReferDeal />
      </main>
      <SiteFooter />
    </>
  );
}
