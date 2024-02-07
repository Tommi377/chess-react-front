import React from 'react';

const ApiFailure = ({res}) => {
    return (
        <>
            <p>{`error: ${res.status} ${res.statusText}`}</p>
            <pre>{res.data}</pre>
        </>
    );
};

export default ApiFailure