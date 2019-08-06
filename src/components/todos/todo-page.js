import React from 'react';
import TodoList from './todo-list';
import TodoAdd from './todo-add';
import Header from '../header';
import {newGuid} from '../../utils/guid';
import LoginContext from '../../contexts/login-context';

export default class TodoPage extends React.Component {
    constructor() {
        super();
        this.state = {todos: [
            {
                id: newGuid(),
                title:'Do workout',
                text:'Just DO it!'
            },
            {
                id: newGuid(),
                title:'Clean table',
                text:'Shame lazy me'
            },
            {
                id: newGuid(),
                title:'Drink coffee',
                text:'Any time'
            }
        ]}
    }

    onDeleteClick = (id) => {
        this.setState({todos: this.state.todos.filter(t => t.id !== id)});
    }

    onAddClick = (title, text) => {
        this.setState(prevState => {
            return {
                todos: [...prevState.todos, {
                    id: newGuid(),
                    title: title,
                    text: text
                }]
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <LoginContext.Consumer>
                    {value => value.isLoggedIn ? <TodoAdd onAddClick={this.onAddClick} newItemNumber={this.state.todos.length + 1} /> : null}
                </LoginContext.Consumer>
                <TodoList todos={this.state.todos} onDeleteClick={this.onDeleteClick} />
            </div>

        )
    }
}