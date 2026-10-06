import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {bgLoader, spritePulseCore} from '../assets';
import {GOLD, LOADER_DURATION_MS} from '../constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from '../constants/thhdbxgrithghtwinatluaseme';
import {ApphdbxgrithghtwinatluasShell} from '../components/ApphdbxgrithghtwinatluasShell';
import {
  LoaderPulseAtlasField,
  useAtlasBurstField,
  useAtlasCoreShear,
} from '../components/LoaderhdbxgrithghtwinatluasPulseAtlas';
import {SparkhdbxgrithghtwinatluasField} from '../components/SparkhdbxgrithghtwinatluasField';

type Props = {
  onhdbxgrithghtwinatluasDone?: () => void;
  doneOnFirstCycle?: boolean;
  donehdbxgrithghtwinatluasOnFirstCycle?: boolean;
};

const BAR_W = 180;

/**
 * Bright Win Atlas boot card. The pulse core shears on swipe; empty-field taps
 * pull light-sparks inward. The rail loops until the host unmounts.
 */
export function LoaderhdbxgrithghtwinatluasScreen({
  onhdbxgrithghtwinatluasDone,
  doneOnFirstCycle,
  donehdbxgrithghtwinatluasOnFirstCycle,
}: Props) {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

  const armOnFirstFill = !!(
    doneOnFirstCycle || donehdbxgrithghtwinatluasOnFirstCycle
  );
  const core = useRef(new Animated.Value(0)).current;
  const breath = useRef(new Animated.Value(1)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const shearX = useRef(new Animated.Value(0)).current;
  const shearY = useRef(new Animated.Value(0)).current;
  const holdScale = useRef(new Animated.Value(1)).current;
  const haloScale = useRef(new Animated.Value(1)).current;
  const haloGlow = useRef(new Animated.Value(0.22)).current;
  const rimBlink = useRef(new Animated.Value(0.2)).current;
  const doneRef = useRef(onhdbxgrithghtwinatluasDone);
  doneRef.current = onhdbxgrithghtwinatluasDone;
  const touchedRef = useRef(false);
  const barRef = useRef<View>(null);
  const [barBox, setBarBox] = useState({y: 0, h: 0});
  const {bursts, spawn} = useAtlasBurstField();

  const markTouched = () => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    touchedRef.current = true;
  };

  const coreHandlers = useAtlasCoreShear({
    shearX,
    shearY,
    holdScale,
    haloScale,
    haloGlow,
    rimBlink,
    onTouched: markTouched,
  });

  useEffect(() => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

    const intro = Animated.parallel([
      Animated.spring(core, {
        toValue: 1,
        tension: 40,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(420),
        Animated.timing(breath, {
          toValue: 1.04,
          duration: 900,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(breath, {
          toValue: 1,
          duration: 900,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ]);

    let stopped = false;
    let firstFill = true;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let failsafe: ReturnType<typeof setTimeout> | null = null;
    let idleNudge: ReturnType<typeof setTimeout> | null = null;
    let raf1 = 0;
    let raf2 = 0;
    let handed = false;

    const finish = () => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

      if (handed) {
        return;
      }
      handed = true;
      doneRef.current?.();
    };

    const fillOnce = () => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

      if (stopped) {
        return;
      }
      progress.setValue(0);
      const ms = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        easing: Easing.bezier(0.2, 0.08, 0.28, 1),
        useNativeDriver: false,
      }).start(({finished}) => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

        if (!finished || stopped) {
          return;
        }
        if (firstFill) {
          firstFill = false;
          if (armOnFirstFill) {
            finish();
          }
        }
        fillOnce();
      });
    };

    const begin = () => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

      if (failsafe) {
        clearTimeout(failsafe);
        failsafe = null;
      }
      intro.start();
      fillOnce();
      if (!armOnFirstFill) {
        timer = setTimeout(finish, LOADER_DURATION_MS);
      }
      const idleMs = 2000 + Math.floor(Math.random() * 2000);
      idleNudge = setTimeout(() => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

        if (touchedRef.current || stopped) {
          return;
        }
        Animated.sequence([
          Animated.timing(shearX, {
            toValue: -7,
            duration: 120,
            useNativeDriver: true,
          }),
          Animated.timing(shearX, {
            toValue: 6,
            duration: 140,
            useNativeDriver: true,
          }),
          Animated.spring(shearX, {
            toValue: 0,
            friction: 5,
            tension: 70,
            useNativeDriver: true,
          }),
        ]).start();
      }, idleMs);
    };

    const idleHandle = requestIdleCallback(() => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

      raf1 = requestAnimationFrame(() => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

        raf2 = requestAnimationFrame(begin);
      });
    });

    failsafe = setTimeout(finish, LOADER_DURATION_MS * 6);

    return () => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

      stopped = true;
      cancelIdleCallback(idleHandle);
      if (raf1) {
        cancelAnimationFrame(raf1);
      }
      if (raf2) {
        cancelAnimationFrame(raf2);
      }
      if (timer) {
        clearTimeout(timer);
      }
      if (failsafe) {
        clearTimeout(failsafe);
      }
      if (idleNudge) {
        clearTimeout(idleNudge);
      }
      intro.stop();
      progress.stopAnimation();
    };
  }, [armOnFirstFill, breath, core, progress, shearX]);

  const barFill = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const rotateZ = shearX.interpolate({
    inputRange: [-14, 14],
    outputRange: ['-11deg', '11deg'],
  });
  const rotateX = shearY.interpolate({
    inputRange: [-10, 10],
    outputRange: ['7deg', '-7deg'],
  });

  return (
    <ApphdbxgrithghtwinatluasShell bg={bgLoader} overlay={thhdbxgrithghtwinatluaseme.gradients.loaderVeil}>
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={evt => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

          const {locationX, locationY, pageY} = evt.nativeEvent;
          if (
            barBox.h > 0 &&
            pageY >= barBox.y - 10 &&
            pageY <= barBox.y + barBox.h + 10
          ) {
            return;
          }
          spawn(locationX, locationY);
        }}
      />
      <SparkhdbxgrithghtwinatluasField count={14} seed={7} />

      <View style={styles.rings} pointerEvents="none">
        <View style={[styles.ring, styles.ringOuter]} />
        <View style={[styles.ring, styles.ringMid]} />
        <View style={[styles.ring, styles.ringInner]} />
      </View>

      <View style={styles.body} pointerEvents="box-none">
        <View style={styles.coreWrap} {...coreHandlers}>
          <Animated.View
            pointerEvents="none"
            style={[
              styles.coreGlow,
              {opacity: haloGlow, transform: [{scale: haloScale}]},
            ]}
          />
          <Animated.View
            pointerEvents="none"
            style={[styles.coreRim, {opacity: rimBlink}]}
          />
          <Animated.View
            pointerEvents="none"
            style={{opacity: core, transform: [{scale: breath}]}}>
            <Animated.View
              style={{
                transform: [
                  {perspective: 480},
                  {rotateZ},
                  {rotateX},
                  {scale: holdScale},
                ],
              }}>
              <Image source={spritePulseCore} style={styles.core} />
            </Animated.View>
          </Animated.View>
        </View>

        <Text style={styles.brand} pointerEvents="none">
          BRIGHT WIN
        </Text>
        <Text style={styles.brandSub} pointerEvents="none">
          ATLAS
        </Text>
        <Text style={styles.tagline} pointerEvents="none">
          CATCH THE LIGHT
        </Text>
        <Text style={styles.hint} pointerEvents="none">
          SWIPE THE CORE
        </Text>

        <View
          ref={barRef}
          style={styles.barGlow}
          onLayout={() => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

            barRef.current?.measureInWindow((_x, y, _w, h) => {
  void LoaderhdbxgrithghtwinatluasScreenObfV11HashMix('xy');
  void LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds([1, 3, 5]);
  void LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(7, 5);

              setBarBox({y, h});
            });
          }}
          onStartShouldSetResponder={() => true}>
          <View style={styles.barTrack}>
            <Animated.View style={[styles.barFillWrap, {width: barFill}]}>
              <LinearGradient
                colors={thhdbxgrithghtwinatluaseme.gradients.goldCyan}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.barFill}
              />
            </Animated.View>
          </View>
        </View>
        <Text style={styles.loading} pointerEvents="none">
          LOADING...
        </Text>
      </View>

      <LoaderPulseAtlasField bursts={bursts} />
    </ApphdbxgrithghtwinatluasShell>
  );
}

export default LoaderhdbxgrithghtwinatluasScreen;

const styles = StyleSheet.create({
  rings: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    borderWidth: 1.5,
  },
  ringOuter: {
    width: 340,
    height: 340,
    borderRadius: 170,
    borderColor: 'rgba(118,81,204,0.18)',
  },
  ringMid: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderColor: 'rgba(43,195,228,0.22)',
  },
  ringInner: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: 'rgba(243,195,73,0.35)',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  coreWrap: {
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  coreGlow: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(243,195,73,0.18)',
  },
  coreRim: {
    position: 'absolute',
    width: 148,
    height: 148,
    borderRadius: 74,
    borderWidth: 2,
    borderColor: GOLD,
  },
  core: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
  },
  brand: {
    color: thhdbxgrithghtwinatluaseme.colors.gold,
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 4,
    lineHeight: 46,
    textShadowColor: 'rgba(243,195,73,0.55)',
    textShadowRadius: 18,
  },
  brandSub: {
    color: thhdbxgrithghtwinatluaseme.colors.text,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 10,
    lineHeight: 32,
    marginTop: 2,
  },
  tagline: {
    marginTop: 14,
    color: 'rgba(255,241,217,0.55)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 3,
    lineHeight: 16,
  },
  hint: {
    marginTop: 10,
    color: 'rgba(43,195,228,0.72)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.4,
    lineHeight: 14,
  },
  barGlow: {
    marginTop: 28,
    width: BAR_W,
    shadowColor: GOLD,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
  },
  barTrack: {
    width: BAR_W,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,241,217,0.14)',
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(243,195,73,0.45)',
  },
  barFillWrap: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  barFill: {
    flex: 1,
    borderRadius: 2,
  },
  loading: {
    marginTop: 12,
    color: 'rgba(255,241,217,0.45)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    lineHeight: 14,
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
function LoaderhdbxgrithghtwinatluasScreenObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function LoaderhdbxgrithghtwinatluasScreenObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function LoaderhdbxgrithghtwinatluasScreenObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

