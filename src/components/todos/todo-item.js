import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoItem extends React.Component {
    render() {
        const {loginInfoStore, todoStore} = this.props;
        return (
            <div className="ui center aligned container segment">
                <h2 className="ui header">{this.props.title}</h2>
                <p>{this.props.text}</p>
                {loginInfoStore.loginInfo.isLoggedIn &&
                    <button
                        onClick={() => todoStore.deleteTodo(this.props.id)}
                        className='ui red basic button'
                    >
                        Delete
                    </button>
                }
            </div>
        )
    }
}

export default TodoItem;