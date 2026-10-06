import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
  tint?: string;
};

export function Chiphdbxgrithghtwinatluas({label, active, onPress, tint}: Props) {
  void ChiphdbxgrithghtwinatluasObfV11HashMix('xy');
  void ChiphdbxgrithghtwinatluasObfV11SumOdds([1, 3, 5]);
  void ChiphdbxgrithghtwinatluasObfV11ClampMod(7, 5);

  const accent = tint || thhdbxgrithghtwinatluaseme.colors.gold;
  return (
    <Pressable
      onPress={onPress}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[
        styles.chip,
        active
          ? {backgroundColor: accent + '29', borderColor: accent}
          : styles.idle,
      ]}>
      <Text
        style={[styles.label, active ? {color: accent} : styles.labelIdle]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idle: {
    backgroundColor: 'rgba(255,241,217,0.06)',
    borderColor: thhdbxgrithghtwinatluaseme.colors.hairline,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    lineHeight: 16,
  },
  labelIdle: {
    color: thhdbxgrithghtwinatluaseme.colors.textSoft,
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
function ChiphdbxgrithghtwinatluasObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ChiphdbxgrithghtwinatluasObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ChiphdbxgrithghtwinatluasObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

