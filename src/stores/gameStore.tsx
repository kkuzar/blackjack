import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from "../reducers/gameReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'


const gameStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const store =  createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            // @ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    // @ts-ignore
    sagaMiddleware.run(rootSaga);
    return store;
};

export default gameStore
