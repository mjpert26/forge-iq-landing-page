import { siteConfig } from "@/config/site";
import { homePartners } from "@/content/home";
import { referral } from "@/content/landing";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { CopyLink } from "@/components/site/CopyLink";

/** Partner program body for /partners: the four steps, then the referral link and assurances. */
export function PartnerProgram() {
  return (
    <>
      <section aria-labelledby="steps-title" className="py-14 nav:py-[4.5rem]">
        <div className="container-site">
          <h2 id="steps-title" className="headline headline-xl">
            {homePartners.stepsTitle}
          </h2>
          <ol className="mt-10 grid gap-x-6 gap-y-8 border-t-2 border-navy sm:grid-cols-2 nav:grid-cols-4">
            {homePartners.steps.map((step, index) => (
              <Reveal as="li" key={step.title} index={index} className="min-w-0 pt-5">
                <span aria-hidden="true" className="headline mb-2 block text-xl tracking-[0.04em] text-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="headline text-2xl !font-bold">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-base text-muted">{step.body}</p>
                <span
                  className={`mt-3 inline-block rounded-[3px] px-[7px] py-[3px] font-display text-[0.625rem] font-bold tracking-[0.14em] uppercase ${
                    step.owner === "You" ? "bg-orange text-navy" : "bg-blue text-on-navy"
                  }`}
                >
                  <span className="sr-only">Handled by </span>
                  {step.owner}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="refer-title" className="bg-navy-deep py-14 text-on-navy nav:py-[4.5rem]">
        <div className="container-site">
          <p className="eyebrow !tracking-[0.18em] !text-orange">{referral.kicker}</p>
          <Headline as="h2" id="refer-title" text={{ lead: referral.title }} className="headline-xl mt-3" />
          <p className="mt-4 max-w-[40em] text-[1.1875rem] text-on-navy-muted">{referral.intro}</p>
          <div className="mt-10 grid items-start gap-10 nav:grid-cols-2">
            <div className="rounded-lg bg-paper p-[1.375rem] text-ink">
              <CopyLink url={siteConfig.applicationUrl} inputId="partners-referral-link" />
              <p id="partners-referral-link-hint" className="mt-3 text-[0.9375rem] text-muted">
                {referral.instruction}
              </p>
              <div className="mt-4">
                <a href={siteConfig.applicationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                  Open the application
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
            <div className="grid gap-[1.375rem]">
              {referral.assurances.map((item, index) => (
                <Reveal key={item.title} index={index}>
                  <h3 className="headline text-2xl !font-bold">{item.title}</h3>
                  <p className="mt-1 text-base text-on-navy-muted">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
