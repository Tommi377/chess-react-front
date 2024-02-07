const reducer = (state = null, action) => {
    switch(action.type){
        case 'SET_API_INTERVAL':
            return action.interval;
        case 'CLEAR_API_INTERVAL':
            if(state){
                clearInterval(state);
            }
            return null;
        default:
            return state;
    }
};

export default reducer;

const setApiInterval = interval => {
    return {
        type: 'SET_API_INTERVAL',
        interval
    };
};

const clearApiInterval = () => {
    return {
        type: 'CLEAR_API_INTERVAL'
    };
};

export {
    setApiInterval,
    clearApiInterval
}