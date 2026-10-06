import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {theme} from '../constants/theme';

type Props = {
  title?: string;
  subtitle?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  variant?: 'solid' | 'ghost';
  style?: ViewStyle;
};

/**
 * The single header used by every screen that has one. Screens only vary the
 * slots, so badge / back-button / counter styling can never drift apart.
 */
export function ScreenHeader({
  title,
  subtitle,
  leftSlot,
  rightSlot,
  variant = 'solid',
  style,
}: Props) {
  return (
    <View
      style={[
        styles.header,
        variant === 'solid' ? styles.solid : styles.ghost,
        style,
      ]}>
      <View style={styles.side}>{leftSlot}</View>
      <View style={styles.center}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.sideRight}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: theme.space.headerH + theme.space.headerTop,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  solid: {
    backgroundColor: 'rgba(5,7,20,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.hairline,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  side: {
    width: 72,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    width: 72,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  subtitle: {
    marginTop: 2,
    color: theme.colors.gold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
