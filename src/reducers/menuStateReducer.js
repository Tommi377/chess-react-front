const initialState = {
    createOrJoin: 'create',
    gameType: 'local',
    color: 'white',
    gameId: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_MENU_STATE_CREATE_OR_JOIN':
            return {
                ...initialState,
                createOrJoin: action.value
            };
        case 'SET_MENU_STATE_GAME_TYPE':
            return {
                ...state,
                gameType: action.value,
                color: action.value === 'local' ? initialState.color : state.color
            };
        case 'SET_MENU_STATE_COLOR':
            return {
                ...state,
                color: action.value
            };
        case 'SET_MENU_STATE_GAME_ID':
            return {
                ...state,
                gameId: action.value || null
            };
        default:
            return state;
    }
};

export default reducer;

const setMenuStateCreateOrJoin = value => {
    return {
        type: 'SET_MENU_STATE_CREATE_OR_JOIN',
        value
    };
};

const setMenuStateGameType = value => {
    return {
        type: 'SET_MENU_STATE_GAME_TYPE',
        value
    };
};

const setMenuStateColor = value => {
    return {
        type: 'SET_MENU_STATE_COLOR',
        value
    };
};

const setMenuStateGameId = value => {
    return {
        type: 'SET_MENU_STATE_GAME_ID',
        value
    };
};

export {
    setMenuStateCreateOrJoin,
    setMenuStateGameType,
    setMenuStateColor,
    setMenuStateGameId
};