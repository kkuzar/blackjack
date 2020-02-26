
// Card Faces
import BG from "../img/cardpng/bg.jpg";
// Hearts
import H1 from "../img/cardpng/ace_of_hearts.png";
import H2 from "../img/cardpng/2_of_hearts.png";
import H3 from "../img/cardpng/3_of_hearts.png";
import H4 from "../img/cardpng/4_of_hearts.png";
import H5 from "../img/cardpng/5_of_hearts.png";
import H6 from "../img/cardpng/6_of_hearts.png";
import H7 from "../img/cardpng/7_of_hearts.png";
import H8 from "../img/cardpng/8_of_hearts.png";
import H9 from "../img/cardpng/9_of_hearts.png";
import H10 from "../img/cardpng/10_of_hearts.png";
import H11 from "../img/cardpng/jack_of_hearts2.png";
import H12 from "../img/cardpng/queen_of_hearts2.png";
import H13 from "../img/cardpng/king_of_hearts2.png";
// Clubs
import C1 from "../img/cardpng/ace_of_clubs.png";
import C2 from "../img/cardpng/2_of_clubs.png";
import C3 from "../img/cardpng/3_of_clubs.png";
import C4 from "../img/cardpng/4_of_clubs.png";
import C5 from "../img/cardpng/5_of_clubs.png";
import C6 from "../img/cardpng/6_of_clubs.png";
import C7 from "../img/cardpng/7_of_clubs.png";
import C8 from "../img/cardpng/8_of_clubs.png";
import C9 from "../img/cardpng/9_of_clubs.png";
import C10 from "../img/cardpng/10_of_clubs.png";
import C11 from "../img/cardpng/jack_of_clubs2.png";
import C12 from "../img/cardpng/queen_of_clubs2.png";
import C13 from "../img/cardpng/king_of_clubs2.png";
// Spades
import S1 from "../img/cardpng/ace_of_spades.png";
import S2 from "../img/cardpng/2_of_spades.png";
import S3 from "../img/cardpng/3_of_spades.png";
import S4 from "../img/cardpng/4_of_spades.png";
import S5 from "../img/cardpng/5_of_spades.png";
import S6 from "../img/cardpng/6_of_spades.png";
import S7 from "../img/cardpng/7_of_spades.png";
import S8 from "../img/cardpng/8_of_spades.png";
import S9 from "../img/cardpng/9_of_spades.png";
import S10 from "../img/cardpng/10_of_spades.png";
import S11 from "../img/cardpng/jack_of_spades2.png";
import S12 from "../img/cardpng/queen_of_spades2.png";
import S13 from "../img/cardpng/king_of_spades2.png";
// Diamonds
import D1 from "../img/cardpng/ace_of_diamonds.png";
import D2 from "../img/cardpng/2_of_diamonds.png";
import D3 from "../img/cardpng/3_of_diamonds.png";
import D4 from "../img/cardpng/4_of_diamonds.png";
import D5 from "../img/cardpng/5_of_diamonds.png";
import D6 from "../img/cardpng/6_of_diamonds.png";
import D7 from "../img/cardpng/7_of_diamonds.png";
import D8 from "../img/cardpng/8_of_diamonds.png";
import D9 from "../img/cardpng/9_of_diamonds.png";
import D10 from "../img/cardpng/10_of_diamonds.png";
import D11 from "../img/cardpng/jack_of_diamonds2.png";
import D12 from "../img/cardpng/queen_of_diamonds2.png";
import D13 from "../img/cardpng/king_of_diamonds2.png";

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

export const DIAMONDS = "diamonds";
export const CLUBS = "clubs";
export const SPADES = "spades";
export const HEARTS = "hearts";

export type CardType = {
    name : typeof DIAMONDS | typeof CLUBS | typeof SPADES | typeof HEARTS | null,
    value: number
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
