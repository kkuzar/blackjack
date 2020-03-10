import {AnyAction, combineReducers} from "redux";
import {
    BET_DOWN,
    DI_IDLE,
    DI_TRIGGER,
    GAME_STARTED,
    GIVE_CARD, PUSH_CARD,
    STAND_CARD,
    TURN_FACE,
    UPDATE_SCORE
} from "../constants";
import {act, Simulate} from "react-dom/test-utils";
import {calcAndUpdateScore, range, shuffle, tranlateNumber2Card} from "../gameLogic";


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
    turnsto: null,
};


const dialogInitState = {
    type: DI_IDLE,
    title: '',
    bodyMsg: '',
    colorStyle: PUSH_CARD,
    open: false
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
                //type: action.type,
                scores: action.scores
            };
        case TURN_FACE:
           return {
                ...state,
                type: action.type,
                turnsto: action.turnsto,
            };
        case STAND_CARD:
            let resStand =  {
                ...state,
                type: action.type,
                isDealAva: action.isDealAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
                isDoubleAva: action.isDoubleAva,
                isSpliceAva: action.isSpliceAva,
                isBetAva: action.isBetAva,
            };
            // shuffle the deck.
            resStand.deck = shuffle(resStand.deck);
            resStand.deck = shuffle(resStand.deck);
            // @ts-ignore
            resStand.cards.h.push(resStand.deck.pop());
            return resStand;
        case PUSH_CARD:
            return {
                ...state,
                type: action.type
            };
        default:
            return state;
    }
};



const dialogReducer = (state = dialogInitState , action) => {
     switch (action.type) {
         case DI_TRIGGER:
             return {
                 ...state,
                 type: action.type,
                 title: action.title,
                 bodyMsg: action.bodyMsg,
                 open: true,
             };
         case DI_IDLE:
         default:
             return {
                 type: action.type,
                 title: '',
                 bodyMsg: '',
                 open: false,
             }
     }
};


const rootReducer = combineReducers({
    game: gameReducer,
    dialog: dialogReducer,
});

export default rootReducer;
