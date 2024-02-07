import getDefaultFontSize from './../utils/getDefaultFontSize';

const {ch, em} = getDefaultFontSize();
const getSize = () => {
    const optionsSize = 2 + 4 * em + ch;
    const windowHeight = window.innerHeight - optionsSize;
    const windowWidth = window.innerWidth;
    const boardSize = windowHeight < windowWidth ? windowHeight : windowWidth;
    return boardSize - boardSize % 8;
};
const initialState = getSize();

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_BOARD_SIZE':
            return getSize();
        default:
            return state;
    }
};

export default reducer

const setBoardSize = () => {
    return {
        type: 'SET_BOARD_SIZE'
    };
};

export {setBoardSize};