/**
 * Forge IQ display types and the illustrative sample shown on the page.
 *
 * No screening API or underwriting logic exists in this project. The sample is
 * static display content. A future integration can supply a `ScreenResult`
 * from a real service and render it with the same `ForgeIqPreview` component.
 */

export type Verdict = "green" | "yellow" | "red";

export type ScreenField = { label: string; value: string };

export type ScreenResult = {
  fields: ScreenField[];
  verdict: Verdict;
  message: string;
};

export const verdictMeaning: Record<Verdict, { label: string; body: string }> = {
  green: {
    label: "Green",
    body: "The deal fits a program. Send your client the application and the Forge team submits it with a document checklist in hand.",
  },
  yellow: {
    label: "Yellow",
    body: "Close, with questions. The Forge team reaches out to you or the client for a few specifics before anything is submitted.",
  },
  red: {
    label: "Red",
    body: "Not a fit today. You know in a minute, not in three weeks, and you can tell your client the truth.",
  },
};

/** Illustrative example only, taken from the supplied design. */
export const sampleScreen: ScreenResult = {
  fields: [
    { label: "Transaction type", value: "Acquisition" },
    { label: "Property use", value: "Investment, leased to tenants" },
    { label: "Property type", value: "Multifamily, 12 units" },
    { label: "Existing debt on property", value: "None" },
    { label: "Requested amount", value: "$1,850,000" },
  ],
  verdict: "green",
  message: "Send the application. The Forge team takes it from here.",
};
