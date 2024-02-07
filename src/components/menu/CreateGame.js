import React from 'react';
import {connect} from 'react-redux';
import {setMenuStateGameType} from './../../reducers/menuStateReducer';
import Option from './Option';

const CreateGame = ({setMenuStateGameType}) => {
    const changeHandler = e => setMenuStateGameType(e.target.value);

    return (
        <div style={{
            width: '100%',
            marginTop: '1em',
        }}>
            <Option 
                name={'game-type'} 
                value={'local'} 
                changeHandler={changeHandler} 
                isDefault={true}
                title={'both sides will be played on this computer'}
            />
            <Option 
                name={'game-type'} 
                value={'bot'} 
                changeHandler={changeHandler}
                title={'play against a bot'}
            />
            <Option 
                name={'game-type'} 
                value={'multiplayer'} 
                changeHandler={changeHandler}
                title={'play against another player over the internet'}
            />
        </div>
    );
};

const mapDispatchToProps = {
    setMenuStateGameType
};

export default connect(
    null,
    mapDispatchToProps
)(CreateGame);