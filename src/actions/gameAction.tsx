import {
    BET_DOWN,
    BUST_CARD,
    DI_IDLE,
    DI_TRIGGER,
    DOUBLE_CARD, GAME_OVER,
    GIVE_CARD,
    HIT_CARD,
    PUSH_CARD,
    STAND_CARD,
    TURN_FACE,
    UPDATE_SCORE,
    WIN_CARD
} from "../constants";
import {AnyAction} from "redux";

export const betDownAction = (betnum: number = 100): AnyAction => {
    return {
        type: BET_DOWN,
        betin: betnum,
        isDealAva: true,
        isHitAva: false,
        isStandAva: true,
        isDoubleAva: false,
        isSpliceAva: false,
        isBetAva: true,
    }
};

export const giveCardActionn = (): AnyAction => {
    return {
        type: GIVE_CARD,
        isDealAva: false,
        isHitAva: true,
        isStandAva: true,
        isDoubleAva: true,
        isSpliceAva: false
    }
};

export const updateScoreAction = (house: number = 0, player: number = 0): AnyAction => {
    return {
        type: UPDATE_SCORE,
        scores: [house, player]
    }
};

export const turnFaceAction = (nextAct: (STAND_CARD | DOUBLE_CARD | HIT_CARD | null)) => {

    return {
        type: TURN_FACE,
        turnsto: nextAct
    }
};

export const standAction = () => {
    return {
        type: STAND_CARD,
        isHitAva: false,
        isStandAva: false,
    }
};

export const hitAction = () => {
    return {
        type: HIT_CARD,
        isHitAva: true,
        isStandAva: true,
    }
};

export const WinAction = (): AnyAction => {
    return {
        type: WIN_CARD,
        isNewGameAva: true,
        isHitAva: false,
        isStandAva: false,
    }
};

export const PushAction = (): AnyAction => {
    return {
        type: PUSH_CARD,
        isNewGameAva: true,
        isHitAva: false,
        isStandAva: false,
    }
};

export const LoseAction = (): AnyAction => {
    return {
        type: BUST_CARD,
        isNewGameAva: true,
        isHitAva: false,
        isStandAva: false,
    }
};

export const GameOverAction = () : AnyAction => {
    return {
        type: GAME_OVER,
        isDealAva: false,
        isHitAva: false,
        isStandAva: false,
        isDoubleAva: false,
        isSpliceAva: false,
        isNewGameAva: false,
        isBetAva: true,
        turnsto: null,
    }
};

export const openDialogAction = (title: string = '', body: string = '',
                                 actionType: (BUST_CARD | WIN_CARD | PUSH_CARD) = PUSH_CARD): AnyAction => {
    return {
        type: DI_TRIGGER,
        title: title,
        bodyMsg: body,
        colorStyle: actionType,
        open: true,
    }
};

export const closeDialogAction = (): AnyAction => {
    return {
        type: DI_IDLE,
    }
};
