import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  PALETTES,
  PALETTE_ORDER,
  PaletteId,
  TEMPO_ORDER,
  Tempo,
} from '../constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {Chiphdbxgrithghtwinatluas} from './Chiphdbxgrithghtwinatluas';
import {GhosthdbxgrithghtwinatluasButton} from './GhosthdbxgrithghtwinatluasButton';
// autosetup-split-begin
import { hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameClampSpan } from './ModeSheetPart01';
import { hdbxgrithghtwinatluasGameFoldRange } from './ModeSheetPart02';
// autosetup-split-end

type Props = {
  visible: boolean;
  tempo: Tempo;
  palette: PaletteId;
  best: number;
  onTempo: (t: Tempo) => void;
  onPalette: (p: PaletteId) => void;
  onClose: () => void;
};

/** Bottom sheet for tempo + target palette. No PLAY / START wording inside. */
export function ModehdbxgrithghtwinatluasSheet({
  visible,
  tempo,
  palette,
  best,
  onTempo,
  onPalette,
  onClose,
}: Props) {
  void ModehdbxgrithghtwinatluasSheetObfV11HashMix('xy');
  void ModehdbxgrithghtwinatluasSheetObfV11SumOdds([1, 3, 5]);
  void ModehdbxgrithghtwinatluasSheetObfV11ClampMod(7, 5);

  if (!visible) {
    return null;
  }
  return (
    <View style={styles.scrim}>
      <View style={styles.sheet}>
        <LinearGradient
          colors={thhdbxgrithghtwinatluaseme.gradients.sheen}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.sheen}
        />
        <View style={styles.grabber} />
        <Text style={styles.heading}>ROUND SETUP</Text>

        <Text style={styles.caption}>TARGET PALETTE</Text>
        <View style={styles.row}>
          {PALETTE_ORDER.map(p => (
            <Chiphdbxgrithghtwinatluas
              key={p}
              label={p}
              active={p === palette}
              onPress={() => onPalette(p)}
              tint={PALETTES[p][0]}
            />
          ))}
        </View>

        <Text style={styles.caption}>TEMPO</Text>
        <View style={styles.row}>
          {TEMPO_ORDER.map(t => (
            <Chiphdbxgrithghtwinatluas
              key={t}
              label={t}
              active={t === tempo}
              onPress={() => onTempo(t)}
              tint={thhdbxgrithghtwinatluaseme.colors.cyan}
            />
          ))}
        </View>

        <Text style={styles.best}>BEST {best}</Text>

        <GhosthdbxgrithghtwinatluasButton label="APPLY" onPress={onClose} tint={thhdbxgrithghtwinatluaseme.colors.gold} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.scrim,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderColor: thhdbxgrithghtwinatluaseme.colors.hairline,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 28,
  },
  sheen: {
    position: 'absolute',
    top: 1,
    left: '6%',
    width: '88%',
    height: 2,
    borderRadius: 1,
  },
  grabber: {
    alignSelf: 'center',
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.glassStrong,
    marginBottom: 14,
  },
  heading: {
    color: thhdbxgrithghtwinatluaseme.colors.text,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2.5,
    lineHeight: 24,
    marginBottom: 16,
  },
  caption: {
    color: thhdbxgrithghtwinatluaseme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    lineHeight: 14,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  best: {
    color: thhdbxgrithghtwinatluaseme.colors.gold,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 18,
    marginBottom: 16,
  },
});

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
/* obfuscation-batch:v11 */
function ModehdbxgrithghtwinatluasSheetObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ModehdbxgrithghtwinatluasSheetObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ModehdbxgrithghtwinatluasSheetObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

