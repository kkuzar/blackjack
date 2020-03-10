import {AnyAction, combineReducers} from "redux";
import {
    BET_DOWN, BUST_CARD,
    DI_IDLE,
    DI_TRIGGER, GAME_OVER,
    GAME_STARTED,
    GIVE_CARD, HIT_CARD, PUSH_CARD,
    STAND_CARD,
    TURN_FACE,
    UPDATE_SCORE, WIN_CARD
} from "../constants";
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
    isNewGameAva: false,
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
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
            };
            // shuffle the deck.
            resStand.deck = shuffle(resStand.deck);
            resStand.deck = shuffle(resStand.deck);
            // @ts-ignore
            resStand.cards.h.push(resStand.deck.pop());
            return resStand;
        case HIT_CARD:
            let resHit = {
                ...state,
                type: action.type,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
            };
            // @ts-ignore
            resHit.cards.p.push(resHit.deck.pop());
            return resHit;
        case PUSH_CARD:
            return {
                ...state,
                type: action.type,
                cash: state.cash + state.betin,
                betin: 0,
                isNewGameAva: action.isNewGameAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
            };
        case WIN_CARD:
            return {
                ...state,
                type: action.type,
                cash: state.cash + (2 * state.betin),
                betin: 0,
                isNewGameAva: action.isNewGameAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
            };
        case BUST_CARD:
            return {
                ...state,
                betin: 0,
                isNewGameAva: action.isNewGameAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
            };
        case GAME_OVER:
            let gameRes =  {
                ...state,
                type: action.type,
                isDealAva: action.isDealAva,
                isHitAva: action.isHitAva,
                isStandAva: action.isStandAva,
                isDoubleAva: action.isDoubleAva,
                isSpliceAva: action.isSpliceAva,
                isBetAva: action.isBetAva,
                deck: shuffle(range(1, 52, 1)),
                scores: [0,0],
                turnsto: null,
            };
            gameRes.cards.h = [];
            gameRes.cards.p = [];
            return gameRes;
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
                 colorStyle: action.colorStyle,
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
