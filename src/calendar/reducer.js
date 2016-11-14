import {ADD_EVENT, REMOVE_EVENT} from './actionTypes'

const initialState = {
    range: 0,
    event:
    [
        {
            'title': 'All Day Event',
            'start': new Date(),
            'end': new Date()
        }
    ]
   
};

export default (state = initialState, action = {}) =>{
   
    switch (action.type){
        case ADD_EVENT:
            return {
                // title: ' ',
                // start: new Date(),
                // end: new Date(),
                // lat: point.lat, 
                // lng: point.lng,
                // label: point.label,
                ...state,
                event: state.event.concat([action.event])
            }
        case REMOVE_EVENT:
            return {...state, event: state.event.filter(
                event => 
                event.title !== action.title || event.title !== action.title
            )}
    
        default:
            return state
    }
   
}
