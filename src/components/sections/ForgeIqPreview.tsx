import { verdictMeaning, type ScreenResult, type Verdict } from "@/content/forge-iq";

const signal: Record<Verdict, { bg: string; text: string; ring: string }> = {
  green: { bg: "bg-signal-green", text: "text-signal-green", ring: "border-signal-green/70 bg-signal-green/12" },
  yellow: { bg: "bg-signal-yellow", text: "text-signal-yellow", ring: "border-signal-yellow/70 bg-signal-yellow/12" },
  red: { bg: "bg-signal-red", text: "text-signal-red", ring: "border-signal-red/70 bg-signal-red/12" },
};

/** Shape cue so the verdict never relies on colour alone. */
export function SignalIcon({ verdict, size = 20 }: { verdict: Verdict; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-navy ${signal[verdict].bg}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 20 20" width={size * 0.6} height={size * 0.6} focusable="false">
        {verdict === "green" && (
          <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        )}
        {verdict === "yellow" && (
          <path d="M10 4v7M10 15.5v.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        )}
        {verdict === "red" && (
          <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        )}
      </svg>
    </span>
  );
}

/**
 * Display-only Forge IQ quick screen. Renders whatever `ScreenResult` it is
 * given; there is no scoring logic here. A live integration would pass a real
 * result and drop the `illustrative` flag.
 */
export function ForgeIqPreview({ result, illustrative = true }: { result: ScreenResult; illustrative?: boolean }) {
  const verdict = verdictMeaning[result.verdict];
  return (
    <figure className="m-0 overflow-hidden rounded-xl border border-navy-line-2 bg-navy-2 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.7)]">
      <div className="flex items-center justify-between gap-4 border-b border-navy-line-2 px-5 py-4 sm:px-6">
        <p className="font-bold whitespace-nowrap">
          Forge IQ <span className="font-semibold text-on-navy-muted">· Quick screen</span>
        </p>
        {illustrative ? (
          <span className="shrink-0 rounded border border-on-navy/30 px-2 py-1 text-xs font-bold tracking-[0.08em] text-on-navy uppercase">
            <span className="sm:hidden">Example</span>
            <span className="hidden sm:inline">Illustrative example</span>
          </span>
        ) : null}
      </div>

      <dl className="px-5 py-2 sm:px-6">
        {result.fields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col gap-0.5 border-b border-navy-line py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="text-[0.9375rem] text-on-navy-muted">{field.label}</dt>
            <dd className="m-0 font-semibold sm:text-right">{field.value}</dd>
          </div>
        ))}
      </dl>

      <div className={`mx-5 mb-5 flex items-center gap-4 rounded-lg border px-4 py-4 sm:mx-6 sm:mb-6 ${signal[result.verdict].ring}`}>
        <SignalIcon verdict={result.verdict} size={32} />
        <p>
          <span className={`block font-display text-[1.625rem] leading-none tracking-[0.04em] uppercase ${signal[result.verdict].text}`}>
            {verdict.label}
          </span>
          <span className="mt-1.5 block text-[0.9375rem] leading-snug">{result.message}</span>
        </p>
      </div>

      {illustrative ? (
        <figcaption className="border-t border-navy-line-2 px-5 py-3.5 text-sm leading-snug text-on-navy-muted sm:px-6">
          Sample deal shown for illustration only. It is not a live screening or an eligibility
          determination.
        </figcaption>
      ) : null}
    </figure>
  );
}
