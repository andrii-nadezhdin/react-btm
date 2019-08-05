import React from 'react';

export default (props) => {
    const onClick = e => {
        e.preventDefault();
        props.onClick();
    }

    return (
        <button onClick={onClick} className="ui primary button">{props.submitText}</button>
    );
}

