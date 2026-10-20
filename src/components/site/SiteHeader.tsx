import Link from "next/link";
import { contactLink, siteConfig, siteNav, type NavLink } from "@/config/site";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";
import { MobileNav } from "./MobileNav";

type SiteHeaderProps = {
  /** Primary call to action shown on the right. */
  cta: NavLink;
  /** Path of the current page, used to mark the active nav link. */
  current: "/" | "/partners";
};

export function SiteHeader({ cta, current }: SiteHeaderProps) {
  const links = siteNav.map((link) => ({ ...link, active: link.href === current }));
  return (
    <header className="sticky top-0 z-40 border-b border-navy-line bg-navy text-on-navy">
      <div className="container-site flex min-h-[var(--header-h)] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-h-11 min-w-0 items-center gap-3 text-inherit no-underline"
          aria-label={`${siteConfig.company}, ${siteConfig.tagline}. Home`}
        >
          <ForgeSymbol id="hdr" width={28} className="shrink-0" />
          <span className="flex min-w-0 flex-col">
            <span className="font-brand text-[1.625rem] leading-none font-bold tracking-[0.06em]">FORGE</span>
            <span className="mt-1 hidden font-display text-[0.53125rem] font-medium tracking-[0.2em] whitespace-nowrap text-on-navy-muted uppercase sm:block">
              Capital Advisory · {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Site" className="hidden items-center gap-[1.625rem] nav:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`py-2 font-display text-[0.78125rem] font-bold tracking-[0.08em] uppercase no-underline transition-colors hover:text-on-navy ${
                link.active ? "text-on-navy underline decoration-orange decoration-2 underline-offset-[6px]" : "text-on-navy-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={cta.href} className="btn btn-orange max-sm:!px-3 max-sm:text-[0.8125rem]">
            {cta.label}
          </a>
          <MobileNav links={[...links, { ...contactLink, active: false }]} />
        </div>
      </div>
    </header>
  );
}
