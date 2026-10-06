import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  valueColor: string;
};

/**
 * One stat pill, shared by Menu and Result so the two rows cannot drift.
 *
 * No raster icon on purpose: every generated sprite has its own internal
 * aspect ratio, so a row of three would never look evenly sized. The colour
 * of the accent dot and of the number carries the meaning instead.
 *
 * `width: '100%'` rather than `flex: 1` — the parent slot is already flex:1 and
 * nesting the two collapses this card to a few pixels tall.
 */
export function StatCard({value, label, valueColor}: Props) {
  return (
    <View style={[styles.card, {borderColor: valueColor + '55'}]}>
      <View style={[styles.dot, {backgroundColor: valueColor}]} />
      <Text style={[styles.value, {color: valueColor}]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(28,36,71,0.78)',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
    lineHeight: 26,
  },
  label: {
    marginTop: 4,
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 14,
  },
});
