import {createStore, combineReducers} from 'redux';
import boardSize from './reducers/boardSizeReducer';
import gameState from './reducers/gameStateReducer';
import squares from './reducers/squaresReducer';
import loggedin from './reducers/loggedinReducer';
import notification from './reducers/notificationReducer';
import menuState from './reducers/menuStateReducer';
import interval from './reducers/intervalReducer';

const reducer = combineReducers({
    boardSize,
    gameState,
    squares,
    loggedin,
    notification,
    menuState,
    interval
});

const store = createStore(reducer);

export default store;