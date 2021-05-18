import React from 'react';

const DisplayName = (props) => {
    return (
        <div className="display-name text-center">
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    );
}

export default DisplayName;