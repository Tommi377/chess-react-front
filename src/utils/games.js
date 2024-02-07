import * as api from './../connection/gamesApi';
import {setNotification} from './../reducers/notificationReducer';
import ApiFailure from './../components/notification/ApiFailure';
import store from './../store';
import {updateGameState} from './board';

const onError = e => {
    console.log(e);
    if(e && e.response){
        store.dispatch(setNotification(ApiFailure, null, {res: e.response}));
    }
};

const getOnGoingGames = async () => {
    try{
        const res = await api.getOnGoingGames();
        return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
};

const createGame = async (type, color) => {
    try{
        await api.createGame(type, color);
        updateGameState();
    }catch(e){
        onError(e);
    }
};

const joinGame = async (id) => {
    try{
        await api.joinGame(id);
        updateGameState();
    }catch(e){
        onError(e);
    }
};

export {
    getOnGoingGames,
    createGame,
    joinGame
};