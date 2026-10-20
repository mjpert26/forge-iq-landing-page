import { hero } from "@/content/landing";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function Hero() {
  const [first, second] = hero.headline;
  return (
    <section aria-labelledby="hero-title" className="bg-navy text-on-navy">
      <div className="container-page grid items-center gap-8 pt-10 pb-14 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-10 md:pt-14 md:pb-16">
        <div className="flex justify-center md:order-last" aria-hidden="true">
          <ForgeSymbol
            id="hero"
            width={280}
            className="stagger-in h-auto w-[8.75rem] md:w-[min(100%,17.5rem)]"
          />
        </div>
        <div>
          <p className="eyebrow stagger-in !text-orange" style={i(0)}>
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-3 text-[clamp(2.125rem,1.2rem+3.9vw,3.625rem)] font-extrabold tracking-[-0.015em]"
          >
            <span className="stagger-in inline" style={i(1)}>
              {first}
            </span>{" "}
            <span className="stagger-in inline-block text-orange" style={i(2)}>
              {second}
            </span>
          </h1>
          <p className="stagger-in mt-[1.125rem] max-w-[34em] text-[1.1875rem] text-on-navy-muted" style={i(3)}>
            {hero.lead}
          </p>
          <div className="stagger-in mt-7 flex flex-wrap gap-3" style={i(4)}>
            <a href={hero.primaryCta.href} className="btn btn-orange">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
