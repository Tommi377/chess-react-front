import React from 'react';
import {connect} from 'react-redux'
import {setMenuStateCreateOrJoin} from './../../reducers/menuStateReducer';
import Option from './Option';

const CreateOrJoin = ({setMenuStateCreateOrJoin}) => {
    const changeHandler = e => setMenuStateCreateOrJoin(e.target.value);

    return (
        <div style={{
            width: '100%',
            marginTop: '1em',
        }}>
            <Option name={'create-or-join'} value={'create'} changeHandler={changeHandler} isDefault={true}/>
            <Option name={'create-or-join'} value={'join'} changeHandler={changeHandler}/>
        </div>
    );
};

const mapDispatchToProps = {
    setMenuStateCreateOrJoin
};

export default connect(
    null,
    mapDispatchToProps
)(CreateOrJoin);