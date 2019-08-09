import {observable, computed, action} from 'mobx';
import { newGuid } from '../utils/guid';

export default class TodoStore {
	@observable todos = [];

	@computed get todosCount() {
		return this.todos.length;
	}

	@action
	addTodo(title, text) {
		this.todos.push({
			id: newGuid(),
			title,
			text
		});
	}

	@action
	deleteTodo(id) {
		this.todos = this.todos.filter(t => t.id !== id);
	}
}