import React from 'react';
import { connect } from 'react-redux';
import { userLoginAction, userLogoutAction } from '../actions';


const LoginButton = (props) => {
    const { isLoggedIn, isInProcess } = props.loginInfo;
    return (
        <button
            className={`ui button ${isLoggedIn ? 'negative' : 'positive'}`}
            onClick={isLoggedIn ? props.userLogoutAction : () => props.userLoginAction('anna01')}
            disabled={isInProcess}
        >
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}

const mapStateToProps = (store) => {
    return {
        loginInfo: store.loginInfo
    }
}

export default connect(mapStateToProps, { userLoginAction, userLogoutAction })(LoginButton);