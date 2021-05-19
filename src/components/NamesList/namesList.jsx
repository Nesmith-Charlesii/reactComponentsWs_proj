import React from 'react';
import './namesList.css';

const NamesList = (props) => {
    return (
        <div className="name-list">
            <ol>
                {props.names.map((name)=>
                <li>{name}</li>
                )}
            </ol>
        </div>
    );
}

export default NamesList;