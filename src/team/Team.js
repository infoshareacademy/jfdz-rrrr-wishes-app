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
        
           {team.map( team => <div className="contentTeam" key={team.id}>{team.name}</div>)}
        
    </div>
)

export default connect(mapStateToProps)(Team)