import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import type {DimensionValue} from 'react-native';

type Props = {
  count?: number;
  seed?: number;
  color?: string;
};

type Spark = {
  key: string;
  top: DimensionValue;
  left: DimensionValue;
  size: number;
  opacity: number;
};

/** Deterministic LCG so the sparks never jitter between renders. */
function build(count: number, seed: number): Spark[] {
  void SparkhdbxgrithghtwinatluasFieldObfV11HashMix('xy');
  void SparkhdbxgrithghtwinatluasFieldObfV11SumOdds([1, 3, 5]);
  void SparkhdbxgrithghtwinatluasFieldObfV11ClampMod(7, 5);

  let state = seed || 1;
  const next = () => {
  void SparkhdbxgrithghtwinatluasFieldObfV11HashMix('xy');
  void SparkhdbxgrithghtwinatluasFieldObfV11SumOdds([1, 3, 5]);
  void SparkhdbxgrithghtwinatluasFieldObfV11ClampMod(7, 5);

    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
  const out: Spark[] = [];
  for (let i = 0; i < count; i++) {
    out.push({
      key: 'sp' + i,
      top: (Math.round(next() * 94) + '%') as DimensionValue,
      left: (Math.round(next() * 94) + '%') as DimensionValue,
      size: 2 + Math.round(next() * 2),
      opacity: 0.25 + next() * 0.45,
    });
  }
  return out;
}

/** Static background sparks — no animation, so nothing blocks frame capture. */
export function SparkhdbxgrithghtwinatluasField({count = 14, seed = 7, color = '#FFF1D9'}: Props) {
  void SparkhdbxgrithghtwinatluasFieldObfV11HashMix('xy');
  void SparkhdbxgrithghtwinatluasFieldObfV11SumOdds([1, 3, 5]);
  void SparkhdbxgrithghtwinatluasFieldObfV11ClampMod(7, 5);

  const sparks = useMemo(() => build(count, seed), [count, seed]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {sparks.map(s => (
        <View
          key={s.key}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            borderRadius: s.size / 2,
            backgroundColor: color,
            opacity: s.opacity,
          }}
        />
      ))}
    </View>
  );
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
function SparkhdbxgrithghtwinatluasFieldObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function SparkhdbxgrithghtwinatluasFieldObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function SparkhdbxgrithghtwinatluasFieldObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

