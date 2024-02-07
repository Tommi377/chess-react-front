import React from 'react';
import {connect} from 'react-redux';
import NotificationBar from './NotificationBar';
import {setNotification} from './../../reducers/notificationReducer';

const Notification = ({notification, setNotification}) => {
    if(notification === null){
        return null;
    }
    return (
        <div style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(127, 127, 127, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div 
                style={{
                    maxHeight: '100vh',
                    maxWidth: '100vw',
                    minWidth: '25ch',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }}
                className={'notification'}
            >
                <NotificationBar closeHandler={() => {
                    setNotification();
                    if(typeof notification.onClose === 'function'){
                        notification.onClose();
                    }
                }}/>
                <div style={{
                    overflow: 'auto'
                }}>
                    <notification.notification {...notification.props}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        notification: state.notification
    };
};

const mapDispatchToProps = {
    setNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);