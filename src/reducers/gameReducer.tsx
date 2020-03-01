import {AnyAction, combineReducers} from "redux";
import {BET_DOWN, GAME_STARTED} from "../constants";
import {act} from "react-dom/test-utils";


const gameInitialState = {
   type: GAME_STARTED,
   cash: 1000,
   betin: 0,
   isDealAva : false,
   isHitAva: false,
   isStandAva: false,
   isDoubleAva: false,
   isSpliceAva: false,
   isBetAva: true,
};


const gameReducer = ( state = gameInitialState, action: AnyAction) => {

    switch (action.type) {
        case BET_DOWN:
            return {
                ...state,
                type: action.type,
                isBetAva: false,
                isDealAva: true,
                betin: action.betin,
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
   game: gameReducer
});

export default rootReducer;
