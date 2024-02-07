import getListOfSquares from './../utils/getListOfSquares';
import {posToListIndex, listIndexToPos} from './../utils/posIndex';

const initialState = {
    list: getListOfSquares([]),
    active: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_GAME_STATE':
            return {
                active: null,
                list: action.data ? getListOfSquares(action.data.pieces) : initialState.list
            };
        case 'MAKE_SQUARE_ACTIVE':
            const index = posToListIndex(action.pos);
            const options = state.list[index].moves;
            return {
                active: action.pos,
                list: state.list.map((s, i) => {
                    return {
                        ...s,
                        status: i === index ? 
                            'active' : (options.includes(listIndexToPos(i)) ? 'option' : null)
                    };
                })
            }
        case 'MAKE_SQUARE_INACTIVE':
            return {
                active: null,
                list: state.list.map(s => {
                    return {
                        ...s,
                        status: null
                    };
                })
            }
        default:
            return state;
    }
};

export default reducer;

const makeSquareActive = pos => {
    return {
        type: 'MAKE_SQUARE_ACTIVE',
        pos
    };
};

const makeSquareInactive = () => {
    return {
        type: 'MAKE_SQUARE_INACTIVE'
    };
};

export {
    makeSquareActive,
    makeSquareInactive
};