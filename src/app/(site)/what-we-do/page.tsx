import { pageMeta } from "@/config/site";
import { whatWeDo } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { DealTypes, Jobs } from "@/components/home/WhatWeDo";
import { DealProcess } from "@/components/home/DealProcess";
import { Audiences } from "@/components/home/PeopleSections";

export const metadata = pageMetadata(pageMeta.whatWeDo);

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} intro={whatWeDo.intro} />
      <Jobs />
      <DealTypes />
      <DealProcess />
      <Audiences />
    </>
  );
}
