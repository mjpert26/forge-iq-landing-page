import { about, problem, theName } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

export function OrangeCell({
  title,
  body,
  index,
  tone = "light",
  number,
  as,
  level = "h3",
}: {
  title: string;
  body: string;
  index: number;
  tone?: "light" | "dark";
  number?: string;
  as?: "div" | "li";
  /** Heading level for the cell title; h2 when the cell sits directly under a page h1. */
  level?: "h2" | "h3";
}) {
  const Title = level;
  return (
    <Reveal as={as} index={index} className="min-w-0 border-t-4 border-orange pt-[1.125rem]">
      {number ? (
        <span aria-hidden="true" className="headline mb-1.5 block text-[3.25rem] text-orange">
          {number}
        </span>
      ) : null}
      <Title className="headline headline-lg mb-2.5">{title}</Title>
      <p className={tone === "dark" ? "text-on-navy-muted" : "text-muted"}>{body}</p>
    </Reveal>
  );
}

/** Dedicated / Backed / Connected. With `withHead` it carries its own h2 (home page). */
export function About({ withHead = false, more }: { withHead?: boolean; more?: React.ReactNode }) {
  return (
    <section
      aria-labelledby={withHead ? "about-title" : undefined}
      aria-label={withHead ? undefined : "Who we are"}
      className="py-14 nav:py-[4.5rem]"
    >
      <div className="container-site">
        {withHead ? <SiteSectionHead id="about-title" eyebrow={about.eyebrow} title={about.title} intro={about.intro} /> : null}
        <div className={`grid gap-x-7 gap-y-8 nav:grid-cols-3 ${withHead ? "mt-10" : ""}`}>
          {about.pillars.map((item, index) => (
            <OrangeCell key={item.title} index={index} level={withHead ? "h3" : "h2"} {...item} />
          ))}
        </div>
        {more ? <div className="mt-8">{more}</div> : null}
      </div>
    </section>
  );
}

export function TheName() {
  return (
    <section aria-labelledby="name-title" className="border-y border-line bg-paper py-14 nav:py-[4.5rem]">
      <div className="container-site grid items-center gap-12 nav:grid-cols-2">
        <div>
          <h2 id="name-title" className="eyebrow !tracking-[0.18em]">
            {theName.eyebrow}
          </h2>
          <p className="headline mt-3 flex items-end gap-1.5 text-[clamp(6rem,3rem+12vw,12.5rem)] !leading-[0.85]">
            {theName.word}
            <span aria-hidden="true" className="mb-[0.02em] inline-block size-[0.22em] bg-blue" />
          </p>
        </div>
        <div>
          <p className="mt-2 font-display text-[clamp(1.5rem,1.1rem+1.4vw,2rem)] leading-[1.2] font-extrabold">
            {theName.definition}
          </p>
          <p className="mt-[1.125rem] max-w-[40em] text-[1.1875rem] text-muted">{theName.body}</p>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="bg-navy-deep py-14 text-on-navy nav:py-[4.5rem]">
      <div className="container-site">
        <h2 id="problem-title" className="eyebrow !tracking-[0.18em] !text-orange">
          {problem.eyebrow}
        </h2>
        <div className="mt-5 grid gap-x-7 gap-y-8 nav:grid-cols-3">
          {problem.items.map((item, index) => (
            <OrangeCell key={item.title} index={index} tone="dark" {...item} />
          ))}
        </div>
        <p className="headline mt-12 inline-flex items-center gap-3 text-[clamp(2.125rem,1.4rem+2.6vw,3.25rem)]">
          {problem.fix}
          <span aria-hidden="true" className="text-orange">
            ›
          </span>
        </p>
      </div>
    </section>
  );
}

