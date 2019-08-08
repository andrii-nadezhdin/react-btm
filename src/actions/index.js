import { Actions } from '../constants';

export const addTodoItem = (todoItem) => {
    return {
        type: Actions.ADD_TODO_ITEM,
        todoItem
    }
}

export const removeTodoItem = (id) => {
    return {
        type: Actions.REMOVE_TODO_ITEM,
        id
    }
}

export const userLoginAction = (userName) => dispatch => {
    dispatch({
        type: Actions.USER_LOGIN_INPROCESS
    });
    setTimeout(() => dispatch({
        type: Actions.USER_LOGIN,
        userName
    }), 3000);
}

export const userLogoutAction = () => {
    return {
        type: Actions.USER_LOGOUT
    }
}

