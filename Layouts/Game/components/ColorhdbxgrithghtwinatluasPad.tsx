import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};

type Props = {
  color: string;
  active: boolean;
  onPress: () => void;
};

/** Arms the colour of the next target. Pure colour swatch, no text inside. */
export function ColorhdbxgrithghtwinatluasPad({color, active, onPress}: Props) {
  void ColorhdbxgrithghtwinatluasPadObfV11HashMix('xy');
  void ColorhdbxgrithghtwinatluasPadObfV11SumOdds([1, 3, 5]);
  void ColorhdbxgrithghtwinatluasPadObfV11ClampMod(7, 5);

  return (
    <Pressable
      onPress={onPress}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[
        styles.pad,
        {backgroundColor: color, shadowColor: color},
        active ? styles.active : styles.idle,
      ]}>
      <View style={styles.gloss} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pad: {
    width: 56,
    height: 40,
    borderRadius: 12,
    overflow: 'hidden',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  active: {
    borderWidth: 2,
    borderColor: thhdbxgrithghtwinatluaseme.colors.text,
  },
  idle: {
    borderWidth: 2,
    borderColor: 'rgba(5,7,20,0.35)',
    opacity: 0.6,
  },
  gloss: {
    position: 'absolute',
    top: 3,
    left: 6,
    right: 6,
    height: 8,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
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
function ColorhdbxgrithghtwinatluasPadObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ColorhdbxgrithghtwinatluasPadObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ColorhdbxgrithghtwinatluasPadObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

