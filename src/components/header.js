import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className='ui container'>
            <div className="ui large secondary menu">
                <Link to='/todos' className='item'>Todos</Link>
                <Link to='/about' className='item'>About me</Link>
            </div>
        </div>
    )
}