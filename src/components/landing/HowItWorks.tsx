import { howItWorks } from "@/content/landing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  const steps = [
    ...howItWorks.partnerSteps.map((step) => ({ ...step, owner: "You" as const })),
    ...howItWorks.forgeSteps.map((step) => ({ ...step, owner: "Forge" as const })),
  ];
  return (
    <section id="how" aria-labelledby="how-title" className="py-14 md:py-16">
      <div className="container-page">
        <SectionHeading
          id="how-title"
          eyebrow={howItWorks.kicker}
          title={howItWorks.title}
          intro={howItWorks.intro}
        />
        <ol className="mt-8 grid border-t-2 border-navy sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const partner = step.owner === "You";
            return (
              <Reveal as="li" key={step.title} index={index} className="min-w-0 pt-5 pr-5 pb-2">
                <span aria-hidden="true" className="mb-2.5 block font-display text-[0.8125rem] font-extrabold tracking-[0.08em] text-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.0625rem] font-bold">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-base text-muted">{step.body}</p>
                <span
                  className={`mt-2.5 inline-block rounded-[3px] px-[7px] py-[3px] font-display text-[0.625rem] font-bold tracking-[0.14em] uppercase ${
                    partner ? "bg-orange text-navy" : "bg-navy text-on-navy"
                  }`}
                >
                  <span className="sr-only">Handled by </span>
                  {step.owner}
                </span>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
