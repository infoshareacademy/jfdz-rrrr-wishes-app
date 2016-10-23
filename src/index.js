import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from 'react-redux'

import {browserHistory, Router, Route} from 'react-router'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
