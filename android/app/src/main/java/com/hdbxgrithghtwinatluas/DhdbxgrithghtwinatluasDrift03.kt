/* autosetup-decoy:v1 */
package com.hdbxgrithghtwinatluas

object DhdbxgrithghtwinatluasDrift03 {
  fun tap(seed: Int): Int {
    var x = seed xor 47
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
