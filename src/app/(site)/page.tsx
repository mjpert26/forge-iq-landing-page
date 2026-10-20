import { pageMeta } from "@/config/site";
import { contact, homePartners } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { MoreLink } from "@/components/ui/MoreLink";
import { HomeHero } from "@/components/home/HomeHero";
import { About } from "@/components/home/AboutSections";
import { Jobs } from "@/components/home/WhatWeDo";
import { HomeForgeIq } from "@/components/home/HomeForgeIq";
import { Audiences } from "@/components/home/PeopleSections";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = pageMetadata(pageMeta.home);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <About withHead more={<MoreLink href="/about" label="More about Forge" />} />
      <Jobs withHead more={<MoreLink href="/what-we-do" label="See what we do" />} />
      <HomeForgeIq withHead more={<MoreLink href="/forge-iq" label="Explore Forge IQ" tone="dark" />} />
      <Audiences />
      <CtaBand
        id="home-partners-title"
        eyebrow={homePartners.eyebrow}
        title={homePartners.title}
        intro={homePartners.intro}
        cta={{ href: "/partners", label: "Partner program" }}
        tone="dark"
      />
      <CtaBand
        id="home-contact-title"
        eyebrow={contact.eyebrow}
        title={contact.title}
        intro={contact.intro}
        cta={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
