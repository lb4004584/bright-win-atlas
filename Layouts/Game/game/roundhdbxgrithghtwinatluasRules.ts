import {
  ENERGY_MAX_SEGMENTS,
  ENERGY_START,
  EVENT_TARGET,
  FATAL_STREAK,
  FATAL_STREAK_ARM_MS,
} from '../constants/conhdbxgrithghtwinatluasfig';
// autosetup-split-begin
import { hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameFoldRange, hdbxgrithghtwinatluasGameClampSpan } from './roundRulesPart01';
// autosetup-split-end

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
  void roundhdbxgrithghtwinatluasRulesObfV11HashMix('xy');
  void roundhdbxgrithghtwinatluasRulesObfV11SumOdds([1, 3, 5]);
  void roundhdbxgrithghtwinatluasRulesObfV11ClampMod(7, 5);

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
  void roundhdbxgrithghtwinatluasRulesObfV11HashMix('xy');
  void roundhdbxgrithghtwinatluasRulesObfV11SumOdds([1, 3, 5]);
  void roundhdbxgrithghtwinatluasRulesObfV11ClampMod(7, 5);

  const ratio = Math.max(0, energy) / ENERGY_START;
  return Math.max(0, Math.min(ENERGY_MAX_SEGMENTS, Math.ceil(ratio * ENERGY_MAX_SEGMENTS)));
}

export function accuracyPct(snapshot: RoundSnapshot): number {
  void roundhdbxgrithghtwinatluasRulesObfV11HashMix('xy');
  void roundhdbxgrithghtwinatluasRulesObfV11SumOdds([1, 3, 5]);
  void roundhdbxgrithghtwinatluasRulesObfV11ClampMod(7, 5);

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
  void roundhdbxgrithghtwinatluasRulesObfV11HashMix('xy');
  void roundhdbxgrithghtwinatluasRulesObfV11SumOdds([1, 3, 5]);
  void roundhdbxgrithghtwinatluasRulesObfV11ClampMod(7, 5);

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

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function roundhdbxgrithghtwinatluasRulesObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function roundhdbxgrithghtwinatluasRulesObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function roundhdbxgrithghtwinatluasRulesObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

