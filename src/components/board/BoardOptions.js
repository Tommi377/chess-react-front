import React from 'react';
import {connect} from 'react-redux';
import {surrender} from './../../utils/board';
import BoardOptionsButton from './BoardOptionsButton';
import {setGameState} from './../../reducers/gameStateReducer';

const BoardOptions = ({gameState, boardSize, setGameState}) => {
    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1ch',
                width: boardSize + 'px',
                height: '4em',
                paddingLeft: '1ch',
                paddingRight: '1ch',
                boxSizing: 'border-box'
            }}
            className={'board-options'}
        >
            <div style={{overflow: 'auto'}}>{gameState.description}</div>
            {gameState.isEnd ? 
                <BoardOptionsButton 
                    style={{marginLeft: '1ch'}}
                    text={'back to menu'}
                    clickHandler={() => setGameState(null)}
                />
                :
                <BoardOptionsButton 
                    style={{marginLeft: '1ch'}}
                    text={'surrender'}
                    clickHandler={() => surrender()}
                />
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gameState: state.gameState,
        boardSize: state.boardSize
    };
};

const mapDispatchToProps = {
    setGameState
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardOptions);