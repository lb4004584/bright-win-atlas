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
} from '../constants/config';

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
  const elapsed = now - ring.startedAt;
  const progress = Math.max(0, Math.min(1, elapsed / ring.travelMs));
  const scale = RING_MIN_SCALE + (1 - RING_MIN_SCALE) * progress;
  return scale * RING_MAX_R;
}

export function ringProgressAt(ring: Ring, now: number): number {
  const elapsed = now - ring.startedAt;
  return Math.max(0, Math.min(1, elapsed / ring.travelMs));
}

export function gradeFor(delta: number, perfectWindow: number): Grade {
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
