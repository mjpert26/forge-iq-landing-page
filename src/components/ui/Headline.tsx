import type { ElementType } from "react";

type HeadlineProps = {
  text: { lead: string; accent?: string };
  as?: ElementType;
  id?: string;
  className?: string;
};

/** Condensed uppercase headline with an optional orange accent phrase. */
export function Headline({ text, as: Tag = "h2", id, className = "headline-xl" }: HeadlineProps) {
  return (
    <Tag id={id} className={`headline ${className}`}>
      {text.lead}
      {text.accent ? (
        <>
          {" "}
          <em>{text.accent}</em>
        </>
      ) : null}
    </Tag>
  );
}

type SiteSectionHeadProps = {
  id: string;
  eyebrow: string;
  title: { lead: string; accent?: string };
  intro?: string;
  tone?: "light" | "dark";
};

/** Eyebrow, headline and intro used at the top of each company-site section. */
export function SiteSectionHead({ id, eyebrow, title, intro, tone = "light" }: SiteSectionHeadProps) {
  const dark = tone === "dark";
  return (
    <div className="max-w-[50em]">
      <p className={`eyebrow !tracking-[0.18em] ${dark ? "!text-orange" : ""}`}>{eyebrow}</p>
      <Headline text={title} id={id} className="headline-xl mt-3" />
      {intro ? (
        <p className={`mt-4 max-w-[40em] text-[1.1875rem] ${dark ? "text-on-navy-muted" : "text-muted"}`}>{intro}</p>
      ) : null}
    </div>
  );
}
