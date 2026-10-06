import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

type Props = {
  color: string;
  trigger: number;
};

/** Full-bleed light wave fired on every successful strike. */
export function HitFlash({color, trigger}: Props) {
  const flash = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (trigger <= 0) {
      return;
    }
    flash.setValue(0);
    const anim = Animated.sequence([
      Animated.timing(flash, {
        toValue: 1,
        duration: 90,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(flash, {
        toValue: 0,
        duration: 170,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [flash, trigger]);

  const opacity = flash.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.28],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, {backgroundColor: color, opacity}]}
    />
  );
}
