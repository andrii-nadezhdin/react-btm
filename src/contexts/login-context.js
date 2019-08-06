import React from 'react';

const LoginContext = React.createContext({isLoggedIn: false, userName:  null});

export class LoginStore extends React.Component {
    state = {
        isLoggedIn: false,
        userName: null
    };

    onLogin = userName => setTimeout(this.setState({
        isLoggedIn: true,
        userName
    }), 1000);

    onLogout = () => setTimeout(this.setState({
        isLoggedIn: false,
        userName: null
    }), 1000);

    render() {
        return(
            <LoginContext.Provider value={{ ...this.state, onLogin: this.onLogin, onLogout: this.onLogout }}>
                {this.props.children}
            </LoginContext.Provider>
        )
    } 
}

export default LoginContext;