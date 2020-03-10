
// Card Faces
import BG from "../imgs/cardpng/bg.jpg";
// Hearts
import H1 from "../imgs/cardpng/ace_of_hearts.png";
import H2 from "../imgs/cardpng/2_of_hearts.png";
import H3 from "../imgs/cardpng/3_of_hearts.png";
import H4 from "../imgs/cardpng/4_of_hearts.png";
import H5 from "../imgs/cardpng/5_of_hearts.png";
import H6 from "../imgs/cardpng/6_of_hearts.png";
import H7 from "../imgs/cardpng/7_of_hearts.png";
import H8 from "../imgs/cardpng/8_of_hearts.png";
import H9 from "../imgs/cardpng/9_of_hearts.png";
import H10 from "../imgs/cardpng/10_of_hearts.png";
import H11 from "../imgs/cardpng/jack_of_hearts2.png";
import H12 from "../imgs/cardpng/queen_of_hearts2.png";
import H13 from "../imgs/cardpng/king_of_hearts2.png";
// Clubs
import C1 from "../imgs/cardpng/ace_of_clubs.png";
import C2 from "../imgs/cardpng/2_of_clubs.png";
import C3 from "../imgs/cardpng/3_of_clubs.png";
import C4 from "../imgs/cardpng/4_of_clubs.png";
import C5 from "../imgs/cardpng/5_of_clubs.png";
import C6 from "../imgs/cardpng/6_of_clubs.png";
import C7 from "../imgs/cardpng/7_of_clubs.png";
import C8 from "../imgs/cardpng/8_of_clubs.png";
import C9 from "../imgs/cardpng/9_of_clubs.png";
import C10 from "../imgs/cardpng/10_of_clubs.png";
import C11 from "../imgs/cardpng/jack_of_clubs2.png";
import C12 from "../imgs/cardpng/queen_of_clubs2.png";
import C13 from "../imgs/cardpng/king_of_clubs2.png";
// Spades
import S1 from "../imgs/cardpng/ace_of_spades.png";
import S2 from "../imgs/cardpng/2_of_spades.png";
import S3 from "../imgs/cardpng/3_of_spades.png";
import S4 from "../imgs/cardpng/4_of_spades.png";
import S5 from "../imgs/cardpng/5_of_spades.png";
import S6 from "../imgs/cardpng/6_of_spades.png";
import S7 from "../imgs/cardpng/7_of_spades.png";
import S8 from "../imgs/cardpng/8_of_spades.png";
import S9 from "../imgs/cardpng/9_of_spades.png";
import S10 from "../imgs/cardpng/10_of_spades.png";
import S11 from "../imgs/cardpng/jack_of_spades2.png";
import S12 from "../imgs/cardpng/queen_of_spades2.png";
import S13 from "../imgs/cardpng/king_of_spades2.png";
// Diamonds
import D1 from "../imgs/cardpng/ace_of_diamonds.png";
import D2 from "../imgs/cardpng/2_of_diamonds.png";
import D3 from "../imgs/cardpng/3_of_diamonds.png";
import D4 from "../imgs/cardpng/4_of_diamonds.png";
import D5 from "../imgs/cardpng/5_of_diamonds.png";
import D6 from "../imgs/cardpng/6_of_diamonds.png";
import D7 from "../imgs/cardpng/7_of_diamonds.png";
import D8 from "../imgs/cardpng/8_of_diamonds.png";
import D9 from "../imgs/cardpng/9_of_diamonds.png";
import D10 from "../imgs/cardpng/10_of_diamonds.png";
import D11 from "../imgs/cardpng/jack_of_diamonds2.png";
import D12 from "../imgs/cardpng/queen_of_diamonds2.png";
import D13 from "../imgs/cardpng/king_of_diamonds2.png";

// Dialog Status
export const DI_IDLE = 'DI_IDLE';
export type DI_IDLE = typeof DI_IDLE;

export const DI_TRIGGER = 'DI_TRIGGER';
export type DI_TRIGGER = typeof DI_TRIGGER;



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

export const TURN_FACE = 'TURN_FACE';
export type TURN_FACE = typeof TURN_FACE;

export const SPLIT_CARD = 'SPLIT_CARD';
export type SPLIT_CARD = typeof SPLIT_CARD;

export const DOUBLE_CARD = 'DOUBLE_CARD';
export type DOUBLE_CARD = typeof DOUBLE_CARD;

export const HIT_CARD = 'HIT_CARD';
export type HIT_CARD = typeof HIT_CARD;

export const STAND_CARD = 'STAND_CARD';
export type STAND_CARD = typeof STAND_CARD;

// Middle State
export const UPDATE_SCORE = 'UPDATE_SCORE';
export type UPDATE_SCORE = typeof UPDATE_SCORE;

// Game  Calculation Status

export const WIN_CARD = 'WIN_CARD';
export type WIN_CARD = typeof WIN_CARD;

export const BUST_CARD = 'BUST_CARD';
export type BUST_CARD = typeof BUST_CARD;

export const PUSH_CARD = 'PUSH_CARD';
export type PUSH_CARD = typeof PUSH_CARD;

export const DIAMONDS = "diamonds";
export const CLUBS = "clubs";
export const SPADES = "spades";
export const HEARTS = "hearts";

export const WIN_FLAG = "WIN";
export const LOSE_FLAG = "LOSE";
export const CONTINUE_FLAG = "CON";
export const PUSH_FLAG = "PUSH";

export type CardType = {
    name: typeof DIAMONDS | typeof CLUBS | typeof SPADES | typeof HEARTS | string,
    isBack?: boolean,
    value: number
}

export type CardRack = {
    house: CardType[],
    player: CardType[],
}

export type GeneratedCardNumber = {
    h: number[],
    p: number[],
}

export const CardFaces = {
    H1:H1 ,  C1 :C1 ,  S1 :S1 , D1 :D1 ,
    H2:H2 ,  C2 :C2 ,  S2 :S2 , D2 :D2 ,
    H3:H3 ,  C3 :C3 ,  S3 :S3 , D3 :D3 ,
    H4:H4 ,  C4 :C4 ,  S4 :S4 , D4 :D4 ,
    H5:H5 ,  C5 :C5 ,  S5 :S5 , D5 :D5 ,
    H6:H6 ,  C6 :C6 ,  S6 :S6 , D6 :D6 ,
    H7:H7 ,  C7 :C7 ,  S7 :S7 , D7 :D7 ,
    H8:H8 ,  C8 :C8 ,  S8 :S8 , D8 :D8 ,
    H9:H9 ,  C9 :C9 ,  S9 :S9 , D9 :D9 ,
    H10:H10,  C10:C10,  S10:S10, D10:D10,
    H11:H11,  C11:C11,  S11:S11, D11:D11,
    H12:H12,  C12:C12,  S12:S12, D12:D12,
    H13:H13,  C13:C13,  S13:S13, D13:D13,
    BG:BG,
};

export const CardDeck = {
    0: {name: BG, value: 0},
    1:{name:H1, value:1} ,  14 :{name:C1, value:1} ,  27 :{name:S1, value:1} , 40 :{name:D1, value:1} ,
    2:{name:H2, value:2} ,  15 :{name:C2, value:2} ,  28 :{name:S2, value:2} , 41 :{name:D2, value:2} ,
    3:{name:H3, value:3} ,  16 :{name:C3, value:3} ,  29 :{name:S3, value:3} , 42 :{name:D3, value:3} ,
    4:{name:H4, value:4} ,  17 :{name:C4, value:4} ,  30 :{name:S4, value:4} , 43 :{name:D4, value:4} ,
    5:{name:H5, value:5} ,  18 :{name:C5, value:5} ,  31 :{name:S5, value:5} , 44 :{name:D5, value:5} ,
    6:{name:H6, value:6} ,  19 :{name:C6, value:6} ,  32 :{name:S6, value:6} , 45 :{name:D6, value:6} ,
    7:{name:H7, value:7} ,  20 :{name:C7, value:7} ,  33 :{name:S7, value:7} , 46 :{name:D7, value:7} ,
    8:{name:H8, value:8} ,  21 :{name:C8, value:8} ,  34 :{name:S8, value:8} , 47 :{name:D8, value:8} ,
    9:{name:H9, value:9} ,  22 :{name:C9, value:9} ,  35 :{name:S9, value:9} , 48 :{name:D9, value:9} ,
    10:{name:H10,value:10},  23:{name:C10,value:10},  36:{name:S10,value:10}, 49:{name:D10,value:10},
    11:{name:H11,value:10},  24:{name:C11,value:10},  37:{name:S11,value:10}, 50:{name:D11,value:10},
    12:{name:H12,value:10},  25:{name:C12,value:10},  38:{name:S12,value:10}, 51:{name:D12,value:10},
    13:{name:H13,value:10},  26:{name:C13,value:10},  39:{name:S13,value:10}, 52:{name:D13,value:10},
};


export interface GamePannelProps {
    cash?: number,
    isDealAva? : boolean,
    isHitAva?: boolean,
    isStandAva?: boolean,
    isDoubleAva?: boolean,
    isSpliceAva?: boolean,
    isBetAva?: boolean,
}
