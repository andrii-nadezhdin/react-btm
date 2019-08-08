import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../../actions';

const TodoItem =  (props) => {
    return (
        <div className="ui center aligned container segment">
            <h2 className="ui header">{props.title}</h2>
            <p>{props.text}</p>
            {props.isLoggedIn &&
                <button
                    onClick={() => props.removeTodoItem(props.id)}
                    className='ui red basic button'
                >
                    Delete
                </button>
            }
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.loginInfo.isLoggedIn
    }
}

export default connect(mapStateToProps, {removeTodoItem})(TodoItem);