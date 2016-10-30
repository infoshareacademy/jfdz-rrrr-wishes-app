/**
 * Created by danielmilewski on 23.10.16.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'


import teamReducer from './team/reducer'
import loginReducer from './login/reducer'

const reducer = combineReducers({

    teamData: teamReducer,
    login: loginReducer,
    
     
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    )
)

export default store