import React from 'react';
import TodoList from './todo-list';
import Header from '../header';

export default () => {
    return (
        <div>
            <Header/>
            <TodoList />
        </div>
    )
}