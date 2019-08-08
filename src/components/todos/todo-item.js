import React from 'reactn';

export default class TodoItem extends React.Component {
    render() {
        return (
            <div className="ui center aligned container segment">
                <h2 className="ui header">{this.props.title}</h2>
                <p>{this.props.text}</p>
                {this.global.loginInfo.isLoggedIn &&
                    <button
                        onClick={() => this.setGlobal({
                            todos: this.global.todos.filter(t => t.id !== this.props.id)
                        })}
                        className='ui red basic button'
                    >
                        Delete
                    </button>
                }
            </div>
        )
    }
}