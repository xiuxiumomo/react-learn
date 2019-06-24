import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './views/TodoList2.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
serviceWorker.unregister();
