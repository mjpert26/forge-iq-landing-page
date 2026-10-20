import { siteConfig } from "@/config/site";
import { contact, roadmap } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";
import { MoreLink } from "@/components/ui/MoreLink";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/site/CopyEmail";

export function Roadmap() {
  return (
    <section aria-labelledby="growth-title" className="py-14 nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead id="growth-title" eyebrow={roadmap.eyebrow} title={roadmap.title} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {roadmap.tiles.map((tile, index) => (
            <Reveal
              as="li"
              key={tile.title}
              index={index}
              className={`min-w-0 rounded px-7 pt-7 pb-[1.875rem] ${tile.current ? "bg-orange text-navy" : "bg-navy-card text-on-navy"}`}
            >
              <p
                className={`font-display text-xs font-bold tracking-[0.2em] uppercase ${tile.current ? "text-navy" : "text-orange"}`}
              >
                {tile.when}
                {tile.current ? <span aria-hidden="true"> ›</span> : null}
              </p>
              <h3 className="headline mt-2.5 text-[clamp(1.875rem,1.3rem+2vw,2.75rem)]">{tile.title}</h3>
              <p className={`mt-2.5 text-base ${tile.current ? "text-[#2b1a0e]" : "text-on-navy-muted"}`}>{tile.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Contact card section for /contact (the page h1 is in the page header). */
export function ContactCard() {
  return (
    <section aria-label="Email the team" className="py-14 nav:py-[4.5rem]">
      <div className="container-site grid items-start gap-10 nav:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {siteConfig.contactEmail ? (
          <CopyEmail email={siteConfig.contactEmail} label={contact.cardLabel} hint={contact.hint} />
        ) : null}
        <div className="border-t-4 border-orange pt-[1.125rem]">
          <h2 className="headline headline-lg">{contact.partnerTitle}</h2>
          <p className="mt-2.5 text-muted">{contact.partnerBody}</p>
          <div className="mt-4">
            <MoreLink href="/partners" label="Partner program" />
          </div>
        </div>
      </div>
    </section>
  );
}
