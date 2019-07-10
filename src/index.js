import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Header from './components/common/Header'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from '@/store';
import Home from './views/home';
import Detail from './views/detail';
const App = (
    <Provider store={store}>
        <div>
           
            <BrowserRouter>
                <Header />
                <div>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail' exact component={Detail}></Route>
                </div>
            </BrowserRouter>
        </div>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();
