import {createStore} from 'redux'
import rootReducer from "../reducers/gameReducer";

const gameStore = createStore(rootReducer,
     // @ts-ignore
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default gameStore
