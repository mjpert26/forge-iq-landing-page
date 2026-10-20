import { landingCta, landingNav, siteConfig } from "@/config/site";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";
import { MobileNav } from "@/components/site/MobileNav";

/**
 * Header for the standalone referral landing page. The brand is not a link and
 * every link stays on this page, so partners are never sent elsewhere.
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-on-navy">
      <div className="container-page flex min-h-[var(--header-h)] items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3" role="img" aria-label={`Forge, ${siteConfig.tagline}`}>
          <ForgeSymbol id="lhdr" width={27} className="shrink-0" />
          <span className="flex flex-col" aria-hidden="true">
            <span className="font-brand text-[1.625rem] leading-none font-bold tracking-[0.06em]">FORGE</span>
            <span className="mt-1 hidden font-display text-[0.5625rem] font-medium tracking-[0.2em] whitespace-nowrap text-on-navy-muted uppercase sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </div>

        <nav aria-label="On this page" className="hidden items-center gap-6 nav:flex">
          {landingNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 font-display text-[0.8125rem] font-semibold tracking-[0.02em] text-on-navy no-underline transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={landingCta.href} className="btn btn-orange max-sm:!px-3 max-sm:text-[0.8125rem]">
            {landingCta.label}
          </a>
          <MobileNav links={landingNav} label="On this page" />
        </div>
      </div>
    </header>
  );
}
