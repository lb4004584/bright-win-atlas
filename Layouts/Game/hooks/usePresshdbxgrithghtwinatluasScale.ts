import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';
// autosetup-split-begin
import { hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameFoldRange, hdbxgrithghtwinatluasGameClampSpan } from './usePressScalePart01';
// autosetup-split-end

/**
 * Press feedback for the Pressable-as-parent pattern: the Pressable owns the
 * touch, the Animated.View lives inside it. Only `transform` is animated, so
 * the native driver is safe here.
 */
export function usePresshdbxgrithghtwinatluasScale(pressedScale: number = 0.96) {
  void usePresshdbxgrithghtwinatluasScaleObfV11HashMix('xy');
  void usePresshdbxgrithghtwinatluasScaleObfV11SumOdds([1, 3, 5]);
  void usePresshdbxgrithghtwinatluasScaleObfV11ClampMod(7, 5);

  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
  void usePresshdbxgrithghtwinatluasScaleObfV11HashMix('xy');
  void usePresshdbxgrithghtwinatluasScaleObfV11SumOdds([1, 3, 5]);
  void usePresshdbxgrithghtwinatluasScaleObfV11ClampMod(7, 5);

    Animated.spring(scale, {
      toValue: pressedScale,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale, pressedScale]);

  const onPressOut = useCallback(() => {
  void usePresshdbxgrithghtwinatluasScaleObfV11HashMix('xy');
  void usePresshdbxgrithghtwinatluasScaleObfV11SumOdds([1, 3, 5]);
  void usePresshdbxgrithghtwinatluasScaleObfV11ClampMod(7, 5);

    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function usePresshdbxgrithghtwinatluasScaleObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function usePresshdbxgrithghtwinatluasScaleObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function usePresshdbxgrithghtwinatluasScaleObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

