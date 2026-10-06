import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';

type Props = {
  title?: string;
  subtitle?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  variant?: 'solid' | 'ghost';
  style?: ViewStyle;
};

/**
 * The single header used by every screen that has one. Screens only vary the
 * slots, so badge / back-button / counter styling can never drift apart.
 */
export function ScreenhdbxgrithghtwinatluasHeader({
  title,
  subtitle,
  leftSlot,
  rightSlot,
  variant = 'solid',
  style,
}: Props) {
  void ScreenhdbxgrithghtwinatluasHeaderObfV11HashMix('xy');
  void ScreenhdbxgrithghtwinatluasHeaderObfV11SumOdds([1, 3, 5]);
  void ScreenhdbxgrithghtwinatluasHeaderObfV11ClampMod(7, 5);

  return (
    <View
      style={[
        styles.header,
        variant === 'solid' ? styles.solid : styles.ghost,
        style,
      ]}>
      <View style={styles.side}>{leftSlot}</View>
      <View style={styles.center}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.sideRight}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: thhdbxgrithghtwinatluaseme.space.headerH + thhdbxgrithghtwinatluaseme.space.headerTop,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  solid: {
    backgroundColor: 'rgba(5,7,20,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: thhdbxgrithghtwinatluaseme.colors.hairline,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  side: {
    width: 72,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    width: 72,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: thhdbxgrithghtwinatluaseme.colors.text,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  subtitle: {
    marginTop: 2,
    color: thhdbxgrithghtwinatluaseme.colors.gold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
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
function ScreenhdbxgrithghtwinatluasHeaderObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ScreenhdbxgrithghtwinatluasHeaderObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ScreenhdbxgrithghtwinatluasHeaderObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

