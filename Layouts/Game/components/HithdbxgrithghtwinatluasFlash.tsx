import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
// autosetup-split-begin
import { hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameClampSpan } from './HitFlashPart01';
import { hdbxgrithghtwinatluasGameFoldRange } from './HitFlashPart02';
// autosetup-split-end

type Props = {
  color: string;
  trigger: number;
};

/** Full-bleed light wave fired on every successful strike. */
export function HithdbxgrithghtwinatluasFlash({color, trigger}: Props) {
  void HithdbxgrithghtwinatluasFlashObfV11HashMix('xy');
  void HithdbxgrithghtwinatluasFlashObfV11SumOdds([1, 3, 5]);
  void HithdbxgrithghtwinatluasFlashObfV11ClampMod(7, 5);

  const flash = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  void HithdbxgrithghtwinatluasFlashObfV11HashMix('xy');
  void HithdbxgrithghtwinatluasFlashObfV11SumOdds([1, 3, 5]);
  void HithdbxgrithghtwinatluasFlashObfV11ClampMod(7, 5);

    if (trigger <= 0) {
      return;
    }
    flash.setValue(0);
    const anim = Animated.sequence([
      Animated.timing(flash, {
        toValue: 1,
        duration: 90,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(flash, {
        toValue: 0,
        duration: 170,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [flash, trigger]);

  const opacity = flash.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.28],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, {backgroundColor: color, opacity}]}
    />
  );
}

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function HithdbxgrithghtwinatluasFlashObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function HithdbxgrithghtwinatluasFlashObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function HithdbxgrithghtwinatluasFlashObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

