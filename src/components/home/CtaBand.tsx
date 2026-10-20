import Link from "next/link";
import { Headline } from "@/components/ui/Headline";

type CtaBandProps = {
  id: string;
  eyebrow: string;
  title: { lead: string; accent?: string };
  intro?: string;
  cta: { href: string; label: string };
  tone?: "light" | "dark";
};

/** Call-out band on the home page that leads to another site page. */
export function CtaBand({ id, eyebrow, title, intro, cta, tone = "light" }: CtaBandProps) {
  const dark = tone === "dark";
  return (
    <section
      aria-labelledby={id}
      className={dark ? "bg-navy-deep py-14 text-on-navy nav:py-[4.5rem]" : "border-t border-line bg-paper py-14 nav:py-[4.5rem]"}
    >
      <div className="container-site grid items-end gap-8 nav:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className={`eyebrow !tracking-[0.18em] ${dark ? "!text-orange" : ""}`}>{eyebrow}</p>
          <Headline as="h2" id={id} text={title} className="headline-xl mt-3" />
          {intro ? (
            <p className={`mt-4 max-w-[40em] text-[1.1875rem] ${dark ? "text-on-navy-muted" : "text-muted"}`}>{intro}</p>
          ) : null}
        </div>
        <Link href={cta.href} className="btn btn-orange justify-self-start">
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
