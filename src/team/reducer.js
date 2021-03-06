import { RECEIVE_TEAM, REQUEST_TEAM } from './actionTypes'

const initialState = {
    team: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TEAM:
            return Object.assign({}, state, {
                isLoading: true
            })
        case RECEIVE_TEAM:
            return Object.assign({}, state, {
                isLoading: false,
                team: action.team
            })
        default:
            return state
    }
}