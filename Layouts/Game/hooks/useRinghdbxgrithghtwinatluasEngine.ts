import {useCallback, useEffect, useRef, useState} from 'react';

import {
  PALETTES,
  PaletteId,
  TARGET_R,
  TEMPOS,
  Tempo,
} from '../constants/conhdbxgrithghtwinatluasfig';
import {
  Grade,
  HitResult,
  Ring,
  closestRing,
  gradeFor,
  payoutFor,
  ringRadiusAt,
} from '../game/ringhdbxgrithghtwinatluasEngine';

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
export function useRinghdbxgrithghtwinatluasEngine({tempo, palette, active, onExpire}: Options) {
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

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
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

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
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

    if (!active) {
      return;
    }
    const timeouts: Array<ReturnType<typeof setTimeout>> = [];

    const spawn = () => {
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

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
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

          removeRing(id, true);
        }, cfg.travelMs + 90),
      );
    };

    spawn();
    const interval = setInterval(spawn, TEMPOS[tempo].intervalMs);
    return () => {
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [active, tempo, removeRing]);

  /** Reset between rounds. */
  const clear = useCallback(() => {
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

    ringsRef.current = [];
    setRings([]);
  }, []);

  /**
   * Judges a tap against the ring currently closest to the target frame.
   * Consumed rings are removed immediately so they cannot also expire.
   */
  const judgeTap = useCallback(
    (armedColor: string, combo: number): HitResult => {
  void useRinghdbxgrithghtwinatluasEngineObfV11HashMix('xy');
  void useRinghdbxgrithghtwinatluasEngineObfV11SumOdds([1, 3, 5]);
  void useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(7, 5);

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
function useRinghdbxgrithghtwinatluasEngineObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function useRinghdbxgrithghtwinatluasEngineObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function useRinghdbxgrithghtwinatluasEngineObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

