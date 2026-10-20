import { pageMeta } from "@/config/site";
import { about } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { About, Problem, TheName } from "@/components/home/AboutSections";
import { Roadmap } from "@/components/home/ClosingSections";

export const metadata = pageMetadata(pageMeta.about);

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} intro={about.intro} />
      <About />
      <TheName />
      <Problem />
      <Roadmap />
    </>
  );
}
