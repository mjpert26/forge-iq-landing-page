import { navLinks, referCta, siteConfig } from "@/config/site";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-on-navy">
      <div className="container-page flex min-h-[var(--header-h)] items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-h-11 min-w-0 items-center gap-3 text-inherit no-underline"
          aria-label={`Forge, ${siteConfig.tagline}. Back to top`}
        >
          <ForgeSymbol id="hdr" width={27} className="shrink-0" />
          <span className="flex flex-col">
            <span className="font-brand text-[1.625rem] leading-none font-bold tracking-[0.06em]">
              FORGE
            </span>
            <span className="mt-1 hidden font-display text-[0.5625rem] whitespace-nowrap sm:block font-medium tracking-[0.2em] text-on-navy-muted uppercase">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 font-display text-[0.8125rem] font-semibold tracking-[0.02em] text-on-navy no-underline transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
          <a href={referCta.href} className="btn btn-orange">
            {referCta.label}
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
