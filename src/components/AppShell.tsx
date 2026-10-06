import React from 'react';
import {ImageBackground, ImageSourcePropType, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {theme} from '../constants/theme';

type Props = {
  bg: ImageSourcePropType;
  overlay: string[];
  children: React.ReactNode;
  tintTop?: string;
  tintBottom?: string;
};

/**
 * Shared screen scaffold: artwork, a gradient veil over it, then the content.
 * That is three of the four depth layers every screen is required to have.
 */
export function AppShell({bg, overlay, children, tintTop, tintBottom}: Props) {
  return (
    <View style={styles.root}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={overlay}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={StyleSheet.absoluteFill}
        />
        {tintTop ? (
          <View style={[styles.blobTop, {backgroundColor: tintTop}]} />
        ) : null}
        {tintBottom ? (
          <View style={[styles.blobBottom, {backgroundColor: tintBottom}]} />
        ) : null}
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.bgDeep,
  },
  bg: {
    flex: 1,
  },
  blobTop: {
    position: 'absolute',
    top: -60,
    right: -70,
    width: 260,
    height: 260,
    borderRadius: 130,
    opacity: 0.12,
  },
  blobBottom: {
    position: 'absolute',
    bottom: -90,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.1,
  },
});
