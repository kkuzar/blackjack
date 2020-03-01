import {BET_DOWN, GAME_STARTED} from "../constants";
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
