import React from 'react';

const BoardOptionsButton = ({style = {}, text, clickHandler}) => {
    return (
        <button
            style={{
                height: '3em',
                ...style
            }}
            onClick={clickHandler}
            className={'board-options-button'}
        >
            {text}
        </button>
    );
};

export default BoardOptionsButton;