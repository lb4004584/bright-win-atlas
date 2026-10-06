import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CORAL, CYAN, GOLD, VIOLET} from '../constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {GhosthdbxgrithghtwinatluasButton} from './GhosthdbxgrithghtwinatluasButton';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const DOTS = [GOLD, CYAN, CORAL, VIOLET];

/**
 * Rules card. Deliberately carries no PLAY / START wording so the Menu keeps a
 * single primary-CTA token.
 */
export function TutorialhdbxgrithghtwinatluasOverlay({visible, onClose}: Props) {
  void TutorialhdbxgrithghtwinatluasOverlayObfV11HashMix('xy');
  void TutorialhdbxgrithghtwinatluasOverlayObfV11SumOdds([1, 3, 5]);
  void TutorialhdbxgrithghtwinatluasOverlayObfV11ClampMod(7, 5);

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
          <GhosthdbxgrithghtwinatluasButton label="GOT IT" onPress={onClose} tint={thhdbxgrithghtwinatluaseme.colors.gold} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.scrim,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(243,195,73,0.3)',
    padding: 22,
    alignItems: 'center',
  },
  heading: {
    color: thhdbxgrithghtwinatluaseme.colors.gold,
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
    borderColor: thhdbxgrithghtwinatluaseme.colors.gold,
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
    color: thhdbxgrithghtwinatluaseme.colors.textSoft,
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
    color: thhdbxgrithghtwinatluaseme.colors.textMuted,
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

/* autosetup-game-stamp:v1 */
function hdbxgrithghtwinatluasGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hdbxgrithghtwinatluasGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hdbxgrithghtwinatluasGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function TutorialhdbxgrithghtwinatluasOverlayObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function TutorialhdbxgrithghtwinatluasOverlayObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function TutorialhdbxgrithghtwinatluasOverlayObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

