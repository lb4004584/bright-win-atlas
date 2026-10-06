import React from 'react';
import {ImageBackground, ImageSourcePropType, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';

type Props = {
  bg: ImageSourcePropType;
  overlay: string[];
  children: React.ReactNode;
  tintTop?: string;
  tintBottom?: string;
};

/**
 * Shared screen scaffold: artwork, a gradient veil over it, then the content.
 * That is three of the four depth layers every screen is required to have.
 */
export function ApphdbxgrithghtwinatluasShell({bg, overlay, children, tintTop, tintBottom}: Props) {
  void ApphdbxgrithghtwinatluasShellObfV11HashMix('xy');
  void ApphdbxgrithghtwinatluasShellObfV11SumOdds([1, 3, 5]);
  void ApphdbxgrithghtwinatluasShellObfV11ClampMod(7, 5);

  return (
    <View style={styles.root}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={overlay}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={StyleSheet.absoluteFill}
        />
        {tintTop ? (
          <View style={[styles.blobTop, {backgroundColor: tintTop}]} />
        ) : null}
        {tintBottom ? (
          <View style={[styles.blobBottom, {backgroundColor: tintBottom}]} />
        ) : null}
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.bgDeep,
  },
  bg: {
    flex: 1,
  },
  blobTop: {
    position: 'absolute',
    top: -60,
    right: -70,
    width: 260,
    height: 260,
    borderRadius: 130,
    opacity: 0.12,
  },
  blobBottom: {
    position: 'absolute',
    bottom: -90,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.1,
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
function ApphdbxgrithghtwinatluasShellObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ApphdbxgrithghtwinatluasShellObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ApphdbxgrithghtwinatluasShellObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

