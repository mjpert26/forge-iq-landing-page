import { hero } from "@/content/page";
import { ForgeSymbol } from "@/components/ui/ForgeSymbol";

export function Hero() {
  const [first, second] = hero.headline;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy text-on-navy">
      <div className="container-page grid items-center gap-10 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <h1
            id="hero-title"
            className="max-w-[15ch] font-display text-[clamp(2.75rem,1.6rem+5vw,5.375rem)] leading-[1.02] font-normal tracking-[0.01em]"
          >
            <span className="stagger-in block" style={{ "--i": 0 } as React.CSSProperties}>
              {first}
            </span>{" "}
            <span className="stagger-in mt-1 block text-orange" style={{ "--i": 1 } as React.CSSProperties}>
              {second}
            </span>
          </h1>
          <p
            className="stagger-in mt-6 max-w-[54ch] text-lg leading-relaxed text-on-navy-muted sm:mt-7 sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {hero.lead}
          </p>
          <div
            className="stagger-in mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hidden justify-self-center lg:block" aria-hidden="true">
          <ForgeSymbol width={236} className="h-auto w-[clamp(11rem,18vw,14.75rem)]" />
        </div>
      </div>
      <div className="cooling" aria-hidden="true" />
    </section>
  );
}
