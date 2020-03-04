import {AnyAction, combineReducers} from "redux";
import {BET_DOWN, GAME_STARTED, GIVE_CARD, STAND_CARD, TURN_FACE, UPDATE_SCORE} from "../constants";
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
    deck: shuffle(range(1, 52, 1)),
    scores: [0, 0],  // [ house , player]
    nextstate: null,
};


const gameReducer = (state = gameInitialState, action: AnyAction) => {
    switch (action.type) {
        case BET_DOWN:
            return {
                ...state,
                type: action.type,
                isBetAva: action.isBetAva,
                isDealAva: action.isDealAva,
                betin: action.betin,
            };
        case GIVE_CARD:
            let resGive = {
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
            resGive.deck = shuffle(resGive.deck);
            resGive.deck = shuffle(resGive.deck);
            // @ts-ignore
            resGive.cards.h.push(resGive.deck.pop());resGive.cards.h.push(resGive.deck.pop());
            // @ts-ignore
            resGive.cards.p.push(resGive.deck.pop());resGive.cards.p.push(resGive.deck.pop());
            return resGive;
        case UPDATE_SCORE:
            return {
                ...state,
                // type: action.type,
                scores: action.scores
            };
        case TURN_FACE:
            let resTurn = {
                ...state,
                type: action.type,
                nextstate: action.nextstate
            };
            return resTurn;
        case STAND_CARD:
            let resStand = {
                ...state,
                type: action.type,
                isDealAva: action.isDealAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
                isDoubleAva: action.isDoubleAva,
                isSpliceAva: action.isSpliceAva,
                isBetAva: action.isBetAva,
            };
            // @ts-ignore
            resStand.deck = shuffle(resStand.deck);resStand.deck = shuffle(resStand.deck);
            //
            return resStand;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    game: gameReducer,
});

export default rootReducer;
