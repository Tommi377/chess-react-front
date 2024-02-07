import sendReq from './../connection/authenticate';
import {login} from './../reducers/loggedinReducer';
import store from './../store';
import {updateGameState} from './board';

const authenticate = async () => {
    try{
        await sendReq();
        store.dispatch(login());
        updateGameState();
    }catch(e){
        console.log(e);
    }
};

export default authenticate;