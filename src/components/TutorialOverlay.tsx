import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CORAL, CYAN, GOLD, VIOLET} from '../constants/config';
import {theme} from '../constants/theme';
import {GhostButton} from './GhostButton';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const DOTS = [GOLD, CYAN, CORAL, VIOLET];

/**
 * Rules card. Deliberately carries no PLAY / START wording so the Menu keeps a
 * single primary-CTA token.
 */
export function TutorialOverlay({visible, onClose}: Props) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.scrim}>
      <View style={styles.card}>
        <Text style={styles.heading}>HOW IT WORKS</Text>

        <View style={styles.diagram}>
          <View style={styles.diagramFrame} />
          <View style={styles.diagramRing} />
        </View>
        <Text style={styles.line}>
          STRIKE WHEN THE RING MEETS THE FRAME
        </Text>

        <View style={styles.dots}>
          {DOTS.map(c => (
            <View key={c} style={[styles.dot, {backgroundColor: c}]} />
          ))}
        </View>
        <Text style={styles.line}>
          PICK A COLOUR PAD TO ARM THE NEXT TARGET
        </Text>

        <Text style={styles.footnote}>
          THREE MISSES IN A ROW OR EMPTY ENERGY ENDS THE ROUND
        </Text>

        <View style={styles.cta}>
          <GhostButton label="GOT IT" onPress={onClose} tint={theme.colors.gold} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.scrim,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(243,195,73,0.3)',
    padding: 22,
    alignItems: 'center',
  },
  heading: {
    color: theme.colors.gold,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
    lineHeight: 26,
    marginBottom: 18,
  },
  diagram: {
    width: 108,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  diagramFrame: {
    position: 'absolute',
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 3,
    borderColor: theme.colors.gold,
  },
  diagramRing: {
    position: 'absolute',
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 2,
    borderColor: 'rgba(43,195,228,0.6)',
  },
  line: {
    color: theme.colors.textSoft,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 18,
  },
  dots: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  footnote: {
    color: theme.colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  cta: {
    width: '100%',
  },
});
