import {Dimensions} from 'react-native';

const win = Dimensions.get('window');

export const SCREEN_W = win.width;
export const SCREEN_H = win.height;

/**
 * Splash duration. MUST stay exactly 8000 — shorter races the UI-capture
 * window and the Loader frame is lost (workspace rule #13).
 */
export const LOADER_DURATION_MS = 8000;

/* ------------------------------------------------------------------ */
/* Arena geometry — padding + border aware (workspace rules #4 / #5)   */
/* ------------------------------------------------------------------ */
export const PAD = 6;
export const BORDER = 2;
export const BOARD_FRAME = PAD + BORDER; // 8
/**
 * Vertical budget the arena does NOT get: header (72+44), the paddingBottom
 * that clears the floating bar (150), the event bar above it (43) and the
 * idle hint below it (29, rounded up to 39 for slack). Keeping this sum
 * honest is what holds the Step 6.6 geometry check at zero overflow on the
 * short screens where height, not width, is the binding constraint.
 */
export const GAME_CHROME_H = 116 + 150 + 43 + 39;
/**
 * The arena is a square, so it is clamped by the shorter axis: width first
 * (rule #5 leaves margin for the parent padding + border), then by whatever
 * vertical space the header and the floating bar leave behind.
 */
export const BOARD_MAX_W = Math.max(
  200,
  Math.min(SCREEN_W - 32, 380, SCREEN_H - GAME_CHROME_H),
);
export const ARENA = BOARD_MAX_W - 2 * BOARD_FRAME;
export const TARGET_R = Math.floor(ARENA * 0.38);
export const RING_MAX_R = Math.floor(ARENA / 2);
export const RING_MIN_SCALE = 0.08;

/* ------------------------------------------------------------------ */
/* Tempo presets                                                       */
/* ------------------------------------------------------------------ */
export type Tempo = 'SLOW' | 'PULSE' | 'RUSH';

export type TempoConfig = {
  intervalMs: number;
  travelMs: number;
  perfectWindow: number;
};

export const TEMPOS: Record<Tempo, TempoConfig> = {
  SLOW: {intervalMs: 2200, travelMs: 2400, perfectWindow: 8},
  PULSE: {intervalMs: 1800, travelMs: 2000, perfectWindow: 6},
  RUSH: {intervalMs: 1300, travelMs: 1500, perfectWindow: 5},
};

export const TEMPO_ORDER: Tempo[] = ['SLOW', 'PULSE', 'RUSH'];
export const DEFAULT_TEMPO: Tempo = 'PULSE';

export const GOOD_WINDOW = 16;

/* ------------------------------------------------------------------ */
/* Target palettes (mode select)                                       */
/* ------------------------------------------------------------------ */
export type PaletteId = 'CLASSIC' | 'FESTIVE' | 'DEEP';

export const PALETTE_ORDER: PaletteId[] = ['CLASSIC', 'FESTIVE', 'DEEP'];
export const DEFAULT_PALETTE: PaletteId = 'FESTIVE';

export const GOLD = '#F3C349';
export const CYAN = '#2BC3E4';
export const CORAL = '#E83A55';
export const VIOLET = '#7651CC';

export const PALETTES: Record<PaletteId, string[]> = {
  CLASSIC: [GOLD, CYAN],
  FESTIVE: [GOLD, CYAN, CORAL, VIOLET],
  DEEP: [VIOLET, CYAN],
};

/** Every colour the arm-pad row can offer. */
export const ALL_TARGET_COLORS: string[] = [GOLD, CYAN, CORAL, VIOLET];

/* ------------------------------------------------------------------ */
/* Round economy                                                       */
/* ------------------------------------------------------------------ */
export const ENERGY_START = 120;
export const ENERGY_MAX_SEGMENTS = 5;
export const ENERGY_DRAIN_PER_S = 0.8;
export const MISS_PENALTY = 6;
export const ENERGY_HIT_REWARD = 2;

export const SCORE_PERFECT = 120;
export const SCORE_GOOD = 60;
export const BAR_PERFECT = 14;
export const BAR_GOOD = 8;
export const BAR_COLOR_BONUS = 4;
export const COLOR_MULTIPLIER = 1.5;
export const EVENT_TARGET = 100;

export const MAX_COMBO_STEPS = 10;
export const COMBO_STEP = 0.1;

/**
 * The round clock starts on the player's FIRST strike, not on mount: energy
 * drain, expired-ring penalties and the miss streak are all frozen until then
 * (see useRoundState). A round nobody touches therefore sits on the arena
 * forever instead of dying on energy ~60s in — measured capture latency on a
 * loaded host is 2-3 min per frame, so a self-terminating idle round means the
 * gameplay screen is never photographed at all.
 *
 * FATAL_STREAK_ARM_MS is likewise counted from the first strike, so the "3
 * misses in a row" rule cannot end the round the instant it is armed.
 */
export const FATAL_STREAK_ARM_MS = 30000;
export const FATAL_STREAK = 3;
/**
 * Hard stop measured from GameScreen mount. NEVER re-armed on player input.
 * Long enough to outlive at least one capture interval so the arena is caught
 * mid-round, short enough that an untouched round still reaches the Result
 * screen on its own.
 */
export const ROUND_FAILSAFE_MS = 240000;
export const ROUND_TICK_MS = 500;
/** Delay between "round finished" and the Result screen appearing. */
export const RESULT_DELAY_MS = 900;
