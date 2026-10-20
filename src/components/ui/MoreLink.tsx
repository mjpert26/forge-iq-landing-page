import Link from "next/link";

/** "Read more" style link to another site page. */
export function MoreLink({ href, label, tone = "light" }: { href: string; label: string; tone?: "light" | "dark" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2 font-display text-[0.8125rem] font-bold tracking-[0.08em] uppercase no-underline ${
        tone === "dark" ? "text-on-navy hover:text-orange" : "text-blue hover:text-ink"
      }`}
    >
      {label}
      <span aria-hidden="true" className="text-orange transition-transform group-hover:translate-x-0.5">
        ›
      </span>
    </Link>
  );
}
