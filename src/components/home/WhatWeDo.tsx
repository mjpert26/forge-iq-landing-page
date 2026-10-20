import { whatWeDo } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { OrangeCell } from "./AboutSections";

/** Find / Structure / Place / Close. With `withHead` it carries its own h2 (home page). */
export function Jobs({ withHead = false, more }: { withHead?: boolean; more?: React.ReactNode }) {
  return (
    <section
      aria-labelledby={withHead ? "what-title" : undefined}
      aria-label={withHead ? undefined : "Four jobs on every file"}
      className="py-14 nav:py-[4.5rem]"
    >
      <div className="container-site">
        {withHead ? (
          <SiteSectionHead id="what-title" eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} intro={whatWeDo.intro} />
        ) : null}
        <ol className={`grid gap-x-6 gap-y-8 sm:grid-cols-2 nav:grid-cols-4 ${withHead ? "mt-10" : ""}`}>
          {whatWeDo.jobs.map((job, index) => (
            <OrangeCell
              key={job.title}
              as="li"
              index={index}
              level={withHead ? "h3" : "h2"}
              number={String(index + 1).padStart(2, "0")}
              {...job}
            />
          ))}
        </ol>
        {more ? <div className="mt-8">{more}</div> : null}
      </div>
    </section>
  );
}

/** Transaction types and property use. */
export function DealTypes() {
  return (
    <section aria-label="Deals we place" className="border-t border-line bg-paper py-14 nav:py-[4.5rem]">
      <div className="container-site grid gap-x-7 gap-y-8 nav:grid-cols-2">
        {whatWeDo.lists.map((list, index) => (
          <Reveal key={list.title} index={index} className="min-w-0 border-t-4 border-orange pt-[1.125rem]">
            <h2 className="headline headline-lg mb-2.5">{list.title}</h2>
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
    </section>
  );
}
