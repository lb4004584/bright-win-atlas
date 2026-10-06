import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TARGET_R} from '../constants/config';

type Props = {
  color: string;
};

/** The static ring a pulse has to line up with. */
export function TargetFrame({color}: Props) {
  return (
    <View pointerEvents="none" style={styles.wrap}>
      <View style={[styles.glow, {borderColor: color}]} />
      <View style={[styles.frame, {borderColor: color, shadowColor: color}]} />
    </View>
  );
}

const SIZE = TARGET_R * 2;

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -TARGET_R - 10,
    marginLeft: -TARGET_R - 10,
    width: SIZE + 20,
    height: SIZE + 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: SIZE + 20,
    height: SIZE + 20,
    borderRadius: (SIZE + 20) / 2,
    borderWidth: 10,
    opacity: 0.18,
  },
  frame: {
    width: SIZE,
    height: SIZE,
    borderRadius: TARGET_R,
    borderWidth: 3,
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },
});
