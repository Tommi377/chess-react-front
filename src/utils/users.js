import * as api from './../connection/usersApi';
import store from './../store';
import {login, logOut as logO} from './../reducers/loggedinReducer';
import {setNotification} from './../reducers/notificationReducer';
import ApiFailure from '../components/notification/ApiFailure';
import {setGameState} from '../reducers/gameStateReducer';
import {clearApiInterval} from '../reducers/intervalReducer';
import {updateGameState} from './board';

const onError = e => {
    console.log(e);
    if(e && e.response){
        store.dispatch(setNotification(ApiFailure, null, {res: e.response}));
    }
};

const signIn = async (name, password) => {
    try{
        await api.signIn(name, password);
        store.dispatch(login());
    }catch(e){
        onError(e);
    }
};

const logIn = async (name, password) => {
    try{
        await api.logIn(name, password);
        store.dispatch(login());
        updateGameState();
    }catch(e){
        onError(e);
    }
};

const logInGuest = async () => {
    try{
        await api.logInGuest();
        store.dispatch(login());
    }catch(e){
        onError(e);
    }
};

const logOut = async () => {
    try{
        await api.logOut();
        store.dispatch(logO());
        store.dispatch(setGameState(null));
        store.dispatch(clearApiInterval());
    }catch(e){
        onError(e);
    }
};

export {
    signIn,
    logIn,
    logInGuest,
    logOut
};