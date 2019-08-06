import React from 'react';
import LoginContext from '../../contexts/login-context';

export default (props) => {
    return (
        <div className="ui center aligned container segment">
            <h2 className="ui header">{props.title}</h2>
            <p>{props.text}</p>
            <LoginContext.Consumer>
                {value => value.isLoggedIn ? <button onClick={(e) => props.onDeleteClick(props.id)} className='ui red basic button'>Delete</button> : null}
            </LoginContext.Consumer>
        </div>
    )
}