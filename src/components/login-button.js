import React from 'react';
import LoginContext from '../contexts/login-context';

export default () => {
    return (
        <LoginContext.Consumer>
            {value =>
                <button
                    className={`ui button ${value.isLoggedIn ? 'negative' : 'positive'}`}
                    onClick={() => value.isLoggedIn ? value.onLogout() : value.onLogin('anna01')}
                    disabled={value.inProcess}
                >
                    {value.isLoggedIn ? 'Logout' : 'Login'}
                </button>
            }
        </LoginContext.Consumer>
    );
}