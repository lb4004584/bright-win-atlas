import React from 'react';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';

import {theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};

type Props = {
  label: string;
  onPress: () => void;
  height?: number;
  grow?: boolean;
  tint?: string;
};

/** Secondary action. Plain text only — no icon, so nothing can sit crooked. */
export function GhostButton({label, onPress, height = 48, grow, tint}: Props) {
  const {scale, onPressIn, onPressOut} = usePressScale(0.97);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[
        styles.press,
        {height, borderColor: tint ? tint : theme.colors.glassStrong},
        grow ? styles.grow : styles.full,
      ]}>
      <Animated.View
        style={[styles.anim, {height, transform: [{scale}]}]}
        pointerEvents="box-none">
        <Text style={[styles.label, tint ? {color: tint} : null]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    borderRadius: 14,
    backgroundColor: theme.colors.glass,
    borderWidth: 1,
    overflow: 'hidden',
  },
  full: {
    width: '100%',
  },
  grow: {
    flex: 1,
  },
  anim: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 18,
  },
});
