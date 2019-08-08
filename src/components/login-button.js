import React from 'reactn';

export default class LoginButton extends React.Component {
    render() {
        const { isLoggedIn, isInProcess } = this.global.loginInfo;
        const logout = () => this.setGlobal({
            loginInfo: {
                isLoggedIn: false,
                isInProcess: false
            }
        });
        const login = () =>  {
            this.setGlobal({
                loginInfo: {
                    isLoggedIn: false,
                    isInProcess: true
                }
            });
            setTimeout(() => this.setGlobal({
                loginInfo: {
                    isLoggedIn: true,
                    isInProcess: false,
                    userName: 'anna01'
                }
            }), 3000)
        };
    
        return (
            <button
                className={`ui button ${isLoggedIn ? 'negative' : 'positive'}`}
                onClick={isLoggedIn ? logout : login}
                disabled={isInProcess}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        );
    }
}