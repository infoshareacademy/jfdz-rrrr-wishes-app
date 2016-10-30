const initialState = {
    userData: {}
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                userData: action.data
            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                userData: {}
            })
        default:
            return state
    }
}