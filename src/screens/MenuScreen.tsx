import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Zap} from 'lucide-react-native';

import {bgMenu, spritePulseCore} from '../assets';
import {PaletteId, TEMPO_ORDER, Tempo} from '../constants/config';
import {theme} from '../constants/theme';
import {AppShell} from '../components/AppShell';
import {Chip} from '../components/Chip';
import {GhostButton} from '../components/GhostButton';
import {GradientButton} from '../components/GradientButton';
import {ModeSheet} from '../components/ModeSheet';
import {ScreenHeader} from '../components/ScreenHeader';
import {StatCard} from '../components/StatCard';
import {TutorialOverlay} from '../components/TutorialOverlay';
import {formatNumber} from '../utils/format';

type Props = {
  best: number;
  bestStreak: number;
  tempo: Tempo;
  palette: PaletteId;
  onTempo: (t: Tempo) => void;
  onPalette: (p: PaletteId) => void;
  onStart: () => void;
};

export function MenuScreen({
  best,
  bestStreak,
  tempo,
  palette,
  onTempo,
  onPalette,
  onStart,
}: Props) {
  const [showRules, setShowRules] = useState(false);
  const [showModes, setShowModes] = useState(false);

  const rise = useRef(new Animated.Value(0)).current;
  const art = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const anim = Animated.parallel([
      Animated.timing(rise, {
        toValue: 1,
        duration: 380,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      // Three beats and stop — the frame grabber needs the tree to go quiet.
      Animated.sequence([
        Animated.delay(200),
        Animated.timing(art, {
          toValue: 1.06,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(art, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(art, {
          toValue: 1.04,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(art, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ]);
    anim.start();
    return () => anim.stop();
  }, [rise, art]);

  const sheetShift = rise.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  });

  const showStats = best > 0 && bestStreak > 0;

  return (
    <AppShell
      bg={bgMenu}
      overlay={theme.gradients.menuVeil}
      tintTop={theme.colors.gold}
      tintBottom={theme.colors.violet}>
      <ScreenHeader
        variant="ghost"
        rightSlot={
          <View style={styles.bestPill}>
            <Text style={styles.bestText}>BEST {formatNumber(best)}</Text>
          </View>
        }
      />

      <View style={styles.art}>
        <View style={styles.artRingOuter} />
        <View style={styles.artRingInner} />
        <Animated.View
          style={{transform: [{scale: art}]}}
          pointerEvents="none">
          <Image source={spritePulseCore} style={styles.artCore} />
        </Animated.View>
      </View>

      <Animated.View
        style={[styles.sheet, {opacity: rise, transform: [{translateY: sheetShift}]}]}
        pointerEvents="box-none">
        <LinearGradient
          colors={theme.gradients.sheen}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.sheen}
        />

        <Text style={styles.title}>BRIGHT WIN ATLAS</Text>
        <Text style={styles.hint}>HOW TO · STRIKE WHEN THE RING MEETS THE FRAME</Text>

        <View style={styles.chips}>
          {TEMPO_ORDER.map(t => (
            <Chip
              key={t}
              label={t}
              active={t === tempo}
              onPress={() => onTempo(t)}
            />
          ))}
        </View>

        <View style={styles.ctaWrap}>
          <GradientButton label="PLAY NOW" Icon={Zap} onPress={onStart} />
        </View>

        <View style={styles.secondary}>
          <GhostButton label="GAME RULES" onPress={() => setShowRules(true)} grow />
          <GhostButton label="MODES" onPress={() => setShowModes(true)} grow />
        </View>

        {showStats ? (
          <View style={styles.stats}>
            <View style={styles.statSlot}>
              <StatCard
                value={formatNumber(best)}
                label="BEST"
                valueColor={theme.colors.gold}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={formatNumber(bestStreak)}
                label="STREAK"
                valueColor={theme.colors.cyan}
              />
            </View>
          </View>
        ) : null}
      </Animated.View>

      <TutorialOverlay visible={showRules} onClose={() => setShowRules(false)} />
      <ModeSheet
        visible={showModes}
        tempo={tempo}
        palette={palette}
        best={best}
        onTempo={onTempo}
        onPalette={onPalette}
        onClose={() => setShowModes(false)}
      />
    </AppShell>
  );
}

const styles = StyleSheet.create({
  bestPill: {
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(255,241,217,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(243,195,73,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bestText: {
    color: theme.colors.gold,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: 16,
  },
  art: {
    flex: 1,
    minHeight: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  artRingOuter: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    borderWidth: 1.5,
    borderColor: 'rgba(43,195,228,0.3)',
  },
  artRingInner: {
    position: 'absolute',
    width: 172,
    height: 172,
    borderRadius: 86,
    borderWidth: 2,
    borderColor: 'rgba(243,195,73,0.5)',
  },
  artCore: {
    width: 136,
    height: 136,
    resizeMode: 'contain',
  },
  sheet: {
    backgroundColor: theme.colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderColor: 'rgba(255,241,217,0.12)',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 22,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: -8},
    elevation: 20,
  },
  sheen: {
    position: 'absolute',
    top: 1,
    left: '6%',
    width: '88%',
    height: 2,
    borderRadius: 1,
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: 30,
  },
  hint: {
    marginTop: 6,
    marginBottom: 14,
    color: 'rgba(255,241,217,0.5)',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 16,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  ctaWrap: {
    marginBottom: 12,
  },
  secondary: {
    flexDirection: 'row',
    gap: 10,
  },
  stats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  statSlot: {
    flex: 1,
  },
});
