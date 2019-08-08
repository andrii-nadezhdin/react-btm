import React from 'react';
import TodoList from './todo-list';
import TodoAdd from './todo-add';
import Header from '../header';
import { connect } from 'react-redux';


class TodoPage extends React.Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
                <Header />
                {isLoggedIn && <TodoAdd />}
                <TodoList />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.loginInfo.isLoggedIn
    }
}

export default connect(mapStateToProps)(TodoPage);