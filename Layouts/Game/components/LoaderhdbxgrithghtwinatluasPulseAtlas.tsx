import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';
import type {GestureResponderEvent, PanResponderGestureState} from 'react-native';

import {CYAN, CORAL, GOLD, VIOLET} from '../constants/conhdbxgrithghtwinatluasfig';

const ATLAS_ACCENTS = [GOLD, CYAN, CORAL, VIOLET];
const MAX_BURSTS = 3;
const BURST_MIN = 12;
const BURST_SPAN = 7;
const SHEAR_PX = 8;

export type AtlasSparkBurst = {
  id: number;
  x: number;
  y: number;
  bits: AtlasSparkBit[];
};

type AtlasSparkBit = {
  key: string;
  color: string;
  w: number;
  h: number;
  rot: number;
  ox: number;
  oy: number;
  opacity: Animated.Value;
  tx: Animated.Value;
  ty: Animated.Value;
};

type CoreGestureOpts = {
  shearX: Animated.Value;
  shearY: Animated.Value;
  holdScale: Animated.Value;
  haloScale: Animated.Value;
  haloGlow: Animated.Value;
  rimBlink: Animated.Value;
  onTouched: () => void;
};

function pickAccent(i: number): string {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

  return ATLAS_ACCENTS[i % ATLAS_ACCENTS.length];
}

function playCoreShot(
  kind: number,
  haloScale: Animated.Value,
  haloGlow: Animated.Value,
  rimBlink: Animated.Value,
) {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

  const shot = kind % 3;
  if (shot === 0) {
    haloGlow.setValue(0.2);
    Animated.sequence([
      Animated.timing(haloGlow, {
        toValue: 0.95,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(haloGlow, {
        toValue: 0.22,
        duration: 280,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
    return;
  }
  if (shot === 1) {
    haloScale.setValue(0.9);
    Animated.sequence([
      Animated.timing(haloScale, {
        toValue: 1.15,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(haloScale, {
        toValue: 1,
        duration: 220,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
    return;
  }
  rimBlink.setValue(0.15);
  Animated.sequence([
    Animated.timing(rimBlink, {
      toValue: 1,
      duration: 70,
      useNativeDriver: true,
    }),
    Animated.timing(rimBlink, {
      toValue: 0.2,
      duration: 90,
      useNativeDriver: true,
    }),
    Animated.timing(rimBlink, {
      toValue: 0.85,
      duration: 70,
      useNativeDriver: true,
    }),
    Animated.timing(rimBlink, {
      toValue: 0.18,
      duration: 160,
      useNativeDriver: true,
    }),
  ]).start();
}

export function useAtlasCoreShear({
  shearX,
  shearY,
  holdScale,
  haloScale,
  haloGlow,
  rimBlink,
  onTouched,
}: CoreGestureOpts) {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

  const shotRef = useRef(0);
  const startRef = useRef({x: 0, y: 0, t: 0});

  const springHome = useCallback(() => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

    Animated.parallel([
      Animated.spring(shearX, {
        toValue: 0,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.spring(shearY, {
        toValue: 0,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.spring(holdScale, {
        toValue: 1,
        friction: 7,
        tension: 90,
        useNativeDriver: true,
      }),
    ]).start();
  }, [holdScale, shearX, shearY]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 2 || Math.abs(g.dy) > 2,
      onPanResponderGrant: () => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

        onTouched();
        startRef.current = {x: 0, y: 0, t: Date.now()};
        holdScale.setValue(1);
        Animated.timing(holdScale, {
          toValue: 1.06,
          duration: 160,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: (_e, g: PanResponderGestureState) => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

        const tiltX = Math.max(-14, Math.min(14, g.dx * 0.12));
        const tiltY = Math.max(-10, Math.min(10, g.dy * 0.1));
        shearX.setValue(tiltX);
        shearY.setValue(tiltY);
      },
      onPanResponderRelease: (_e: GestureResponderEvent, g) => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

        const dt = Date.now() - startRef.current.t;
        const dist = Math.hypot(g.dx, g.dy);
        springHome();
        if (dist < SHEAR_PX && dt < 280) {
          shotRef.current += 1;
          playCoreShot(shotRef.current, haloScale, haloGlow, rimBlink);
          return;
        }
        if (dist >= SHEAR_PX) {
          shotRef.current += 1;
          playCoreShot(shotRef.current + 1, haloScale, haloGlow, rimBlink);
        }
      },
      onPanResponderTerminate: () => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

        springHome();
      },
    }),
  ).current;

  return pan.panHandlers;
}

export function spawnAtlasConvergeBurst(
  x: number,
  y: number,
  id: number,
): AtlasSparkBurst {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

  const n = BURST_MIN + Math.floor(Math.random() * BURST_SPAN);
  const radius = 28 + Math.random() * 44;
  const bits: AtlasSparkBit[] = [];
  const order = [...ATLAS_ACCENTS].sort(() => Math.random() - 0.5);
  for (let i = 0; i < n; i++) {
    const ang = (Math.PI * 2 * i) / n + Math.random() * 0.22;
    const r = radius * (0.72 + Math.random() * 0.38);
    const ox = Math.cos(ang) * r;
    const oy = Math.sin(ang) * r;
    bits.push({
      key: id + '-' + i,
      color: order[i % order.length] || pickAccent(i),
      w: 5 + Math.random() * 7,
      h: 2 + Math.random() * 2.4,
      rot: (ang * 180) / Math.PI,
      ox,
      oy,
      opacity: new Animated.Value(0.95),
      tx: new Animated.Value(ox),
      ty: new Animated.Value(oy),
    });
  }
  const life = 340 + Math.floor(Math.random() * 280);
  bits.forEach(bit => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

    Animated.parallel([
      Animated.timing(bit.tx, {
        toValue: 0,
        duration: life,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(bit.ty, {
        toValue: 0,
        duration: life,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(bit.opacity, {
        toValue: 0,
        duration: life,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  });
  return {id, x, y, bits};
}

type FieldProps = {
  bursts: AtlasSparkBurst[];
};

export function LoaderPulseAtlasField({bursts}: FieldProps) {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

  return (
    <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
      {bursts.map(burst => (
        <View
          key={burst.id}
          pointerEvents="none"
          style={[styles.burstOrigin, {left: burst.x, top: burst.y}]}>
          {burst.bits.map(bit => (
            <Animated.View
              key={bit.key}
              style={[
                styles.spark,
                {
                  width: bit.w,
                  height: bit.h,
                  backgroundColor: bit.color,
                  opacity: bit.opacity,
                  transform: [
                    {translateX: bit.tx},
                    {translateY: bit.ty},
                    {rotate: bit.rot + 'deg'},
                  ],
                },
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

export function useAtlasBurstField() {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

  const [bursts, setBursts] = useState<AtlasSparkBurst[]>([]);
  const seq = useRef(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const spawn = useCallback((x: number, y: number) => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

    const id = seq.current++;
    const next = spawnAtlasConvergeBurst(x, y, id);
    setBursts(prev => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

      const kept = prev.length >= MAX_BURSTS ? prev.slice(prev.length - (MAX_BURSTS - 1)) : prev;
      return [...kept, next];
    });
    const t = setTimeout(() => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

      setBursts(prev => prev.filter(b => b.id !== id));
    }, 780);
    timers.current.push(t);
  }, []);

  useEffect(() => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

    return () => {
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(7, 5);

      timers.current.forEach(clearTimeout);
    };
  }, []);

  return {bursts, spawn};
}

const styles = StyleSheet.create({
  burstOrigin: {
    position: 'absolute',
    width: 1,
    height: 1,
  },
  spark: {
    position: 'absolute',
    borderRadius: 1,
    left: 0,
    top: 0,
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
function LoaderhdbxgrithghtwinatluasPulseAtlasObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function LoaderhdbxgrithghtwinatluasPulseAtlasObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function LoaderhdbxgrithghtwinatluasPulseAtlasObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

