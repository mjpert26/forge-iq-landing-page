import { whatWePlace } from "@/content/page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWePlace() {
  return (
    <section id="place" aria-labelledby="place-title" className="py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          id="place-title"
          kicker={whatWePlace.kicker}
          title={whatWePlace.title}
          intro={whatWePlace.intro}
        />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {whatWePlace.groups.map((group, index) => (
            <Reveal key={group.title} index={index}>
              <h3 className="mb-3 text-xl leading-snug font-bold text-blue">{group.title}</h3>
              <ul className="border-t-[3px] border-orange">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-line py-3.5 leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
