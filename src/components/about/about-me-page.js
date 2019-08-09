import React from 'react';
import Header from '../header';
import {observer} from 'mobx-react';

@observer
class AboutMePage extends React.Component {
    render() {
        const { isLoggedIn, userName } = this.props.loginInfoStore.loginInfo;
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
}

export default AboutMePage;