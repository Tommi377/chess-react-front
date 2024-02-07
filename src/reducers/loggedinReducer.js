const reducer = (state = false, action) => {
    switch(action.type){
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};

export default reducer;

const login = () => {
    return {
        type: 'LOGIN'
    };
};

const logOut = () => {
    return {
        type: 'LOGOUT'
    };
};

export {
    login,
    logOut
};