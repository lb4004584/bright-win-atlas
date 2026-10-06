import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

import {RING_MAX_R, RING_MIN_SCALE} from '../constants/config';

type Props = {
  color: string;
  startedAt: number;
  travelMs: number;
};

/**
 * One expanding pulse. Only transform and opacity are animated, so the whole
 * thing stays on the native driver.
 *
 * The animation picks up from however much of the travel has already elapsed
 * at mount, which keeps the drawn radius in step with the radius the engine
 * computes from `startedAt` when judging a tap.
 */
export function PulseRing({color, startedAt, travelMs}: Props) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const elapsed = Math.max(0, Date.now() - startedAt);
    const from = Math.min(1, elapsed / travelMs);
    progress.setValue(from);
    const anim = Animated.timing(progress, {
      toValue: 1,
      duration: Math.max(80, travelMs * (1 - from)),
      easing: Easing.linear,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [progress, startedAt, travelMs]);

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [RING_MIN_SCALE, 1],
  });
  const opacity = progress.interpolate({
    inputRange: [0, 0.65, 1],
    outputRange: [0.95, 0.75, 0.3],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.ring,
        {
          borderColor: color,
          shadowColor: color,
          opacity,
          transform: [{scale}],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ring: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -RING_MAX_R,
    marginLeft: -RING_MAX_R,
    width: RING_MAX_R * 2,
    height: RING_MAX_R * 2,
    borderRadius: RING_MAX_R,
    borderWidth: 2.5,
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
});
