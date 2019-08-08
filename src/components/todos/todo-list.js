import React from 'react';
import TodoItem from './todo-item';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const todosList = props.todos
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

const mapStateToProps = (store) => {
    return {
        todos: store.todos
    }
}

export default connect(mapStateToProps)(TodoList);