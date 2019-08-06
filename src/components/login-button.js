import React from 'react'

export default (props) => {
    const { isLoggedIn } = props;
    return (
        <div class={`ui button ${isLoggedIn ? 'negative' : 'positive'}`}>{isLoggedIn ? 'Logout' : 'Login'}</div>
    );
}