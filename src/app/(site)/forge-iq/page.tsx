import { pageMeta } from "@/config/site";
import { homeIq } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { MoreLink } from "@/components/ui/MoreLink";
import { PageHero } from "@/components/site/PageHero";
import { HomeForgeIq } from "@/components/home/HomeForgeIq";

export const metadata = pageMetadata(pageMeta.forgeIq);

export default function ForgeIqPage() {
  return (
    <>
      <PageHero eyebrow={homeIq.eyebrow} title={homeIq.title} intro={homeIq.intro} />
      <HomeForgeIq more={<MoreLink href="/partners" label="Partner program" tone="dark" />} />
    </>
  );
}
