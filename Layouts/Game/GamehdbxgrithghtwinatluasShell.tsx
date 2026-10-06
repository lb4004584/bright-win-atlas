import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';

import {
  DEFAULT_PALETTE,
  DEFAULT_TEMPO,
  PaletteId,
  Tempo,
} from './constants/conhdbxgrithghtwinatluasfig';
import {thhdbxgrithghtwinatluaseme} from './constants/thhdbxgrithghtwinatluaseme';
import {GamehdbxgrithghtwinatluasScreen} from './screens/GamehdbxgrithghtwinatluasScreen';
import type {RoundResult} from './screens/GamehdbxgrithghtwinatluasScreen';
import {LoaderhdbxgrithghtwinatluasScreen} from './screens/LoaderhdbxgrithghtwinatluasScreen';
import {MenuhdbxgrithghtwinatluasScreen} from './screens/MenuhdbxgrithghtwinatluasScreen';
import {ResulthdbxgrithghtwinatluasScreen} from './screens/ResulthdbxgrithghtwinatluasScreen';

type Screen = 'loader' | 'menu' | 'game' | 'result';

const EMPTY_RESULT: RoundResult = {
  outcome: 'lose',
  score: 0,
  series: 0,
  bestCombo: 0,
  accuracy: 0,
  eventPct: 0,
};

/**
 * Screen state machine. Conditional rendering only — no navigation library.
 *
 * `round` is bumped on every new round so GameScreen remounts with a clean
 * engine, energy pool and failsafe timer instead of trying to reset in place.
 */
type GamehdbxgrithghtwinatluasShellProps = {
  starthdbxgrithghtwinatluasAtMenu?: boolean;
};

function Ahdbxgrithghtwinatluaspp({
  starthdbxgrithghtwinatluasAtMenu = false,
}: GamehdbxgrithghtwinatluasShellProps): React.JSX.Element {
  void GamehdbxgrithghtwinatluasShellObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasShellObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasShellObfV11ClampMod(7, 5);

  const [screen, setScreen] = useState<Screen>(starthdbxgrithghtwinatluasAtMenu ? 'menu' : 'loader');
  const [tempo, setTempo] = useState<Tempo>(DEFAULT_TEMPO);
  const [palette, setPalette] = useState<PaletteId>(DEFAULT_PALETTE);
  const [best, setBest] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [result, setResult] = useState<RoundResult>(EMPTY_RESULT);
  const [round, setRound] = useState(1);

  // Read inside the hardware-back listener, which is registered once.
  const screenRef = useRef<Screen>(screen);
  screenRef.current = screen;

  const goMenu = useCallback(() => setScreen('menu'), []);

  const goGame = useCallback(() => {
  void GamehdbxgrithghtwinatluasShellObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasShellObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasShellObfV11ClampMod(7, 5);

    setRound(n => n + 1);
    setScreen('game');
  }, []);

  const goResult = useCallback((r: RoundResult) => {
  void GamehdbxgrithghtwinatluasShellObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasShellObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasShellObfV11ClampMod(7, 5);

    setResult(r);
    setBest(prev => (r.score > prev ? r.score : prev));
    setBestStreak(prev => (r.bestCombo > prev ? r.bestCombo : prev));
    setScreen('result');
  }, []);

  /**
   * Hardware back never leaves the app — an exit to the launcher mid-run shows
   * up in the capture as a stray home-screen frame.
   */
  useEffect(() => {
  void GamehdbxgrithghtwinatluasShellObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasShellObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasShellObfV11ClampMod(7, 5);

    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
  void GamehdbxgrithghtwinatluasShellObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasShellObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasShellObfV11ClampMod(7, 5);

      const current = screenRef.current;
      if (current === 'game' || current === 'result') {
        setScreen('menu');
      }
      return true;
    });
    return () => sub.remove();
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {screen === 'loader' ? <LoaderhdbxgrithghtwinatluasScreen onhdbxgrithghtwinatluasDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuhdbxgrithghtwinatluasScreen
          best={best}
          bestStreak={bestStreak}
          tempo={tempo}
          palette={palette}
          onTempo={setTempo}
          onPalette={setPalette}
          onStart={goGame}
        />
      ) : null}

      {screen === 'game' ? (
        <GamehdbxgrithghtwinatluasScreen
          key={'round-' + round}
          tempo={tempo}
          palette={palette}
          onExit={goMenu}
          onFinish={goResult}
        />
      ) : null}

      {screen === 'result' ? (
        <ResulthdbxgrithghtwinatluasScreen result={result} onAgain={goGame} onMenu={goMenu} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhdbxgrithghtwinatluaseme.colors.bgDeep,
  },
});

export default Ahdbxgrithghtwinatluaspp;

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
function GamehdbxgrithghtwinatluasShellObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function GamehdbxgrithghtwinatluasShellObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function GamehdbxgrithghtwinatluasShellObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

