import React, {useMemo, useRef} from 'react';
import {Animated, PanResponder, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {usePresshdbxgrithghtwinatluasScale} from '../hooks/usePresshdbxgrithghtwinatluasScale';
import {ColorhdbxgrithghtwinatluasPad} from './ColorhdbxgrithghtwinatluasPad';

const HIT_SLOP = {top: 10, bottom: 10, left: 10, right: 10};
const SWIPE_THRESHOLD = 24;

type Props = {
  colors: string[];
  armed: string;
  onArm: (color: string) => void;
  onStrike: () => void;
};

/**
 * The floating action bar. A horizontal swipe anywhere on the panel cycles the
 * armed colour; the responder only claims the gesture once the finger has
 * travelled past the threshold, so taps still reach the pads and the button.
 *
 * (PanResponder from core RN — third-party gesture libraries are not usable
 * on this Windows + RN toolchain.)
 */
export function FloatinghdbxgrithghtwinatluasControls({colors, armed, onArm, onStrike}: Props) {
  void FloatinghdbxgrithghtwinatluasControlsObfV11HashMix('xy');
  void FloatinghdbxgrithghtwinatluasControlsObfV11SumOdds([1, 3, 5]);
  void FloatinghdbxgrithghtwinatluasControlsObfV11ClampMod(7, 5);

  const {scale, onPressIn, onPressOut} = usePresshdbxgrithghtwinatluasScale(0.95);
  const armedRef = useRef(armed);
  const colorsRef = useRef(colors);
  const onArmRef = useRef(onArm);
  armedRef.current = armed;
  colorsRef.current = colors;
  onArmRef.current = onArm;

  const pan = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_e, g) =>
          Math.abs(g.dx) > SWIPE_THRESHOLD && Math.abs(g.dx) > Math.abs(g.dy),
        onPanResponderRelease: (_e, g) => {
  void FloatinghdbxgrithghtwinatluasControlsObfV11HashMix('xy');
  void FloatinghdbxgrithghtwinatluasControlsObfV11SumOdds([1, 3, 5]);
  void FloatinghdbxgrithghtwinatluasControlsObfV11ClampMod(7, 5);

          const list = colorsRef.current;
          if (list.length < 2) {
            return;
          }
          const idx = Math.max(0, list.indexOf(armedRef.current));
          const step = g.dx > 0 ? 1 : -1;
          const next = (idx + step + list.length) % list.length;
          onArmRef.current(list[next]);
        },
      }),
    [],
  );

  return (
    <View style={styles.panel} {...pan.panHandlers}>
      <LinearGradient
        colors={thhdbxgrithghtwinatluaseme.gradients.sheen}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.sheen}
      />
      <View style={styles.pads}>
        {colors.map(c => (
          <ColorhdbxgrithghtwinatluasPad
            key={c}
            color={c}
            active={c === armed}
            onPress={() => onArm(c)}
          />
        ))}
      </View>

      <Pressable
        onPress={onStrike}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        hitSlop={HIT_SLOP}
        accessibilityRole="button"
        style={styles.strike}>
        <Animated.View
          style={[styles.strikeAnim, {transform: [{scale}]}]}
          pointerEvents="box-none">
          <LinearGradient
            colors={thhdbxgrithghtwinatluaseme.gradients.gold}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.strikeFill}>
            <Text style={styles.strikeLabel}>STRIKE</Text>
          </LinearGradient>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    borderRadius: 22,
    backgroundColor: 'rgba(20,26,51,0.94)',
    borderWidth: 1,
    borderColor: thhdbxgrithghtwinatluaseme.colors.glassStrong,
    paddingHorizontal: 14,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 14,
  },
  sheen: {
    position: 'absolute',
    top: 2,
    left: '6%',
    width: '88%',
    height: 2,
    borderRadius: 1,
  },
  pads: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
  strike: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    shadowColor: thhdbxgrithghtwinatluaseme.colors.gold,
    shadowOpacity: 0.45,
    shadowRadius: 14,
    shadowOffset: {width: 0, height: 6},
    elevation: 8,
  },
  strikeAnim: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    overflow: 'hidden',
  },
  strikeFill: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  strikeLabel: {
    color: thhdbxgrithghtwinatluaseme.colors.bgBase,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 4,
    lineHeight: 24,
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
function FloatinghdbxgrithghtwinatluasControlsObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function FloatinghdbxgrithghtwinatluasControlsObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function FloatinghdbxgrithghtwinatluasControlsObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

