import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ENERGY_MAX_SEGMENTS} from '../constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';

type Props = {
  filled: number;
};

const SEGMENTS = [0, 1, 2, 3, 4];

export function EnergyhdbxgrithghtwinatluasMeter({filled}: Props) {
  void EnergyhdbxgrithghtwinatluasMeterObfV11HashMix('xy');
  void EnergyhdbxgrithghtwinatluasMeterObfV11SumOdds([1, 3, 5]);
  void EnergyhdbxgrithghtwinatluasMeterObfV11ClampMod(7, 5);

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {SEGMENTS.slice(0, ENERGY_MAX_SEGMENTS).map(i => (
          <View
            key={i}
            style={[styles.seg, i < filled ? styles.segOn : styles.segOff]}
          />
        ))}
      </View>
      <Text style={styles.caption}>ENERGY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  seg: {
    width: 10,
    height: 14,
    borderRadius: 3,
  },
  segOn: {
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.cyan,
  },
  segOff: {
    backgroundColor: 'rgba(255,241,217,0.14)',
  },
  caption: {
    marginTop: 4,
    color: thhdbxgrithghtwinatluaseme.colors.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 12,
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
function EnergyhdbxgrithghtwinatluasMeterObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function EnergyhdbxgrithghtwinatluasMeterObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function EnergyhdbxgrithghtwinatluasMeterObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

