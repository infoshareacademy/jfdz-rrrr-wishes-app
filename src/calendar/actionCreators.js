import {ADD_EVENT, REMOVE_EVENT} from './actionTypes'

export function addEvent(title,start,end){
    return {
        type: ADD_EVENT,
        event: {title,start,end}
    }
}

export function removeEvent(title,start,end){
    return {
        type: REMOVE_EVENT,
        title,start,end
    }
} 