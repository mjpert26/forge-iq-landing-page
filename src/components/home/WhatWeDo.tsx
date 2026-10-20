import { whatWeDo } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { OrangeCell } from "./AboutSections";

export function WhatWeDo() {
  return (
    <section id="what" aria-labelledby="what-title" className="py-14 nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead id="what-title" eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} intro={whatWeDo.intro} />
        <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 nav:grid-cols-4">
          {whatWeDo.jobs.map((job, index) => (
            <OrangeCell key={job.title} as="li" index={index} number={String(index + 1).padStart(2, "0")} {...job} />
          ))}
        </ol>

        <div className="mt-16 grid gap-x-7 gap-y-8 nav:grid-cols-2">
          {whatWeDo.lists.map((list, index) => (
            <Reveal key={list.title} index={index} className="min-w-0 border-t-4 border-orange pt-[1.125rem]">
              <h3 className="headline headline-lg mb-2.5">{list.title}</h3>
              <ul className="mt-2.5 text-muted">
                {list.items.map((item) => (
                  <li key={item} className="border-b border-line py-[7px] last:border-b-0">
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
