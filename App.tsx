import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useApphdbxgrithghtwinatluasInitialization } from './services/inithdbxgrithghtwinatluasializationFlow';
import ApphdbxgrithghtwinatluasPlaceholder from './Layouts/Game/GamehdbxgrithghtwinatluasInit';
import LoaderhdbxgrithghtwinatluasScreen from './Layouts/Game/screens/LoaderhdbxgrithghtwinatluasScreen';
import { hdbxgrithghtwinatluasViewportGetState, hdbxgrithghtwinatluasViewportRestore } from './services/hdbxgrithghtwinatluasViewportHost';

function Ahdbxgrithghtwinatluaspp() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ApphdbxgrithghtwinatluasContent />
    </SafeAreaProvider>
  );
}

function ApphdbxgrithghtwinatluasContent() {
  const { ishdbxgrithghtwinatluasLoading, ishdbxgrithghtwinatluasLoadPlaceholder } = useApphdbxgrithghtwinatluasInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuhdbxgrithghtwinatluasArmed, setMenuhdbxgrithghtwinatluasArmed] = useState(false);
  const apphdbxgrithghtwinatluasState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showhdbxgrithghtwinatluasGame =
    !ishdbxgrithghtwinatluasLoading && ishdbxgrithghtwinatluasLoadPlaceholder;

  const handlehdbxgrithghtwinatluasFirstProgress = useCallback(() => {
    setMenuhdbxgrithghtwinatluasArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = apphdbxgrithghtwinatluasState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = hdbxgrithghtwinatluasViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          hdbxgrithghtwinatluasViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      apphdbxgrithghtwinatluasState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuhdbxgrithghtwinatluasArmed || showhdbxgrithghtwinatluasGame) && (
        <ApphdbxgrithghtwinatluasPlaceholder starthdbxgrithghtwinatluasAtMenu />
      )}
      {!showhdbxgrithghtwinatluasGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderhdbxgrithghtwinatluasScreen
            donehdbxgrithghtwinatluasOnFirstCycle
            onhdbxgrithghtwinatluasDone={handlehdbxgrithghtwinatluasFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ahdbxgrithghtwinatluaspp;
