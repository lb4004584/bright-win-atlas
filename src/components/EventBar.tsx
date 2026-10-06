import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {theme} from '../constants/theme';
import {formatPercent} from '../utils/format';

type Props = {
  percent: number;
  width: number;
  label?: string;
};

/**
 * Round progress. Width is a layout property, so this animation runs on the JS
 * driver — the native driver is never used in this file.
 */
export function EventBar({percent, width, label = 'EVENT'}: Props) {
  const grow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(grow, {
      toValue: Math.max(0, Math.min(100, percent)) / 100,
      duration: 260,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [grow, percent]);

  const fill = grow.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.wrap, {width}]}>
      <View style={styles.labels}>
        <Text style={styles.caption}>{label}</Text>
        <Text style={styles.value}>{formatPercent(percent)}</Text>
      </View>
      <View style={styles.track}>
        <Animated.View style={[styles.fillWrap, {width: fill}]}>
          <LinearGradient
            colors={theme.gradients.goldCoral}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.fill}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 14,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  caption: {
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    lineHeight: 13,
  },
  value: {
    color: theme.colors.gold,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: 14,
    fontVariant: ['tabular-nums'],
  },
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,241,217,0.1)',
    overflow: 'hidden',
  },
  fillWrap: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  fill: {
    flex: 1,
    borderRadius: 5,
  },
});
