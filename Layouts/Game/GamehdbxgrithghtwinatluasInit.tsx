import React from 'react';
import Ahdbxgrithghtwinatluaspp from './GamehdbxgrithghtwinatluasShell';
// autosetup-split-begin
import { GamehdbxgrithghtwinatluasInitObfV5HashMix, GamehdbxgrithghtwinatluasInitObfV5SumOdds, GamehdbxgrithghtwinatluasInitObfV5ClampMod, GamehdbxgrithghtwinatluasInitObfV6HashMix, GamehdbxgrithghtwinatluasInitObfV6SumOdds, GamehdbxgrithghtwinatluasInitObfV6ClampMod, GamehdbxgrithghtwinatluasInitObfV7HashMix, GamehdbxgrithghtwinatluasInitObfV7SumOdds, GamehdbxgrithghtwinatluasInitObfV7ClampMod, hdbxgrithghtwinatluasGameMixSeed, hdbxgrithghtwinatluasGameFoldRange, hdbxgrithghtwinatluasGameClampSpan, GamehdbxgrithghtwinatluasInitObfV8HashMix, GamehdbxgrithghtwinatluasInitObfV8SumOdds, GamehdbxgrithghtwinatluasInitObfV8ClampMod, GamehdbxgrithghtwinatluasInitObfV9HashMix, GamehdbxgrithghtwinatluasInitObfV9SumOdds, GamehdbxgrithghtwinatluasInitObfV9ClampMod } from './GamehdbxgrithghtwinatluasInitPart01';
// autosetup-split-end

type GamehdbxgrithghtwinatluasInitProps = {
  starthdbxgrithghtwinatluasAtMenu?: boolean;
};

function GamehdbxgrithghtwinatluasInit({
  starthdbxgrithghtwinatluasAtMenu = false,
}: GamehdbxgrithghtwinatluasInitProps): React.JSX.Element {
  void GamehdbxgrithghtwinatluasInitObfV11HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV11SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV11ClampMod(7, 5);

  void GamehdbxgrithghtwinatluasInitObfV10HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV10SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV10ClampMod(7, 5);
  void GamehdbxgrithghtwinatluasInitObfV9HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV9SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV9ClampMod(7, 5);
  void GamehdbxgrithghtwinatluasInitObfV7HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV7SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV7ClampMod(7, 5);
  void GamehdbxgrithghtwinatluasInitObfV8HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV8SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV8ClampMod(7, 5);
  void GamehdbxgrithghtwinatluasInitObfV5HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV5SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV5ClampMod(7, 5);
  void GamehdbxgrithghtwinatluasInitObfV6HashMix('xy');
  void GamehdbxgrithghtwinatluasInitObfV6SumOdds([1, 3, 5]);
  void GamehdbxgrithghtwinatluasInitObfV6ClampMod(7, 5);
  return <Ahdbxgrithghtwinatluaspp starthdbxgrithghtwinatluasAtMenu={starthdbxgrithghtwinatluasAtMenu} />;
}

export default GamehdbxgrithghtwinatluasInit;

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
void hdbxgrithghtwinatluasGameMixSeed(3, 7);
void hdbxgrithghtwinatluasGameFoldRange([1, 2, 3]);
void hdbxgrithghtwinatluasGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */

/* obfuscation-batch:v10 */
function GamehdbxgrithghtwinatluasInitObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function GamehdbxgrithghtwinatluasInitObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function GamehdbxgrithghtwinatluasInitObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function GamehdbxgrithghtwinatluasInitObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function GamehdbxgrithghtwinatluasInitObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function GamehdbxgrithghtwinatluasInitObfV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

