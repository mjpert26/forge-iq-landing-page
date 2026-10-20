import { pageMeta } from "@/config/site";
import { contact } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { ContactCard } from "@/components/home/ClosingSections";

export const metadata = pageMetadata(pageMeta.contact);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro} />
      <ContactCard />
    </>
  );
}
