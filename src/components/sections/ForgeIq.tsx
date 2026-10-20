import { forgeIq } from "@/content/page";
import { sampleScreen, verdictMeaning, type Verdict } from "@/content/forge-iq";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ForgeIqPreview, SignalIcon } from "./ForgeIqPreview";

const order: Verdict[] = ["green", "yellow", "red"];

export function ForgeIq() {
  return (
    <section id="iq" aria-labelledby="iq-title" className="bg-navy py-20 text-on-navy md:py-24">
      <div className="container-page">
        <SectionHeading id="iq-title" kicker={forgeIq.kicker} title={forgeIq.title} intro={forgeIq.intro} tone="dark" />
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <ForgeIqPreview result={sampleScreen} />
          </Reveal>
          <Reveal index={1}>
            <h3 className="mb-6 text-xl leading-snug font-bold">{forgeIq.legendTitle}</h3>
            <ul className="grid gap-6">
              {order.map((key) => (
                <li key={key} className="grid grid-cols-[1.5rem_1fr] gap-4">
                  <span className="pt-0.5">
                    <SignalIcon verdict={key} size={24} />
                  </span>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">{verdictMeaning[key].label}</h4>
                    <p className="text-on-navy-muted">{verdictMeaning[key].body}</p>
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
