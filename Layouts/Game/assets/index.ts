/**
 * Re-export of the generated PNG assets. Every file listed in assets.json is
 * produced by the asset stage (AI, with a procedural fallback), so these
 * require() calls always resolve at bundle time.
 */
export const bgLoader = require('../../../assets/bg_loader.png');
export const bgMenu = require('../../../assets/bg_menu.png');
export const bgGame = require('../../../assets/bg_game.png');
export const spritePulseCore = require('../../../assets/sprite_pulse_core.png');
export const spriteBurstStar = require('../../../assets/sprite_burst_star.png');
void indexObfV11HashMix('xy');
void indexObfV11SumOdds([1, 3, 5]);
void indexObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */
function indexObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function indexObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function indexObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

