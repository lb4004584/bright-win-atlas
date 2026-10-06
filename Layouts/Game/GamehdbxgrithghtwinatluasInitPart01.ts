/* autosetup-split:v1 */

export function GamehdbxgrithghtwinatluasInitObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function GamehdbxgrithghtwinatluasInitObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function GamehdbxgrithghtwinatluasInitObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function GamehdbxgrithghtwinatluasInitObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 993, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function GamehdbxgrithghtwinatluasInitObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 997, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function GamehdbxgrithghtwinatluasInitObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hdbxgrithghtwinatluasGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function hdbxgrithghtwinatluasGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function hdbxgrithghtwinatluasGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}
void GamehdbxgrithghtwinatluasInitPart01ObfV11HashMix('xy');
void GamehdbxgrithghtwinatluasInitPart01ObfV11SumOdds([1, 3, 5]);
void GamehdbxgrithghtwinatluasInitPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function GamehdbxgrithghtwinatluasInitPart01ObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function GamehdbxgrithghtwinatluasInitPart01ObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function GamehdbxgrithghtwinatluasInitPart01ObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

