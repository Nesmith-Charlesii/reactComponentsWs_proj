import React from 'react';
import './alertUser.css';

const AlertUser = (props) => {
    return (
        <div className="button">
            <button onClick={props.alert} type="button" className='btn btn-sm btn-warning'>Push me</button>
        </div>
    );
}

export default AlertUser;