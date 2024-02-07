import * as api from './../connection/boardApi';
import ApiFailure from './../components/notification/ApiFailure';
import {setNotification} from './../reducers/notificationReducer';
import store from './../store';
import {setGameState} from './../reducers/gameStateReducer';
import GameEnd from './../components/notification/GameEnd';
import {setApiInterval, clearApiInterval} from './../reducers/intervalReducer';

const isMyTurn = async () => {
    try{
        const res = await api.getTurn();
        return res.data;
    }catch(e){
        console.log(e);
        return false;
    }
};

const onError = e => {
    console.log(e);
    if(e && e.response){
        store.dispatch(setNotification(ApiFailure, null, {res: e.response}));
    }
};

const getBoard = async () => {
    try{
        const res = await api.getBoard();
        return res.data;
    }catch(e){
        //onError(e);
        console.log(e)
        return false;
    }
};

const makeMove = async (from, to) => {
    try{
        await api.makeMove(from, to);
        waitForNextTurn();
    }catch(e){
        onError(e);
    }
};

const waitForNextTurn = async () => {
    const {isEnd, yourTurn} = await updateGameState();
    if(isEnd || yourTurn){
        return;
    }
    store.dispatch(setApiInterval(setInterval(async () => {
        const myTurn = await isMyTurn();
        if(myTurn){
            store.dispatch(clearApiInterval());
            updateGameState();
        }
    }, 5000)));
};

const surrender = async () => {
    try{
        store.dispatch(clearApiInterval());
        await api.surrender();
        updateGameState();
    }catch(e){
        onError(e);
    }
};

const updateGameState = async () => {
    const data = await getBoard();
    if(data){
        store.dispatch(setGameState(data));
        if(data.isEnd){
            store.dispatch(setNotification(GameEnd, null, {text: data.description}));
        }
    }
    return {isEnd: data.isEnd, yourTurn: data.yourTurn};
};

const makePromotion = async to => {
    try{
        await api.makePromotion(to === 'knight' ? 'n' : to.charAt(0));
        waitForNextTurn();
    }catch(e){
        onError(e);
    }
};

export {
    isMyTurn,
    getBoard,
    makeMove,
    surrender,
    updateGameState,
    makePromotion
};