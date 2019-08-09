import {observable, action} from 'mobx';

export default class LoginInfoStore {
	@observable loginInfo = {
		isLoggedIn: false,
		isInProcess: false
	};

	@action
	loginUser(userName) {
		this.loginInfo = {
			isLoggedIn: false,
			isInProcess: true
		}
		setTimeout(() => this.loginInfo = {
			isLoggedIn: true,
			isInProcess: false,
			userName
		}, 3000);
	}

	@action
	logoutUser() {
		this.loginInfo = {
			isLoggedIn: false,
			isInProcess: false,
			userName: null
		}
	}
}