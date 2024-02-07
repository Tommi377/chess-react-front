import React from 'react';
import {connect} from 'react-redux';
import {formStyle, buttonStyle} from './../../utils/styles';
import CreateOrJoin from './CreateOrJoin'
import CreateGame from './CreateGame';
import SelectSide from './SelectSide';
import SelectGame from './SelectGame';
import {createGame, joinGame} from './../../utils/games';

const Menu = ({gameState, loggedin, menuState}) => {
    if(gameState !== null || !loggedin){
        return null;
    }
    return (
        <div>
            <form
                onSubmit={async e => {
                    e.preventDefault();
                    menuState.createOrJoin === 'create' ? 
                        createGame(menuState.gameType, menuState.color) 
                        :
                        joinGame(menuState.gameId);
                }}
                style={{
                    ...formStyle,
                    justifyContent: 'space-between',
                }}
            >
                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <h1>Game menu</h1>
                    <CreateOrJoin />
                    {menuState.createOrJoin === 'create' ? <CreateGame /> : <SelectGame />}
                    {menuState.gameType !== 'local' ? <SelectSide /> : null}
                </div>
                <button type='submit' style={buttonStyle}>Go!</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gameState: state.gameState,
        loggedin: state.loggedin,
        menuState: state.menuState
    };
};

export default connect(
    mapStateToProps
)(Menu);