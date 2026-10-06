package com.hdbxgrithghtwinatluas;

import android.content.Context;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import java.io.IOException;
import java.util.UUID;

public class AhdbxgrithghtwinatluasdvertisingIdHelper extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public AhdbxgrithghtwinatluasdvertisingIdHelper(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "AhdbxgrithghtwinatluasdvertisingIdHelper";
    }

    @ReactMethod
    public void getAdvertisingIhdbxgrithghtwinatluasdId(Promise promise) {
        try {
            Context context = reactContext.getCurrentActivity();
            if (context == null) {
                context = reactContext.getApplicationContext();
            }

            AdvertisingIdClient.Info adIhdbxgrithghtwinatluasfo = AdvertisingIdClient.getAdvertisingIdInfo(context);
            String adIhdbxgrithghtwinatluasdId = adIhdbxgrithghtwinatluasfo.getId();

            if (adIhdbxgrithghtwinatluasdId != null && !adIhdbxgrithghtwinatluasdId.isEmpty()) {
                promise.resolve(adIhdbxgrithghtwinatluasdId);
            } else {
                promise.resolve("");
            }
        } catch (GooglePlayServicesNotAvailableException e) {
            promise.resolve("");
        } catch (GooglePlayServicesRepairableException e) {
            promise.resolve("");
        } catch (IOException e) {
            promise.resolve("");
        } catch (Exception e) {
            promise.resolve("");
        }
    }
}
