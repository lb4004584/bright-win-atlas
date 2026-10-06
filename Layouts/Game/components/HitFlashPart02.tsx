/* autosetup-split:v1 */

export function hdbxgrithghtwinatluasGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}
void HitFlashPart02ObfV11HashMix('xy');
void HitFlashPart02ObfV11SumOdds([1, 3, 5]);
void HitFlashPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function HitFlashPart02ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function HitFlashPart02ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function HitFlashPart02ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

