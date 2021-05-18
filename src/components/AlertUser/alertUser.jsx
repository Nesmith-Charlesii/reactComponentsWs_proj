import React from 'react';

const AlertUser = (props) => {
    return (
        <button onClick={props.alert} type="button" className='btn btn-sm btn-success'>Push me</button>
    );
}

export default AlertUser;