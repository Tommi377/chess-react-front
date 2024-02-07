import React from 'react';
import PromotionOption from './PromotionOption';

const PromotionNotification = () => {
    return (
        <>
            <p style={{marginLeft: '1ch'}}>promoto to:</p>
            <div style={{
                display: 'flex'
            }}>
                <PromotionOption type={'queen'}/>
                <PromotionOption type={'bishop'}/>
                <PromotionOption type={'rook'}/>
                <PromotionOption type={'knight'}/>
            </div>
        </>
    );
};

export default PromotionNotification;