import {put, select, takeEvery} from 'redux-saga/effects'
import {
    BUST_CARD,
    CONTINUE_FLAG,
    DI_IDLE,
    DOUBLE_CARD,
    GIVE_CARD,
    HIT_CARD,
    LOSE_FLAG,
    PUSH_CARD,
    PUSH_FLAG,
    STAND_CARD,
    TURN_FACE,
    WIN_CARD,
    WIN_FLAG
} from "../constants";
import {
    GameOverAction,
    hitAction,
    LoseAction,
    openDialogAction,
    PushAction,
    standAction,
    updateScoreAction,
    WinAction
} from "../actions/gameAction";
import gameStore from "../stores/gameStore";
import {checkWinOrNotBeforeAddCard, returnScoresWithStoredStates} from "../gameLogic";


function* rootSaga() {
    yield takeEvery(GIVE_CARD, calcScoreAndCheckIfWinAfterGaveCard);
    yield takeEvery(TURN_FACE, turnFace);
    yield takeEvery(STAND_CARD, handleTurns);
    yield takeEvery(HIT_CARD, handleHit);
    yield takeEvery(DOUBLE_CARD, handleDouble);


    yield takeEvery(BUST_CARD, handleBust);
    yield takeEvery(WIN_CARD, handleWin);
    yield takeEvery(PUSH_CARD, handlePush);

    yield takeEvery(DI_IDLE, clearGame);
}

function* turnFace() {
    let [house, player] = yield getScores(true);
    yield put(updateScoreAction(house, player));
    console.log("turn face -> ", house, player);

    let data = yield select((state)=> state.game.turnsto);
    if (data === STAND_CARD) return yield  put(standAction());
    if (data === HIT_CARD) return yield  put(hitAction());
}

function* handleHit() {
    let [house, player] = yield getScores();
    yield put(updateScoreAction(house, player));
    if (player > 21) return yield put(LoseAction());
    if (player === 21) return yield  put(WinAction());
}

function* handleDouble() {
    yield put(hitAction());
    yield put(standAction())
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
        if (data === HIT_CARD) return yield  put(hitAction());
    }

    if (res === LOSE_FLAG) {
        console.log("losed");
        return yield put(LoseAction());
    }

    if (res === PUSH_FLAG) {
        console.log("pushed");
        return yield put(PushAction())
    }

    if (res === WIN_FLAG) {
        console.log("win!");
        return yield put(WinAction())
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

function* handleWin() {
    yield put(openDialogAction("Win !", "You Win this hand!", WIN_CARD));
}
function* handlePush() {
    yield put(openDialogAction("Game Draw !", "Card Pushed ! Equal points!", PUSH_CARD));
}

function* handleBust() {
    yield put(openDialogAction("Busted !", "Better luck next time!", BUST_CARD));
}

function* clearGame() {
    yield delay(2000);
    yield put(GameOverAction());
    console.log("new game started! reset cards!");
}

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default rootSaga;
