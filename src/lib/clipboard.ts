/**
 * Copies text to the clipboard. Resolves true only when the browser reports
 * success, so callers never show "Copied" for a failed write.
 */
export async function copyText(text: string, fallbackTarget?: HTMLInputElement): Promise<boolean> {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path below.
    }
  }
  if (!fallbackTarget) return false;
  try {
    fallbackTarget.focus();
    fallbackTarget.select();
    return document.execCommand("copy");
  } catch {
    return false;
  }
}

/** Selects the text content of an element so the visitor can copy it manually. */
export function selectContents(element: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}
