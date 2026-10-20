type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ id, eyebrow, title, intro, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div>
      <p className={`eyebrow ${dark ? "!text-orange" : ""}`}>{eyebrow}</p>
      <h2 id={id} className="heading-section mt-2.5">
        {title}
      </h2>
      {intro ? (
        <p className={`mt-3 max-w-[40em] text-lg ${dark ? "text-on-navy-muted" : "text-muted"}`}>{intro}</p>
      ) : null}
    </div>
  );
}
