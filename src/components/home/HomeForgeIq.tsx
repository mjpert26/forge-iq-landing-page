import { homeIq } from "@/content/home";
import { forgeIq as landingIq } from "@/content/landing";
import { sampleScreen, verdictMeaning, type Verdict } from "@/content/forge-iq";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { ForgeIqPreview, SignalDot } from "@/components/site/ForgeIqPreview";

const order: Verdict[] = ["green", "yellow", "red"];

/**
 * Forge IQ: example screen, answer meanings and features. With `withHead` it
 * carries its own h2 (home page); on /forge-iq it sits under the page h1.
 */
export function HomeForgeIq({ withHead = false, more }: { withHead?: boolean; more?: React.ReactNode }) {
  const H = withHead ? "h3" : "h2";
  const Sub = withHead ? "h4" : "h3";
  return (
    <section
      aria-labelledby={withHead ? "iq-title" : undefined}
      aria-label={withHead ? undefined : "How Forge IQ works"}
      className="bg-navy-deep py-14 text-on-navy nav:py-[4.5rem]"
    >
      <div className="container-site">
        {withHead ? (
          <SiteSectionHead id="iq-title" eyebrow={homeIq.eyebrow} title={homeIq.title} intro={homeIq.intro} tone="dark" />
        ) : null}
        <div className={`grid items-start gap-10 nav:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] ${withHead ? "mt-11" : ""}`}>
          <Reveal>
            <div className="text-ink [&_figure]:shadow-[0_24px_60px_rgb(0_0_0/0.35)]">
              <ForgeIqPreview result={sampleScreen} />
            </div>
            <H className="mt-8 font-display text-base font-bold">{landingIq.legendTitle}</H>
            <ul className="mt-4 grid gap-3.5">
              {order.map((key) => (
                <li key={key} className="grid grid-cols-[1.125rem_minmax(0,1fr)] items-start gap-3">
                  <span className="pt-[3px]">
                    <SignalDot verdict={key} />
                  </span>
                  <div>
                    <Sub className="font-display text-sm font-extrabold tracking-[0.08em] uppercase">
                      {verdictMeaning[key].label}
                    </Sub>
                    <p className="mt-0.5 text-base text-on-navy-muted">{homeIq.outcomes[key]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div>
            <ul>
              {homeIq.features.map((feature, index) => (
                <Reveal
                  as="li"
                  key={feature.title}
                  index={index}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-4 border-t border-navy-line py-5 last:border-b"
                >
                  <span aria-hidden="true" className="headline text-[1.875rem] text-orange">
                    ›
                  </span>
                  <div>
                    <H className="headline headline-md">{feature.title}</H>
                    <p className="mt-1 text-on-navy-muted">{feature.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            {more ? <div className="mt-6">{more}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
