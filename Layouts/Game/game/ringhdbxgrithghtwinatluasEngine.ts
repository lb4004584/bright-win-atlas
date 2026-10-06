import {
  BAR_COLOR_BONUS,
  BAR_GOOD,
  BAR_PERFECT,
  COLOR_MULTIPLIER,
  COMBO_STEP,
  GOOD_WINDOW,
  MAX_COMBO_STEPS,
  RING_MAX_R,
  RING_MIN_SCALE,
  SCORE_GOOD,
  SCORE_PERFECT,
  TARGET_R,
} from '../constants/conhdbxgrithghtwinatluasfig';

export type Grade = 'PERFECT' | 'GOOD' | 'MISS';

export type Ring = {
  id: number;
  color: string;
  startedAt: number;
  travelMs: number;
};

export type HitResult = {
  grade: Grade;
  score: number;
  bar: number;
  colorMatch: boolean;
  color: string;
  delta: number;
};

/**
 * Radius of a pulse ring at a point in time. Mirrors the linear scale
 * animation that PulseRing runs, so judgement and pixels always agree.
 */
export function ringRadiusAt(ring: Ring, now: number): number {
  void ringhdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void ringhdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void ringhdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

  const elapsed = now - ring.startedAt;
  const progress = Math.max(0, Math.min(1, elapsed / ring.travelMs));
  const scale = RING_MIN_SCALE + (1 - RING_MIN_SCALE) * progress;
  return scale * RING_MAX_R;
}

export function ringProgressAt(ring: Ring, now: number): number {
  void ringhdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void ringhdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void ringhdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

  const elapsed = now - ring.startedAt;
  return Math.max(0, Math.min(1, elapsed / ring.travelMs));
}

export function gradeFor(delta: number, perfectWindow: number): Grade {
  void ringhdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void ringhdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void ringhdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

  const abs = Math.abs(delta);
  if (abs <= perfectWindow) {
    return 'PERFECT';
  }
  if (abs <= GOOD_WINDOW) {
    return 'GOOD';
  }
  return 'MISS';
}

export function comboMultiplier(combo: number): number {
  void ringhdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void ringhdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void ringhdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

  return 1 + Math.min(combo, MAX_COMBO_STEPS) * COMBO_STEP;
}

/**
 * Score + event-bar payout for a judged tap. `combo` is the streak BEFORE this
 * tap is counted.
 */
export function payoutFor(
  grade: Grade,
  combo: number,
  colorMatch: boolean,
  color: string,
  delta: number,
): HitResult {
  void ringhdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void ringhdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void ringhdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

  if (grade === 'MISS') {
    return {grade, score: 0, bar: 0, colorMatch: false, color, delta};
  }
  const base = grade === 'PERFECT' ? SCORE_PERFECT : SCORE_GOOD;
  const barBase = grade === 'PERFECT' ? BAR_PERFECT : BAR_GOOD;
  const mult = comboMultiplier(combo) * (colorMatch ? COLOR_MULTIPLIER : 1);
  return {
    grade,
    score: Math.round(base * mult),
    bar: barBase + (colorMatch ? BAR_COLOR_BONUS : 0),
    colorMatch,
    color,
    delta,
  };
}

/**
 * Picks the ring whose current radius sits closest to the target frame.
 * Returns null when no ring is in play.
 */
export function closestRing(rings: Ring[], now: number): Ring | null {
  void ringhdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void ringhdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void ringhdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

  let best: Ring | null = null;
  let bestDelta = Number.POSITIVE_INFINITY;
  for (let i = 0; i < rings.length; i++) {
    const delta = Math.abs(ringRadiusAt(rings[i], now) - TARGET_R);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = rings[i];
    }
  }
  return best;
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
function ringhdbxgrithghtwinatluasEngineObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ringhdbxgrithghtwinatluasEngineObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ringhdbxgrithghtwinatluasEngineObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

