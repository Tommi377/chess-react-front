const reducer = (state = null, action) => {
    switch(action.type){
        case 'SET_GAME_STATE':
            return action.data ? {...action.data} : null;
        default:
            return state;
    }
};

export default reducer;

const setGameState = data => {
    return {
        type: 'SET_GAME_STATE',
        data
    };
};

export {setGameState};