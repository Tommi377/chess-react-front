import React from 'react';
import {connect} from 'react-redux';
import {setMenuStateColor} from './../../reducers/menuStateReducer';
import Option from './Option';

const SelectSide = ({setMenuStateColor}) => {
    const changeHandler = e => setMenuStateColor(e.target.value);

    return (
        <div style={{
            width: '100%',
            marginTop: '1em'
        }}>
            <Option name={'select-side'} value={'white'} changeHandler={changeHandler} isDefault={true}/>
            <Option name={'select-side'} value={'black'} changeHandler={changeHandler}/>
        </div>
    );
};

const mapDispatchToProps = {
    setMenuStateColor
};

export default connect(
    null,
    mapDispatchToProps
)(SelectSide);