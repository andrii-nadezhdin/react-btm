import React from 'react';
import TodoItem from './todo-item';
import {observer} from 'mobx-react';

@observer
class TodoList extends React.Component {
    render() {
        const todosList = this.props.todoStore.todos
            .map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    title={todo.title}
                    {...this.props}
                />
            ));
        return (
            <div>
                {todosList}
            </div>
        );
    }
}

export default TodoList;