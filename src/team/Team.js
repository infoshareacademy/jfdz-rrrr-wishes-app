import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    team: state.teamData.team,
    isLoading: state.teamData.isLoading
})

const Team = ({ team, isLoading }) => (
    <div>
        <h1>Users</h1>
        {isLoading ? 'Loading users...' : null}
        <ul>
            {team.map( team => <li key={team.id}>{team.name}</li>)}
        </ul>
    </div>
)

export default connect(mapStateToProps)(Team)