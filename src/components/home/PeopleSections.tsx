import { audiences, team } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { OrangeCell } from "./AboutSections";

export function Audiences() {
  return (
    <section id="who" aria-labelledby="who-title" className="py-14 nav:py-[4.5rem]">
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

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="border-y border-line bg-paper py-14 nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead id="team-title" eyebrow={team.eyebrow} title={team.title} />
        <ul className="mt-10 grid gap-x-7 gap-y-8 nav:grid-cols-3">
          {team.people.map((person, index) => (
            <Reveal as="li" key={person.name} index={index} className="min-w-0 border-t-[6px] border-orange pt-[1.125rem]">
              <p className="eyebrow !tracking-[0.18em]">{person.role}</p>
              <h3 className="headline mt-2 text-[clamp(1.875rem,1.4rem+1.6vw,2.5rem)]">{person.name}</h3>
              <p className="mt-2.5 text-muted">{person.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
