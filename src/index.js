import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Team from './team/Team'

import {Provider} from 'react-redux'

import {
  browserHistory,
  Router,
  Route,
  IndexRoute
} from 'react-router'

import { fetchTeam } from './team/actionCreators'

import store from './store'

import Login from './login/Login'
import Calendar from './calendar/Calendar'
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/team" component={Team} onEnter={() => store.dispatch(fetchTeam())}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
