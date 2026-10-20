import { audiences, team } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { OrangeCell } from "./AboutSections";

export function Audiences() {
  return (
    <section aria-labelledby="who-title" className="py-14 nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead id="who-title" eyebrow={audiences.eyebrow} title={audiences.title} />
        <div className="mt-10 grid gap-x-7 gap-y-8 nav:grid-cols-3">
          {audiences.items.map((item, index) => (
            <OrangeCell key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Team cards. With `withHead` it carries its own h2; on /team it sits under the page h1. */
export function Team({ withHead = false, more }: { withHead?: boolean; more?: React.ReactNode }) {
  const Name = withHead ? "h3" : "h2";
  return (
    <section
      aria-labelledby={withHead ? "team-title" : undefined}
      aria-label={withHead ? undefined : "Team members"}
      className="border-y border-line bg-paper py-14 nav:py-[4.5rem]"
    >
      <div className="container-site">
        {withHead ? <SiteSectionHead id="team-title" eyebrow={team.eyebrow} title={team.title} /> : null}
        <ul className={`${withHead ? "mt-10 " : ""}grid gap-x-7 gap-y-8 nav:grid-cols-3`}>
          {team.people.map((person, index) => (
            <Reveal as="li" key={person.name} index={index} className="min-w-0 border-t-[6px] border-orange pt-[1.125rem]">
              <p className="eyebrow !tracking-[0.18em]">{person.role}</p>
              <Name className="headline mt-2 text-[clamp(1.875rem,1.4rem+1.6vw,2.5rem)]">{person.name}</Name>
              <p className="mt-2.5 text-muted">{person.body}</p>
            </Reveal>
          ))}
        </ul>
        {more ? <div className="mt-8">{more}</div> : null}
      </div>
    </section>
  );
}
