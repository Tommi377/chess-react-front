import React from 'react';
import {formStyle, inputStyle, divStyle, buttonStyle} from '../../utils/styles';
import {logIn} from './../../utils/users';

const LoginForm = () => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                const name = e.target.loginName.value;
                const password = e.target.loginPassword.value;
                logIn(name, password);
            }}
            style={formStyle}
        >
            <h1>Log in</h1>
            <div className={'form-div'} style={divStyle}>
                <label htmlFor='loginName'>name:</label>
                <input id='loginName' type='text' name='loginName' style={inputStyle}></input>
            </div>
            <div className={'form-div'} style={divStyle}>
                <label htmlFor='loginPassword'>password:</label>
                <input id ='loginPassword' type='password' name='loginPassword' style={inputStyle}></input>
            </div>
            <button type='submit' style={buttonStyle}>log in</button>
        </form>
    );
};

export default LoginForm;