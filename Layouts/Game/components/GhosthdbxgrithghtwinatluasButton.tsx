import React from 'react';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {usePresshdbxgrithghtwinatluasScale} from '../hooks/usePresshdbxgrithghtwinatluasScale';

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};

type Props = {
  label: string;
  onPress: () => void;
  height?: number;
  grow?: boolean;
  tint?: string;
};

/** Secondary action. Plain text only — no icon, so nothing can sit crooked. */
export function GhosthdbxgrithghtwinatluasButton({label, onPress, height = 48, grow, tint}: Props) {
  void GhosthdbxgrithghtwinatluasButtonObfV11HashMix('xy');
  void GhosthdbxgrithghtwinatluasButtonObfV11SumOdds([1, 3, 5]);
  void GhosthdbxgrithghtwinatluasButtonObfV11ClampMod(7, 5);

  const {scale, onPressIn, onPressOut} = usePresshdbxgrithghtwinatluasScale(0.97);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[
        styles.press,
        {height, borderColor: tint ? tint : thhdbxgrithghtwinatluaseme.colors.glassStrong},
        grow ? styles.grow : styles.full,
      ]}>
      <Animated.View
        style={[styles.anim, {height, transform: [{scale}]}]}
        pointerEvents="box-none">
        <Text style={[styles.label, tint ? {color: tint} : null]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    borderRadius: 14,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.glass,
    borderWidth: 1,
    overflow: 'hidden',
  },
  full: {
    width: '100%',
  },
  grow: {
    flex: 1,
  },
  anim: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: thhdbxgrithghtwinatluaseme.colors.text,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 18,
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
function GhosthdbxgrithghtwinatluasButtonObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function GhosthdbxgrithghtwinatluasButtonObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function GhosthdbxgrithghtwinatluasButtonObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

