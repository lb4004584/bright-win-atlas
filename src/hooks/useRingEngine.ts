import {useCallback, useEffect, useRef, useState} from 'react';

import {
  PALETTES,
  PaletteId,
  TARGET_R,
  TEMPOS,
  Tempo,
} from '../constants/config';
import {
  Grade,
  HitResult,
  Ring,
  closestRing,
  gradeFor,
  payoutFor,
  ringRadiusAt,
} from '../game/ringEngine';

type Options = {
  tempo: Tempo;
  palette: PaletteId;
  active: boolean;
  onExpire: () => void;
};

/**
 * Owns the life cycle of the expanding pulse rings: spawn cadence, expiry and
 * hit judgement. Everything the timers touch lives in refs — state is only the
 * render-facing ring list.
 */
export function useRingEngine({tempo, palette, active, onExpire}: Options) {
  const [rings, setRings] = useState<Ring[]>([]);

  const ringsRef = useRef<Ring[]>([]);
  const nextIdRef = useRef(1);
  const expireRef = useRef(onExpire);
  const activeRef = useRef(active);
  const colorsRef = useRef<string[]>(PALETTES[palette]);
  const cfgRef = useRef(TEMPOS[tempo]);

  expireRef.current = onExpire;
  activeRef.current = active;
  colorsRef.current = PALETTES[palette];
  cfgRef.current = TEMPOS[tempo];

  const removeRing = useCallback((id: number, expired: boolean) => {
    const before = ringsRef.current.length;
    ringsRef.current = ringsRef.current.filter(r => r.id !== id);
    if (ringsRef.current.length !== before) {
      setRings(ringsRef.current);
      if (expired && activeRef.current) {
        expireRef.current();
      }
    }
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }
    const timeouts: Array<ReturnType<typeof setTimeout>> = [];

    const spawn = () => {
      if (!activeRef.current) {
        return;
      }
      const colors = colorsRef.current;
      const cfg = cfgRef.current;
      const id = nextIdRef.current++;
      const ring: Ring = {
        id,
        color: colors[Math.floor(Math.random() * colors.length)],
        startedAt: Date.now(),
        travelMs: cfg.travelMs,
      };
      ringsRef.current = ringsRef.current.concat(ring);
      setRings(ringsRef.current);
      timeouts.push(
        setTimeout(() => {
          removeRing(id, true);
        }, cfg.travelMs + 90),
      );
    };

    spawn();
    const interval = setInterval(spawn, TEMPOS[tempo].intervalMs);
    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [active, tempo, removeRing]);

  /** Reset between rounds. */
  const clear = useCallback(() => {
    ringsRef.current = [];
    setRings([]);
  }, []);

  /**
   * Judges a tap against the ring currently closest to the target frame.
   * Consumed rings are removed immediately so they cannot also expire.
   */
  const judgeTap = useCallback(
    (armedColor: string, combo: number): HitResult => {
      const now = Date.now();
      const ring = closestRing(ringsRef.current, now);
      if (!ring) {
        const miss: Grade = 'MISS';
        return payoutFor(miss, combo, false, armedColor, 999);
      }
      const delta = ringRadiusAt(ring, now) - TARGET_R;
      const grade = gradeFor(delta, cfgRef.current.perfectWindow);
      if (grade !== 'MISS') {
        ringsRef.current = ringsRef.current.filter(r => r.id !== ring.id);
        setRings(ringsRef.current);
      }
      return payoutFor(grade, combo, ring.color === armedColor, ring.color, delta);
    },
    [],
  );

  return {rings, judgeTap, clear};
}
