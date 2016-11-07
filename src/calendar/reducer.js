import {ADD_EVENT, REMOVE_EVENT} from './actionTypes'

const initialState = {
    range: 0,
    event:
    [
        {
            'title': 'All Day Event',
            'allDay': true,
            'start': new Date(2015, 3, 0),
            'end': new Date(2015, 3, 0)
        }
    ]
   
};

export default (state = initialState, action = {}) =>{
   
    switch (action.type){
        case ADD_EVENT:
            return {...state, event: state.event};
        case REMOVE_EVENT:
            return {...state, event: state.event };
        default:
            return state
    }
   
}
