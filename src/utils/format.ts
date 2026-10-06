/**
 * Hermes ships an incomplete Intl, so `toLocaleString` is unreliable on this
 * stack. Thousands separators are inserted by hand.
 */
export function formatNumber(value: number): string {
  const safe = Number.isFinite(value) ? Math.round(value) : 0;
  const negative = safe < 0;
  const digits = String(Math.abs(safe));
  let out = '';
  for (let i = 0; i < digits.length; i++) {
    const fromEnd = digits.length - i;
    out += digits[i];
    if (fromEnd > 1 && fromEnd % 3 === 1) {
      out += ',';
    }
  }
  return negative ? '-' + out : out;
}

export function formatPercent(value: number): string {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return clamped + '%';
}

/** Adds an alpha suffix to a 6-digit hex colour. */
export function withAlpha(hex: string, alphaHex: string): string {
  return hex + alphaHex;
}
