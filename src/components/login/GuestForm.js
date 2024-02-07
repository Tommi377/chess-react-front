import React from 'react';
import {formStyle, buttonStyle} from '../../utils/styles';
import {logInGuest} from './../../utils/users';

const GuestForm = () => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                logInGuest();
            }}
            style={formStyle}
        >
            <h1>Log in as guest</h1>
            <button type='submit' style={buttonStyle}>log in</button>
        </form>
    );
};

export default GuestForm;