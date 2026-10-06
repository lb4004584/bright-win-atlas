package com.hdbxgrithghtwinatluas

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UhdbxgrithghtwinatluasserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAhdbxgrithghtwinatluasper"
    }

    @ReactMethod
    fun getAndrhdbxgrithghtwinatluasoidUserAgent(promise: Promise) {
        try {
            val contextIhdbxgrithghtwinatluas = reactApplicationContext.applicationContext
            val userAgentIhdbxgrithghtwinatluas = WebSettings.getDefaultUserAgent(contextIhdbxgrithghtwinatluas)
            promise.resolve(userAgentIhdbxgrithghtwinatluas ?: "")
        } catch (eIhdbxgrithghtwinatluas: Exception) {
            // android.util.Log.e("UserAhdbxgrithghtwinatluasperModule", "Error getting UserAgent: ${eIhdbxgrithghtwinatluas.message}")
            promise.resolve("")
        }
    }
}
