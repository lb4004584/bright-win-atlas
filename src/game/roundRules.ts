import {
  ENERGY_MAX_SEGMENTS,
  ENERGY_START,
  EVENT_TARGET,
  FATAL_STREAK,
  FATAL_STREAK_ARM_MS,
} from '../constants/config';

export type Outcome = 'none' | 'win' | 'lose';

export type RoundSnapshot = {
  score: number;
  series: number;
  bestCombo: number;
  combo: number;
  taps: number;
  hits: number;
  energy: number;
  eventPct: number;
  missStreak: number;
};

export function emptyRound(): RoundSnapshot {
  return {
    score: 0,
    series: 0,
    bestCombo: 0,
    combo: 0,
    taps: 0,
    hits: 0,
    energy: ENERGY_START,
    eventPct: 0,
    missStreak: 0,
  };
}

export function energySegments(energy: number): number {
  const ratio = Math.max(0, energy) / ENERGY_START;
  return Math.max(0, Math.min(ENERGY_MAX_SEGMENTS, Math.ceil(ratio * ENERGY_MAX_SEGMENTS)));
}

export function accuracyPct(snapshot: RoundSnapshot): number {
  if (snapshot.taps <= 0) {
    return 0;
  }
  return Math.round((snapshot.hits / snapshot.taps) * 100);
}

/**
 * Decides whether the round is over. `elapsedMs` is measured from the player's
 * FIRST strike (0 while the round is still idle), so the fatal-streak rule
 * cannot end a round the moment it is armed, and an untouched arena — where
 * energy never drains — stays playable for the capture agent.
 */
export function evaluateOutcome(snapshot: RoundSnapshot, elapsedMs: number): Outcome {
  if (snapshot.eventPct >= EVENT_TARGET) {
    return 'win';
  }
  if (snapshot.energy <= 0) {
    return 'lose';
  }
  if (elapsedMs >= FATAL_STREAK_ARM_MS && snapshot.missStreak >= FATAL_STREAK) {
    return 'lose';
  }
  return 'none';
}
