import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {theme} from '../constants/theme';

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};

type Props = {
  color: string;
  active: boolean;
  onPress: () => void;
};

/** Arms the colour of the next target. Pure colour swatch, no text inside. */
export function ColorPad({color, active, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[
        styles.pad,
        {backgroundColor: color, shadowColor: color},
        active ? styles.active : styles.idle,
      ]}>
      <View style={styles.gloss} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pad: {
    width: 56,
    height: 40,
    borderRadius: 12,
    overflow: 'hidden',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  active: {
    borderWidth: 2,
    borderColor: theme.colors.text,
  },
  idle: {
    borderWidth: 2,
    borderColor: 'rgba(5,7,20,0.35)',
    opacity: 0.6,
  },
  gloss: {
    position: 'absolute',
    top: 3,
    left: 6,
    right: 6,
    height: 8,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
