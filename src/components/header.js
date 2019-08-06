import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './login-button';

export default () => {
    return (
        <div className='ui container'>
            <div className="ui large secondary menu">
                <Link to='/todos' className='item'>Todos</Link>
                <Link to='/about' className='item'>About me</Link>
                <div className="right menu">
                    <LoginButton className='ui item'/>
                </div>
            </div>
        </div>
    )
}