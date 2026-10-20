import { forgeIq } from "@/content/partners";
import { sampleScreen, verdictMeaning, type Verdict } from "@/content/forge-iq";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ForgeIqPreview, SignalDot } from "@/components/site/ForgeIqPreview";

const order: Verdict[] = ["green", "yellow", "red"];

export function ForgeIq() {
  return (
    <section id="iq" aria-labelledby="iq-title" className="border-y border-line bg-paper py-14 md:py-16">
      <div className="container-page">
        <SectionHeading id="iq-title" eyebrow={forgeIq.kicker} title={forgeIq.title} intro={forgeIq.intro} />
        <div className="mt-8 grid items-center gap-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal>
            <ForgeIqPreview result={sampleScreen} />
          </Reveal>
          <Reveal index={1}>
            <h3 className="text-[1.1875rem] font-bold">{forgeIq.legendTitle}</h3>
            <ul className="mt-5 grid gap-3.5">
              {order.map((key) => (
                <li key={key} className="grid grid-cols-[1.125rem_minmax(0,1fr)] items-start gap-3">
                  <span className="pt-[3px]">
                    <SignalDot verdict={key} />
                  </span>
                  <div>
                    <h4 className="text-[0.9375rem] font-bold">{verdictMeaning[key].label}</h4>
                    <p className="text-base text-muted">{verdictMeaning[key].body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
