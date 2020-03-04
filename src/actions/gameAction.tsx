import {BET_DOWN, GIVE_CARD, DOUBLE_CARD, HIT_CARD, STAND_CARD, TURN_FACE, UPDATE_SCORE, WIN_CARD} from "../constants";
import { AnyAction} from "redux";

export const betDownAction =  (betnum: number = 100) : AnyAction => {
    return {
        type: BET_DOWN,
        betin: betnum,
        isDealAva : true,
        isHitAva: false,
        isStandAva: true,
        isDoubleAva: false,
        isSpliceAva: false,
        isBetAva: true,
    }
};

export const giveCardActionn = () : AnyAction => {
    return {
        type: GIVE_CARD,
        isDealAva: false,
        isHitAva: true,
        isStandAva: true,
        isDoubleAva: true,
        isSpliceAva: false
    }
};

export const updateScoreAction =  (house: number = 0, player: number = 0) : AnyAction => {
    return {
        type: UPDATE_SCORE,
        scores: [house, player]
    }
};

export const turnFaceAction = (nextAct: (STAND_CARD | DOUBLE_CARD | HIT_CARD | null )) => {
    console.log(nextAct);
    return {
        type: TURN_FACE,
        nextstate: nextAct
    }
};

export const standAction  = () => {
    return {
        type: STAND_CARD,
        isDealAva : false,
        isHitAva: false,
        isStandAva: false,
        isDoubleAva: false,
        isSpliceAva: false,
        isBetAva: false,
    }
};

export const WinAction  = () : AnyAction => {
    return {
        type: WIN_CARD,
    }
};
