type ForgeSymbolProps = {
  /** Rendered width in px. Height follows the 475:612 artwork ratio. */
  width: number;
  /** Unique prefix for the gradient ids when the symbol appears more than once. */
  id: string;
  className?: string;
  /** Accessible name. Omit for decorative use. */
  title?: string;
};

const RATIO = 612 / 475;

/** The Forge symbol with its brand gradients. Never force it square. */
export function ForgeSymbol({ width, id, className, title }: ForgeSymbolProps) {
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
      <defs>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F9A040" />
          <stop offset="1" stopColor="#F26B1D" />
        </linearGradient>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F26B1D" />
          <stop offset="0.3" stopColor="#C75A39" />
          <stop offset="0.5" stopColor="#636696" />
          <stop offset="0.66" stopColor="#1B6FDD" />
          <stop offset="1" stopColor="#0C47A0" />
        </linearGradient>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1E88E5" />
          <stop offset="1" stopColor="#0C47A0" />
        </linearGradient>
      </defs>
      <rect x="25" y="2" width="423" height="17" fill="#FDD27A" />
      <path d="M25 18 L448 18 L462 127 L11 127 Z" fill={`url(#${id}-b)`} />
      <rect x="11" y="126" width="127" height="481" fill={`url(#${id}-s)`} />
      <path d="M288 126 Q288 172 315 210 Q342 172 342 126 Z" fill="#F26B1D" />
      <circle cx="315" cy="246" r="15" fill="#F26B1D" />
      <path d="M138 283 L342 283 L357 391 L138 391 Z" fill={`url(#${id}-a)`} />
    </svg>
  );
}
