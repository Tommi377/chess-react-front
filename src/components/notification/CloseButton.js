import React from 'react';

const CloseButton = ({clickHandler}) => {
    return (
        <button
            className={'close-button'}
            style={{
                height: '2em',
                width: '2em',
                boxSizing: 'border-box'
            }}
            onClick={clickHandler}
        >
            X
        </button>
    );
};

export default CloseButton;