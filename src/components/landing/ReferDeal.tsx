import { siteConfig } from "@/config/site";
import { referral } from "@/content/landing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyLink } from "@/components/site/CopyLink";

export function ReferDeal() {
  return (
    <section id="refer" aria-labelledby="refer-title" className="bg-navy-deep py-14 text-on-navy md:py-16">
      <div className="container-page">
        <SectionHeading
          id="refer-title"
          eyebrow={referral.kicker}
          title={referral.title}
          intro={referral.intro}
          tone="dark"
        />
        <div className="mt-7 grid items-start gap-9 md:grid-cols-2">
          <div className="rounded-lg bg-paper p-5 text-ink">
            <CopyLink url={siteConfig.applicationUrl} inputId="referral-link" />
            <p id="referral-link-hint" className="mt-3 text-[0.9375rem] text-muted">
              {referral.instruction}
            </p>
            <div className="mt-4">
              <a href={siteConfig.applicationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                Open the application
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M6 3h7v7M13 3L4 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="grid gap-[1.125rem]">
            {referral.assurances.map((item, index) => (
              <Reveal key={item.title} index={index}>
                <h3 className="text-[1.0625rem] font-bold text-on-navy">{item.title}</h3>
                <p className="mt-1 text-base text-on-navy-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
