import React from 'react';
import TodoList from './todo-list';
import TodoAdd from './todo-add';
import Header from '../header';


export default class TodoPage extends React.Component {
    render() {
        const { isLoggedIn } = this.props.loginInfoStore.loginInfo;
        return (
            <div>
                <Header {...this.props}/>
                {isLoggedIn && <TodoAdd {...this.props}/>}
                <TodoList {...this.props}/>
            </div>
        )
    }
}