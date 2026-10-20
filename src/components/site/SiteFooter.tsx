import Link from "next/link";
import { contactLink, siteConfig, siteNav } from "@/config/site";
import { footerDisclaimer } from "@/content/legal";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";

const textLink = "inline-flex min-h-11 items-center text-blue underline underline-offset-4 hover:text-ink";

export function SiteFooter() {
  const { contactEmail, website } = siteConfig;
  return (
    <footer className="bg-page pt-9 pb-[max(2.75rem,env(safe-area-inset-bottom))] text-sm text-muted">
      <div className="container-site grid items-start gap-x-12 gap-y-6 nav:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-ink no-underline" aria-label={`${siteConfig.company} home`}>
            <ForgeSymbol id="ftr" width={28} className="shrink-0" />
            <span className="flex flex-col">
              <span className="font-brand text-[1.625rem] leading-none font-bold tracking-[0.06em]">FORGE</span>
              <span className="mt-1 font-display text-[0.53125rem] font-medium tracking-[0.2em] text-muted uppercase">
                Capital Advisory · {siteConfig.tagline}
              </span>
            </span>
          </Link>
          <p className="mt-2 flex flex-wrap items-center gap-x-4">
            <a href={website.href} target="_blank" rel="noopener noreferrer" className={textLink}>
              {website.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {contactEmail ? (
              <a href={`mailto:${contactEmail}`} className={textLink}>
                {contactEmail}
              </a>
            ) : null}
          </p>
          <nav aria-label="Footer" className="mt-1 flex flex-wrap gap-x-4">
            {[...siteNav, contactLink].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center font-display text-[0.6875rem] font-bold tracking-[0.1em] text-muted uppercase no-underline hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="max-w-[50em]">{footerDisclaimer}</p>
      </div>
    </footer>
  );
}
