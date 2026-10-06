import type {ComponentType} from 'react';

/**
 * A lucide-react-native icon passed as a prop.
 *
 * Deliberately loose: lucide ships its icons as forwardRef components whose
 * props extend react-native-svg's SvgProps, and pinning a narrower structural
 * type here makes the assignment fail type-check for reasons that have nothing
 * to do with how the icon is actually used (`size` / `color` / `strokeWidth`).
 */
export type IconComponent = ComponentType<any>;

/* autosetup-game-stamp:v1 */
function hdbxgrithghtwinatluasGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hdbxgrithghtwinatluasGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hdbxgrithghtwinatluasGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);
void iconhdbxgrithghtwinatluasTypesObfV11HashMix('xy');
void iconhdbxgrithghtwinatluasTypesObfV11SumOdds([1, 3, 5]);
void iconhdbxgrithghtwinatluasTypesObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function iconhdbxgrithghtwinatluasTypesObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function iconhdbxgrithghtwinatluasTypesObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function iconhdbxgrithghtwinatluasTypesObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

