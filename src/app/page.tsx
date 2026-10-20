import { headerCta, pageMeta } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SkipLink } from "@/components/site/SkipLink";
import { HomeHero } from "@/components/home/HomeHero";
import { About, Problem, TheName } from "@/components/home/AboutSections";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HomeForgeIq } from "@/components/home/HomeForgeIq";
import { DealProcess } from "@/components/home/DealProcess";
import { Audiences, Team } from "@/components/home/PeopleSections";
import { HomePartners } from "@/components/home/HomePartners";
import { Contact, Roadmap } from "@/components/home/ClosingSections";

export const metadata = pageMetadata({ ...pageMeta.home, path: "/" });

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader cta={headerCta.home} current="/" />
      <main id="main" tabIndex={-1} className="outline-none">
        <HomeHero />
        <About />
        <TheName />
        <Problem />
        <WhatWeDo />
        <HomeForgeIq />
        <DealProcess />
        <Audiences />
        <Team />
        <HomePartners />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
