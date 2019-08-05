import React from 'react';
import TodoList from './todo-list';
import TodoAdd from './todo-add';
import Header from '../header';
import {newGuid} from '../../utils/guid';

export default class TodoPage extends React.Component {
    constructor() {
        super();
        this.state = {todos: []}
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
                <TodoAdd onAddClick={this.onAddClick} newItemNumber={this.state.todos.length + 1} />
                <TodoList todos={this.state.todos} onDeleteClick={this.onDeleteClick} />
            </div>
        )
    }
}