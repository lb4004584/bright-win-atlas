/* autosetup-split:v1 */

export function hdbxgrithghtwinatluasMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function hdbxgrithghtwinatluasOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function hdbxgrithghtwinatluasOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hdbxgrithghtwinatluasOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function hdbxgrithghtwinatluasOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function hdbxgrithghtwinatluasOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function hdbxgrithghtwinatluasOfferResolveObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function hdbxgrithghtwinatluasOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function hdbxgrithghtwinatluasOfferResolveObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function hdbxgrithghtwinatluasOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function hdbxgrithghtwinatluasOfferResolveObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
void hdbxgrithghtwinatluasOfferResolvePart02ObfV11HashMix('xy');
void hdbxgrithghtwinatluasOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void hdbxgrithghtwinatluasOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function hdbxgrithghtwinatluasOfferResolvePart02ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function hdbxgrithghtwinatluasOfferResolvePart02ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function hdbxgrithghtwinatluasOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

