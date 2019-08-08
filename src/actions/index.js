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

export const userLoginAction = (userName) => {
    return {
        type: Actions.INITIATE_USER_LOGIN,
        userName
    }
}

export const userLogoutAction = () => {
    return {
        type: Actions.USER_LOGOUT
    }
}

