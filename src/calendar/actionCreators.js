import {ADD_EVENT, REMOVE_EVENT} from './actionTypes'

export function addEvent(title,allDay,start,end){
    return {
        type: ADD_EVENT,
        event: {title,allDay,start,end}
    }
}

export function removeEvent(title,allDay,start,end){
    return {
        type: REMOVE_EVENT,
        title,allDay,start,end
    }
} 