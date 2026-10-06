/**
 * Re-export of the generated PNG assets. Every file listed in assets.json is
 * produced by the asset stage (AI, with a procedural fallback), so these
 * require() calls always resolve at bundle time.
 */
export const bgLoader = require('../../assets/bg_loader.png');
export const bgMenu = require('../../assets/bg_menu.png');
export const bgGame = require('../../assets/bg_game.png');
export const spritePulseCore = require('../../assets/sprite_pulse_core.png');
export const spriteBurstStar = require('../../assets/sprite_burst_star.png');
