import React from 'react';

const NamesList = (props) => {
    return (
        <ol>
            {props.names.map((name)=>
            <li>{name}</li>
            )}
        </ol>
    );
}

export default NamesList;