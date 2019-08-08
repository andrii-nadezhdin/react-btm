import React from 'react';
import Header from '../header';
import { connect } from 'react-redux';

const AboutMePage = (props) => {
    const { isLoggedIn, userName } = props.loginInfo;
    return (
        <div>
            <Header />
            <div className='ui container segment'>
                {isLoggedIn ? <h2 className='header'>Hello {userName}!</h2> : null}
                <img className="ui centered image" src="https://i.kym-cdn.com/entries/icons/original/000/008/342/ihave.jpg" alt='me'/>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        loginInfo: store.loginInfo
    }
}

export default connect(mapStateToProps)(AboutMePage);