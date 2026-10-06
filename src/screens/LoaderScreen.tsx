import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  InteractionManager,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {bgLoader, spritePulseCore} from '../assets';
import {LOADER_DURATION_MS} from '../constants/config';
import {theme} from '../constants/theme';
import {AppShell} from '../components/AppShell';
import {SparkField} from '../components/SparkField';

type Props = {
  onDone: () => void;
};

const BAR_W = 180;

/**
 * Brand card. Non-interactive by design — the only way out is the timer, which
 * starts at the first painted frame rather than at mount, and the handoff fires
 * synchronously inside the callback so nothing can defer it behind an animation.
 */
export function LoaderScreen({onDone}: Props) {
  const core = useRef(new Animated.Value(0)).current;
  const breath = useRef(new Animated.Value(1)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const veil = useRef(new Animated.Value(1)).current;
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const intro = Animated.parallel([
      Animated.spring(core, {
        toValue: 1,
        tension: 40,
        friction: 7,
        useNativeDriver: true,
      }),
      // Exactly two breaths, then everything settles. A perpetual loop here
      // keeps the accessibility tree busy and frames stop being captured.
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
        Animated.timing(breath, {
          toValue: 1.03,
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
    const bar = Animated.timing(progress, {
      toValue: 1,
      duration: LOADER_DURATION_MS,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    let timer: ReturnType<typeof setTimeout> | null = null;
    let failsafe: ReturnType<typeof setTimeout> | null = null;
    let raf1 = 0;
    let raf2 = 0;
    let handed = false;

    const finish = () => {
      if (handed) {
        return;
      }
      handed = true;
      doneRef.current();
      Animated.timing(veil, {
        toValue: 0,
        duration: 320,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    };

    /**
     * The countdown is anchored to the FIRST PRESENTED FRAME, not to mount.
     * The native splash owns the window until RN commits its first frame, and
     * on a loaded device the gap between mount and that frame runs 10-30s.
     * Starting the timer at mount spent the whole budget behind the splash:
     * the branded card was visible for a fraction of a second, and whatever
     * looked at the screen afterwards found the Menu already up — the loader
     * frame was simply never on screen to be seen. runAfterInteractions plus a
     * double rAF resolves once a real frame has been committed, so
     * LOADER_DURATION_MS buys 8s of VISIBLE loader.
     */
    const begin = () => {
      // The anchor resolved, so the hang-guard has nothing left to guard and
      // must not race the real countdown on a slow start.
      if (failsafe) {
        clearTimeout(failsafe);
        failsafe = null;
      }
      intro.start();
      bar.start();
      timer = setTimeout(finish, LOADER_DURATION_MS);
    };

    const interaction = InteractionManager.runAfterInteractions(() => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(begin);
      });
    });

    // Never let the first-paint anchor strand the app on the loader: if the
    // frame callback never resolves the handoff still happens, just late.
    // Cleared by begin(), so it only ever fires when the anchor was starved.
    failsafe = setTimeout(finish, LOADER_DURATION_MS * 6);

    return () => {
      interaction.cancel();
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
      intro.stop();
      bar.stop();
    };
  }, [core, breath, progress, veil]);

  const barFill = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <AppShell bg={bgLoader} overlay={theme.gradients.loaderVeil}>
      <SparkField count={14} seed={7} />

      <View style={styles.rings} pointerEvents="none">
        <View style={[styles.ring, styles.ringOuter]} />
        <View style={[styles.ring, styles.ringMid]} />
        <View style={[styles.ring, styles.ringInner]} />
      </View>

      <Animated.View style={[styles.body, {opacity: veil}]}>
        <View style={styles.coreWrap}>
          <View style={styles.coreGlow} />
          <Animated.View
            style={{opacity: core, transform: [{scale: breath}]}}>
            <Image source={spritePulseCore} style={styles.core} />
          </Animated.View>
        </View>

        <Text style={styles.brand}>BRIGHT WIN</Text>
        <Text style={styles.brandSub}>ATLAS</Text>
        <Text style={styles.tagline}>CATCH THE LIGHT</Text>

        <View style={styles.barTrack}>
          <Animated.View style={[styles.barFillWrap, {width: barFill}]}>
            <LinearGradient
              colors={theme.gradients.goldCyan}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.barFill}
            />
          </Animated.View>
        </View>
        <Text style={styles.loading}>LOADING...</Text>
      </Animated.View>
    </AppShell>
  );
}

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
    backgroundColor: 'rgba(243,195,73,0.12)',
  },
  core: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
  },
  brand: {
    color: theme.colors.gold,
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 4,
    lineHeight: 46,
    textShadowColor: 'rgba(243,195,73,0.55)',
    textShadowRadius: 18,
  },
  brandSub: {
    color: theme.colors.text,
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
  barTrack: {
    marginTop: 40,
    width: BAR_W,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,241,217,0.14)',
    overflow: 'hidden',
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
