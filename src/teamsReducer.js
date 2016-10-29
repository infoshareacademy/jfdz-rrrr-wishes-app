const initialState = 'anonymouse'
export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'USER_LOG_IN':
            return action.username
        default:
            return state
    }
}
