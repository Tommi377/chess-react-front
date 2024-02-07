import React from 'react';
import {connect} from 'react-redux';
import {makePromotion} from './../../utils/board';

const selectImage = (type, color) => {
    return color.charAt(0) + (() => {
        switch(type){
            case 'bishop':
                return 'BishopHd.png';
            case 'rook':
                return 'RookHd.png';
            case 'knight':
                return 'KnightHd.png';
            default:
                return 'QueenHd.png';
        }
    })();
};

const PromotionOption = ({type, boardSize, gameState}) => {
    return (
        <div 
            style={{
                height: boardSize / 8 + 'px',
                width: boardSize / 8 + 'px',
                margin: '1ch',
                backgroundImage: `url("${selectImage(type, gameState.yourColor)}")`,
                backgroundSize: 'cover',
                boxSizing: 'border-box'
            }}
            title={type}
            onClick={() => makePromotion(type)}
            className={'promotion-option'}
        >
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        boardSize: state.boardSize,
        gameState: state.gameState
    };
};

export default connect(
    mapStateToProps
)(PromotionOption);