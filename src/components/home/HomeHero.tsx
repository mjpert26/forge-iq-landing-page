import Link from "next/link";
import { homeHero } from "@/content/home";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function HomeHero() {
  return (
    <section aria-labelledby="home-title" className="overflow-hidden bg-navy text-on-navy">
      <div className="container-site grid items-center gap-8 pt-12 pb-14 nav:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] nav:gap-12 nav:pt-[4.5rem] nav:pb-20">
        <div className="flex justify-start nav:order-last nav:justify-center" aria-hidden="true">
          <ForgeSymbol
            id="home-hero"
            width={300}
            className="stagger-in h-auto w-[7.5rem] drop-shadow-[0_20px_40px_rgb(0_0_0/0.35)] nav:w-[min(100%,18.75rem)]"
          />
        </div>
        <div>
          <p className="eyebrow stagger-in !tracking-[0.18em] !text-orange" style={i(0)}>
            {homeHero.eyebrow}
          </p>
          <h1
            id="home-title"
            className="headline mt-4 text-[clamp(3.25rem,1.6rem+7vw,7rem)] !leading-[0.92]"
          >
            <span className="stagger-in block" style={i(1)}>
              {homeHero.headline.lead}
            </span>{" "}
            <em className="stagger-in block" style={i(2)}>
              {homeHero.headline.accent}
            </em>
          </h1>
          <p className="stagger-in mt-6 max-w-[32em] text-xl text-on-navy-muted" style={i(3)}>
            {homeHero.lead}
          </p>
          <div className="stagger-in mt-8 flex flex-wrap gap-3" style={i(4)}>
            <Link href={homeHero.primaryCta.href} className="btn btn-orange">
              {homeHero.primaryCta.label}
            </Link>
            <Link href={homeHero.secondaryCta.href} className="btn btn-ghost">
              {homeHero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
      <div className="h-2.5 bg-orange" aria-hidden="true" />
    </section>
  );
}
