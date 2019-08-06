import React from 'react';
import LoginContext from '../contexts/login-context';

export default () => {
    return (
        <LoginContext.Consumer>
            {value =>
                <button
                    class={`ui button ${value.isLoggedIn ? 'negative' : 'positive'}`}
                    onClick={() => value.isLoggedIn ? value.onLogout() : value.onLogin('anna01')}
                >
                    {value.isLoggedIn ? 'Logout' : 'Login'}
                </button>
            }
        </LoginContext.Consumer>
    );
}