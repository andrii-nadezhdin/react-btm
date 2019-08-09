import React from 'react';
import TodoPage from './todos/todo-page';
import AboutMePage from './about/about-me-page';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginInfoStore from '../stores/LoginInfoStore';
import TodoStore from '../stores/TodoStore';

export default class App extends React.Component {
    constructor() {
        super();
        this.todoStore = new TodoStore();
        this.loginInfoStore = new LoginInfoStore();
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path='/'
                        exact
                        component={(props) => <TodoPage todoStore={this.todoStore} loginInfoStore={this.loginInfoStore} {...props}/>}
                    />
                    <Route
                        path='/todos'
                        exact
                        component={(props) => <TodoPage todoStore={this.todoStore} loginInfoStore={this.loginInfoStore} {...props}/>}
                    />
                    <Route
                        path='/about'
                        exact
                        component={(props) => <AboutMePage loginInfoStore={this.loginInfoStore} {...props}/>}
                    />
                </div>
            </BrowserRouter>
        )
    }
}