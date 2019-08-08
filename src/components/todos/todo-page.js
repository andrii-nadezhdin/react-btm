import React from 'reactn';
import TodoList from './todo-list';
import TodoAdd from './todo-add';
import Header from '../header';


export default class TodoPage extends React.Component {
    render() {
        const { isLoggedIn } = this.global.loginInfo;
        return (
            <div>
                <Header />
                {isLoggedIn && <TodoAdd />}
                <TodoList />
            </div>
        )
    }
}