import React from 'react';
import TodoItem from './todo-item';
import TodoAdd from './todo-add';
import { newGuid } from '../../utils/guid';

export default class TodoList extends React.Component {
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
        const todosList = this.state.todos
            .map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    title={todo.title}
                    onDeleteClick={this.onDeleteClick}
                />
            ));
        return (
            <div>
                <TodoAdd onAddClick={this.onAddClick} newItemNumber={this.state.todos.length + 1}/>
                <div>
                    {todosList}
                </div>
            </div>
        );
    }
}