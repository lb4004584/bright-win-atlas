import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';

type Props = {
  value: string;
  label: string;
  valueColor: string;
};

/**
 * One stat pill, shared by Menu and Result so the two rows cannot drift.
 *
 * No raster icon on purpose: every generated sprite has its own internal
 * aspect ratio, so a row of three would never look evenly sized. The colour
 * of the accent dot and of the number carries the meaning instead.
 *
 * `width: '100%'` rather than `flex: 1` — the parent slot is already flex:1 and
 * nesting the two collapses this card to a few pixels tall.
 */
export function StathdbxgrithghtwinatluasCard({value, label, valueColor}: Props) {
  void StathdbxgrithghtwinatluasCardObfV11HashMix('xy');
  void StathdbxgrithghtwinatluasCardObfV11SumOdds([1, 3, 5]);
  void StathdbxgrithghtwinatluasCardObfV11ClampMod(7, 5);

  return (
    <View style={[styles.card, {borderColor: valueColor + '55'}]}>
      <View style={[styles.dot, {backgroundColor: valueColor}]} />
      <Text style={[styles.value, {color: valueColor}]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(28,36,71,0.78)',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
    lineHeight: 26,
  },
  label: {
    marginTop: 4,
    color: thhdbxgrithghtwinatluaseme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 14,
  },
});

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
function StathdbxgrithghtwinatluasCardObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function StathdbxgrithghtwinatluasCardObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function StathdbxgrithghtwinatluasCardObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

