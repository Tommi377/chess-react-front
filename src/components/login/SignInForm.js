import React from 'react';
import {formStyle, inputStyle, divStyle, buttonStyle} from '../../utils/styles';
import {signIn} from './../../utils/users';

const SignInForm = () => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                const name = e.target.signInName.value;
                const password = e.target.signInPassword.value;
                signIn(name, password);
            }}
            style={formStyle}
        >
            <h1>Sign up</h1>
            <div className={'form-div'} style={divStyle}>
                <label htmlFor='signInName'>name:</label>
                <input id='signInName' type='text' name='signInName' style={inputStyle}></input>
            </div>
            <div className={'form-div'} style={divStyle}>
                <label htmlFor='signInPassword'>password:</label>
                <input id ='signInPassword' type='password' name='signInPassword' style={inputStyle}></input>
            </div>
            <button type='submit' style={buttonStyle}>sign up</button>
        </form>
    );
};

export default SignInForm;