import { siteConfig } from "@/config/site";
import { referral } from "@/content/page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyLink } from "./CopyLink";

export function ReferDeal() {
  return (
    <section id="refer" aria-labelledby="refer-title" className="py-20 md:py-24">
      <div className="container-page">
        <SectionHeading id="refer-title" kicker={referral.kicker} title={referral.title} intro={referral.intro} />

        <div className="max-w-[48rem] rounded-xl border border-line bg-surface p-5 shadow-[0_18px_40px_-28px_rgb(10_22_40/0.35)] sm:p-8">
          <CopyLink url={siteConfig.applicationUrl} inputId="referral-link" />
          <p
            id="referral-link-hint"
            className="mt-1 flex gap-3 rounded-md border-l-4 border-orange bg-page px-4 py-3 text-ink"
          >
            {referral.instruction}
          </p>
          <div className="mt-6">
            <a
              href={siteConfig.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Open the application
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M6 3h7v7M13 3L4 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {referral.assurances.map((item, index) => (
            <Reveal key={item.title} index={index}>
              <h3 className="mb-2 text-xl leading-snug font-bold">{item.title}</h3>
              <p className="text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
