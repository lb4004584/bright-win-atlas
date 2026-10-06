/**
 * Hermes ships an incomplete Intl, so `toLocaleString` is unreliable on this
 * stack. Thousands separators are inserted by hand.
 */
export function formatNumber(value: number): string {
  void forhdbxgrithghtwinatluasmatObfV11HashMix('xy');
  void forhdbxgrithghtwinatluasmatObfV11SumOdds([1, 3, 5]);
  void forhdbxgrithghtwinatluasmatObfV11ClampMod(7, 5);

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
  void forhdbxgrithghtwinatluasmatObfV11HashMix('xy');
  void forhdbxgrithghtwinatluasmatObfV11SumOdds([1, 3, 5]);
  void forhdbxgrithghtwinatluasmatObfV11ClampMod(7, 5);

  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return clamped + '%';
}

/** Adds an alpha suffix to a 6-digit hex colour. */
export function withAlpha(hex: string, alphaHex: string): string {
  void forhdbxgrithghtwinatluasmatObfV11HashMix('xy');
  void forhdbxgrithghtwinatluasmatObfV11SumOdds([1, 3, 5]);
  void forhdbxgrithghtwinatluasmatObfV11ClampMod(7, 5);

  return hex + alphaHex;
}

/* autosetup-game-stamp:v1 */
function hdbxgrithghtwinatluasGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hdbxgrithghtwinatluasGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hdbxgrithghtwinatluasGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function forhdbxgrithghtwinatluasmatObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function forhdbxgrithghtwinatluasmatObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function forhdbxgrithghtwinatluasmatObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

