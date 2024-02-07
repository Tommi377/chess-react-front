import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import {setBoardSize} from './reducers/boardSizeReducer';
import {setNotification} from './reducers/notificationReducer';
import PromotionNotification from './components/notification/PromotionNotification';
import authenticate from './utils/authenticate';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

window.onresize = e => store.dispatch(setBoardSize());

store.subscribe(() => {
    const state = store.getState();
    if(
        state.notification === null && 
        state.gameState !== null &&
        state.gameState.pieces.some(p => p.type.toLowerCase() === 'x')
    ){
        store.dispatch(setNotification(PromotionNotification));
    }
});

authenticate();

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state:', store.getState()));
