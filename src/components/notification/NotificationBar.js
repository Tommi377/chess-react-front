import React from 'react';
import CloseButton from './CloseButton';

const NotificationBar = ({closeHandler}) => {
    return (
        <div
            className={'notification-bar'}
            style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            <CloseButton clickHandler={closeHandler}/>
        </div>
    );
};

export default NotificationBar;