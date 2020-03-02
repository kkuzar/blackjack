import {BET_DOWN, GIVE_CARD} from "../constants";
import { AnyAction} from "redux";


export const betDownAction =  (betnum: number = 100) : AnyAction => {
    return {
        type: BET_DOWN,
        betin: betnum,
        isDealAva : true,
        isHitAva: false,
        isStandAva: true,
        isDoubleAva: false,
        isSpliceAva: false
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
