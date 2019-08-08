
import ReactDOM from 'react-dom';
import React, { setGlobal } from 'reactn';
import App from './components/app';

setGlobal({
    todos: [],
    loginInfo: {}
});

ReactDOM.render(<App />, document.getElementById('root'));