import { takeEvery, put, select, call } from 'redux-saga/effects'
import {
    BUST_CARD,
    CONTINUE_FLAG,
    GIVE_CARD,
    LOSE_FLAG,
    PUSH_CARD,
    PUSH_FLAG,
    STAND_CARD,
    TURN_FACE,
    WIN_CARD
} from "../constants";
import {standAction, updateScoreAction, WinAction, PushAction, LoseAction} from "../actions/gameAction";
import gameStore from "../stores/gameStore";
import {
    calcAndUpdateScore,
    checkWinOrNotBeforeAddCard,
    returnScoresWithStoredStates,
    tranlateNumber2Card
} from "../gameLogic";


function* rootSaga() {
    yield takeEvery(GIVE_CARD, calcScoreAndCheckIfWinAfterGaveCard);
    yield takeEvery(TURN_FACE, handleTurns);
    yield takeEvery(STAND_CARD, handleTurns);


    yield takeEvery(BUST_CARD, handleBust);
    yield takeEvery(WIN_CARD, handleWin);
    yield takeEvery(PUSH_CARD, handlePush);
}

function*  handleTurns () {

    let [house, player] = yield getScores(true);
    yield put(updateScoreAction(house, player));
    console.log("turn face -> ", house, player);
    let res = checkWinOrNotBeforeAddCard(house, player);

    if (res === CONTINUE_FLAG) {
        console.log("continue to stand action");
        let data = yield select((state)=> state.game.turnsto);
        if (data === STAND_CARD) return yield  put(standAction());
    }

    if (res === LOSE_FLAG) {
        console.log("losed");
        return yield put(LoseAction());
    }

    if (res === PUSH_FLAG) {
        console.log("pushed");
        return yield put(PushAction())
    }
}

function* calcScoreAndCheckIfWinAfterGaveCard () {
    const [house, player] = getScores(false);
    yield put(updateScoreAction(house, player));
    if (player === 21) return yield put(WinAction());
}

function getScores(turnCardFace = false) {
    const store = gameStore();
    const state = store.getState();
    return returnScoresWithStoredStates(state, turnCardFace);
}

function handleWin() {

}
function handlePush() {

}

function handleBust() {

}


export default rootSaga;
