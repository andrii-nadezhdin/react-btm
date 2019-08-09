import React from 'react';

export default (props) => {
    return (
        <form className="ui container segment ui form">
            <div className="ui header">{props.title}</div>
            {props.children}
        </form>
    );
}
