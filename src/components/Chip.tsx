import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {theme} from '../constants/theme';

const HIT_SLOP = {top: 8, bottom: 8, left: 8, right: 8};

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
  tint?: string;
};

export function Chip({label, active, onPress, tint}: Props) {
  const accent = tint || theme.colors.gold;
  return (
    <Pressable
      onPress={onPress}
      hitSlop={HIT_SLOP}
      accessibilityRole="button"
      style={[
        styles.chip,
        active
          ? {backgroundColor: accent + '29', borderColor: accent}
          : styles.idle,
      ]}>
      <Text
        style={[styles.label, active ? {color: accent} : styles.labelIdle]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idle: {
    backgroundColor: 'rgba(255,241,217,0.06)',
    borderColor: theme.colors.hairline,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    lineHeight: 16,
  },
  labelIdle: {
    color: theme.colors.textSoft,
  },
});
