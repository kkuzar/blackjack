import {
    BET_DOWN,
    GIVE_CARD,
    DOUBLE_CARD,
    HIT_CARD,
    STAND_CARD,
    TURN_FACE,
    UPDATE_SCORE,
    WIN_CARD,
    DI_TRIGGER, DI_IDLE, PUSH_CARD, BUST_CARD
} from "../constants";
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

    return {
        type: TURN_FACE,
        turnsto: nextAct
    }
};

export const standAction  = () => {
    return {
        type: STAND_CARD,
    }
};

export const WinAction  = () : AnyAction => {
    return {
        type: WIN_CARD,
    }
};

export const PushAction = (): AnyAction => {
  return {
      type: PUSH_CARD
  }
};

export const LoseAction = (): AnyAction => {
    return {
        type: BUST_CARD
    }
};

export const openDialogAction  = (title:string = '', body:string = ''): AnyAction => {
    return {
        type: DI_TRIGGER,
        title: title,
        bodyMsg: body,
        open: true,
    }
};

export const closeDialogAction = (): AnyAction => {
    return {
        type: DI_IDLE,
    }
};
