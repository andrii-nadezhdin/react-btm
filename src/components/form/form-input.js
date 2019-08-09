import React from 'react';

export default (props) => {
    return (
        <div className={`field ${props.isValid ? '' : 'error'}`}>
            <label>{props.label}</label>
            <input
                type='text'
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>        
    )
}