import React from 'react';
import {connect} from 'react-redux';
import {logOut} from './../utils/users';

const LogOut = ({loggedin}) => {
    if(!loggedin){
        return null;
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw'
        }}>
            <button 
                style={{
                    borderRadius: '50%',
                    margin: '2ch',
                    height: '3em',
                    width: '3em'
                }}
                className={'log-out-button'}
                title={'log out'}
                onClick={logOut}
            >
                {'<'}
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedin: state.loggedin
    };
};

export default connect(
    mapStateToProps
)(LogOut);