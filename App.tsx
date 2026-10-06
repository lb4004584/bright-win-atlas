import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';

import {
  DEFAULT_PALETTE,
  DEFAULT_TEMPO,
  PaletteId,
  Tempo,
} from './src/constants/config';
import {theme} from './src/constants/theme';
import {GameScreen} from './src/screens/GameScreen';
import type {RoundResult} from './src/screens/GameScreen';
import {LoaderScreen} from './src/screens/LoaderScreen';
import {MenuScreen} from './src/screens/MenuScreen';
import {ResultScreen} from './src/screens/ResultScreen';

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
function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
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
    setRound(n => n + 1);
    setScreen('game');
  }, []);

  const goResult = useCallback((r: RoundResult) => {
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
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
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

      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
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
        <GameScreen
          key={'round-' + round}
          tempo={tempo}
          palette={palette}
          onExit={goMenu}
          onFinish={goResult}
        />
      ) : null}

      {screen === 'result' ? (
        <ResultScreen result={result} onAgain={goGame} onMenu={goMenu} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.bgDeep,
  },
});

export default App;
