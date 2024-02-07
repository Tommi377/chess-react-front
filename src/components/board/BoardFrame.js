import React from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import BoardOptions from './BoardOptions';

const BoardFrame = ({gameState}) => {
    if(gameState === null){
        return null;
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Board />
            <BoardOptions />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gameState: state.gameState,
        boardSize: state.boardSize
    };
};

export default connect(
    mapStateToProps
)(BoardFrame);