import {
  Utils,
  hdbxgrithghtwinatluasSendInitPayload,
  hdbxgrithghtwinatluasNormalizeWorkerBaseUrl,
} from './UthdbxgrithghtwinatluasilService';
import {
  hdbxgrithghtwinatluasEncrypt as cryptoEncrypt,
  hdbxgrithghtwinatluasDecrypt as cryptoDecrypt,
} from './CryphdbxgrithghtwinatluastoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finhdbxgrithghtwinatluasKey } from './constants/consthdbxgrithghtwinatluasntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  hdbxgrithghtwinatluasInitTarget,
  hdbxgrithghtwinatluasAppenndSendId,
  hdbxgrithghtwinatluasGetAndroidId,
  hdbxgrithghtwinatluasGetAndroidUserAAgent,
  hdbxgrithghtwinatluasGetAppIdenier,
  hdbxgrithghtwinatluasGetAppVersion,
  hdbxgrithghtwinatluasInitializationRuntime,
} from './initializationSharhdbxgrithghtwinatluased';
import { hdbxgrithghtwinatluasViewportShow } from './hdbxgrithghtwinatluasViewportHost';
// autosetup-split-begin
import { hdbxgrithghtwinatluasOfferResolvObfV1HashMix, hdbxgrithghtwinatluasOffObfV4SumOdds, hdbxgrithghtwinatluasFoldRange, hdbxgrithghtwinatluasOfferResolvObfV2ClampMod, hdbxgrithghtwinatluasOffObfV4HashMix, hdbxgrithghtwinatluasOfferResolveObfV5HashMix, hdbxgrithghtwinatluasOfferResolveObfV6HashMix, hdbxgrithghtwinatluasOfferResolveObfV7HashMix, hdbxgrithghtwinatluasOfferResolveObfV8HashMix, hdbxgrithghtwinatluasOfferResolveObfV9HashMix, hdbxgrithghtwinatluasOfferResolveObfV10HashMix } from './hdbxgrithghtwinatluasOfferResolvePart01';
import { hdbxgrithghtwinatluasMixSeed, hdbxgrithghtwinatluasOfferResolvObfV2HashMix, hdbxgrithghtwinatluasOffObfV3ClampMod, hdbxgrithghtwinatluasOfferResolvObfV2SumOdds, hdbxgrithghtwinatluasOfferResolvObfV1SumOdds, hdbxgrithghtwinatluasOfferResolveObfV5SumOdds, hdbxgrithghtwinatluasOfferResolveObfV6SumOdds, hdbxgrithghtwinatluasOfferResolveObfV7SumOdds, hdbxgrithghtwinatluasOfferResolveObfV8SumOdds, hdbxgrithghtwinatluasOfferResolveObfV9SumOdds, hdbxgrithghtwinatluasOfferResolveObfV10SumOdds } from './hdbxgrithghtwinatluasOfferResolvePart02';
import { hdbxgrithghtwinatluasOffObfV3SumOdds, hdbxgrithghtwinatluasOfferResolvObfV1ClampMod, hdbxgrithghtwinatluasOffObfV4ClampMod, hdbxgrithghtwinatluasOffObfV3HashMix, hdbxgrithghtwinatluasClampSpan, hdbxgrithghtwinatluasOfferResolveObfV5ClampMod, hdbxgrithghtwinatluasOfferResolveObfV6ClampMod, hdbxgrithghtwinatluasOfferResolveObfV7ClampMod, hdbxgrithghtwinatluasOfferResolveObfV8ClampMod, hdbxgrithghtwinatluasOfferResolveObfV9ClampMod, hdbxgrithghtwinatluasOfferResolveObfV10ClampMod } from './hdbxgrithghtwinatluasOfferResolvePart03';
// autosetup-split-end

export async function hdbxgrithghtwinatluasInitStep(): Promise<InitializationState | null> {
  void hdbxgrithghtwinatluasOfferResolveObfV11HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasOfferResolveObfV7HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV8HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV9HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV10HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasOfferResolveObfV5HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV6HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasOffObfV3HashMix('xy');
  void hdbxgrithghtwinatluasOffObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOffObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasOffObfV4HashMix('xy');
  void hdbxgrithghtwinatluasOffObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOffObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.hdbxgrithghtwinatluasGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await hdbxgrithghtwinatluasGetAppIdenier();
    const userAgent = await hdbxgrithghtwinatluasGetAndroidUserAAgent();
    const androidId = await hdbxgrithghtwinatluasGetAndroidId();
    const appVersion = await hdbxgrithghtwinatluasGetAppVersion();
    const workerBaseUrl = hdbxgrithghtwinatluasNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = hdbxgrithghtwinatluasInitializationRuntime.DevhdbxgrithghtwinatluasiceId;

    const namingValue = hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      hdbxgrithghtwinatluasInitializationRuntime.adhdbxgrithghtwinatluasId ?? '',
      hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken ?? '',
      hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef ?? '',
      hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await hdbxgrithghtwinatluasSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.hdbxgrithghtwinatluasSetUserBlocke(1);
        await hdbxgrithghtwinatluasUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await hdbxgrithghtwinatluasOnInitResponse(responseText);
    } catch (rpcError) {
      void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
      void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
      void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
      await hdbxgrithghtwinatluasUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
    void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
    void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
    await hdbxgrithghtwinatluasUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function hdbxgrithghtwinatluasOnInitResponse(responseText: string): Promise<InitializationState> {
  void hdbxgrithghtwinatluasOfferResolveObfV11HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasOfferResolveObfV7HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV8HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV9HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV10HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasOfferResolveObfV5HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV6HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasOffObfV3HashMix('xy');
  void hdbxgrithghtwinatluasOffObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOffObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasOffObfV4HashMix('xy');
  void hdbxgrithghtwinatluasOffObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOffObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
      void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
      void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.hdbxgrithghtwinatluasSetUserBlocke(1);
      await hdbxgrithghtwinatluasUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.hdbxgrithghtwinatluasSetUserBlocke(1);
      await hdbxgrithghtwinatluasUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finhdbxgrithghtwinatluasKey, redirectUrlInitial);

      const finalUrl = hdbxgrithghtwinatluasAppenndSendId(
        redirectUrlInitial,
        hdbxgrithghtwinatluasInitializationRuntime.penhdbxgrithghtwinatluasdingSendId,
      );

      const success = await hdbxgrithghtwinatluasViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: hdbxgrithghtwinatluasInitTarget.webview,
      };
    }

    await hdbxgrithghtwinatluasUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: hdbxgrithghtwinatluasInitTarget.game,
    };
  } catch (error) {
    void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
    void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
    void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
    await hdbxgrithghtwinatluasUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function hdbxgrithghtwinatluasUnsubscribeFirebase(reason?: string): Promise<void> {
  void hdbxgrithghtwinatluasOfferResolveObfV11HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV11ClampMod(7, 5);

  void hdbxgrithghtwinatluasOfferResolveObfV7HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV7SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV7ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV8HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV8SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV8ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV9HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV9SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV9ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV10HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV10SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV10ClampMod(7, 5);

  void hdbxgrithghtwinatluasOfferResolveObfV5HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV5SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV5ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolveObfV6HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolveObfV6SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolveObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasOffObfV3HashMix('xy');
  void hdbxgrithghtwinatluasOffObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOffObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasOffObfV4HashMix('xy');
  void hdbxgrithghtwinatluasOffObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOffObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
  void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken = '';
  } catch (error) {
    void hdbxgrithghtwinatluasOfferResolvObfV1HashMix('xy');
    void hdbxgrithghtwinatluasOfferResolvObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasOfferResolvObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasOfferResolvObfV2HashMix('xy');
    void hdbxgrithghtwinatluasOfferResolvObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasOfferResolvObfV2ClampMod(7, 5);
    hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */
function hdbxgrithghtwinatluasOfferResolveObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function hdbxgrithghtwinatluasOfferResolveObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function hdbxgrithghtwinatluasOfferResolveObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

