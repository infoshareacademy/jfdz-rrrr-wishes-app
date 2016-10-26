/**
 * Created by DanielM on 2016-10-26.
 */
import {REQUEST_TEAM, RECEIVE_TEAM} from './actionTypes'
import fetch from 'isomorphic-fetch'

function requestTeam() {
    return{
        type: REQUEST_TEAM
    }
}

function receiveTeam(team) {
    return{
        type: RECEIVE_TEAM,
        team: team
    }
}

export function fetchTeam() {
    return function (dispatch){
        dispatch(requestTeam())
        return fetch (`${process.env.PUBLIC_URL}/data/team.json`)
            .then(response => response.json())
            .then(team => dispatch(receiveTeam(team)))
    }
}