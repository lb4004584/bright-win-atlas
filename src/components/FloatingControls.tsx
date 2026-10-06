import React, {useMemo, useRef} from 'react';
import {Animated, PanResponder, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';
import {ColorPad} from './ColorPad';

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
export function FloatingControls({colors, armed, onArm, onStrike}: Props) {
  const {scale, onPressIn, onPressOut} = usePressScale(0.95);
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
        colors={theme.gradients.sheen}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.sheen}
      />
      <View style={styles.pads}>
        {colors.map(c => (
          <ColorPad
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
            colors={theme.gradients.gold}
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
    borderColor: theme.colors.glassStrong,
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
    shadowColor: theme.colors.gold,
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
    color: theme.colors.bgBase,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 4,
    lineHeight: 24,
  },
});
