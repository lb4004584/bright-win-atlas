import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import {RotateCcw} from 'lucide-react-native';

import {bgGame, spriteBurstStar} from '../assets';
import {SCREEN_W} from '../constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {ApphdbxgrithghtwinatluasShell} from '../components/ApphdbxgrithghtwinatluasShell';
import {GhosthdbxgrithghtwinatluasButton} from '../components/GhosthdbxgrithghtwinatluasButton';
import {GradienthdbxgrithghtwinatluasButton} from '../components/GradienthdbxgrithghtwinatluasButton';
import {ScreenhdbxgrithghtwinatluasHeader} from '../components/ScreenhdbxgrithghtwinatluasHeader';
import {SparkhdbxgrithghtwinatluasField} from '../components/SparkhdbxgrithghtwinatluasField';
import {StathdbxgrithghtwinatluasCard} from '../components/StathdbxgrithghtwinatluasCard';
import {formatNumber, formatPercent} from '../utils/forhdbxgrithghtwinatluasmat';
import type {RoundResult} from './GamehdbxgrithghtwinatluasScreen';

type Props = {
  result: RoundResult;
  onAgain: () => void;
  onMenu: () => void;
};

/** The body is padded by 20 on both sides, so the track is this wide. */
const EVENT_TRACK_W = SCREEN_W - 40;

const RAYS = [0, 1, 2, 3, 4, 5, 6, 7];
const RAY_COLORS = [
  thhdbxgrithghtwinatluaseme.colors.gold,
  thhdbxgrithghtwinatluaseme.colors.cyan,
  thhdbxgrithghtwinatluaseme.colors.violet,
  thhdbxgrithghtwinatluaseme.colors.gold,
  thhdbxgrithghtwinatluaseme.colors.cyan,
  thhdbxgrithghtwinatluaseme.colors.gold,
  thhdbxgrithghtwinatluaseme.colors.violet,
  thhdbxgrithghtwinatluaseme.colors.cyan,
];

export function ResulthdbxgrithghtwinatluasScreen({result, onAgain, onMenu}: Props) {
  void ResulthdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void ResulthdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void ResulthdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

  const won = result.outcome === 'win';
  const burst = useRef(new Animated.Value(0.6)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  void ResulthdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void ResulthdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void ResulthdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    const anim = Animated.parallel([
      Animated.timing(burst, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.back(1.4)),
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [burst, fade]);

  return (
    <ApphdbxgrithghtwinatluasShell
      bg={bgGame}
      overlay={thhdbxgrithghtwinatluaseme.gradients.resultVeil}
      tintTop={won ? thhdbxgrithghtwinatluaseme.colors.gold : thhdbxgrithghtwinatluaseme.colors.coral}
      tintBottom={thhdbxgrithghtwinatluaseme.colors.violet}>
      <SparkhdbxgrithghtwinatluasField count={12} seed={33} />

      <ScreenhdbxgrithghtwinatluasHeader variant="ghost" title="ROUND SUMMARY" />

      <View style={styles.body}>
        <Text
          style={[
            styles.verdict,
            won ? styles.verdictWin : styles.verdictLose,
          ]}>
          {won ? 'YOU WON!' : 'NO LUCK!'}
        </Text>

        {/* The rays start well below the heading box so nothing crosses the
            letters and turns them into a different word. */}
        <Animated.View
          style={[styles.burst, {opacity: fade, transform: [{scale: burst}]}]}
          pointerEvents="none">
          {RAYS.map(i => (
            <View
              key={i}
              style={[
                styles.ray,
                {
                  backgroundColor: RAY_COLORS[i],
                  opacity: i % 2 === 0 ? 0.38 : 0.18,
                  transform: [{rotate: i * 45 + 'deg'}],
                },
              ]}
            />
          ))}
          <Image source={spriteBurstStar} style={styles.star} />
        </Animated.View>

        <Text style={styles.scoreLabel}>SCORE</Text>
        <Text style={styles.score}>{formatNumber(result.score)}</Text>

        <View style={styles.stats}>
          <View style={styles.statSlot}>
            <StathdbxgrithghtwinatluasCard
              value={formatNumber(result.series)}
              label="SERIES"
              valueColor={thhdbxgrithghtwinatluaseme.colors.gold}
            />
          </View>
          <View style={styles.statSlot}>
            <StathdbxgrithghtwinatluasCard
              value={formatNumber(result.bestCombo)}
              label="BEST STREAK"
              valueColor={thhdbxgrithghtwinatluaseme.colors.cyan}
            />
          </View>
          <View style={styles.statSlot}>
            <StathdbxgrithghtwinatluasCard
              value={formatPercent(result.accuracy)}
              label="ACCURACY"
              valueColor={thhdbxgrithghtwinatluaseme.colors.violet}
            />
          </View>
        </View>

        <View style={styles.eventRow}>
          <Text style={styles.eventLabel}>
            EVENT {formatPercent(result.eventPct)}
          </Text>
          <View style={styles.eventTrack}>
            <View
              style={[
                styles.eventFill,
                {
                  width:
                    (EVENT_TRACK_W *
                      Math.max(2, Math.min(100, result.eventPct))) /
                    100,
                },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={styles.cta}>
        <GradienthdbxgrithghtwinatluasButton label="PLAY AGAIN" Icon={RotateCcw} onPress={onAgain} />
        <View style={styles.ctaGap} />
        <GhosthdbxgrithghtwinatluasButton label="MENU" onPress={onMenu} />
      </View>
    </ApphdbxgrithghtwinatluasShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  verdict: {
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: 46,
    marginBottom: 18,
    textAlign: 'center',
  },
  verdictWin: {
    color: thhdbxgrithghtwinatluaseme.colors.gold,
    textShadowColor: 'rgba(243,195,73,0.55)',
    textShadowRadius: 18,
  },
  verdictLose: {
    color: thhdbxgrithghtwinatluaseme.colors.coral,
    textShadowColor: 'rgba(232,58,85,0.45)',
    textShadowRadius: 16,
  },
  burst: {
    width: 150,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ray: {
    position: 'absolute',
    width: 3,
    height: 110,
    borderRadius: 2,
  },
  star: {
    width: 78,
    height: 78,
    resizeMode: 'contain',
  },
  scoreLabel: {
    marginTop: 10,
    color: thhdbxgrithghtwinatluaseme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    lineHeight: 14,
  },
  score: {
    color: thhdbxgrithghtwinatluaseme.colors.text,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: 40,
    fontVariant: ['tabular-nums'],
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  statSlot: {
    flex: 1,
  },
  eventRow: {
    width: '100%',
    marginTop: 16,
  },
  eventLabel: {
    color: thhdbxgrithghtwinatluaseme.colors.textSoft,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 15,
    marginBottom: 6,
  },
  eventTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,241,217,0.1)',
    overflow: 'hidden',
  },
  eventFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.gold,
  },
  cta: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  ctaGap: {
    height: 12,
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
function ResulthdbxgrithghtwinatluasScreenObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function ResulthdbxgrithghtwinatluasScreenObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function ResulthdbxgrithghtwinatluasScreenObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

