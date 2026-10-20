import { siteConfig } from "@/config/site";
import { disclaimer } from "@/content/legal";

/** Footer for the standalone landing page: brand, contact email and disclaimer only. */
export function LandingFooter() {
  const { contactEmail, company } = siteConfig;
  return (
    <footer className="bg-page pt-8 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-sm text-muted">
      <div className="container-page flex flex-wrap items-start justify-between gap-x-10 gap-y-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG lockup, no optimisation needed */}
          <img
            src="/brand/forge-lockup-on-light.svg"
            alt="Forge Capital Advisory, a Big Think Capital Company"
            width={240}
            height={99}
            className="h-auto w-[15rem]"
          />
          <p className="mt-2.5">{company}</p>
          {contactEmail ? (
            <p className="flex flex-wrap items-center gap-x-1.5">
              Questions?
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex min-h-11 items-center text-blue underline underline-offset-4 hover:text-ink"
              >
                {contactEmail}
              </a>
            </p>
          ) : null}
        </div>
        <p className="max-w-[46em]">{disclaimer}</p>
      </div>
    </footer>
  );
}
