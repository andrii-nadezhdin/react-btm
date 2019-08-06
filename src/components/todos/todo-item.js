import React from 'react';

export default (props) => {
    return (
        <div className="ui center aligned container segment">
            <h2 className="ui header">{props.title}</h2>
            <p>{props.text}</p>
            <button onClick={(e) => props.onDeleteClick(props.id)} className='ui red basic button'>Delete</button>
        </div>
    )
}