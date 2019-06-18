import React from 'react';
import { render } from 'react-dom';
import {Router,route,Link} from  'react-router';
const App = React.createClass({
    renter(){
        return (<div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about"></Link></li>
                <li><Link to="/inbox"></Link></li>
            </ul>
            {this.props.children}
        </div>)
    }
})