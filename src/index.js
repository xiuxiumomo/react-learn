import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Header from './components/common/Header'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from '@/store';
const App = (
    <Provider store={store}>
        <Header/>
    </Provider>
) 

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();
