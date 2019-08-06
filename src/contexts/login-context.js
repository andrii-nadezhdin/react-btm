import React from 'react';

const defaults = {
    isLoggedIn: false,
    inProcess: false,
    userName:  null
};

const LoginContext = React.createContext(defaults);

export class LoginStore extends React.Component {
    state = defaults;

    onLogin = userName => {
        this.setState({inProcess: true})
        setTimeout(() => this.setState({
            isLoggedIn: true,
            inProcess: false,
            userName
        }), 3000)
    };

    onLogout = () => this.setState({
        isLoggedIn: false,
        userName: null
    });

    render() {
        return(
            <LoginContext.Provider value={{ ...this.state, onLogin: this.onLogin, onLogout: this.onLogout }}>
                {this.props.children}
            </LoginContext.Provider>
        )
    } 
}

export default LoginContext;