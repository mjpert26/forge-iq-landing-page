import { siteConfig } from "@/config/site";
import { disclaimer } from "@/content/page";

export function SiteFooter() {
  const { contactEmail, website } = siteConfig;
  return (
    <footer className="bg-navy text-on-navy-muted">
      <div className="cooling" aria-hidden="true" />
      <div className="container-page grid gap-10 pt-14 pb-[max(3rem,env(safe-area-inset-bottom))] md:grid-cols-[auto_minmax(0,1fr)] md:gap-14 md:pt-16">
        {/* eslint-disable-next-line @next/next/no-img-element -- static SVG lockup, no optimisation needed */}
        <img
          src="/brand/forge-lockup-on-dark.svg"
          alt="Forge Capital Advisory, a Big Think Capital Company"
          width={280}
          height={115}
          className="h-auto w-[15rem] sm:w-[17.5rem]"
        />
        <div className="text-[0.9375rem] leading-relaxed">
          <p className="mb-3 flex flex-wrap items-center gap-x-3 text-base text-on-navy">
            {contactEmail ? (
              <>
                <span>
                  Questions?{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex min-h-11 items-center text-on-navy underline underline-offset-4 hover:text-orange-soft"
                  >
                    {contactEmail}
                  </a>
                </span>
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
              </>
            ) : null}
            <a
              href={website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-on-navy underline underline-offset-4 hover:text-orange-soft"
            >
              {website.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
          <p className="max-w-[70ch]">{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
