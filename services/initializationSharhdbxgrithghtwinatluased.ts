import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hdbxgrithghtwinatluasDecrypt } from './CryphdbxgrithghtwinatluastoService';
import { finhdbxgrithghtwinatluasKey } from './constants/consthdbxgrithghtwinatluasntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  hdbxgrithghtwinatluasViewportGetState,
  hdbxgrithghtwinatluasViewportShow,
} from './hdbxgrithghtwinatluasViewportHost';
import { Utils } from './UthdbxgrithghtwinatluasilService';

let hdbxgrithghtwinatluasLastOpenedPushExternalUrl = '';
let hdbxgrithghtwinatluasLastOpenedPushExternalAt = 0;

export const hdbxgrithghtwinatluasInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof hdbxgrithghtwinatluasInitTarget)[keyof typeof hdbxgrithghtwinatluasInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface hdbxgrithghtwinatluasInitializationRuntime {
  pushdbxgrithghtwinatluashToken: string;
  insthdbxgrithghtwinatluasallRef: string;
  DevhdbxgrithghtwinatluasiceId: string;
  FinhdbxgrithghtwinatluaslOneLink: string;
  FinhdbxgrithghtwinatluaslNaming: string;
  adhdbxgrithghtwinatluasId: string;
  firshdbxgrithghtwinatluastParameterReceived: boolean;
  orhdbxgrithghtwinatluasanicWaiting: boolean;
  orghdbxgrithghtwinatluasnicWaitResolve: (() => void) | null;
  penhdbxgrithghtwinatluasdingSendId: string;
}

export const hdbxgrithghtwinatluasInitializationRuntime: hdbxgrithghtwinatluasInitializationRuntime = {
  pushdbxgrithghtwinatluashToken: '',
  insthdbxgrithghtwinatluasallRef: '',
  DevhdbxgrithghtwinatluasiceId: '',
  FinhdbxgrithghtwinatluaslOneLink: '',
  FinhdbxgrithghtwinatluaslNaming: '',
  adhdbxgrithghtwinatluasId: '',
  firshdbxgrithghtwinatluastParameterReceived: false,
  orhdbxgrithghtwinatluasanicWaiting: false,
  orghdbxgrithghtwinatluasnicWaitResolve: null,
  penhdbxgrithghtwinatluasdingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function hdbxgrithghtwinatluasResetInitializationRuntime(): void {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken = '';
  hdbxgrithghtwinatluasInitializationRuntime.insthdbxgrithghtwinatluasallRef = '';
  hdbxgrithghtwinatluasInitializationRuntime.DevhdbxgrithghtwinatluasiceId = '';
  hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslOneLink = '';
  hdbxgrithghtwinatluasInitializationRuntime.FinhdbxgrithghtwinatluaslNaming = '';
  hdbxgrithghtwinatluasInitializationRuntime.adhdbxgrithghtwinatluasId = '';
  hdbxgrithghtwinatluasInitializationRuntime.firshdbxgrithghtwinatluastParameterReceived = false;
  hdbxgrithghtwinatluasInitializationRuntime.orhdbxgrithghtwinatluasanicWaiting = false;
  hdbxgrithghtwinatluasInitializationRuntime.orghdbxgrithghtwinatluasnicWaitResolve = null;
}

export function hdbxgrithghtwinatluasAppenndSendId(url: string, sendId: string): string {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function hdbxgrithghtwinatluasSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AhdbxgrithghtwinatluasppInfoModule } = NativeModules;
    if (!AhdbxgrithghtwinatluasppInfoModule || typeof AhdbxgrithghtwinatluasppInfoModule.getAndClearPendingSenhdbxgrithghtwinatluasdId !== 'function') {
      return;
    }
    const sendId = await AhdbxgrithghtwinatluasppInfoModule.getAndClearPendingSenhdbxgrithghtwinatluasdId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      hdbxgrithghtwinatluasInitializationRuntime.penhdbxgrithghtwinatluasdingSendId = sendId.trim();
    }
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function hdbxgrithghtwinatluasTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === hdbxgrithghtwinatluasLastOpenedPushExternalUrl &&
    now - hdbxgrithghtwinatluasLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    hdbxgrithghtwinatluasLastOpenedPushExternalUrl = url;
    hdbxgrithghtwinatluasLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    hdbxgrithghtwinatluasLastOpenedPushExternalUrl = '';
    hdbxgrithghtwinatluasLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function hdbxgrithghtwinatluasSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AhdbxgrithghtwinatluasppInfoModule } = NativeModules;
    if (
      !AhdbxgrithghtwinatluasppInfoModule ||
      typeof AhdbxgrithghtwinatluasppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AhdbxgrithghtwinatluasppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await hdbxgrithghtwinatluasTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function hdbxgrithghtwinatluasGetAppIdenier(): Promise<string> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AhdbxgrithghtwinatluasppInfoModule } = NativeModules;

    if (!AhdbxgrithghtwinatluasppInfoModule) {
      //console.log('AhdbxgrithghtwinatluasppInfoModule module not found');
      return '';
    }

    const packageName = await AhdbxgrithghtwinatluasppInfoModule.getPachdbxgrithghtwinatluaskageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function hdbxgrithghtwinatluasGetAppVersion(): Promise<string> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function hdbxgrithghtwinatluasGetAndroidId(): Promise<string> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function hdbxgrithghtwinatluasGetAndroidUserAAgent(): Promise<string> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAhdbxgrithghtwinatluasper } = NativeModules;

    if (!UserAhdbxgrithghtwinatluasper) {
      //console.log('UserAhdbxgrithghtwinatluasper module not found');
      return '';
    }

    const userAgent: string = await UserAhdbxgrithghtwinatluasper.getAndrhdbxgrithghtwinatluasoidUserAgent();
    return userAgent || '';
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const hdbxgrithghtwinatluasINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let hdbxgrithghtwinatluasInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function hdbxgrithghtwinatluasWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

    void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
    void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
    void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void hdbxgrithghtwinatluasMixSeed(3, 7);
    void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
    void hdbxgrithghtwinatluasClampSpan(5, 0, 10);

    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

      void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
      void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
      void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (hdbxgrithghtwinatluasInitPushResolver === deliver) {
        hdbxgrithghtwinatluasInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

      void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
      void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
      void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

      void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
      void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
      void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    hdbxgrithghtwinatluasInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function hdbxgrithghtwinatluasDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!hdbxgrithghtwinatluasInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = hdbxgrithghtwinatluasInitPushResolver;
  hdbxgrithghtwinatluasInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function hdbxgrithghtwinatluasHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = hdbxgrithghtwinatluasDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = hdbxgrithghtwinatluasAppenndSendId(
        redirectUrlInitial,
        hdbxgrithghtwinatluasInitializationRuntime.penhdbxgrithghtwinatluasdingSendId,
      );
      await AsyncStorage.setItem(finhdbxgrithghtwinatluasKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = hdbxgrithghtwinatluasViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await hdbxgrithghtwinatluasViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.hdbxgrithghtwinatluasSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function hdbxgrithghtwinatluasExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of hdbxgrithghtwinatluasINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function hdbxgrithghtwinatluasWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

    void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
    void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
    void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

      void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
      void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
      void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await hdbxgrithghtwinatluasOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function hdbxgrithghtwinatluasOnTokenReceived(token: string): Promise<void> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    hdbxgrithghtwinatluasInitializationRuntime.pushdbxgrithghtwinatluashToken = token;
  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function hdbxgrithghtwinatluasOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharhdbxgrithghtwinatluasedObfV11HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV11SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV7HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV7SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV8HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV8SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV9HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV9SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV10HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV10SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(7, 5);

  void initializationSharhdbxgrithghtwinatluasedObfV5HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV5SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(7, 5);
  void initializationSharhdbxgrithghtwinatluasedObfV6HashMix('xy');
  void initializationSharhdbxgrithghtwinatluasedObfV6SumOdds([1, 3, 5]);
  void initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV3HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharObfV4HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hdbxgrithghtwinatluasMixSeed(3, 7);
  void hdbxgrithghtwinatluasFoldRange([1, 2, 3]);
  void hdbxgrithghtwinatluasClampSpan(5, 0, 10);


  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = hdbxgrithghtwinatluasExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = hdbxgrithghtwinatluasDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await hdbxgrithghtwinatluasHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      hdbxgrithghtwinatluasInitializationRuntime.penhdbxgrithghtwinatluasdingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finhdbxgrithghtwinatluasKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = hdbxgrithghtwinatluasAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = hdbxgrithghtwinatluasViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await hdbxgrithghtwinatluasViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix('xy');
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const hdbxgrithghtwinatluasabppOnMessageRecieved = hdbxgrithghtwinatluasOnMessageRecieved;

function hdbxgrithghtwinatluasMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function hdbxgrithghtwinatluasFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function hdbxgrithghtwinatluasClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function hdbxgrithghtwinatluasinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function hdbxgrithghtwinatluasinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function hdbxgrithghtwinatluasinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function hdbxgrithghtwinatluasinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function hdbxgrithghtwinatluasinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function hdbxgrithghtwinatluasinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function hdbxgrithghtwinatluasinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharhdbxgrithghtwinatluasedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharhdbxgrithghtwinatluasedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function initializationSharhdbxgrithghtwinatluasedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function initializationSharhdbxgrithghtwinatluasedObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function initializationSharhdbxgrithghtwinatluasedObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function initializationSharhdbxgrithghtwinatluasedObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function initializationSharhdbxgrithghtwinatluasedObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function initializationSharhdbxgrithghtwinatluasedObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function initializationSharhdbxgrithghtwinatluasedObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function initializationSharhdbxgrithghtwinatluasedObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationSharhdbxgrithghtwinatluasedObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initializationSharhdbxgrithghtwinatluasedObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function initializationSharhdbxgrithghtwinatluasedObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function initializationSharhdbxgrithghtwinatluasedObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

