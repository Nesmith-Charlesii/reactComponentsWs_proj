import React from 'react';
import './displayName.css';

const DisplayName = (props) => {
    return (
        <div className="display-name">
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    );
}

export default DisplayName;