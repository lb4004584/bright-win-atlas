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
  let state = seed || 1;
  const next = () => {
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
export function SparkField({count = 14, seed = 7, color = '#FFF1D9'}: Props) {
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
