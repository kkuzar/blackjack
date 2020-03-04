import { takeEvery, put } from 'redux-saga/effects'
import {CONTINUE_FLAG, GIVE_CARD, STAND_CARD, TURN_FACE} from "../constants";
import {standAction, updateScoreAction, WinAction} from "../actions/gameAction";
import gameStore from "../stores/gameStore";
import {
    calcAndUpdateScore,
    checkWinOrNotBeforeAddCard,
    returnScoresWithStoredStates,
    tranlateNumber2Card
} from "../gameLogic";

function* rootSaga() {
    yield takeEvery(GIVE_CARD, calcScoreAndCheckIfWinAfterGaveCard);
    yield takeEvery(TURN_FACE, handleTurnFace );
}

function*  handleTurnFace () {

    const nextAct = getNextAction();
    const [house, player] = getScores(true);
    let res = checkWinOrNotBeforeAddCard(house, player);
    console.log(res, nextAct, ((res === CONTINUE_FLAG && ( nextAct === STAND_CARD)) ));
    if(res === CONTINUE_FLAG && ( nextAct === STAND_CARD)) return yield put(standAction());
    yield console.log("card face turned.")
}

function* calcScoreAndCheckIfWinAfterGaveCard () {
    const [house, player] = getScores();
    yield put(updateScoreAction(house, player));
    if (player === 21) return yield put(WinAction());
}

function getNextAction() {
    const store = gameStore();
    const state = store.getState();

    // @ts-ignore
    return state.game.nextstate;
}

function getScores(turnCardFace = false) {
    const store = gameStore();
    const state = store.getState();
    return returnScoresWithStoredStates(state, turnCardFace);
}

export default rootSaga;
