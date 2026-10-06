import {useCallback, useEffect, useRef, useState} from 'react';

import {
  ENERGY_DRAIN_PER_S,
  ENERGY_HIT_REWARD,
  ENERGY_START,
  EVENT_TARGET,
  MISS_PENALTY,
  ROUND_FAILSAFE_MS,
  ROUND_TICK_MS,
} from '../constants/config';
import {HitResult} from '../game/ringEngine';
import {
  Outcome,
  RoundSnapshot,
  emptyRound,
  evaluateOutcome,
} from '../game/roundRules';

/**
 * Energy, event bar, streaks and the round verdict.
 *
 * The failsafe timer is started once on mount and is deliberately never
 * re-armed on player input — re-arming it on taps starves the result frame.
 */
export function useRoundState() {
  const [snapshot, setSnapshot] = useState<RoundSnapshot>(emptyRound);
  const [outcome, setOutcome] = useState<Outcome>('none');

  const snapRef = useRef<RoundSnapshot>(snapshot);
  const outcomeRef = useRef<Outcome>('none');
  /** 0 until the player's first strike — the round clock starts there. */
  const armedAtRef = useRef(0);

  const arm = useCallback(() => {
    if (armedAtRef.current === 0) {
      armedAtRef.current = Date.now();
    }
  }, []);

  const commit = useCallback((next: RoundSnapshot) => {
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
    const tick = setInterval(() => {
      if (outcomeRef.current !== 'none' || armedAtRef.current === 0) {
        return;
      }
      const prev = snapRef.current;
      const drained = prev.energy - (ENERGY_DRAIN_PER_S * ROUND_TICK_MS) / 1000;
      commit({...prev, energy: Math.max(0, drained)});
    }, ROUND_TICK_MS);

    const failsafe = setTimeout(() => {
      finish('lose');
    }, ROUND_FAILSAFE_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(failsafe);
    };
  }, [commit, finish]);

  const applyHit = useCallback(
    (result: HitResult) => {
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
