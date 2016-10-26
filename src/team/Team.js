/**
 * Created by DanielM on 2016-10-26.
 */
import React from 'react'
import {connect} from 'ract-redux'

const mapStateToProps = (state) => ({
    team: state.teamData.team,
    isLoading: state.teamData.isLoading
})

const Team = ({team, isLoading}) => (
    <div>
        <h1>Team</h1>
        {isLoading ? 'Loading team...' : null}
        <ul>
            {team.map(team => <li key={team.id}>{team.name}</li>)}
        </ul>
    </div>
)
export  default connect(mapStateToProps)(Team)