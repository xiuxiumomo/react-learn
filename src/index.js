import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './views/TodoList.js';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from '@/store';
const App = (
    <Provider store={store}>
        <TodoList/>
    </Provider>
) 

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();
