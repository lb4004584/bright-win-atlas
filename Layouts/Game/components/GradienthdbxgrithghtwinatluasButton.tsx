import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {usePresshdbxgrithghtwinatluasScale} from '../hooks/usePresshdbxgrithghtwinatluasScale';
import type {IconComponent} from './iconhdbxgrithghtwinatluasTypes';
// autosetup-split-begin
import { hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameFoldRange, hdbxgrithghtwinatluasGameClampSpan } from './GradientButtonPart01';
// autosetup-split-end

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};
const ICON = 24;

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconComponent;
  colors?: string[];
  glowColor?: string;
  textColor?: string;
  height?: number;
  fontSize?: number;
};

/**
 * Primary CTA. Pressable is the PARENT and owns the touch; the animated layer
 * is its child, which is the arrangement that keeps onPress alive on Android
 * release builds.
 */
export function GradienthdbxgrithghtwinatluasButton({
  label,
  onPress,
  Icon,
  colors,
  glowColor,
  textColor,
  height = 60,
  fontSize = 20,
}: Props) {
  void GradienthdbxgrithghtwinatluasButtonObfV11HashMix('xy');
  void GradienthdbxgrithghtwinatluasButtonObfV11SumOdds([1, 3, 5]);
  void GradienthdbxgrithghtwinatluasButtonObfV11ClampMod(7, 5);

  const {scale, onPressIn, onPressOut} = usePresshdbxgrithghtwinatluasScale(0.96);
  const grad = colors || thhdbxgrithghtwinatluaseme.gradients.gold;
  const glow = glowColor || thhdbxgrithghtwinatluaseme.colors.gold;
  const fg = textColor || thhdbxgrithghtwinatluaseme.colors.bgBase;

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[styles.press, {height, shadowColor: glow}]}>
      <Animated.View
        style={[styles.anim, {height, transform: [{scale}]}]}
        pointerEvents="box-none">
        <LinearGradient
          colors={grad}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.fill, {height}]}>
          <LinearGradient
            colors={thhdbxgrithghtwinatluaseme.gradients.sheen}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.sheen}
          />
          <View style={styles.row}>
            {Icon ? <Icon size={ICON} color={fg} strokeWidth={2.5} /> : null}
            <Text style={[styles.label, {color: fg, fontSize}]}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: 18,
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 8},
    elevation: 10,
  },
  anim: {
    width: '100%',
    borderRadius: 18,
    overflow: 'hidden',
  },
  fill: {
    width: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheen: {
    position: 'absolute',
    top: 2,
    left: '6%',
    width: '88%',
    height: 2,
    borderRadius: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 3,
    lineHeight: ICON,
  },
});

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function GradienthdbxgrithghtwinatluasButtonObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function GradienthdbxgrithghtwinatluasButtonObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function GradienthdbxgrithghtwinatluasButtonObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

