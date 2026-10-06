import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ENERGY_MAX_SEGMENTS} from '../constants/config';
import {theme} from '../constants/theme';

type Props = {
  filled: number;
};

const SEGMENTS = [0, 1, 2, 3, 4];

export function EnergyMeter({filled}: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {SEGMENTS.slice(0, ENERGY_MAX_SEGMENTS).map(i => (
          <View
            key={i}
            style={[styles.seg, i < filled ? styles.segOn : styles.segOff]}
          />
        ))}
      </View>
      <Text style={styles.caption}>ENERGY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  seg: {
    width: 10,
    height: 14,
    borderRadius: 3,
  },
  segOn: {
    backgroundColor: theme.colors.cyan,
  },
  segOff: {
    backgroundColor: 'rgba(255,241,217,0.14)',
  },
  caption: {
    marginTop: 4,
    color: theme.colors.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 12,
  },
});
