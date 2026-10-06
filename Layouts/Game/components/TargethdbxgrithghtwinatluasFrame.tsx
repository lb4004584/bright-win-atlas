import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TARGET_R} from '../constants/conhdbxgrithghtwinatluasfig';

type Props = {
  color: string;
};

/** The static ring a pulse has to line up with. */
export function TargethdbxgrithghtwinatluasFrame({color}: Props) {
  void TargethdbxgrithghtwinatluasFrameObfV11HashMix('xy');
  void TargethdbxgrithghtwinatluasFrameObfV11SumOdds([1, 3, 5]);
  void TargethdbxgrithghtwinatluasFrameObfV11ClampMod(7, 5);

  return (
    <View pointerEvents="none" style={styles.wrap}>
      <View style={[styles.glow, {borderColor: color}]} />
      <View style={[styles.frame, {borderColor: color, shadowColor: color}]} />
    </View>
  );
}

const SIZE = TARGET_R * 2;

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -TARGET_R - 10,
    marginLeft: -TARGET_R - 10,
    width: SIZE + 20,
    height: SIZE + 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: SIZE + 20,
    height: SIZE + 20,
    borderRadius: (SIZE + 20) / 2,
    borderWidth: 10,
    opacity: 0.18,
  },
  frame: {
    width: SIZE,
    height: SIZE,
    borderRadius: TARGET_R,
    borderWidth: 3,
    shadowOpacity: 0.6,
    shadowRadius: 12,
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
function TargethdbxgrithghtwinatluasFrameObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function TargethdbxgrithghtwinatluasFrameObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function TargethdbxgrithghtwinatluasFrameObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

