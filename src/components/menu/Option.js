import React from 'react';

const Option = ({name, value, changeHandler, isDefault, title}) => {
    return (
        <div title={title}>
            <input 
                type='radio' 
                name={name} 
                value={value} 
                id={value} 
                defaultChecked={isDefault}
                onChange={changeHandler}
            >
            </input>
            <label htmlFor={value}>{value}</label>
        </div>
    );
};

export default Option;