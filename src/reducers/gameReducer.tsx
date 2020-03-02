import {AnyAction, combineReducers} from "redux";
import {BET_DOWN, GAME_STARTED, GIVE_CARD} from "../constants";
import {act} from "react-dom/test-utils";
import {range, shuffle} from "../gameLogic";


const gameInitialState = {
    type: GAME_STARTED,
    cash: 1000,
    betin: 0,
    isDealAva: false,
    isHitAva: false,
    isStandAva: false,
    isDoubleAva: false,
    isSpliceAva: false,
    isBetAva: true,
    cards: {h: [], p: []},
    deck: shuffle(range(1,52,1)),
};


const gameReducer = (state = gameInitialState, action: AnyAction) => {
    switch (action.type) {
        case BET_DOWN:
            return {
                ...state,
                type: action.type,
                isBetAva: false,
                isDealAva: true,
                betin: action.betin,
            };
        case GIVE_CARD:
            let res = {
                ...state,
                cash: state.cash - state.betin,
                betin: state.betin,
                isBetAva: false,
                type: action.type,
                isDealAva: action.isDealAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
                isDoubleAva: action.isDoubleAva,
            };
            res.deck = shuffle(res.deck);
            res.deck = shuffle(res.deck);
            // @ts-ignore
            res.cards.h.push(res.deck.pop()); res.cards.h.push(res.deck.pop());
            // @ts-ignore
            res.cards.p.push(res.deck.pop());res.cards.p.push(res.deck.pop());

            return res;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    game: gameReducer
});

export default rootReducer;
