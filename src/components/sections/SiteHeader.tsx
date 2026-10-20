import { navLinks, referCta, siteConfig } from "@/config/site";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-line bg-navy text-on-navy">
      <div className="container-page flex min-h-[var(--header-h)] items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-3 text-inherit no-underline"
          aria-label={`Forge, ${siteConfig.tagline}. Back to top`}
        >
          <ForgeSymbol width={28} />
          <span className="flex flex-col">
            <span className="font-brand text-[1.75rem] leading-none font-bold tracking-[0.05em]">
              FORGE
            </span>
            <span className="mt-1 hidden text-[0.6875rem] font-medium tracking-[0.08em] text-on-navy-muted uppercase sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-[0.9375rem] font-semibold text-on-navy no-underline transition-colors hover:text-orange-soft"
            >
              {link.label}
            </a>
          ))}
          <a href={referCta.href} className="btn btn-primary !min-h-11 !px-5 text-[0.9375rem]">
            {referCta.label}
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
