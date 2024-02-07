import React from 'react';
import {connect} from 'react-redux';
import {makeSquareActive, makeSquareInactive} from '../../reducers/squaresReducer';
import OptionMarker from './OptionMarker';
import {makeMove} from './../../utils/board';

const Square = props => {
    const {image, moves, status, pos, squares} = props;

    const clickHandler = e => {
        switch(status){
            case 'active':
                props.makeSquareInactive();
                break;
            case 'option':
                makeMove(squares.active, pos);
                break;
            default:
                if(moves.length > 0){
                    props.makeSquareActive(pos);
                }
                break;
        }
    };

    return (
        <div 
            style={{
                boxSizing: 'border-box',
                height: '12.5%',
                width: '12.5%',
                backgroundImage: image ? `url("${image}")` : undefined,
                backgroundSize: 'cover'
            }}
            onClick={clickHandler}
        >
            <div 
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                }}
                className={status === 'active' ? 'active-square' : (status === 'option' ? 'option-square' : null)}
            >
                {status === 'option' ? <OptionMarker /> : null}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        squares: state.squares
    };
};

const mapDispatchToProps = {
    makeSquareActive,
    makeSquareInactive
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Square);