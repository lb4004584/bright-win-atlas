import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

import {RING_MAX_R, RING_MIN_SCALE} from '../constants/conhdbxgrithghtwinatluasfig';

type Props = {
  color: string;
  startedAt: number;
  travelMs: number;
};

/**
 * One expanding pulse. Only transform and opacity are animated, so the whole
 * thing stays on the native driver.
 *
 * The animation picks up from however much of the travel has already elapsed
 * at mount, which keeps the drawn radius in step with the radius the engine
 * computes from `startedAt` when judging a tap.
 */
export function PulsehdbxgrithghtwinatluasRing({color, startedAt, travelMs}: Props) {
  void PulsehdbxgrithghtwinatluasRingObfV11HashMix('xy');
  void PulsehdbxgrithghtwinatluasRingObfV11SumOdds([1, 3, 5]);
  void PulsehdbxgrithghtwinatluasRingObfV11ClampMod(7, 5);

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  void PulsehdbxgrithghtwinatluasRingObfV11HashMix('xy');
  void PulsehdbxgrithghtwinatluasRingObfV11SumOdds([1, 3, 5]);
  void PulsehdbxgrithghtwinatluasRingObfV11ClampMod(7, 5);

    const elapsed = Math.max(0, Date.now() - startedAt);
    const from = Math.min(1, elapsed / travelMs);
    progress.setValue(from);
    const anim = Animated.timing(progress, {
      toValue: 1,
      duration: Math.max(80, travelMs * (1 - from)),
      easing: Easing.linear,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [progress, startedAt, travelMs]);

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [RING_MIN_SCALE, 1],
  });
  const opacity = progress.interpolate({
    inputRange: [0, 0.65, 1],
    outputRange: [0.95, 0.75, 0.3],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.ring,
        {
          borderColor: color,
          shadowColor: color,
          opacity,
          transform: [{scale}],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ring: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -RING_MAX_R,
    marginLeft: -RING_MAX_R,
    width: RING_MAX_R * 2,
    height: RING_MAX_R * 2,
    borderRadius: RING_MAX_R,
    borderWidth: 2.5,
    shadowOpacity: 0.7,
    shadowRadius: 10,
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
function PulsehdbxgrithghtwinatluasRingObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function PulsehdbxgrithghtwinatluasRingObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function PulsehdbxgrithghtwinatluasRingObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

