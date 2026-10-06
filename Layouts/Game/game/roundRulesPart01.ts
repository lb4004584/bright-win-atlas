/* autosetup-split:v1 */

export function hdbxgrithghtwinatluasGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function hdbxgrithghtwinatluasGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function hdbxgrithghtwinatluasGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}
void roundRulesPart01ObfV11HashMix('xy');
void roundRulesPart01ObfV11SumOdds([1, 3, 5]);
void roundRulesPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function roundRulesPart01ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function roundRulesPart01ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function roundRulesPart01ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

