import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_hdbxgrithghtwinatluasKEY,
  STORAGE_hdbxgrithghtwinatluasKEYS,
  hdbxgrithghtwinatluasConstTouch,
} from './constants/consthdbxgrithghtwinatluasntsVariable';
// autosetup-split-begin
import { swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesFoldRange, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod, wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds, wehdbxgrithghtwinatluasbViewServiceObfV5HashMix, wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod, wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds, wehdbxgrithghtwinatluasbViewServiceObfV8HashMix, wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod, wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds, wehdbxgrithghtwinatluasbViewServiceObfV10HashMix, wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod } from './wehdbxgrithghtwinatluasbViewServicePart01';
import { swefgdetguhjhoioesClampSpan, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod, hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds, wehdbxgrithghtwinatluasbViewServiceObfV6HashMix, wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod, wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds, wehdbxgrithghtwinatluasbViewServiceObfV7HashMix, wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod, wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds, wehdbxgrithghtwinatluasbViewServiceObfV9HashMix, wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod, wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds } from './wehdbxgrithghtwinatluasbViewServicePart02';
// autosetup-split-end

type VhdbxgrithghtwinatluasiewportBannanaModule = {
  navhdbxgrithghtwinatluasigate: (url: string) => Promise<boolean>;
  hhdbxgrithghtwinatluaside: () => Promise<boolean>;
};

const vhdbxgrithghtwinatluasiewportBridge: VhdbxgrithghtwinatluasiewportBannanaModule | undefined =
  NativeModules.VhdbxgrithghtwinatluasiewportBannana;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  private swefgdetguhjhoioesPushRetryTimer: ReturnType<typeof setTimeout> | null =
    null;
  _dummypicklfo5409vb33 = 0;

  hdbxgrithghtwinatluasubscribe(listener: swefgdetguhjhoioesListener): () => void {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

      void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
      void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
      void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void hdbxgrithghtwinatluasConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

      void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
      void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
      void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
      return (l(this.state));
    });
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS already granted:', alreadyGranted);
        if (alreadyGranted) {
          return true;
        }
        const result = await PermissionsAndroid.request(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS request result:', result);
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
        //console.log('[PushDebug] iOS permission status before request:', status);
        const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          const newStatus = await requestPermission(messaging);
          //console.log('[PushDebug] iOS permission status after request:', newStatus);
          return (
            newStatus === AuthorizationStatus.AUTHORIZED ||
            newStatus === AuthorizationStatus.PROVISIONAL
          );
        }
        return false;
      }
    } catch (error) {
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
      void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
      //console.log('[PushDebug] permission request error:', error);
      void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

            void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
            void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
            void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
            void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
            void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
            void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
            void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
            void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
            void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
            void Linking.openSettings();
          },
        },
      ],
    );
  }

  private swefgdetguhjhoioesClearPushRetryTimer(): void {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
    void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesPushRetryTimer) {
      clearTimeout(this.swefgdetguhjhoioesPushRetryTimer);
      this.swefgdetguhjhoioesPushRetryTimer = null;
    }
  }

  /** After 1st deny: repeat native push ask in 15s while offer WebView is open. */
  private swefgdetguhjhoioesSchedulePushRetryOnOffer(): void {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
    void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.swefgdetguhjhoioesClearPushRetryTimer();
    this.swefgdetguhjhoioesPushRetryTimer = setTimeout(() => {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

      this.swefgdetguhjhoioesPushRetryTimer = null;
      void this.swefgdetguhjhoioesRunDelayedPushRetry();
    }, 15_000);
  }

  private async swefgdetguhjhoioesRunDelayedPushRetry(): Promise<void> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
    void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      // Only while offer (WebView) is on screen
      if (!this.state.visible) {
        return;
      }
      if (await this.swefgdetguhjhoioesHasPushNotificationPermission()) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_hdbxgrithghtwinatluasKEYS.PUSH_hdbxgrithghtwinatluasMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(true);
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_hdbxgrithghtwinatluasKEYS.PUSH_hdbxgrithghtwinatluasMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        this.swefgdetguhjhoioesClearPushRetryTimer();
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_hdbxgrithghtwinatluasKEYS.PUSH_hdbxgrithghtwinatluasMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One initial native dialog per app launch; 2nd ask is scheduled 15s later on offer.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: main ask. askCount === 1: leftover 2nd ask from prior session.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        this.swefgdetguhjhoioesClearPushRetryTimer();
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_hdbxgrithghtwinatluasKEYS.PUSH_hdbxgrithghtwinatluasMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // User denied the main ask → repeat after 15s while on offer
      this.swefgdetguhjhoioesSchedulePushRetryOnOffer();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vhdbxgrithghtwinatluasiewportBridge?.navhdbxgrithghtwinatluasigate) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await vhdbxgrithghtwinatluasiewportBridge.navhdbxgrithghtwinatluasigate(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vhdbxgrithghtwinatluasiewportBridge?.hhdbxgrithghtwinatluaside) {
      return;
    }

    try {
      await vhdbxgrithghtwinatluasiewportBridge.hhdbxgrithghtwinatluaside();
    } catch {
      // silent
    }
  }

  async shhdbxgrithghtwinatluasow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.hdbxgrithghtwinatluasaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async hdbxgrithghtwinatluasaveLastUrl(url: string): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.hdbxgrithghtwinatluasaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async hdbxgrithghtwinatluasaveLastUrlToStorage(url: string): Promise<void> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_hdbxgrithghtwinatluasKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
  void wehdbxgrithghtwinatluasbViewServiceObfV11HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(7, 5);

  void wehdbxgrithghtwinatluasbViewServiceObfV7HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV7SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV7ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV8HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV8SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV8ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV9HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV9SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV9ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV10HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV10SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV10ClampMod(7, 5);

    void wehdbxgrithghtwinatluasbViewServiceObfV5HashMix('xy');
    void wehdbxgrithghtwinatluasbViewServiceObfV5SumOdds([1, 3, 5]);
    void wehdbxgrithghtwinatluasbViewServiceObfV5ClampMod(7, 5);
  void wehdbxgrithghtwinatluasbViewServiceObfV6HashMix('xy');
  void wehdbxgrithghtwinatluasbViewServiceObfV6SumOdds([1, 3, 5]);
  void wehdbxgrithghtwinatluasbViewServiceObfV6ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV3ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbObfV4ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV1ClampMod(7, 5);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2HashMix('xy');
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2SumOdds([1, 3, 5]);
    void hdbxgrithghtwinatluaswehdbxgrithghtwinatluasbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_hdbxgrithghtwinatluasKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */
function wehdbxgrithghtwinatluasbViewServiceObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function wehdbxgrithghtwinatluasbViewServiceObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function wehdbxgrithghtwinatluasbViewServiceObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

