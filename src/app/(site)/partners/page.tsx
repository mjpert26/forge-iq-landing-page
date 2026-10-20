import { pageMeta } from "@/config/site";
import { homePartners } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { PartnerProgram } from "@/components/home/HomePartners";

export const metadata = pageMetadata(pageMeta.partners);

export default function PartnersPage() {
  return (
    <>
      <PageHero eyebrow={homePartners.eyebrow} title={homePartners.title} intro={homePartners.intro} />
      <PartnerProgram />
    </>
  );
}
