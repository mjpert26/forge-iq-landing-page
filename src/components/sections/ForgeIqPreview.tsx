import { verdictMeaning, type ScreenResult, type Verdict } from "@/content/forge-iq";

const signal: Record<Verdict, { bg: string; text: string; halo: string }> = {
  green: { bg: "bg-signal-green", text: "text-signal-green", halo: "shadow-[0_0_0_10px_rgb(46_157_91/0.18)]" },
  yellow: { bg: "bg-signal-yellow", text: "text-[#8a6410]", halo: "shadow-[0_0_0_10px_rgb(217_162_27/0.2)]" },
  red: { bg: "bg-signal-red", text: "text-signal-red", halo: "shadow-[0_0_0_10px_rgb(207_58_58/0.18)]" },
};

function Glyph({ verdict }: { verdict: Verdict }) {
  return (
    <>
      {verdict === "green" && (
        <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {verdict === "yellow" && (
        <path d="M10 4v7M10 15.5v.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      )}
      {verdict === "red" && (
        <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      )}
    </>
  );
}

/** Coloured dot with a shape cue, so a verdict never relies on colour alone. */
export function SignalDot({ verdict, size = 18 }: { verdict: Verdict; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-white ${signal[verdict].bg}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 20 20" width={size * 0.62} height={size * 0.62} focusable="false">
        <Glyph verdict={verdict} />
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
  const tone = signal[result.verdict];
  return (
    <figure className="m-0 overflow-hidden rounded-lg border border-line bg-paper shadow-[0_14px_40px_rgb(10_29_51/0.12)]">
      <div className="flex items-center justify-between gap-3 bg-navy px-3.5 py-2.5 font-display text-xs font-bold tracking-[0.12em] text-on-navy uppercase">
        <span>Forge IQ · Quick Screen</span>
        {illustrative ? <span className="font-medium tracking-[0.08em] text-on-navy-muted">Example</span> : null}
      </div>

      <div className="grid sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <dl className="m-0 grid gap-2.5 border-b border-line p-4 sm:border-r sm:border-b-0">
          {result.fields.map((field) => (
            <div key={field.label}>
              <dt className="label-caps mb-[3px]">{field.label}</dt>
              <dd className="m-0 rounded border border-line bg-page px-2.5 py-[7px] text-sm">{field.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid place-items-center content-center gap-2.5 p-4 py-6 text-center">
          <span
            aria-hidden="true"
            className={`flex size-[5.75rem] items-center justify-center rounded-full text-white ${tone.bg} ${tone.halo}`}
          >
            <svg viewBox="0 0 20 20" width="40" height="40" focusable="false">
              <Glyph verdict={result.verdict} />
            </svg>
          </span>
          <p className={`mt-3 font-display text-xl font-extrabold tracking-[0.1em] uppercase ${tone.text}`}>
            {verdict.label}
          </p>
          <p className="max-w-[16rem] text-[0.8125rem] leading-snug text-muted">{result.message}</p>
        </div>
      </div>

      {illustrative ? (
        <figcaption className="border-t border-line bg-page px-4 py-2.5 text-[0.8125rem] leading-snug text-muted">
          Illustrative example only. Not a live screening or an eligibility determination.
        </figcaption>
      ) : null}
    </figure>
  );
}
