import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  hdbxgrithghtwinatluasInitializationRuntime,
  hdbxgrithghtwinatluasWaitForPushToken,
  hdbxgrithghtwinatluasOnMessageRecieved,
  hdbxgrithghtwinatluasTryOpenPushExternalUrl,
} from './initializationSharhdbxgrithghtwinatluased';
// autosetup-split-begin
import { hdbxgrithghtwinatluasSignalHarvestObfV7HashMix, hdbxgrithghtwinatluasSignalHarvestObfV5HashMix, hdbxgrithghtwinatluasMixSeed, hdbxgrithghtwinatluasSignalHarveObfV1HashMix, hdbxgrithghtwinatluasSignalHarveObfV2HashMix, hdbxgrithghtwinatluasSigObfV3HashMix, hdbxgrithghtwinatluasSigObfV4SumOdds, hdbxgrithghtwinatluasSignalHarvestObfV6HashMix, hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix, hdbxgrithghtwinatluasSignalHarvestPart01ObfV5HashMix, hdbxgrithghtwinatluasSignalHarvestObfV8HashMix, hdbxgrithghtwinatluasSignalHarvestObfV9HashMix, hdbxgrithghtwinatluasSignalHarvestObfV10HashMix } from './hdbxgrithghtwinatluasSignalHarvestPart01';
import { hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds, hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds, hdbxgrithghtwinatluasFoldRange, hdbxgrithghtwinatluasSignalHarveObfV1SumOdds, hdbxgrithghtwinatluasSignalHarveObfV2SumOdds, hdbxgrithghtwinatluasSigObfV4HashMix, hdbxgrithghtwinatluasSigObfV3ClampMod, hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds, hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds, hdbxgrithghtwinatluasSignalHarvestPart01ObfV5SumOdds, hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds, hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds, hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds } from './hdbxgrithghtwinatluasSignalHarvestPart02';
import { hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod, hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod, hdbxgrithghtwinatluasClampSpan, hdbxgrithghtwinatluasSignalHarveObfV1ClampMod, hdbxgrithghtwinatluasSignalHarveObfV2ClampMod, hdbxgrithghtwinatluasSigObfV3SumOdds, hdbxgrithghtwinatluasSigObfV4ClampMod, hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod, hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod, hdbxgrithghtwinatluasSignalHarvestPart01ObfV5ClampMod, hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod, hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod, hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod } from './hdbxgrithghtwinatluasSignalHarvestPart03';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let hdbxgrithghtwinatluasForegroundHandlerRegistered = false;
function hdbxgrithghtwinatluasEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  if (hdbxgrithghtwinatluasForegroundHandlerRegistered) {
    return;
  }
  hdbxgrithghtwinatluasForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

      void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      await hdbxgrithghtwinatluasOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
    hdbxgrithghtwinatluasForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function hdbxgrithghtwinatluasGetAdvertisingId(): Promise<string> {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AhdbxgrithghtwinatluasdvertisingIdHelper } = NativeModules;

    if (!AhdbxgrithghtwinatluasdvertisingIdHelper) {
      //console.log('AhdbxgrithghtwinatluasdvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AhdbxgrithghtwinatluasdvertisingIdHelper.getAdvertisingIhdbxgrithghtwinatluasdId();
    return adId || '';
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function hdbxgrithghtwinatluasPushStep(): Promise<void> {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test hdbxgrithghtwinatluasPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    hdbxgrithghtwinatluasEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

      void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken = token;
    });

    const token = await hdbxgrithghtwinatluasWaitForPushToken(10);

    if (token) {
      hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test hdbxgrithghtwinatluasPushStep: Error in hdbxgrithghtwinatluasPushStep:', error);
  }
}

export async function hdbxgrithghtwinatluasReferrerStep(): Promise<void> {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

      void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

          void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
          void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
          void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
          void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
          void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
          void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
          void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
          void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
          void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
          void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
          void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
          void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
          void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
          void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
          void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef = info.installReferrer;
            //console.log('Test hdbxgrithghtwinatluasReferrerStep: Install Referrer obtained:', hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef);
          } else {
            hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef = '';
            if (error) {
              //console.log('Test hdbxgrithghtwinatluasReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test hdbxgrithghtwinatluasReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
        void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
        void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
        void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
        void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
        void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test hdbxgrithghtwinatluasReferrerStep: Exception:', error);
          hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test hdbxgrithghtwinatluasReferrerStep: Error in hdbxgrithghtwinatluasReferrerStep:', error);
    hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function hdbxgrithghtwinatluasProcessDirectDeepLink(url: string): void {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (hdbxgrithghtwinatluasInitializationRuntime.firshdbxgrithghtwinatluastParameterReceived) return;
  hdbxgrithghtwinatluasInitializationRuntime.firshdbxgrithghtwinatluastParameterReceived = true;
  hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslOneLink = url.trim();
  hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslNaming = '';
}

export async function hdbxgrithghtwinatluasDataCollectStep(): Promise<void> {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    hdbxgrithghtwinatluasInitializationRuntime.firshdbxgrithghtwinatluastParameterReceived = false;
    hdbxgrithghtwinatluasInitializationRuntime.orhdbxgrithghtwinatluasanicWaiting = false;
    hdbxgrithghtwinatluasInitializationRuntime.orghdbxgrithghtwinatluasnicWaitResolve = null;
    hdbxgrithghtwinatluasInitializationRuntime.DevhdbxgrithghtwinatluasiceId = '';
    hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslOneLink = '';
    hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      hdbxgrithghtwinatluasProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

      void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      void hdbxgrithghtwinatluasMixSeed(3, 7);
      void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
      void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        hdbxgrithghtwinatluasProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !hdbxgrithghtwinatluasInitializationRuntime.firshdbxgrithghtwinatluastParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

        void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
        void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
        void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

        void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
        void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
        void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslNaming = '';
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
    hdbxgrithghtwinatluasInitializationRuntime.DevhdbxgrithghtwinatluasiceId = '';
    hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslOneLink = '';
    hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslNaming = '';
  }
}

let hdbxgrithghtwinatluasNotificationOpenHandlerRegistered = false;
function hdbxgrithghtwinatluasEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  if (hdbxgrithghtwinatluasNotificationOpenHandlerRegistered) {
    return;
  }
  hdbxgrithghtwinatluasNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

      void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
      void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      void hdbxgrithghtwinatluasMixSeed(3, 7);
      void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
      void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

      void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
      void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await hdbxgrithghtwinatluasTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
    hdbxgrithghtwinatluasNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function hdbxgrithghtwinatluasSetupPushOpenHandlers(): Promise<void> {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    hdbxgrithghtwinatluasEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await hdbxgrithghtwinatluasTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
    void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface hdbxgrithghtwinatluasParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function hdbxgrithghtwinatluasParallelCollectStep(): Promise<hdbxgrithghtwinatluasParallelCollectResult> {
  void hdbxgrithghtwinatluasSignalHarvestObfV11HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV7HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV8HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV9HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV10HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasSignalHarvestObfV5HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV3HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasSigObfV4HashMix('xy');
  void hdbxgrithghtwinatluasSigObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSigObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasSignalHarveObfV1HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasSignalHarveObfV2HashMix('xy');
  void hdbxgrithghtwinatluasSignalHarveObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasSignalHarveObfV2ClampMod(7, 5);
  await hdbxgrithghtwinatluasReferrerStep();

  const [, advertisingId] = await Promise.all([
    hdbxgrithghtwinatluasPushStep(),
    hdbxgrithghtwinatluasGetAdvertisingId(),
    hdbxgrithghtwinatluasDataCollectStep(),
  ]);

  hdbxgrithghtwinatluasInitializationRuntime.adhdbxgrithghtwinatluasId = advertisingId ?? '';

  return {
    advertisingId: hdbxgrithghtwinatluasInitializationRuntime.adhdbxgrithghtwinatluasId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void hdbxgrithghtwinatluasSignalHarvestPart01ObfV5HashMix('xy');
void hdbxgrithghtwinatluasSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void hdbxgrithghtwinatluasSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function hdbxgrithghtwinatluasSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function hdbxgrithghtwinatluasSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function hdbxgrithghtwinatluasSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */
function hdbxgrithghtwinatluasSignalHarvestObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function hdbxgrithghtwinatluasSignalHarvestObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function hdbxgrithghtwinatluasSignalHarvestObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

