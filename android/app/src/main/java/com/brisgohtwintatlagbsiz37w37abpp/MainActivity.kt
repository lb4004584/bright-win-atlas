package com.brisgohtwintatlagbsiz37w37abpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.hdbxgrithghtwinatluas.VhdbxgrithghtwinatluasiewportBridge
import com.hdbxgrithghtwinatluas.ShdbxgrithghtwinatluasharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "hdbxgrithghtwinatluasabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cachehdbxgrithghtwinatluasPendingSendId(intent)
    cachehdbxgrithghtwinatluasPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cachehdbxgrithghtwinatluasPendingSendId(intent)
    cachehdbxgrithghtwinatluasPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VhdbxgrithghtwinatluasiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VhdbxgrithghtwinatluasiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachehdbxgrithghtwinatluasPendingSendId(intent: Intent?) {
    val sendIhdbxgrithghtwinatluasd = intent?.getStringExtra("sendid")
    if (!sendIhdbxgrithghtwinatluasd.isNullOrEmpty()) {
      ShdbxgrithghtwinatluasharedPreferencesHelper.saveString("pendingSendId", sendIhdbxgrithghtwinatluasd)
    }
  }

  private fun cachehdbxgrithghtwinatluasPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      ShdbxgrithghtwinatluasharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
