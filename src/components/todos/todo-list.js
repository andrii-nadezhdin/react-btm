import React from 'reactn';
import TodoItem from './todo-item';

export default class TodoList extends React.Component {
    render() {
        const todosList = this.global.todos
            .map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    title={todo.title}
                />
            ));
        return (
            <div>
                {todosList}
            </div>
        );
    }
}