/* autosetup-split:v1 */

export function hdbxgrithghtwinatluasSignalHarvestObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function hdbxgrithghtwinatluasMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function hdbxgrithghtwinatluasSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function hdbxgrithghtwinatluasSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function hdbxgrithghtwinatluasSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function hdbxgrithghtwinatluasSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function hdbxgrithghtwinatluasSignalHarvestObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
void hdbxgrithghtwinatluasSignalHarvestPart01ObfV11HashMix('xy');
void hdbxgrithghtwinatluasSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void hdbxgrithghtwinatluasSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function hdbxgrithghtwinatluasSignalHarvestPart01ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function hdbxgrithghtwinatluasSignalHarvestPart01ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function hdbxgrithghtwinatluasSignalHarvestPart01ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

