
// Game Status

export const GAME_STARTED = 'GAME_STARTED';
export type GAME_STARTED = typeof GAME_STARTED;

export const GAME_OVER = 'GAME_OVER';
export type GAME_OVER = typeof GAME_OVER;

// Game Player Action Status

/**
 *  1. Choose Bet Chips first, the down the bet. After bet down the game will be in a state waiting for DEAL
 *  2. After Click the DEAL, the game will start release cards to both side. this is GIVE CARD state
 *  3. After both side had card, the game is now in a state first check if player get 21 point jackpot,
 *     then check for split. Then in to a state that after GIVE CARD that is wait for DOUBLE , HIT or STAND
 *  4. Process the Calculation depends on DOUBLE , HIT or STAND.
 */

export const BET_DOWN = 'BET_DOWN';
export type BET_DOWN = typeof BET_DOWN;

export const GIVE_CARD = 'GIVE_CARD';
export type GIVE_CARD = typeof GIVE_CARD;

export const SPLIT_CARD = 'SPLIT_CARD';
export type SPLIT_CARD = typeof SPLIT_CARD;

export const DOUBLE_CARD = 'DOUBLE_CARD';
export type DOUBLE_CARD = typeof DOUBLE_CARD;

export const HIT_CARD = 'HIT_CARD';
export type HIT_CARD = typeof HIT_CARD;

export const STAND_CARD = 'STAND_CARD';
export type STAND_CARD = typeof STAND_CARD;


// Game  Calculation Status

export const WIN_CARD = 'WIN_CARD';
export type WIN_CARD = typeof WIN_CARD;

export const BUST_CARD = 'BUST_CARD';
export type BUST_CARD = typeof BUST_CARD;

export const PUSH_CARD = 'PUSH_CARD';
export type PUSH_CARD = typeof PUSH_CARD;
