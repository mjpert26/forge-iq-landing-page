import { pageMeta } from "@/config/site";
import { team } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { Team } from "@/components/home/PeopleSections";

export const metadata = pageMetadata(pageMeta.team);

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow={team.eyebrow} title={team.title} />
      <Team />
    </>
  );
}
