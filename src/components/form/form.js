import React from 'react';

export default (props) => {
    const onClick = e => {
        e.preventDefault();
        props.onClick();
    }
    
    return (
        <form className="ui container segment ui form">
            <div className="ui header">{props.title}</div>
            {props.children}
            <button onClick={onClick} className="ui primary button">{props.submitText}</button>
        </form>
    );
}
