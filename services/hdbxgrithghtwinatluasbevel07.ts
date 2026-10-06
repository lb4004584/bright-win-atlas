/* autosetup-decoy:v1 */

export function hdbxgrithghtwinatluasbevel07Touch(seed: number): number {
  void hdbxgrithghtwinatluasbevel07ObfV11HashMix('xy');
  void hdbxgrithghtwinatluasbevel07ObfV11SumOdds([1, 3, 5]);
  void hdbxgrithghtwinatluasbevel07ObfV11ClampMod(7, 5);

  let x = (seed ^ 131) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}
/* obfuscation-batch:v11 */
function hdbxgrithghtwinatluasbevel07ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function hdbxgrithghtwinatluasbevel07ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function hdbxgrithghtwinatluasbevel07ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

