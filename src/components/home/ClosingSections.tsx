import { siteConfig } from "@/config/site";
import { contact, roadmap } from "@/content/home";
import { Headline, SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/site/CopyEmail";

export function Roadmap() {
  return (
    <section id="growth" aria-labelledby="growth-title" className="py-14 nav:py-[4.5rem]">
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

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-paper">
      <div className="container-site grid items-center gap-10 py-14 nav:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] nav:py-20">
        <div>
          <p className="eyebrow !tracking-[0.18em]">{contact.eyebrow}</p>
          <Headline
            text={contact.title}
            id="contact-title"
            className="mt-3 text-[clamp(3rem,1.6rem+5.4vw,5.5rem)] !leading-[0.92]"
          />
          <p className="mt-4 max-w-[40em] text-[1.1875rem] text-muted">{contact.intro}</p>
        </div>
        {siteConfig.contactEmail ? (
          <CopyEmail email={siteConfig.contactEmail} label={contact.cardLabel} hint={contact.hint} />
        ) : null}
      </div>
    </section>
  );
}
