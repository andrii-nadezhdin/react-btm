import { Actions } from '../constants';
import { combineReducers } from 'redux';

const todosReducer = (todos = [], action) => {
    switch(action.type) {
        case Actions.ADD_TODO_ITEM:
            return [...todos, action.todoItem];
        case Actions.REMOVE_TODO_ITEM:
            return todos.filter(t => t.id !== action.id);
        default:
            return todos;
    }
};

const loginInfoReducer = (loginInfo = {}, action) => {
    switch(action.type) {
        case Actions.USER_LOGIN_INPROCESS:
            return {
                isLoggedIn: false,
                isInProcess: true
            };
        case Actions.USER_LOGIN:
            return {
                isLoggedIn: true,
                isInProcess: false,
                userName: action.userName
            };
        case Actions.USER_LOGOUT:
            return {
                isLoggedIn: false,
                isInProcess: false
            };
        default:
            return loginInfo;
    }
};

export default combineReducers({
    todos: todosReducer,
    loginInfo: loginInfoReducer
});