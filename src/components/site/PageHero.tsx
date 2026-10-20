import { Headline } from "@/components/ui/Headline";

type PageHeroProps = {
  eyebrow: string;
  title: { lead: string; accent?: string };
  intro?: string;
};

/** Navy page header used at the top of every inner site page. */
export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  const i = (n: number) => ({ "--i": n }) as React.CSSProperties;
  return (
    <section aria-labelledby="page-title" className="bg-navy text-on-navy">
      <div className="container-site pt-12 pb-14 nav:pt-16 nav:pb-[4.5rem]">
        <p className="eyebrow stagger-in !tracking-[0.18em] !text-orange" style={i(0)}>
          {eyebrow}
        </p>
        <div className="stagger-in" style={i(1)}>
          <Headline
            as="h1"
            id="page-title"
            text={title}
            className="mt-3 max-w-[18ch] text-[clamp(2.75rem,1.4rem+5vw,5.25rem)] !leading-[0.95]"
          />
        </div>
        {intro ? (
          <p className="stagger-in mt-5 max-w-[38em] text-[1.1875rem] text-on-navy-muted" style={i(2)}>
            {intro}
          </p>
        ) : null}
      </div>
      <div className="h-2.5 bg-orange" aria-hidden="true" />
    </section>
  );
}
