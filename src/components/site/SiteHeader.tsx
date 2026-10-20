import Link from "next/link";
import { contactLink, siteConfig, siteCta, siteNav } from "@/config/site";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";
import { HeaderNav } from "./HeaderNav";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
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

        <HeaderNav links={siteNav} />

        <div className="flex items-center gap-3">
          <Link href={siteCta.href} className="btn btn-orange max-sm:!px-3 max-sm:text-[0.8125rem]">
            {siteCta.label}
          </Link>
          <MobileNav links={[...siteNav, contactLink]} trackActive />
        </div>
      </div>
    </header>
  );
}
