import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, Text} from 'react-native';

type Props = {
  text: string;
  color: string;
  trigger: number;
};

/** The floating "+120" that rises out of the core on a hit. */
export function ScoreToast({text, color, trigger}: Props) {
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (trigger <= 0) {
      return;
    }
    rise.setValue(0);
    const anim = Animated.timing(rise, {
      toValue: 1,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [rise, trigger]);

  if (trigger <= 0 || !text) {
    return null;
  }

  const translateY = rise.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -54],
  });
  const opacity = rise.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrap, {opacity, transform: [{translateY}]}]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    marginTop: -72,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: 30,
    textShadowColor: 'rgba(5,7,20,0.8)',
    textShadowRadius: 8,
  },
});
