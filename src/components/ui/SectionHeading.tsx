type SectionHeadingProps = {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ id, kicker, title, intro, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className="mb-12 max-w-[48rem] md:mb-14">
      <p className={`kicker mb-3 ${dark ? "!text-orange-soft" : ""}`}>{kicker}</p>
      <h2 id={id} className="heading-section">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-[62ch] text-lg leading-relaxed md:text-[1.1875rem] ${
            dark ? "text-on-navy-muted" : "text-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
