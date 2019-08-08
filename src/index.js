
import ReactDOM from 'react-dom';
import React, { setGlobal } from 'reactn';
import addReactNDevTools from 'reactn-devtools';
import App from './components/app';

addReactNDevTools();

setGlobal({
    todos: [],
    loginInfo: {}
});

ReactDOM.render(<App />, document.getElementById('root'));