import React from 'react';
import Header from '../header';
import LoginContext from '../../contexts/login-context';

export default () => {
    return (
        <div>
            <Header />
            <div className='ui container segment'>
                <LoginContext.Consumer>
                    {value => value.isLoggedIn ? <h2 className='header'>Hello {value.userName}!</h2> : null}
                </LoginContext.Consumer>
                <img className="ui centered image" src="https://i.kym-cdn.com/entries/icons/original/000/008/342/ihave.jpg" alt='me'/>
            </div>
        </div>
    )
}