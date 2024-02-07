const reducer = (state = null, action) => {
    switch(action.type){
        case 'SET_GAME_STATE':
            return null;
        case 'SET_NOTIFICATION':
            return action.notification ? {
                notification: action.notification, 
                onClose : action.onClose, 
                props: action.props
            } : null;
        default:
            return state;
    }
};

export default reducer;

const setNotification = (notification, onClose, props) => {
    return {
        type: 'SET_NOTIFICATION',
        notification,
        onClose,
        props
    };
};

export {setNotification};