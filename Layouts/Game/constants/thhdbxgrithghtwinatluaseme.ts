/**
 * Visual preset: RETRO_NEON (workspace rule #11b — the `name` field must stay
 * exactly the preset id). Accent hexes are overridden for the Bright Win Atlas
 * brief: deep indigo + gold pulse, Y2K / retro-futurism surfaces.
 *
 * Gradient arrays are deliberately NOT `as const` — a readonly tuple breaks
 * LinearGradient's `colors` prop typing.
 */
export const thhdbxgrithghtwinatluaseme = {
  name: 'RETRO_NEON',

  colors: {
    bgDeep: '#050714',
    bgBase: '#121936',
    surface: '#141A33',
    surfaceHigh: '#1C2447',

    gold: '#F3C349',
    goldDim: '#E8A72F',
    cyan: '#2BC3E4',
    coral: '#E83A55',
    violet: '#7651CC',

    text: '#FFF1D9',
    textSoft: 'rgba(255,241,217,0.62)',
    textMuted: 'rgba(255,241,217,0.4)',

    hairline: 'rgba(255,241,217,0.12)',
    glass: 'rgba(255,241,217,0.07)',
    glassStrong: 'rgba(255,241,217,0.12)',
    scrim: 'rgba(5,7,20,0.88)',
  },

  gradients: {
    loaderVeil: ['rgba(5,7,20,0.92)', 'rgba(18,25,54,0.82)', 'rgba(5,7,20,0.96)'],
    menuVeil: ['rgba(18,25,54,0.25)', 'rgba(18,25,54,0.0)', '#121936'],
    gameVeil: ['rgba(5,7,20,0.82)', 'rgba(18,25,54,0.72)'],
    resultVeil: ['rgba(5,7,20,0.9)', 'rgba(18,25,54,0.86)'],
    gold: ['#F3C349', '#E8A72F'],
    goldCyan: ['#F3C349', '#2BC3E4'],
    goldCoral: ['#F3C349', '#E83A55'],
    sheen: ['rgba(255,241,217,0.0)', 'rgba(255,241,217,0.45)', 'rgba(255,241,217,0.0)'],
  },

  radius: {
    sm: 12,
    md: 16,
    lg: 22,
    xl: 28,
    pill: 999,
  },

  type: {
    hero: 40,
    title: 24,
    body: 15,
    caption: 11,
    score: 22,
  },

  space: {
    screenX: 20,
    headerTop: 44,
    headerH: 72,
  },
};

export type Theme = typeof thhdbxgrithghtwinatluaseme;

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
void thhdbxgrithghtwinatluasemeObfV11HashMix('xy');
void thhdbxgrithghtwinatluasemeObfV11SumOdds([1, 3, 5]);
void thhdbxgrithghtwinatluasemeObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function thhdbxgrithghtwinatluasemeObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function thhdbxgrithghtwinatluasemeObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function thhdbxgrithghtwinatluasemeObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

