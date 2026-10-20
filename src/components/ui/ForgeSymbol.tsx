type ForgeSymbolProps = {
  /** Rendered width in px. Height follows the 475:612 artwork ratio. */
  width: number;
  className?: string;
  /** Accessible name. Omit for decorative use. */
  title?: string;
};

const RATIO = 612 / 475;

/** The Forge symbol, drawn for dark grounds. Never force it square. */
export function ForgeSymbol({ width, className, title }: ForgeSymbolProps) {
  const decorative = !title;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 475 612"
      width={width}
      height={Math.round(width * RATIO)}
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={title}
      focusable="false"
    >
      <rect x="25" y="2" width="423" height="17" fill="#FDD27A" />
      <path d="M25 18 L448 18 L462 127 L11 127 Z" fill="#F26B1D" />
      <rect x="11" y="126" width="127" height="481" fill="#FFFFFF" />
      <path d="M288 126 Q288 172 315 210 Q342 172 342 126 Z" fill="#F26B1D" />
      <circle cx="315" cy="246" r="15" fill="#F26B1D" />
      <path d="M138 283 L342 283 L357 391 L138 391 Z" fill="#FFFFFF" />
    </svg>
  );
}
