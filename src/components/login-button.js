import React from 'react';
import { observer } from 'mobx-react';

@observer
class LoginButton extends React.Component {
    render() {
        const store = this.props.loginInfoStore;
        const { isLoggedIn, isInProcess } = store.loginInfo;

        return (
            <button
                className={`ui button ${isLoggedIn ? 'negative' : 'positive'}`}
                onClick={isLoggedIn ? store.logoutUser() : store.loginUser('anna01')}
                disabled={isInProcess}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        );
    }
}

export default LoginButton;