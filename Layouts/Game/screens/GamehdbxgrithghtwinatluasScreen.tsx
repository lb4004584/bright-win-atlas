import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ArrowLeft} from 'lucide-react-native';

import {bgGame, spritePulseCore} from '../assets';
import {
  BOARD_MAX_W,
  BORDER,
  PAD,
  PALETTES,
  PaletteId,
  RESULT_DELAY_MS,
  Tempo,
} from '../constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {ApphdbxgrithghtwinatluasShell} from '../components/ApphdbxgrithghtwinatluasShell';
import {EnergyhdbxgrithghtwinatluasMeter} from '../components/EnergyhdbxgrithghtwinatluasMeter';
import {EventhdbxgrithghtwinatluasBar} from '../components/EventhdbxgrithghtwinatluasBar';
import {FloatinghdbxgrithghtwinatluasControls} from '../components/FloatinghdbxgrithghtwinatluasControls';
import {HithdbxgrithghtwinatluasFlash} from '../components/HithdbxgrithghtwinatluasFlash';
import {PulsehdbxgrithghtwinatluasRing} from '../components/PulsehdbxgrithghtwinatluasRing';
import {ScorehdbxgrithghtwinatluasToast} from '../components/ScorehdbxgrithghtwinatluasToast';
import {ScreenhdbxgrithghtwinatluasHeader} from '../components/ScreenhdbxgrithghtwinatluasHeader';
import {SparkhdbxgrithghtwinatluasField} from '../components/SparkhdbxgrithghtwinatluasField';
import {TargethdbxgrithghtwinatluasFrame} from '../components/TargethdbxgrithghtwinatluasFrame';
import {useRinghdbxgrithghtwinatluasEngine} from '../hooks/useRinghdbxgrithghtwinatluasEngine';
import {useRoundhdbxgrithghtwinatluasState} from '../hooks/useRoundhdbxgrithghtwinatluasState';
import {accuracyPct, energySegments} from '../game/roundhdbxgrithghtwinatluasRules';
import type {Outcome, RoundSnapshot} from '../game/roundhdbxgrithghtwinatluasRules';
import {formatNumber} from '../utils/forhdbxgrithghtwinatluasmat';

const HIT_SLOP = {top: 10, bottom: 10, left: 10, right: 10};

export type RoundResult = {
  outcome: Outcome;
  score: number;
  series: number;
  bestCombo: number;
  accuracy: number;
  eventPct: number;
};

type Props = {
  tempo: Tempo;
  palette: PaletteId;
  onExit: () => void;
  onFinish: (result: RoundResult) => void;
};

export function GamehdbxgrithghtwinatluasScreen({tempo, palette, onExit, onFinish}: Props) {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

  const colors = PALETTES[palette];

  const [armed, setArmed] = useState(colors[0]);
  const [touched, setTouched] = useState(false);
  const [flashColor, setFlashColor] = useState(colors[0]);
  const [flashTick, setFlashTick] = useState(0);
  const [toastText, setToastText] = useState('');
  const [toastColor, setToastColor] = useState(colors[0]);
  const [toastTick, setToastTick] = useState(0);

  const {snapshot, outcome, applyHit, applyMiss} = useRoundhdbxgrithghtwinatluasState();
  const active = outcome === 'none';

  const corePulse = useRef(new Animated.Value(1)).current;
  const shake = useRef(new Animated.Value(0)).current;

  // Values read inside timers / animation callbacks live in refs, never state.
  const armedRef = useRef(armed);
  const activeRef = useRef(active);
  const snapRef = useRef<RoundSnapshot>(snapshot);
  const onFinishRef = useRef(onFinish);
  armedRef.current = armed;
  activeRef.current = active;
  snapRef.current = snapshot;
  onFinishRef.current = onFinish;

  const handleExpire = useCallback(() => {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    applyMiss(false);
  }, [applyMiss]);

  const {rings, judgeTap} = useRinghdbxgrithghtwinatluasEngine({
    tempo,
    palette,
    active,
    onExpire: handleExpire,
  });

  const runShake = useCallback(() => {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, {toValue: 4, duration: 45, useNativeDriver: true}),
      Animated.timing(shake, {toValue: -4, duration: 90, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 4, duration: 90, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 0, duration: 45, useNativeDriver: true}),
    ]).start();
  }, [shake]);

  const runCorePulse = useCallback(() => {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    corePulse.setValue(0.9);
    Animated.sequence([
      Animated.timing(corePulse, {
        toValue: 1.12,
        duration: 110,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(corePulse, {
        toValue: 1,
        duration: 110,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [corePulse]);

  const onStrike = useCallback(() => {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    if (!activeRef.current) {
      return;
    }
    setTouched(true);
    const result = judgeTap(armedRef.current, snapRef.current.combo);
    if (result.grade === 'MISS') {
      applyMiss(true);
      runShake();
      setFlashColor(thhdbxgrithghtwinatluaseme.colors.coral);
      return;
    }
    applyHit(result);
    runCorePulse();
    setFlashColor(result.color);
    setFlashTick(n => n + 1);
    setToastColor(result.color);
    setToastText('+' + formatNumber(result.score));
    setToastTick(n => n + 1);
  }, [judgeTap, applyHit, applyMiss, runShake, runCorePulse]);

  // Hand the round over once a verdict lands. The short delay lets the final
  // frame settle without letting the result screen slip out of the capture.
  useEffect(() => {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    if (outcome === 'none') {
      return;
    }
    const timer = setTimeout(() => {
  void GamehdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

      const snap = snapRef.current;
      onFinishRef.current({
        outcome,
        score: snap.score,
        series: snap.series,
        bestCombo: snap.bestCombo,
        accuracy: accuracyPct(snap),
        eventPct: snap.eventPct,
      });
    }, RESULT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [outcome]);

  // Only a real streak gets a line. "COMBO x1" on a cold start reads as a
  // bonus the player has not earned.
  const combo = snapshot.combo;
  const comboLabel = combo >= 2 ? 'COMBO x' + combo : undefined;

  return (
    <ApphdbxgrithghtwinatluasShell
      bg={bgGame}
      overlay={thhdbxgrithghtwinatluaseme.gradients.gameVeil}
      tintTop={thhdbxgrithghtwinatluaseme.colors.violet}>
      <SparkhdbxgrithghtwinatluasField count={10} seed={21} color="#FFF1D9" />

      <ScreenhdbxgrithghtwinatluasHeader
        title={'SERIES ' + formatNumber(snapshot.series)}
        subtitle={comboLabel}
        leftSlot={
          <Pressable
            onPress={onExit}
            hitSlop={HIT_SLOP}
            accessibilityRole="button"
            style={styles.back}>
            <ArrowLeft size={22} color={thhdbxgrithghtwinatluaseme.colors.text} strokeWidth={2.5} />
          </Pressable>
        }
        rightSlot={<EnergyhdbxgrithghtwinatluasMeter filled={energySegments(snapshot.energy)} />}
      />

      <View style={styles.gameArea}>
        <EventhdbxgrithghtwinatluasBar percent={snapshot.eventPct} width={BOARD_MAX_W} />

        <Animated.View
          style={{transform: [{translateX: shake}]}}
          pointerEvents="box-none">
          <View style={styles.arena}>
            <View style={styles.arenaGlow} />
            {rings.map(r => (
              <PulsehdbxgrithghtwinatluasRing
                key={r.id}
                color={r.color}
                startedAt={r.startedAt}
                travelMs={r.travelMs}
              />
            ))}
            <TargethdbxgrithghtwinatluasFrame color={armed} />
            <Animated.View
              style={{transform: [{scale: corePulse}]}}
              pointerEvents="none">
              <Image source={spritePulseCore} style={styles.core} />
            </Animated.View>
            <ScorehdbxgrithghtwinatluasToast text={toastText} color={toastColor} trigger={toastTick} />
          </View>
        </Animated.View>

        {touched ? null : (
          <Text style={styles.hint}>STRIKE WHEN THE RING MEETS THE FRAME</Text>
        )}
      </View>

      <FloatinghdbxgrithghtwinatluasControls
        colors={colors}
        armed={armed}
        onArm={setArmed}
        onStrike={onStrike}
      />

      <HithdbxgrithghtwinatluasFlash color={flashColor} trigger={flashTick} />
    </ApphdbxgrithghtwinatluasShell>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,241,217,0.08)',
    borderWidth: 1,
    borderColor: thhdbxgrithghtwinatluaseme.colors.hairline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
  },
  arena: {
    width: BOARD_MAX_W,
    height: BOARD_MAX_W,
    padding: PAD,
    borderWidth: BORDER,
    borderColor: thhdbxgrithghtwinatluaseme.colors.hairline,
    borderRadius: 24,
    backgroundColor: 'rgba(255,241,217,0.04)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  arenaGlow: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: 'rgba(243,195,73,0.08)',
  },
  core: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
  },
  hint: {
    marginTop: 14,
    color: thhdbxgrithghtwinatluaseme.colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: 'center',
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
function GamehdbxgrithghtwinatluasScreenObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function GamehdbxgrithghtwinatluasScreenObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function GamehdbxgrithghtwinatluasScreenObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

