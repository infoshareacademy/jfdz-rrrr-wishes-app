export default (state, action) => {
    if (state === undefined) {
        state = 'anonymouse'
    }
    switch (action.type) {
        case 'USER_LOG_IN':
            return action.username
        default:
            return state
    }
}
