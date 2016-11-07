import {ADD_EVENT, REMOVE_EVENT} from './actionTypes'

export function addEvent(){
    return {
        type: ADD_EVENT
    }
}

export function removeEvent(){
    return {
        type: REMOVE_EVENT
    }
} 