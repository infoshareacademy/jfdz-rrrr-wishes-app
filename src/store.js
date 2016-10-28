/**
 * Created by danielmilewski on 23.10.16.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import teamsReducer from './teamsReducer'
import teamReducer from './team/reducer'

const reducer = combineReducers({

     team: teamReducer,
     teamData: teamsReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    )
)

export default store