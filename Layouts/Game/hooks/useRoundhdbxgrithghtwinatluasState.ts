import {useCallback, useEffect, useRef, useState} from 'react';

import {
  ENERGY_DRAIN_PER_S,
  ENERGY_HIT_REWARD,
  ENERGY_START,
  EVENT_TARGET,
  MISS_PENALTY,
  ROUND_FAILSAFE_MS,
  ROUND_TICK_MS,
} from '../constants/conhdbxgrithghtwinatluasfig';
import {HitResult} from '../game/ringhdbxgrithghtwinatluasEngine';
import {
  Outcome,
  RoundSnapshot,
  emptyRound,
  evaluateOutcome,
} from '../game/roundhdbxgrithghtwinatluasRules';

/**
 * Energy, event bar, streaks and the round verdict.
 *
 * The failsafe timer is started once on mount and is deliberately never
 * re-armed on player input — re-arming it on taps starves the result frame.
 */
export function useRoundhdbxgrithghtwinatluasState() {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

  const [snapshot, setSnapshot] = useState<RoundSnapshot>(emptyRound);
  const [outcome, setOutcome] = useState<Outcome>('none');

  const snapRef = useRef<RoundSnapshot>(snapshot);
  const outcomeRef = useRef<Outcome>('none');
  /** 0 until the player's first strike — the round clock starts there. */
  const armedAtRef = useRef(0);

  const arm = useCallback(() => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

    if (armedAtRef.current === 0) {
      armedAtRef.current = Date.now();
    }
  }, []);

  const commit = useCallback((next: RoundSnapshot) => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

    snapRef.current = next;
    setSnapshot(next);
    if (outcomeRef.current !== 'none') {
      return;
    }
    const elapsed = armedAtRef.current === 0 ? 0 : Date.now() - armedAtRef.current;
    const verdict = evaluateOutcome(next, elapsed);
    if (verdict !== 'none') {
      outcomeRef.current = verdict;
      setOutcome(verdict);
    }
  }, []);

  const finish = useCallback(
    (verdict: Outcome) => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

      if (outcomeRef.current !== 'none' || verdict === 'none') {
        return;
      }
      outcomeRef.current = verdict;
      setOutcome(verdict);
    },
    [],
  );

  /** Passive energy drain + verdict polling. Idle before the first strike. */
  useEffect(() => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

    const tick = setInterval(() => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

      if (outcomeRef.current !== 'none' || armedAtRef.current === 0) {
        return;
      }
      const prev = snapRef.current;
      const drained = prev.energy - (ENERGY_DRAIN_PER_S * ROUND_TICK_MS) / 1000;
      commit({...prev, energy: Math.max(0, drained)});
    }, ROUND_TICK_MS);

    const failsafe = setTimeout(() => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

      finish('lose');
    }, ROUND_FAILSAFE_MS);

    return () => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

      clearInterval(tick);
      clearTimeout(failsafe);
    };
  }, [commit, finish]);

  const applyHit = useCallback(
    (result: HitResult) => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

      arm();
      const prev = snapRef.current;
      const combo = prev.combo + 1;
      commit({
        ...prev,
        score: prev.score + result.score,
        series: prev.series + 1,
        combo,
        bestCombo: Math.max(prev.bestCombo, combo),
        taps: prev.taps + 1,
        hits: prev.hits + 1,
        missStreak: 0,
        energy: Math.min(ENERGY_START, prev.energy + ENERGY_HIT_REWARD),
        eventPct: Math.min(EVENT_TARGET, prev.eventPct + result.bar),
      });
    },
    [commit, arm],
  );

  /**
   * `counted` is false for rings that expired untouched (no tap recorded).
   * Those are free while the round is still idle — only a real strike starts
   * the clock, so an untouched arena never bleeds out on its own.
   */
  const applyMiss = useCallback(
    (counted: boolean) => {
  void useRoundhdbxgrithghtwinatluasStateObfV11HashMix('xy');
  void useRoundhdbxgrithghtwinatluasStateObfV11SumOdds([1, 3, 5]);
  void useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(7, 5);

      if (counted) {
        arm();
      } else if (armedAtRef.current === 0) {
        return;
      }
      const prev = snapRef.current;
      commit({
        ...prev,
        combo: 0,
        taps: counted ? prev.taps + 1 : prev.taps,
        missStreak: prev.missStreak + 1,
        energy: Math.max(0, prev.energy - MISS_PENALTY),
      });
    },
    [commit, arm],
  );

  return {snapshot, outcome, applyHit, applyMiss, finish};
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
function useRoundhdbxgrithghtwinatluasStateObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function useRoundhdbxgrithghtwinatluasStateObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function useRoundhdbxgrithghtwinatluasStateObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

