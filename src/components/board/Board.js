import React from 'react';
import {connect} from 'react-redux';
import squaresIntoElements from '../../utils/squaresIntoElements';

const Board = ({boardSize, gameState, squares}) => {
    if(gameState === null){
        return null;
    }
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: boardSize + 'px',
            width: boardSize + 'px',
            boxSizing: 'border-box',
            backgroundImage: 'url("simple-board.png")',
            backgroundSize: 'cover'
        }}>{
            squaresIntoElements(squares.list)
        }</div>
    );
}

const mapStateToProps = state => {
    return {
        boardSize: state.boardSize,
        gameState: state.gameState,
        squares: state.squares
    };
};

export default connect(
    mapStateToProps
)(Board);