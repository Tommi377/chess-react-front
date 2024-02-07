import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';
import GuestForm from './GuestForm';

const Login = ({gameState, loggedin}) => {
    if(gameState !== null || loggedin){
        return null;
    }
    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <LoginForm />
            <SignInForm />
            <GuestForm />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gameState: state.gameState,
        loggedin: state.loggedin
    };
};

export default connect(
    mapStateToProps
)(Login);