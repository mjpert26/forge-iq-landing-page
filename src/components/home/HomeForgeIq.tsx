import { homeIq } from "@/content/home";
import { sampleScreen, verdictMeaning, type Verdict } from "@/content/forge-iq";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { ForgeIqPreview, SignalDot } from "@/components/site/ForgeIqPreview";

const order: Verdict[] = ["green", "yellow", "red"];

export function HomeForgeIq() {
  return (
    <section id="iq" aria-labelledby="iq-title" className="bg-navy-deep py-14 text-on-navy nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead id="iq-title" eyebrow={homeIq.eyebrow} title={homeIq.title} intro={homeIq.intro} tone="dark" />
        <div className="mt-11 grid items-start gap-10 nav:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <Reveal>
            <div className="text-ink [&_figure]:shadow-[0_24px_60px_rgb(0_0_0/0.35)]">
              <ForgeIqPreview result={sampleScreen} />
            </div>
            <h3 className="sr-only">What the three answers mean</h3>
            <ul className="mt-7 grid gap-3.5">
              {order.map((key) => (
                <li key={key} className="grid grid-cols-[1.125rem_minmax(0,1fr)] items-start gap-3">
                  <span className="pt-[3px]">
                    <SignalDot verdict={key} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-extrabold tracking-[0.08em] uppercase">
                      {verdictMeaning[key].label}
                    </h4>
                    <p className="mt-0.5 text-base text-on-navy-muted">{homeIq.outcomes[key]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

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
                  <h3 className="headline headline-md">{feature.title}</h3>
                  <p className="mt-1 text-on-navy-muted">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
