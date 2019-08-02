import React from 'react';
import TodoPage from './todos/todo-page';
import AboutMePage from './about/about-me-page';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' exact component={TodoPage} />
                <Route path='/todos' exact component={TodoPage} />
                <Route path='/about' exact component={AboutMePage} />
            </div>
        </BrowserRouter>
        
    )
}