import { whatWePlace } from "@/content/partners";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWePlace() {
  return (
    <section id="place" aria-labelledby="place-title" className="border-y border-line bg-paper py-14 md:py-16">
      <div className="container-page">
        <SectionHeading
          id="place-title"
          eyebrow={whatWePlace.kicker}
          title={whatWePlace.title}
          intro={whatWePlace.intro}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-5">
          {whatWePlace.groups.map((group, index) => (
            <Reveal key={group.title} index={index} className="min-w-0">
              <h3 className="mb-2 text-[1.1875rem] font-bold">{group.title}</h3>
              <ul className="mt-2 list-disc pl-[1.125rem] text-muted">
                {group.items.map((item) => (
                  <li key={item} className="mt-1">
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
