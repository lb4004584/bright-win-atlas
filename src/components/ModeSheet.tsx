import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  PALETTES,
  PALETTE_ORDER,
  PaletteId,
  TEMPO_ORDER,
  Tempo,
} from '../constants/config';
import {theme} from '../constants/theme';
import {Chip} from './Chip';
import {GhostButton} from './GhostButton';

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
export function ModeSheet({
  visible,
  tempo,
  palette,
  best,
  onTempo,
  onPalette,
  onClose,
}: Props) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.scrim}>
      <View style={styles.sheet}>
        <LinearGradient
          colors={theme.gradients.sheen}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.sheen}
        />
        <View style={styles.grabber} />
        <Text style={styles.heading}>ROUND SETUP</Text>

        <Text style={styles.caption}>TARGET PALETTE</Text>
        <View style={styles.row}>
          {PALETTE_ORDER.map(p => (
            <Chip
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
            <Chip
              key={t}
              label={t}
              active={t === tempo}
              onPress={() => onTempo(t)}
              tint={theme.colors.cyan}
            />
          ))}
        </View>

        <Text style={styles.best}>BEST {best}</Text>

        <GhostButton label="APPLY" onPress={onClose} tint={theme.colors.gold} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.scrim,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: theme.colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderColor: theme.colors.hairline,
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
    backgroundColor: theme.colors.glassStrong,
    marginBottom: 14,
  },
  heading: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2.5,
    lineHeight: 24,
    marginBottom: 16,
  },
  caption: {
    color: theme.colors.textMuted,
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
    color: theme.colors.gold,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 18,
    marginBottom: 16,
  },
});
