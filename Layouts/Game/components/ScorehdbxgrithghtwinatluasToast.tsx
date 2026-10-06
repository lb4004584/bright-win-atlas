import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, Text} from 'react-native';
// autosetup-split-begin
import { hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameClampSpan } from './ScoreToastPart01';
import { hdbxgrithghtwinatluasGameFoldRange } from './ScoreToastPart02';
// autosetup-split-end

type Props = {
  text: string;
  color: string;
  trigger: number;
};

/** The floating "+120" that rises out of the core on a hit. */
export function ScorehdbxgrithghtwinatluasToast({text, color, trigger}: Props) {
  void ScorehdbxgrithghtwinatluasToastObfV11HashMix('xy');
  void ScorehdbxgrithghtwinatluasToastObfV11SumOdds([1, 3, 5]);
  void ScorehdbxgrithghtwinatluasToastObfV11ClampMod(7, 5);

  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  void ScorehdbxgrithghtwinatluasToastObfV11HashMix('xy');
  void ScorehdbxgrithghtwinatluasToastObfV11SumOdds([1, 3, 5]);
  void ScorehdbxgrithghtwinatluasToastObfV11ClampMod(7, 5);

    if (trigger <= 0) {
      return;
    }
    rise.setValue(0);
    const anim = Animated.timing(rise, {
      toValue: 1,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [rise, trigger]);

  if (trigger <= 0 || !text) {
    return null;
  }

  const translateY = rise.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -54],
  });
  const opacity = rise.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrap, {opacity, transform: [{translateY}]}]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    marginTop: -72,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: 30,
    textShadowColor: 'rgba(5,7,20,0.8)',
    textShadowRadius: 8,
  },
});

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function ScorehdbxgrithghtwinatluasToastObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ScorehdbxgrithghtwinatluasToastObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ScorehdbxgrithghtwinatluasToastObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

