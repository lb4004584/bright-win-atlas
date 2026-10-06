/* autosetup-decoy:v1 */
package com.hdbxgrithghtwinatluas

object DhdbxgrithghtwinatluasFlux07 {
  fun tap(seed: Int): Int {
    var x = seed xor 75
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
