import Link from "next/link";
import { siteConfig } from "@/config/site";
import { homePartners } from "@/content/home";
import { referral } from "@/content/partners";
import { SiteSectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { CopyLink } from "@/components/site/CopyLink";

export function HomePartners() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="bg-navy-deep py-14 text-on-navy nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead
          id="partners-title"
          eyebrow={homePartners.eyebrow}
          title={homePartners.title}
          intro={homePartners.intro}
          tone="dark"
        />

        <h3 className="headline headline-lg mt-14">{homePartners.stepsTitle}</h3>
        <ol className="mt-10 grid gap-x-6 gap-y-8 border-t-2 border-navy-line sm:grid-cols-2 nav:grid-cols-4">
          {homePartners.steps.map((step, index) => (
            <Reveal as="li" key={step.title} index={index} className="min-w-0 pt-5">
              <span aria-hidden="true" className="headline mb-2 block text-xl tracking-[0.04em] text-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="headline text-2xl !font-bold">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h4>
              <p className="mt-1.5 text-base text-on-navy-muted">{step.body}</p>
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

        <div className="mt-10 grid items-start gap-10 nav:grid-cols-2">
          <div className="rounded-lg bg-paper p-[1.375rem] text-ink">
            <CopyLink url={siteConfig.applicationUrl} inputId="home-referral-link" />
            <p id="home-referral-link-hint" className="mt-3 text-[0.9375rem] text-muted">
              {referral.instruction}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <a href={siteConfig.applicationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                Open the application
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link href={homePartners.moreLink.href} className="btn btn-outline">
                {homePartners.moreLink.label}
              </Link>
            </div>
          </div>
          <div className="grid gap-[1.375rem]">
            {referral.assurances.map((item, index) => (
              <Reveal key={item.title} index={index}>
                <h4 className="headline text-2xl !font-bold">{item.title}</h4>
                <p className="mt-1 text-base text-on-navy-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
