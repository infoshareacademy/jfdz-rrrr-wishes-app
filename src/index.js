import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Team from './team/Team'

import {Provider} from 'react-redux'

import {
  browserHistory,
  Router,
  Route
} from 'react-router'
import { fetchTeam } from './team/actionCreators'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/team" component={Team} onEnter={() => store.dispatch(fetchTeam())}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
