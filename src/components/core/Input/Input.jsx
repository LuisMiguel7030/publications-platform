import './input.scss';
import React from 'react';

function Input({onChange , ...props}) {
    return (
        <input
            className="input"
            onChange={ event => onChange(event)}
            {...props}
        />
    )
}

export default Input

