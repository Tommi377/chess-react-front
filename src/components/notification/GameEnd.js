import React from 'react';
import {connect} from 'react-redux';
import {setGameState} from './../../reducers/gameStateReducer';
import {setNotification} from './../../reducers/notificationReducer';

const GameEnd = ({text, setGameState, setNotification}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <pre>{text}</pre>
            <button
                onClick={e => {
                    setGameState(null);
                    setNotification();
                }}
                style={{
                    margin: '1ch',
                    height: '3em'
                }}
            >
                back to menu
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    setGameState,
    setNotification
};

export default connect(
    null,
    mapDispatchToProps
)(GameEnd);