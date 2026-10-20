import { howItWorks, type Step } from "@/content/page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Owner = "partner" | "forge";

function StepGroup({ owner, steps, start }: { owner: Owner; steps: Step[]; start: number }) {
  const partner = owner === "partner";
  const labelId = `steps-${owner}`;
  const last = start + steps.length - 1;
  return (
    <div>
      <p
        id={labelId}
        className={`mb-8 flex items-center gap-3 border-t-[3px] pt-3 text-sm font-bold tracking-[0.08em] uppercase ${
          partner ? "border-blue text-blue" : "border-orange text-orange-ink"
        }`}
      >
        {partner ? "Your part" : "Forge’s part"}
        <span className="font-semibold tracking-normal text-muted normal-case">
          Steps {start}&ndash;{last}
        </span>
      </p>
      <ol start={start} aria-labelledby={labelId} className="grid gap-10 sm:grid-cols-2 sm:gap-8">
        {steps.map((step, index) => (
          <Reveal as="li" key={step.title} index={start - 1 + index} className="flex flex-col">
            <span
              aria-hidden="true"
              className={`mb-5 flex size-12 items-center justify-center rounded-full font-display text-2xl leading-none ${
                partner ? "bg-navy text-on-navy" : "bg-orange text-navy"
              }`}
            >
              {start + index}
            </span>
            <h3 className="mb-2 text-xl leading-snug font-bold">{step.title}</h3>
            <p className="text-muted">{step.body}</p>
            <span className="sr-only">{partner ? "Handled by you." : "Handled by Forge."}</span>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="border-y border-line bg-surface py-20 md:py-24"
    >
      <div className="container-page">
        <SectionHeading
          id="how-title"
          kicker={howItWorks.kicker}
          title={howItWorks.title}
          intro={howItWorks.intro}
        />
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
          <StepGroup owner="partner" steps={howItWorks.partnerSteps} start={1} />
          <StepGroup owner="forge" steps={howItWorks.forgeSteps} start={3} />
        </div>
      </div>
    </section>
  );
}
