import React from 'react';
import TodoItem from './todo-item';

export default (props) => {
    const todosList = props.todos
        .map(todo => (
            <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                title={todo.title}
                onDeleteClick={props.onDeleteClick}
            />
        ));
    return (
        <div>
            {todosList}
        </div>
    );
}
